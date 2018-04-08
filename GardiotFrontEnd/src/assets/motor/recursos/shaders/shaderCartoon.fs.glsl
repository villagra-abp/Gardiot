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

struct Propiedades{
	float shininess;
	float opacity;
};

struct Material
{
	vec3 Ka;//reflexión luz ambiente del objeto
	vec3 Kd;//reflexión luz difusa del objeto
	vec3 Ks;//reflexión luz especular del objeto
};


uniform Material material;
uniform Propiedades propiedades;
uniform DirectionalLight uLight[5];
uniform sampler2D uSampler;
uniform int uTextured;

const vec3 cAmbientLight=vec3(0.2, 0.2, 0.2);



void main()
{

	vec3 N=normalize(vNormalInterp);
	vec3 L=normalize(uLight[0].position.xyz-vVertPosition);

	float LN=max(dot(L, N), 0.0);
	float specular=0.0;

	if(LN>0.0){
		vec3 R=reflect(-L, N);
		vec3 V=normalize(-vVertPosition);

		float RV=max(dot(R, V), 0.0);
		specular=pow(RV, propiedades.shininess);
	}

	vec3 vLight = material.Ka * cAmbientLight + material.Kd * LN * uLight[0].color + material.Ks * specular * uLight[0].specColor;

	vec4 texel;

  highp vec4 color;
  highp vec4 finalColor;
	if(uTextured==1){
		texel=texture2D(uSampler, vFragTexCoord);
    if(texel.x<0.3){
      texel.x=.1;
    }else{
      texel.x=.9;
    }
    if(texel.y<0.3){
      texel.y=.1;
    }else{
      texel.y=.9;
    }
    if(texel.z<0.3){
      texel.z=.1;
    }else{
      texel.z=.9;
    }

    highp vec4 color = vec4( 0.0, 0.1, 0.0, 1.0);

  if (LN > 0.9)  {
  color = vec4(0.0, 1.0, 0.0, 1.0);  }
  else if (LN > 0.6){      color = vec4(0.0, 0.5, 0.0, 1.0);  }
  else if (LN > 0.3){      color = vec4(0.0, 0.3, 0.0, 1.0);  }

		gl_FragColor=color;
	}
	else{
		texel=vec4(0.1, 0.4, 0.1, 1.0);
		gl_FragColor=vec4(texel.rgb, propiedades.opacity);
	}





}
