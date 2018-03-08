precision mediump float;

attribute vec3 vertPosition;
attribute vec2 vertTexCoord;
varying vec2 fragTexCoord;
uniform mat4 uMMatrix;
        uniform mat4 uPMatrix;
        uniform mat4 uVMatrix;

void main()
{
  fragTexCoord = vertTexCoord;
  gl_Position = uPMatrix * uVMatrix * uMMatrix * vec4(vertPosition, 1.0);
}