precision mediump float;

attribute vec3 aVertPosition;
attribute vec2 aVertTexCoord;
attribute vec3 aVertNormal;


varying vec2 vFragTexCoord;
varying vec3 vVertPosition;
varying vec3 vNormalInterp;



uniform mat4 uMMatrix;
uniform mat4 uPMatrix;
uniform mat4 uVMatrix;
uniform mat3 uNormalMatrix;





void main()
{
	gl_Position = uPMatrix * uVMatrix * uMMatrix * vec4(aVertPosition, 1.0);

	vFragTexCoord = aVertTexCoord;



	vec4 vertPos4=uVMatrix*uMMatrix*vec4(aVertPosition, 1.0);
	vVertPosition=vec3(vertPos4)/vertPos4.w;
	vNormalInterp=vec3(uNormalMatrix*aVertNormal);

}
