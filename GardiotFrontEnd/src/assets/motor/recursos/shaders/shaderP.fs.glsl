precision mediump float;

const vec3 cAmbientLight=vec3(0.2, 0.2, 0.2);
const int cULights=2;
const int cUSpotLights=5;

varying vec2 vFragTexCoord;
varying vec3 vVertPosition;
varying mat4 vView;
varying vec3 vTVertPosition;
varying vec4 vTVertNormal;
varying vec3 vVertNormal;


struct LightProperties
{
	int isActive;
	vec4 position;
	vec3 color;
	vec3 specColor;
	vec4 direction;
	float amplitude;
};

struct Propiedades{
	float shininess;
	float opacity;
};

struct Material
{
	vec3 Ka;//reflexión luz ambiente del objeto
	vec3 Kd;//reflexión luz difusa del objeto
	vec3 Ks;//reflexión luz especular del objeto
};


uniform Material material;
uniform Propiedades propiedades;
uniform LightProperties uLight[cULights];
uniform LightProperties uSpotLight[cUSpotLights];
uniform sampler2D uSampler;
uniform int uTextured;
uniform int uLighted;
uniform int uNLights;



void main()
{
	vec3 N=normalize(vTVertNormal.xyz);
	vec3 V=normalize(-vTVertPosition);
	vec3 vLight = material.Ka * cAmbientLight;

	float diffuse=0.0;
	float specular=0.0;


	for(int i=0; i<cULights; i++){
		if(uLight[i].isActive==1){
			vec3 L = normalize(vec3(vView*vec4(uLight[i].position.xyz, 1.0))-vTVertPosition);
			diffuse += max(dot(L, N), 0.0);

			if(diffuse>0.0){
				vec3 R=reflect(-L, N);
				float RV=max(dot(R, V), 0.0);
				specular=pow(RV, propiedades.shininess);
			}
			vLight +=  material.Kd * diffuse * uLight[i].color;
			vLight +=  material.Ks* specular * uLight[i].specColor;
		}
	}



	for(int i=0; i<cUSpotLights; i++){
		//Calculate SpotLight
		if(uSpotLight[i].isActive==1){
			highp float spotLimit=uSpotLight[i].amplitude;
			highp vec3 spotDirection=uSpotLight[i].direction.xyz;
			highp float spotEffect=dot(-normalize(spotDirection), normalize(uSpotLight[i].position.xyz-vVertPosition));

			vec3 L = normalize(vec3(vView*vec4(uSpotLight[i].position.xyz, 1.0))-vTVertPosition);
			diffuse += max(dot(L, N), 0.0);

			if(diffuse>0.0){
				vec3 R=reflect(-L, N);
				float RV=max(dot(R, V), 0.0);
				specular=pow(RV, propiedades.shininess);
			}

			//Applicate light if it is inside of the cone
			if(spotEffect>spotLimit && diffuse>0.0){
				vLight  +=  material.Kd * diffuse * uSpotLight[i].color;
				vLight +=  material.Ks* specular * uSpotLight[i].specColor;
			}
		}
	}


	vec4 texel;
	if(uTextured==1){
		texel=texture2D(uSampler, vFragTexCoord);
		if(uLighted==1)
			gl_FragColor=vec4(texel.rgb*vLight, propiedades.opacity);
		else
			gl_FragColor=vec4(texel.rgb, propiedades.opacity);
	}
	else{
		texel=vec4(0.1, 0.4, 0.1, 1.0);
		gl_FragColor=vec4(texel.rgb, propiedades.opacity);
	}
}
