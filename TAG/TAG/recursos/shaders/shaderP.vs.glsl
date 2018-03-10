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


varying vec3 vertPos;
varying vec3 normalInterp;



uniform mat4 uMMatrix;
uniform mat4 uPMatrix;
uniform mat4 uVMatrix;
uniform mat3 uNormalMatrix;
uniform vec4 uAmbientLightIntensity;
uniform DirectionalLight uLight[5];


void main()
{
	gl_Position = uPMatrix * uVMatrix * uMMatrix * vec4(aVertPosition, 1.0);

	vFragTexCoord = aVertTexCoord;

	vec4 vertPos4=uVMatrix*uMMatrix*vec4(aVertPosition, 1.0);
	vertPos=vec3(vertPos4)/vertPos4.w;
	normalInterp=vec3(uNormalMatrix*aVertNormal);

}