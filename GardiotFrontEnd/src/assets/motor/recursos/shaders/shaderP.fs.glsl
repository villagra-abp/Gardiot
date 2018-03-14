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

uniform DirectionalLight uLight[5];
uniform sampler2D uSampler;
uniform int uTextured;

const vec3 cAmbientLight=vec3(0.2, 0.2, 0.2);



void main()
{

	vec3 normal=normalize(vNormalInterp);
	vec3 lightDir=normalize(uLight[0].position.xyz-vVertPosition);

	float lambertian=max(dot(lightDir, normal), 0.0);
	float specular=0.0;

	if(lambertian>0.0){
		vec3 reflectDir=reflect(-lightDir, normal);
		vec3 viewDir=normalize(-vVertPosition);

		float specAngle=max(dot(reflectDir, viewDir), 0.0);
		specular=pow(specAngle, 30.0);
	}

	vec3 vLight=cAmbientLight+lambertian*uLight[0].color+specular*uLight[0].specColor;

	vec4 texel;
	if(uTextured==1){
		texel=texture2D(uSampler, vFragTexCoord);
	}
	else{
		texel=vec4(0.1, 0.1, 0.1, 1.0);
	}



	gl_FragColor=vec4(texel.rgb*vLight, texel.a);

}