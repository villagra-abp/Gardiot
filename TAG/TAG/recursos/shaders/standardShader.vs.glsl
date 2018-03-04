
        attribute vec3 aVertexPosition;

        attribute vec2 aVertexTextureCoord;
        attribute vec3 aVertexNormal;
        attribute vec3 aLightPosition;


        uniform mat3 uNormalMatrix;
 
        uniform mat4 uMMatrix;
        uniform mat4 uPMatrix;
        uniform mat4 uVMatrix;

        varying highp vec2 vTextureCoord;
        varying highp vec4 vColor;  
 
        varying highp vec3 vLight;

        void main(void) {
            gl_Position = uPMatrix * uVMatrix * uMMatrix * vec4(aVertexPosition, 1.0);
            vTextureCoord=aVertexTextureCoord;
            vColor=vec4(1.0, 0.1, 0.1, 1.0);
 
            //lighting
 
            vec3 ambientLight = vec3(0.1, 0.1, 0.1);       
 
            vec3 pointLightPosition = vec3(1.0, 2.0, -1.0);
 
            vec3 pointLightDirection = normalize(vec3(pointLightPosition.xyz - aVertexPosition.xyz));
 

 
            vec3 L = vec3(uPMatrix * uVMatrix * uMMatrix * vec4(pointLightDirection, 1.0));
 
            vec3 N = uNormalMatrix * aVertexNormal;                    
 
            float diffuseLightAmount = max( dot(normalize(N), normalize(L)), 0.0);      
 
 
            vLight=ambientLight + vec3(.8, .8, .8) * diffuseLightAmount;
 
        }