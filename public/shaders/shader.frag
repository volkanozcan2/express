#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

// author: @c0de4 

void main( void ) {

	vec2 p = ( gl_FragCoord.xy * 2.0 - u_resolution ) / min(u_resolution.x, u_resolution.y);
	
	p *= mat2(cos(u_time*.001), sin(u_time*.001), -sin(u_time*.001), cos(u_time*.001));
	p.x -= sin(p.y*8.+u_time*10.)*.1*cos(u_time*1.)*0.05-cos(u_time*0.05);	
	
	float d = length(cos(p*4.));
	
	d = cos(d-u_time*.08)*20.;
	d = abs(sin(d+u_time*0.1)) * 1.5 - 1.;
	
	float c = smoothstep(.19*.5-.5, .2, d+.1*cos(p.y+u_time*2./20.*p.x*p.x));


	gl_FragColor = vec4( vec3( c*c*c*c*c*c, c*c*c, c*c ), 1.0 );

}