#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.1415926535897932384626433832795
#define PI_2 1.57079632679489661923

uniform vec2 u_resolution;
uniform float u_time;

vec3 colorA = vec3(0.247, 0.318, 0.71);
vec3 colorB = vec3(0.902, 0.29, 0.098);

float linear (float t){
  return t;
}

float sineIn(float t) {
  return sin((t - 1.0) * PI_2) + 1.;
}

float easeInSine () {
  return abs(1. - cos((u_time) / 2.));
}

void main() {
  vec3 color = vec3(0.0);

  float t = u_time*0.5;
  float pct = sineIn(abs(fract(t)*2.0-1.));

  color = mix(colorA, colorB, easeInSine());

  gl_FragColor = vec4(color, 1.0);
}
