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
varying mat4 view;
varying vec3 vVirgin;//Vertex multiplicados por model
varying vec3 vN;//normales de los vertices sin transformar

void main()
{

	vec3 N=normalize(vN);
	vec3 n=normalize(vNormalInterp.xyz);
	vec3 L=normalize(uLight[0].position.xyz-vVirgin);

	float LN=max(dot(L, N), 0.0);
	float specular=0.0;
	vec3 l=normalize(vec3(view*vec4(uLight[0].position.xyz, 1.0))-vVertPosition);
	float ln=max(dot(l, n), 0.0);
	if(ln>0.0){
		vec3 R=reflect(-l, n);
		vec3 V=normalize(-vVertPosition);

		float RV=max(dot(R, V), 0.0);
		specular=pow(RV, propiedades.shininess);
	}

	highp float spotLimit=0.99;
	highp vec3 spotDirection=-uLight[0].position.xyz;

	highp float spotEffect=dot(-normalize(spotDirection), L);

	vec3 vLight = material.Ka * cAmbientLight;
	if(spotEffect>spotLimit && ln>0.0){
		vLight  +=  material.Kd * ln * uLight[0].color;
		vLight +=  material.Ks* specular * uLight[0].specColor;
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
