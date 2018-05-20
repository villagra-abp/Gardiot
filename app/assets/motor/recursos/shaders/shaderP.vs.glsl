precision mediump float;

attribute vec3 aVertPosition;
attribute vec2 aVertTexCoord;
attribute vec3 aVertNormal;


varying vec2 vFragTexCoord; //Textura
varying vec3 vVertPosition; //Vertex position untransformed by modelView
varying vec3 vVertNormal; //Normals untransformed 
varying mat4 vView; //Passing viewMatrix to Fragment shader
varying vec3 vTVertPosition; //transformed vertexPosition
varying vec4 vTVertNormal; //transformed vertexNormal
varying vec4 shadowPos[7];
varying float vLightCount;

uniform mat4 uMMatrix;
uniform mat4 uVMatrix;
uniform mat4 uMVMatrix; //modelViewMatrix
uniform mat4 uMVPMatrix; //modelViewProjection Matrix
uniform mat4 uMVPMatrixFromLight[7]; //modelViewProjection Matrix from light
uniform mat4 uNormalMatrix;
uniform int uLightCount;

const mat4 texUnitConverter = mat4(0.5, 0.0, 0.0, 0.0, 
									0.0, 0.5, 0.0, 0.0, 
									0.0, 0.0, 0.5, 0.0, 
									0.5, 0.5, 0.5, 1.0);


void main()
{
	vView=uVMatrix;

	vLightCount=float(uLightCount);
	gl_Position = uMVPMatrix * vec4(aVertPosition, 1.0);

	for(int i=0; i<7; i++){
		if(i>=uLightCount){break;}
		shadowPos[i]=texUnitConverter * uMVPMatrixFromLight[i] * vec4(aVertPosition, 1.0);
	}
	
	vFragTexCoord = aVertTexCoord;

	//Transformed vertex positions and vertex normals
	vTVertPosition = vec3(uMVMatrix * vec4(aVertPosition, 1.0));
	vTVertNormal = uNormalMatrix*vec4(aVertNormal, 1.0);

	//Untransformed vertex positions and vertex normals
	//this is for light calculations
	vVertPosition = vec3(uMMatrix*vec4(aVertPosition, 1.0));
	vVertNormal = aVertNormal;

}
