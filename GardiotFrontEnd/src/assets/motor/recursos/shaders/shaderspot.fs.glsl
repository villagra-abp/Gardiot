precision mediump float;

varying vec2 vFragTexCoord;
varying vec3 vNormalInterp;
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



	vec3 N=normalize(vNormalInterp);
	vec3 L=normalize(uLight[0].position.xyz-vVertPosition);

	float LN=max(dot(L, N), 0.0);
	//float specular=0.0;

	texel=texture2D(uSampler, vFragTexCoord);
	highp ﬂoat spotCosCutoff = 0.6;
	highp ﬂoat spotExponent = 2.0;
	highp vec3 spotDirection = vec3(2.5,12.0,1.5);
	highp ﬂoat spotEffect = dot(normalize(spotDirection), L);

	if(LN>0.0){
		vec3 R=reflect(-L, N);
		vec3 V=normalize(-vVertPosition);

		float RV=max(dot(R, V), 0.0);
		//specular=pow(RV, propiedades.shininess);


		//spotLight
		if(spotEffect>spotCosCutoff){
			highp ﬂoat shininess = 32.0;
			highp ﬂoat specular = pow( max(0.0,dot(R,V)), shininess);
			spotEffect = pow(spotEffect, spotExponent); attenuation *= spotEffect;
			highp ﬂoat AmbientIntensity = 0.3;
			highp vec3 DiffuseLightIntensity = vec3(0.9, 0.9, 0.9);
			highp ﬂoat SpecularIntensity = 0.5;
			highp vec3 AmbientColour = vec3(0.1, 0.1, 0.1)*attenuation;
			highp vec3 DiffuseMaterialColour = texel.xyz*attenuation;
			highp vec3 SpecularColour = vec3(1.0, 1.0, 1.0)*attenuation;

			gl_FragColor = vec4(AmbientColour*AmbientIntensity +
			diffuseLambert * DiffuseMaterialColour *
			DiffuseLightIntensity +
			SpecularColour * specular * SpecularIntensity,
			texel.a);
		}
		else{
			gl_FragColor=vec4(0.0, 0.0, 0.0, 1.0);
		}
	}
	else{
		gl_FragColor=vec4(0.0, 0.0, 0.0, 1.0);
	}





}
