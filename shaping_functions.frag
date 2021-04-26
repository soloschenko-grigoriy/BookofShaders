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
  // return step(pct - 0.01, st.y) - step(pct + 0.01, st.y);
}

void main (){
  vec2 st = gl_FragCoord.xy/u_resolution;

  float y = st.x; // linear
  // float y = pow(st.x, 2.); // parabola
  // float y = step(0.3, st.x); // step
  // float y = smoothstep(0.02, 0.03, st.x) - smoothstep(0.03, 0.04, st.x);
  // float y = mix(0.2, 0.8, st.x); // linier interpolation
  // float y = log2(st.x * PI); //
  // float y = ceil(sin(st.x * PI + u_time));
  // float y = mod(st.x, 0.25);
  // float y = fract(st.x);
  // float y = ceil(st.x);
  // float y = floor(st.x);
  // float y = sign(st.x);
  // float y = abs(st.x);
  // float y = clamp(st.x, 0.2, 0.8);
  // float y = min(0.4, st.x);
  // float y = max(0.3, st.x);

  // vec3 color = vec3(y);

  // Plot a line
  float pct = plot(st, y);

  vec3 color = pct * vec3(0.0, 1.0, 0.0); // (1.0 - pct) * color +

  gl_FragColor = vec4(color, 1.0);
}
