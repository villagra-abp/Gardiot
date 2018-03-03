		varying highp vec2 vTextureCoord;
        varying highp vec4 vColor;

		uniform sampler2D uSampler;

        void main(void){
        	highp vec4 boatColor=texture2D(uSampler, vec2(vTextureCoord.st));
            gl_FragColor=boatColor;
        }