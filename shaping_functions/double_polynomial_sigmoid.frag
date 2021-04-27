#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#define EPSILON 0.00001;

// Plot a line on Y using a value between 0.0 - 1.0
float plot(vec2 st, float pct){
  return smoothstep(pct - 0.02, pct, st.y) - smoothstep(pct, pct + 0.02, st.y);
}

float doublePolynomialSigmoid(float value, int flatness){
  float y = 0.0;
  float n = float(flatness);

  if(mod(n, 2.0) == 0.0){ // even polynomial
    if(value <= 0.5){
      y = pow(2.0 * value, n) / 2.0;
    } else {
      y = 1.0 - pow(2. * (value - 1.0), n) / 2.0;
    }
  } else {
    if(value <= 0.5){
      y = pow(2.0 * value, n) / 2.0;
    } else {
      y = 1.0 + (pow(2.0 * (value - 1.0), (2. * n + 1.)) / 2.0);
    }
  }

  return y;
}

void main (){
  vec2 st = gl_FragCoord.xy/u_resolution;

  float y = doublePolynomialSigmoid(st.x, 5);

  float pct = plot(st, y);

  vec3 color = pct * vec3(0.0, 1.0, 0.0);

  gl_FragColor = vec4(color, 1.0);
}
