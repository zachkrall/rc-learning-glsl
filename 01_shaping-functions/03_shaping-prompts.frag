#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

#define PI 3.14159265359

// Plot a line on Y using a value between 0.0-1.0
float plot(vec2 st, float pct){
  return smoothstep( pct-0.02, pct, st.y) -
         smoothstep( pct, pct+0.02, st.y);
}

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;



  // ------- DIFFERENT SHAPING LINES ---------- //

  // Add time (u_time) to x before computing the sin. Internalize that motion along x.

  // float y = sin(st.x + u_time);

  // Multiply x by PI before computing the sin. Note how the two phases shrink so each cycle repeats every 2 integers.

  // float y = sin(st.x * PI);

  // Multiply time (u_time) by x before computing the sin. See how the frequency between phases becomes more and more compressed. Note that u_time may have already become very large, making the graph hard to read.

  // float y = sin(u_time * st.x);

  // Add 1.0 to sin(x). See how all the wave is displaced up and now all values are between 0.0 and 2.0.

  // float y = sin(gl_FragCoord.x * 0.01) + 1.0;

  // Multiply sin(x) by 2.0. See how the amplitude doubles in size.
  // float y = sin(st.x) * 2.0;

  // Compute the absolute value (abs()) of sin(x). It looks like the trace of a bouncing ball.

  // float y = abs(sin(st.x * 10.));


  // Extract just the fraction part (fract()) of the resultant of sin(x).
  // float y = fract(sin(st.x));

  // Add the higher integer (ceil()) and the smaller integer (floor()) of the resultant of sin(x) to get a digital wave of 1 and -1 values.
  // float y = fract((ceil(sin(st.x+u_time)) + floor(sin(st.x+u_time))) * 0.3);


  float y = st.x;

  // ------------------------------------------ //



  // Take value in Y and set to grayscale color vec3
  vec3 color = vec3(y);

  // This plots the colored line
  float pct = plot(st, y);
  color = (1.0-pct)*color+pct*vec3(0.,0.,1.0);

	gl_FragColor = vec4(color,1.0);
}
