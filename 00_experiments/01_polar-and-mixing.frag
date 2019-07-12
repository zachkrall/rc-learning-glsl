#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

#define PI 3.14159265359

float plot_line(vec2 st, float pct, float width){

  return smoothstep( pct-width, pct, st.y) -
         smoothstep( pct, pct+width, st.y);

}

void main(){
  vec2 st = gl_FragCoord.xy/u_resolution;

  vec3 color = vec3(0.0);

  vec2 center    = vec2(0.5)-st;
  float amp      = sin(u_time * 10.) + 2.0;
  float toCenter = length(center) * amp;

  float value = 1.0 - toCenter;

  float pct = plot_line( st,

    (sin(((st.x+u_time) * 20.) ))/10. + 0.5, 0.01

  );

  color = vec3(0.0, pct, 0.1) + vec3( value, 0.5, 0.8 );

  gl_FragColor = vec4(color,1.0);
}
