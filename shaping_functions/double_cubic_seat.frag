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


float doubleCubicSeat(float value, vec2 coord){
  float epsilon = 0.00001;
  float min_param_x = 0.0 + epsilon;
  float max_param_x = 1.0 - epsilon;
  float min_param_y = 0.0;
  float max_param_y = 1.0;

  coord.x = min(max_param_x, max(min_param_x, coord.x));
  coord.y = min(max_param_y, max(min_param_y, coord.y));

  float y = 0.0;

  if(value <= coord.x){
    y = coord.y - coord.y * pow(1. - value / coord.x, 3.0);
  } else {
    y = coord.y + (1. - coord.y)* pow((value - coord.x)/(1. - coord.x), 3.0);
  }

  return y;
}

void main (){
  vec2 st = gl_FragCoord.xy/u_resolution;

  float y = doubleCubicSeat(st.x, vec2(0.407, 0.720));
  // float y = doubleCubicSeat(st.x, vec2(0.6, 0.2));

  float pct = plot(st, y);

  vec3 color = pct * vec3(0.0, 1.0, 0.0);

  gl_FragColor = vec4(color, 1.0);
}
