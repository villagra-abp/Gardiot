precision mediump float;

varying vec2 vFragTexCoord;
varying vec3 vLight;

uniform sampler2D uSampler;



void main()
{

	

	vec4 texel=texture2D(uSampler, vFragTexCoord);

	

	gl_FragColor=vec4(texel.rgb*vLight, texel.a);

}