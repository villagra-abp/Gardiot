precision mediump float;

varying vec2 vFragTexCoord;
varying vec3 normalInterp;
varying vec3 vertPos;

struct DirectionalLight
{
	vec4 position;
	vec3 color;
};

uniform DirectionalLight uLight[5];
const vec3 specColor=vec3(1.0, 1.0, 1.0);

uniform sampler2D uSampler;



void main()
{

	vec3 normal=normalize(normalInterp);
	vec3 lightDir=normalize(uLight[0].position.xyz-vertPos);

	float lambertian=max(dot(lightDir, normal), 0.0);
	float specular=0.0;

	if(lambertian>0.0){
		vec3 reflectDir=reflect(-lightDir, normal);
		vec3 viewDir=normalize(-vertPos);

		float specAngle=max(dot(reflectDir, viewDir), 0.0);
		specular=pow(specAngle, 30.0);
	}

	vec3 vLight=lambertian*uLight[0].color+specular*specColor;

	vec4 texel=texture2D(uSampler, vFragTexCoord);

	

	gl_FragColor=vec4(texel.rgb*vLight, texel.a);

}