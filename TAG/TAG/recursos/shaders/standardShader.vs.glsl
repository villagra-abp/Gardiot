
        attribute vec3 aVertexPosition;

        attribute vec2 aVertexTextureCoord;

        uniform mat4 uMMatrix;
        uniform mat4 uPMatrix;
        uniform mat4 uVMatrix;

        varying highp vec2 vTextureCoord;

        void main(void) {
            gl_Position = uPMatrix * uVMatrix * uMMatrix * vec4(aVertexPosition, 1.0);
            vTextureCoord=aVertexTextureCoord;
        }