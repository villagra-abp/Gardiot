		varying highp vec2 vTextureCoord;
        varying highp vec4 vColor;

		uniform sampler2D uSampler;
		varying highp vec3 vLight;
 

        void main(void){
        	highp vec4 textureColor=texture2D(uSampler, vec2(vTextureCoord.st));

            gl_FragColor=vec4(vColor.xyz * vLight, vColor.a);
 
        }