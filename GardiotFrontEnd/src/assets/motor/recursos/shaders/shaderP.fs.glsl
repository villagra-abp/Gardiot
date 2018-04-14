precision mediump float;

varying vec2 vFragTexCoord;
varying vec4 vNormalInterp;
varying vec3 vVertPosition;

struct DirectionalLight
{
	vec4 position;
	vec3 color;
	vec3 specColor;
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
uniform DirectionalLight uLight[5];
uniform sampler2D uSampler;
uniform int uTextured;
uniform int uLighted;

const vec3 cAmbientLight=vec3(0.2, 0.2, 0.2);

varying mat4 modelView;

void main()
{

	vec3 N=normalize(vNormalInterp.xyz);
	vec3 L=normalize(uLight[0].position.xyz-vVertPosition);

	float LN=max(dot(L, N), 0.0);
	float specular=0.0;

	if(LN>0.0){
		vec3 R=reflect(-L, N);
		vec3 V=normalize(-vVertPosition);

		float RV=max(dot(R, V), 0.0);
		specular=pow(RV, propiedades.shininess);
	}

	/*highp float spotLimit=0.6;
	highp vec3 spotDirection=vec3(0.0, 100.0, 0.0);
	vec4 vS4=modelView*vec4(spotDirection, 1.0);
	vec3 vS=vec3(vS4)/vS4.w;
	highp float spotEffect=dot(normalize(vS), L);
*/
	vec3 vLight = material.Ka * cAmbientLight;
	//if(spotEffect>spotLimit){
		vLight  += material.Kd * LN * uLight[0].color;
		vLight +=  material.Ks* specular * uLight[0].specColor;
	//}

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
