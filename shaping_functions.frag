#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st,float pct){
    return smoothstep(pct-.02,pct,st.y)-smoothstep(pct,pct+.02,st.y);
}

float blinnWyvillCosineApproximation(float x){
    float x2=pow(x,2.);
    float x4=pow(x2,2.);
    float x6=pow(x4,2.);

    const float fa = 4./9.;
    const float fb = 17./9.;
    const float fc = 22./9.;

    float y = fa * x6 - fb*x4 + fc * x2;

    return y;
    
}

void main(){
    vec2 st=gl_FragCoord.xy/u_resolution;
    
    float y=blinnWyvillCosineApproximation(st.x);
    
    vec3 color=vec3(y);
    
    // Ploat a line
    float pct=plot(st,y);
    color=(1.-pct)*color+pct*vec3(0.,1.,0.);
    
    gl_FragColor=vec4(color,1.);
}