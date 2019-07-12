#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

#define PI 3.14159265359

float line(vec2 st, float pct, float width){
  return smoothstep( pct-width, pct, st.y) -
         smoothstep( pct, pct+width, st.y);
}

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution;

  vec3 color = vec3(1.,0.,0.);

  // TO REPEAT ACROSS X AXIS
  // st.x = fract(st.x * 1.0);

  float r = sin(st.x * 6.3 + PI * 2.2);
  float g = sin(st.x * 4.1 + PI * 2.0);
  float b = sin(st.x * 4.0 + PI * 3.6);

  vec3 red_line   = vec3(line(st, r, 0.02), 0., 0.);
  vec3 green_line = vec3(0., line(st, g, 0.02), 0.);
  vec3 blue_line  = vec3(0., 0., line(st, b, 0.02));

  // TO DEBUG WITH
  // color = red_line
  //       + blue_line
  //       + green_line
  //       + vec3(r,g,b);

  color = vec3(r,g,b);

  gl_FragColor = vec4(color,1.0);
}
