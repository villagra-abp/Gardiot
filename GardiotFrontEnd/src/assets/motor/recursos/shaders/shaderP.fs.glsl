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
uniform int uHovered;

uniform sampler2D uShadowMap;
varying vec4 vPositionFromLight;

varying vec2 vDepthUv;
varying vec4 shadowPos;

uniform sampler2D depthColorTexture;

float decodeFloat (vec4 color) {
  const vec4 bitShift = vec4(
    1.0 / (256.0 * 256.0 * 256.0),
    1.0 / (256.0 * 256.0),
    1.0 / 256.0,
    1
  );
  return dot(color, bitShift);
}

void main()
{
  vec3 fragmentDepth = shadowPos.xyz;
  float shadowAcneRemover = 0.007;
  fragmentDepth.z -= shadowAcneRemover;

  float texelSize = 1.0 / 1024.0;
  float amountInLight = 0.0;

  // Check whether or not the current fragment and the 8 fragments surrounding
  // the current fragment are in the shadow. We then average out whether or not
  // all of these fragments are in the shadow to determine the shadow contribution
  // of the current fragment.
  // So if 4 out of 9 fragments that we check are in the shadow then we'll say that
  // this fragment is 4/9ths in the shadow so it'll be a little brighter than something
  // that is 9/9ths in the shadow.
  for (int x = -1; x <= 1; x++) {
    for (int y = -1; y <= 1; y++) {
      float texelDepth = decodeFloat(texture2D(depthColorTexture, fragmentDepth.xy + vec2(x, y) * texelSize));
      if (fragmentDepth.z < texelDepth) {
        amountInLight += 1.0;
      }
    }
  }
  amountInLight /= 9.0;



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
		if(uLighted==1){
			if(uHovered==1){
				gl_FragColor=vec4(texel.rgb*vLight*vec3(2.0, 2.0, 2.0), propiedades.opacity);
			}
			else if(uHovered==2){
				gl_FragColor=vec4(texel.rgb*vLight*vec3(1.0, 2.0, 1.0), propiedades.opacity);
			}
			else if(uHovered==3){
				gl_FragColor=vec4(texel.rgb*vLight*vec3(2.0, 1.0, 1.0), propiedades.opacity);
			}
			else{
				//gl_FragColor=vec4(texel.rgb*vLight*visibility, propiedades.opacity);
				gl_FragColor=vec4(texel.rgb*vLight*amountInLight, propiedades.opacity);
			}
		}
		else
			gl_FragColor=vec4(texel.rgb, propiedades.opacity);
	}
	else{
		texel=vec4(0.1, 0.4, 0.1, 1.0);
		gl_FragColor=vec4(texel.rgb*vLight, propiedades.opacity);
	}


}
