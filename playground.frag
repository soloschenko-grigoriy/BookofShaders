#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
  vec2 st=gl_FragCoord.xy/u_resolution;
  float x = st.x;

  float y = x;
  vec3 line = vec3(x, 0, 0);
  vec3 color= vec3(0) + line;

  gl_FragColor=vec4(color,1.);
}
