#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#define PI 3.14159265359

// Plot a line on Y using a value between 0.0 - 1.0
float plot(vec2 st, float pct){
  return smoothstep(pct - 0.02, pct, st.y) - smoothstep(pct, pct + 0.02, st.y);
}

float blinnWyvillCosineApproximation(float x){
  float x2 = x*x;
  float x4 = x2 * x2;
  float x6 = x4 * x2;

  const float fa = (4.0/9.0);
  const float fb = (17.0 / 9.0);
  const float fc = (22.0/9.0);

  return fa * x6 - fb * x4 + fc * x2;
}

void main (){
  vec2 st = gl_FragCoord.xy/u_resolution;

  float y = blinnWyvillCosineApproximation(st.x);

  float pct = plot(st, y);

  vec3 color = pct * vec3(0.0, 1.0, 0.0); // (1.0 - pct) * color +

  gl_FragColor = vec4(color, 1.0);
}
