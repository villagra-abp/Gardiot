precision mediump float;

struct DirectionalLight
{
	vec4 position;
	vec3 color;
};

attribute vec3 aVertPosition;
attribute vec2 aVertTexCoord;
attribute vec3 aVertNormal;


varying vec2 vFragTexCoord;
varying vec3 vLight;



uniform mat4 uMMatrix;
uniform mat4 uPMatrix;
uniform mat4 uVMatrix;
uniform vec4 uAmbientLightIntensity;
uniform DirectionalLight uLight[5];


void main()
{
	vFragTexCoord = aVertTexCoord;
 	vec3 fragNormal=normalize((uMMatrix* vec4(aVertNormal, 0.0)).xyz);

	
	vec3 normSunDir[5];
	normSunDir[0] = normalize(vec3(uLight[0].position.xyz - aVertPosition.xyz));
	normSunDir[1] = normalize(vec3(uLight[1].position.xyz - aVertPosition.xyz));
	normSunDir[2] = normalize(vec3(uLight[2].position.xyz - aVertPosition.xyz));
	normSunDir[3] = normalize(vec3(uLight[3].position.xyz - aVertPosition.xyz));
	normSunDir[4] = normalize(vec3(uLight[4].position.xyz - aVertPosition.xyz));


	vLight=uAmbientLightIntensity.xyz;

	vLight=vLight+uLight[0].color*max(dot(fragNormal, normSunDir[0]), 0.0);
	vLight=vLight+uLight[1].color*max(dot(fragNormal, normSunDir[1]), 0.0);
	vLight=vLight+uLight[2].color*max(dot(fragNormal, normSunDir[2]), 0.0);
	vLight=vLight+uLight[3].color*max(dot(fragNormal, normSunDir[3]), 0.0);
	vLight=vLight+uLight[4].color*max(dot(fragNormal, normSunDir[4]), 0.0);


  

  
  gl_Position = uPMatrix * uVMatrix * uMMatrix * vec4(aVertPosition, 1.0);
  
}