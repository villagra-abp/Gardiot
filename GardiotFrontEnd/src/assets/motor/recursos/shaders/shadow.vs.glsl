attribute vec3 aVertPosition;
uniform mat4 uMVPMatrixFromLight; //modelViewProjection Matrix

    void main() {
        gl_Position = uMVPMatrixFromLight * vec4(aVertPosition, 1.0);
    }
