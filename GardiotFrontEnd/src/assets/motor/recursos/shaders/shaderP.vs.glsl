precision mediump float;

attribute vec3 aVertPosition;
attribute vec2 aVertTexCoord;
attribute vec3 aVertNormal;


varying vec2 vFragTexCoord;
varying vec3 vVertPosition;
varying mat4 vView;
varying vec3 vTVertPosition;
varying vec4 vTVertNormal;
varying vec3 vVertNormal;

uniform mat4 uMMatrix;
uniform mat4 uPMatrix;
uniform mat4 uVMatrix;
uniform mat4 uNormalMatrix;






void main()
{
	vView=uVMatrix;
	mat4 vModelView=uVMatrix * uMMatrix;
	mat4 vModelViewProjection= uPMatrix * vModelView;
	
	gl_Position = vModelViewProjection * vec4(aVertPosition, 1.0);

	vFragTexCoord = aVertTexCoord;

	//Transformed vertex positions and vertex normals
	vTVertPosition = vec3(vModelView * vec4(aVertPosition, 1.0));
	vTVertNormal = uNormalMatrix*vec4(aVertNormal, 1.0);

	//Untransformed vertex positions and vertex normals
	//this is for light calculations
	vVertPosition = vec3(uMMatrix*vec4(aVertPosition, 1.0));
	vVertNormal = aVertNormal;

}
