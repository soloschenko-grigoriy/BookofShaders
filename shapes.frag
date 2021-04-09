#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main () {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  vec3 color = vec3(0.);

  float left = step(0.1, st.x);
  float bottom = step(0.1, st.y);

  color = vec3(left * bottom);

  gl_FragColor=vec4(color,1.);
}
