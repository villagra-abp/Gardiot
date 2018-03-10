precision mediump float;

attribute vec3 vertPosition;
attribute vec2 vertTexCoord;


varying vec2 fragTexCoord;


uniform mat4 uMMatrix;
uniform mat4 uPMatrix;
uniform mat4 uVMatrix;

uniform int uLuces;


//nuevas
attribute vec3 vertNormal;
uniform mat3 uNormalMatrix;

varying highp vec3 LightIntensity;

uniform vec4 LightPosition;
uniform vec3 Ld;
uniform vec3 Kd;

void main()
{
  fragTexCoord = vertTexCoord;

  
  gl_Position = uPMatrix * uVMatrix * uMMatrix * vec4(vertPosition, 1.0);


  vec3 ambientLight = vec3(0.4, 0.4, 0.4);       

  if(uLuces>0){
 
	  /*vec3 pointLightDirection = normalize(vec3(LightPosition.xyz - vertPosition.xyz));
	 

	 
	  vec3 L = vec3(uPMatrix * uVMatrix * uMMatrix * vec4(pointLightDirection, 1.0));
	  vec3 N = uNormalMatrix * vertNormal;                    
	 
	  float diffuseLightAmount = max( dot(normalize(N), normalize(L)), 0.0);      
	 
	 
	  LightIntensity=ambientLight + vec3(.8, .8, .8) * diffuseLightAmount;*/
	  vec4 eyeVertex=uVMatrix * uMMatrix * vec4(vertPosition, 1.0);
	  vec3 eyeNormal=normalize(uNormalMatrix * vertNormal);

	  vec4 eyeLight=uVMatrix * LightPosition;

	  vec3 lightVector=normalize(vec3(eyeLight-eyeVertex));

	  LightIntensity=Ld*Kd*max(dot (lightVector, eyeNormal), 0.0);
	}
	else{
	  LightIntensity=ambientLight;
	}
  
}