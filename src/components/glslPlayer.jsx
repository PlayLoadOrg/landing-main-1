import { useEffect, useRef } from 'react'

function ShaderPlayer({ shaderSource }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    
    if (!gl) {
      console.error('WebGL not supported')
      return
    }

    // Vertex shader (simple passthrough)
    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `

    // Modified fragment shader (wrap ShaderToy code)
    const fragmentShader = `
      precision mediump float;
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec4 iMouse;
      
      ${shaderSource}
      
      void main() {
        mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    `

    // Compile shaders
    function compileShader(source, type) {
      const shader = gl.createShader(type)
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vertShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER)
    const fragShader = compileShader(fragmentShader, gl.FRAGMENT_SHADER)

    if (!vertShader || !fragShader) return

    // Create program
    const program = gl.createProgram()
    gl.attachShader(program, vertShader)
    gl.attachShader(program, fragShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program))
      return
    }

    gl.useProgram(program)

    // Create a fullscreen quad
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ])

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)

    const positionLocation = gl.getAttribLocation(program, 'position')
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    // Get uniform locations
    const iTimeLocation = gl.getUniformLocation(program, 'iTime')
    const iResolutionLocation = gl.getUniformLocation(program, 'iResolution')
    const iMouseLocation = gl.getUniformLocation(program, 'iMouse')

    // Mouse tracking
    let mouseX = 0, mouseY = 0, clickX = 0, clickY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = canvas.height - e.clientY
    }

    const handleMouseDown = (e) => {
      clickX = e.clientX
      clickY = canvas.height - e.clientY
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mousedown', handleMouseDown)

    // Handle resize
    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    // Animation loop
    const startTime = Date.now()
    let animationId

    function render() {
      const time = (Date.now() - startTime) / 1000
      
      gl.uniform1f(iTimeLocation, time)
      gl.uniform2f(iResolutionLocation, canvas.width, canvas.height)
      gl.uniform4f(iMouseLocation, mouseX, mouseY, clickX, clickY)
      
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      
      animationId = requestAnimationFrame(render)
    }
    render()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mousedown', handleMouseDown)
      gl.deleteProgram(program)
      gl.deleteShader(vertShader)
      gl.deleteShader(fragShader)
      gl.deleteBuffer(buffer)
    }
  }, [shaderSource])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    />
  )
}

export default ShaderPlayer