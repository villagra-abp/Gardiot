precision mediump float;

attribute vec3 aVertPosition;
attribute vec2 aVertTexCoord;
attribute vec3 aVertNormal;


varying vec2 vFragTexCoord;
varying vec3 vVertPosition;
varying vec4 vNormalInterp;



uniform mat4 uMMatrix;
uniform mat4 uPMatrix;
uniform mat4 uVMatrix;
uniform mat4 uNormalMatrix;

varying mat4 modelView;
varying mat4 view;
varying vec3 vVirgin;
varying vec3 vN;



void main()
{
	modelView=uVMatrix * uMMatrix;
	view=uVMatrix;
	gl_Position = uPMatrix * uVMatrix * uMMatrix * vec4(aVertPosition, 1.0);

	vFragTexCoord = aVertTexCoord;

	vec4 vertPos4=uVMatrix*uMMatrix*vec4(aVertPosition, 1.0);
	vVertPosition=vec3(vertPos4)/vertPos4.w;
	vNormalInterp=uNormalMatrix*vec4(aVertNormal, 1.0);
	vN=aVertNormal;
	vec4 vVirginp=uMMatrix*vec4(aVertPosition, 1.0);
	vVirgin=vec3(vVirginp)/vVirginp.w;

}
