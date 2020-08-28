#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float plot(vec2 st){
    return smoothstep(0.02, 0.0, abs(st.y - st.x));
}

void main(){
    // float sinus=sin(u_time)*1.5;
    // gl_FragColor=vec4(clamp(sin(u_time),.5,1.),1.,0.,1.);
    
    // vec2 st=gl_FragCoord.xy/u_resolution;
    // vec2 st=u_mouse.xy/u_resolution;
    
    // gl_FragColor=vec4(st.x,st.y,0.,1.);
    // gl_FragColor=vec4(st.x,st.y,0.,1.);
    
    if(gl_FragCoord.x==gl_FragCoord.y){
        gl_FragColor=vec4(0.,1.,0.,1.);
    }else{
        gl_FragColor=vec4(0.,0.,0.,1.);
    }
}