import Vector2 from './Math/Vector2.js'

/** Class representing a canvas element for WebGL2 */
export default class Canvas {
    constructor(width, height, shaderSources) {
        this.width = width
        this.height = height
        this.shaderSources = shaderSources

        this.colors = {
            black: [0, 0, 0, 0],
            blue: [0, 0, 255, 0],
            cyan: [0, 255, 255, 0],
            green: [0, 255, 0, 0],
            magenta: [255, 0, 255, 0],
            red: [255, 0, 0, 0],
            white: [255, 255, 255, 0],
            yellow: [255, 255, 0, 0],
        }
        this.data = {
            colors: [],
            positions: [],
            hands: [],
        }

        this.gl = null
        this.program = null
        this.run()

        window.addEventListener('updateCanvas', event => {
            this.updateCanvasHandler(event)


            //update every second
            setInterval(() => {
                this.updateCanvasHandler(event)
            }, 1000)
            console.log('Kiki')
        }, false);

    }

    updateCanvasHandler(event) {
        console.log('updateCanvas')
        this.clearData()

        // White point in the middle
        this.data.positions.push(0, 0)
        this.data.colors.push(...this.colors.white)


        const colors = [
            'green',
            'blue',
            'cyan',
            'magenta',
            'yellow',
        ]

        // Initial drawing on the canvas
        {
            //TODO: draw clock

            //calculate angle
            let d, h, m, s;
            d = new Date;

            h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
            m = 6 * d.getMinutes();
            s = 6 * d.getSeconds();

            console.log(h, m, s)

            //middle point
            let middlePoint = new Vector2(0, 0)
            this.data.positions.push(middlePoint.x, middlePoint.y)
            this.data.colors.push(Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255), 0)


            //hour hand
            const hourHand = new Vector2(0, 0.3)
            hourHand.rot(-h)
            this.data.positions.push(hourHand.x, hourHand.y)
            this.data.colors.push(Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255), 0)


            //minute hand
            const minuteHand = new Vector2(0, 0.4)
            minuteHand.rot(-m)
            this.data.positions.push(minuteHand.x, minuteHand.y)
            this.data.colors.push(Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255), 0)


            //second hand
            let secondHand = new Vector2(0, 0.5)
            secondHand.rot(-s)
            this.data.positions.push(secondHand.x, secondHand.y)
            this.data.colors.push(Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255), 0)





            // this.data.positions.push([0, 0.3, 0, 0.4, 0, 0.5])
            // const v = new Vector2(.5, 0)
            // for (let i = 0, max = 12; i < max; i++) {
            //     v.rot(30)

            //     this.data.positions.push(v.x, v.y)
            //     this.data.colors.push(Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255), 0)
            // }





            // White point in the middle.
            this.data.positions.push(0, 0)
            this.data.colors.push(...this.colors.white)
        }

        this.drawScene()
    }

    run() {
        try {
            this.createCanvas()
            this.createShaders()
            this.createProgram()
            this.createVertexArray()
            // Initial drawing on the canvas
            {
                const v = new Vector2(.5, 0)
                for (let i = 0, max = 12; i < max; i++) {
                    v.rot(30)

                    this.data.positions.push(v.x, v.y)
                    this.data.colors.push(Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255), 0)
                }
                // White point in the middle.
                this.data.positions.push(0, 0)
                this.data.colors.push(...this.colors.white)
            }
            this.drawScene()

        } catch (error) {
            console.error(error)
        }
    }

    clearData() {
        this.data = {
            colors: [],
            positions: [],
            hands: [],
        }
    }

    createBuffers() {
        this.createBuffer('COLOR')
        this.createBuffer('POSITION')
        //this.createBuffer('HAND')
    }

    createBuffer(bufferType) {
        const gl = this.gl
        const program = this.program

        let name // Name of attribute used in GLSL.
        let normalized // Should it be normalized to a value between 0 and 1.
        let size // Number of components per vertex attribute, can be 1 through 4.
        let srcData
        let type // Datatype.
        const stride = 0 // 0 = move forward size * sizeof(type) each iteration to get the next position.
        const offset = 0 // Start at the beginning of the buffer.

        switch (bufferType) {
            case 'COLOR':
                name = 'a_VertexColor'
                normalized = true
                size = 4
                srcData = new Uint8Array(this.data.colors)
                type = gl.UNSIGNED_BYTE // Integer from 0 through 255.
                break
            case 'POSITION':
                name = 'a_VertexPosition'
                normalized = false
                size = 2
                srcData = new Float32Array(this.data.positions)
                type = gl.FLOAT
                break

            case 'HAND':
                name = 'a_VertexPosition'
                normalized = false
                size = 4
                srcData = new Float32Array(this.data.hands)
                type = gl.FLOAT
                break
            default:
                return null
        }

        const buffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
        gl.bufferData(gl.ARRAY_BUFFER, srcData, gl.STATIC_DRAW)

        const index = gl.getAttribLocation(program, name)
        gl.enableVertexAttribArray(index)
        gl.vertexAttribPointer(index, size, type, normalized, stride, offset) // @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttribPointer
    }

    createCanvas() {
        const canvas = document.createElement('canvas')
        document.body.appendChild(canvas)
        canvas.height = this.height
        canvas.width = this.width
        const gl = this.gl = canvas.getContext('webgl2')
        gl.clearColor(0, 0, 0, 0) // @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clearColor
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height) // @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/viewport
    }

    createProgram() {
        const gl = this.gl

        const program = gl.createProgram()
        gl.attachShader(program, this.vertexShader)
        gl.attachShader(program, this.fragmentShader)
        gl.linkProgram(program)

        const success = gl.getProgramParameter(program, gl.LINK_STATUS)
        if (success) {
            this.program = program
            gl.useProgram(program)
        } else {
            console.error(gl.getProgramInfoLog(program))
            gl.deleteProgram(program)
        }
    }

    createShaders() {
        const gl = this.gl

        this.vertexShader = this.createShader(gl.VERTEX_SHADER)
        this.fragmentShader = this.createShader(gl.FRAGMENT_SHADER)
    }

    createShader(type) {
        const gl = this.gl

        let source
        switch (type) {
            case gl.FRAGMENT_SHADER:
                source = this.shaderSources.fragment
                break
            case gl.VERTEX_SHADER:
                source = this.shaderSources.vertex
                break
            default:
                console.error('Shader type does not exist.')
                return null
        }

        const shader = gl.createShader(type)
        gl.shaderSource(shader, source)
        gl.compileShader(shader)

        const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
        if (success) {
            return shader
        }
        console.error(type, gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
    }

    createVertexArray() {
        const gl = this.gl

        const vertexArray = gl.createVertexArray()
        gl.bindVertexArray(vertexArray)
    }



    drawScene() {



        const gl = this.gl

        this.createBuffers()

        gl.clear(gl.COLOR_BUFFER_BIT) // @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clear

        const modes = [ // @see https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Rendering_primitives
            gl.POINTS,
            gl.LINES,
            gl.LINE_STRIP,
            gl.LINE_LOOP,
            gl.TRIANGLES,
            gl.TRIANGLE_STRIP,
            gl.TRIANGLE_FAN,
        ]
        const dimensions = 2
        const mode = modes[0]
        const first = 0
        const count = this.data.positions.length / dimensions

        // const handCount = this.data.hands.length / 4
        // gl.drawArrays(gl.LINES, first, handCount) // @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawArrays
        gl.drawArrays(mode, first, count) // @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawArrays

        // Call drawScene again next frame
        //requestAnimationFrame(drawScene);
    }
}