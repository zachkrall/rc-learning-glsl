#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

vec3 red    = vec3(1.0,0.0,0.0);
vec3 orange = vec3(1.0,0.5,0.0);
vec3 yellow = vec3(1.0,1.0,0.0);
vec3 green  = vec3(0.0,1.0,0.0);
vec3 blue   = vec3(0.0,0.0,1.0);
vec3 indigo = vec3(0.5,0.0,1.0);

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution;
  float pct = fract(st.x * 5.0);

  vec3 color = vec3(0.);

  float pos = st.x;

  if ( pos > 0.00 ){ color = mix(red,    orange, pct); }
  if ( pos > 0.20 ){ color = mix(orange, yellow, pct); }
  if ( pos > 0.40 ){ color = mix(yellow, green,  pct); }
  if ( pos > 0.60 ){ color = mix(green,  blue,   pct); }
  if ( pos > 0.80 ){ color = mix(blue,   indigo, pct); }

  gl_FragColor = vec4(color,1.0);
}
