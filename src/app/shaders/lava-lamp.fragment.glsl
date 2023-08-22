void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec3 color = vec3(uv, 0.0);
  gl_FragColor = vec4(color, 1.0);
}
