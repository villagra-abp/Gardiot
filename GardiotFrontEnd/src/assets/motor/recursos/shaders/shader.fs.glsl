precision mediump float;

varying vec2 fragTexCoord;

uniform sampler2D sampler;

varying highp vec3 LightIntensity; 

void main()
{
  gl_FragColor = vec4(LightIntensity.xyz, 1.0)*texture2D(sampler, fragTexCoord);
}