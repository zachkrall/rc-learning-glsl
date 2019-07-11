#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

vec3 red    = vec3(1.0,0.0,0.0);
vec3 orange = vec3(1.0,0.5,0.0);
vec3 yellow = vec3(1.0,1.0,0.0);
vec3 green  = vec3(0.0,1.0,0.0);
vec3 blue   = vec3(0.0,0.0,1.0);
vec3 indigo = vec3(0.5,0.0,1.0);

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution;
  vec3 color = vec3(1.,0.,0.);

  float len = 6.0;

  float pos = fract(st.x+u_time * 0.5);
  float pct = fract(pos * len);

  if ( pos > (0.0) )    { color = mix(red,    orange, pct); }
  if ( pos > (1.0/len) ){ color = mix(orange, yellow, pct); }
  if ( pos > (2.0/len) ){ color = mix(yellow, green,  pct); }
  if ( pos > (3.0/len) ){ color = mix(green,  blue,   pct); }
  if ( pos > (4.0/len) ){ color = mix(blue,   indigo, pct); }
  if ( pos > (5.0/len) ){ color = mix(indigo, red,    pct); }

  gl_FragColor = vec4(color,1.0);
}
