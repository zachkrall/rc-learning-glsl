#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#define PI 3.14159265359

vec3 colorA = vec3(1.0,0.2,0.3);
vec3 colorB = vec3(0.1,0.8,0.9);

void main() {

  vec2 st = gl_FragCoord.xy/u_resolution;

  float y = st.x;


  // float shape = u_mouse.x; // Mix based on mouse position
  // float shape = st.y / st.x * 0.5; // Mix in a radial gradient


  // Shaping Function for left to right gradient
  float shape = sin(st.x);

  vec3 color = mix(colorA, colorB, shape);

	gl_FragColor = vec4(color,1.0);

}
