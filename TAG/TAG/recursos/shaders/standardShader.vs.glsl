//declaramos vColor en vertex y fragment shader xq porque el valor de salida del vertex shader es el de entrada del fragment shader
        attribute vec3 aVertexPosition;
        attribute vec3 aVertexColor;//creamos nuevo atributo

        //uniforms de las matrices de vista
        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;

        varying highp vec4 vColor;//y se lo pasaremos al fragment shader con una varying variable
        void main(void){
            gl_Position=uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
            vColor=vec4(aVertexColor, 1.0);
            gl_PointSize=2.0;
        }