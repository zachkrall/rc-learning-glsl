#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#define PI 3.14159265359

// Plot a line on Y using a value between 0.0-1.0
float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) -
          smoothstep( pct, pct+0.02, st.y);
}

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;

  float y = st.x;

  // Take value in Y and set to grayscale color vec3
  vec3 color = vec3(y);

  // This plots the colored line
  float pct = plot(st, y);
  color = (1.0-pct)*color+pct*vec3(0.,0.,1.0);

	gl_FragColor = vec4(color,1.0);
}
