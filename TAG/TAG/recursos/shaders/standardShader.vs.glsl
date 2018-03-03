
        attribute vec3 aVertexPosition;

        attribute vec2 aVertexTexCoord;

        uniform mat4 uMMatrix;
        uniform mat4 uPMatrix;
        uniform mat4 uVMatrix;

        varying highp vec4 vColor;  
        varying highp vec2 vTextureCoord;

        void main(void) {
            gl_Position = uPMatrix * uVMatrix * uMMatrix * vec4(aVertexPosition, 1.0);
            vTextureCoord=aVertexTexCoord;
            vColor=vec4(1.0, 0.1, 0.1, 1.0);
        }