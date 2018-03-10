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

	
	vec3 normSunDir = normalize(vec3(uLight[0].position.xyz - aVertPosition.xyz));

	vFragTexCoord = aVertTexCoord;

 	vec3 fragNormal=normalize((uMMatrix* vec4(aVertNormal, 0.0)).xyz);

	vLight=uAmbientLightIntensity.xyz+uLight[0].color*max(dot(fragNormal, normSunDir), 0.0);



  

  
  gl_Position = uPMatrix * uVMatrix * uMMatrix * vec4(aVertPosition, 1.0);
  
}