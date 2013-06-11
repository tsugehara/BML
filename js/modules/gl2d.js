var WebGL2dContext = (function () {
    function WebGL2dContext(canvas) {
        this.canvas = canvas;
        this.textureMap = new TextureMap();
        var gl = this.gl = WebGL2dContext.getContext(canvas);
        this.width = canvas.width;
        this.height = canvas.height;
        var VERTICES = [
            -1, 
            1, 
            0, 
            -1, 
            -1, 
            0, 
            1, 
            1, 
            0, 
            1, 
            -1, 
            0
        ];
        var TEXTURE_COORDS = [
            0.0, 
            0.0, 
            0.0, 
            1.0, 
            1.0, 
            0.0, 
            1.0, 
            1.0
        ];
        var VERTEX_SHADER = "" + "attribute vec3 position;" + "attribute vec2 texCoord;" + "uniform mat4 pvMat;" + "uniform mat4 status;" + "varying vec2 vTextureCoord;" + "varying float vAlpha;" + "" + "mat4 model(vec2 xy, vec2 scale, float rot) {" + "	mat4 result = mat4(" + "		1.0, 0.0, 0.0, 0.0," + "		0.0, 1.0, 0.0, 0.0," + "		0.0, 0.0, 1.0, 0.0," + "		0.0, 0.0, 0.0, 1.0" + "	);" + "	result = result * mat4(" + "		1.0, 0.0, 0.0, 0.0," + "		0.0, 1.0, 0.0, 0.0," + "		0.0, 0.0, 1.0, 0.0," + "		xy.x, xy.y, 0.0, 1.0" + "	);" + "	result = result * mat4(" + "		scale.x, 0.0, 0.0, 0.0," + "		0.0, scale.y, 0.0, 0.0," + "		0.0, 0.0, 1.0, 0.0," + "		0.0, 0.0, 0.0, 1.0" + "	);" + "	result = result * mat4(" + "		cos(radians(rot)), -sin(radians(rot)), 0.0, 0.0," + "		sin(radians(rot)), cos(radians(rot)), 0.0, 0.0," + "		0.0, 0.0, 1.0, 0.0," + "		0.0, 0.0, 0.0, 1.0" + "	);" + "	return result;" + "}" + "" + "void main(void) {" + "	vAlpha = status[2][0];" + "	vTextureCoord = vec2(status[1][1], status[1][2]) + (texCoord * status[1][3]);" + "	gl_Position = pvMat * model(vec2(status[0][0], status[0][1]), vec2(status[0][2], status[0][3]), status[1][0]) * vec4(position, 1.0);" + "}" + "";
        var FRAGMENT_SHADER = "" + "precision mediump float;" + "" + "uniform sampler2D texture;" + "varying vec2 vTextureCoord;" + "varying float vAlpha;" + "" + "void main(void) {" + "	vec4 col = texture2D(texture, vTextureCoord);" + "	gl_FragColor = clamp(vec4(col.rgb, col.a * vAlpha), 0.0, 1.0);" + "}" + "";
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
        var program = this.program = this.createProgram(this.createShader("vs", VERTEX_SHADER), this.createShader("fs", FRAGMENT_SHADER));
        var attrPosition = gl.getAttribLocation(program, "position");
        var positionBuffer = this.createVbo(VERTICES);
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.enableVertexAttribArray(attrPosition);
        gl.vertexAttribPointer(attrPosition, 3, gl.FLOAT, false, 0, 0);
        var attrTexCoord = gl.getAttribLocation(program, "texCoord");
        var texCoordBuffer = this.createVbo(TEXTURE_COORDS);
        gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
        gl.enableVertexAttribArray(attrTexCoord);
        gl.vertexAttribPointer(attrTexCoord, 2, gl.FLOAT, false, 0, 0);
        this.viewMat = mat4.identity(mat4.create());
        this.projMat = mat4.identity(mat4.create());
        var w = this.width;
        var h = this.height;
        var w2 = w / 2;
        var h2 = h / 2;
        mat4.lookAt([
            w2, 
            -h2, 
            (w2 + h2) / 2
        ], [
            w2, 
            -h2, 
            0
        ], [
            0, 
            1, 
            0
        ], this.viewMat);
        mat4.ortho(-w2, h2, -w2, h2, 0.1, w2 + h2, this.projMat);
        gl.activeTexture(gl.TEXTURE0);
        gl.uniform1f(gl.getUniformLocation(program, "texture"), 0);
        this.uniformLocationsForSprite = this.getUniformLocationsForSprite(program, [
            "status"
        ]);
        this.updateMatrix();
        this.textureMap = new TextureMap();
        this.p = {
            x: 0,
            y: 0
        };
    }
    WebGL2dContext.getContext = function getContext(canvas) {
        return (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
    };
    WebGL2dContext.prototype.updateMatrix = function () {
        var temp = mat4.create();
        mat4.multiply(this.projMat, this.viewMat, temp);
        this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.program, "pvMat"), false, temp);
    };
    WebGL2dContext.prototype.createProgram = function (vs, fs) {
        var gl = this.gl;
        var program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
        if(gl.getProgramParameter(program, gl.LINK_STATUS)) {
            gl.useProgram(program);
            return program;
        } else {
            alert(gl.getProgramInfoLog(program));
            throw new Error();
        }
    };
    WebGL2dContext.prototype.createShader = function (type, script) {
        var gl = this.gl;
        var shader;
        switch(type) {
            case "vs":
                shader = gl.createShader(gl.VERTEX_SHADER);
                break;
            case "fs":
                shader = gl.createShader(gl.FRAGMENT_SHADER);
                break;
            default:
                throw new Error();
        }
        gl.shaderSource(shader, script);
        gl.compileShader(shader);
        if(gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            return shader;
        } else {
            alert(gl.getShaderInfoLog(shader));
            throw new Error();
        }
    };
    WebGL2dContext.prototype.createVbo = function (data) {
        var gl = this.gl;
        var vbo = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        return vbo;
    };
    WebGL2dContext.prototype.createTexture = function (image) {
        var gl = this.gl;
        var tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.bindTexture(gl.TEXTURE_2D, null);
        return tex;
    };
    WebGL2dContext.prototype.getUniformLocationsForSprite = function (program, names) {
        var _this = this;
        var result = {
        };
        names.map(function (name) {
            result[name] = _this.gl.getUniformLocation(program, name);
        });
        return result;
    };
    WebGL2dContext.prototype.drawImage = function (image, offsetX, offsetY, width, height, canvasOffsetX, canvasOffsetY, canvasImageWidth, canvasImageHeight) {
        var gl = this.gl;
        if(this.beforeImage != image) {
            this.beforeImage = image;
            var texture = this.textureMap.get(image);
            if(!texture) {
                texture = this.textureMap.add(image, this.createTexture(image));
            }
            gl.bindTexture(gl.TEXTURE_2D, texture);
        }
        var status = [
            this.p.x + canvasOffsetX, 
            -(this.p.y + canvasOffsetY), 
            width / 2, 
            height / 2, 
            0, 
            1, 
            1, 
            1, 
            1, 
            0, 
            0, 
            0, 
            0, 
            0, 
            0, 
            0
        ];
        gl.uniformMatrix4fv(this.uniformLocationsForSprite["status"], false, status);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
    WebGL2dContext.prototype.restore = function () {
        this.p = {
            x: 0,
            y: 0
        };
    };
    WebGL2dContext.prototype.setTransform = function (m11, m12, m21, m22, dx, dy) {
    };
    WebGL2dContext.prototype.save = function () {
    };
    WebGL2dContext.prototype.arc = function (x, y, radius, startAngle, endAngle, anticlockwise) {
    };
    WebGL2dContext.prototype.measureText = function (text) {
        return null;
    };
    WebGL2dContext.prototype.isPointInPath = function (x, y) {
        return false;
    };
    WebGL2dContext.prototype.quadraticCurveTo = function (cpx, cpy, x, y) {
    };
    WebGL2dContext.prototype.putImageData = function (imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight) {
    };
    WebGL2dContext.prototype.rotate = function (angle) {
    };
    WebGL2dContext.prototype.fillText = function (text, x, y, maxWidth) {
    };
    WebGL2dContext.prototype.translate = function (x, y) {
        this.p.x += x;
        this.p.y += y;
    };
    WebGL2dContext.prototype.scale = function (x, y) {
    };
    WebGL2dContext.prototype.createRadialGradient = function (x0, y0, r0, x1, y1, r1) {
        return null;
    };
    WebGL2dContext.prototype.lineTo = function (x, y) {
    };
    WebGL2dContext.prototype.fill = function () {
    };
    WebGL2dContext.prototype.createPattern = function (image, repetition) {
        return null;
    };
    WebGL2dContext.prototype.closePath = function () {
    };
    WebGL2dContext.prototype.rect = function (x, y, w, h) {
    };
    WebGL2dContext.prototype.clip = function () {
    };
    WebGL2dContext.prototype.createImageData = function (imageDataOrSw, sh) {
        return null;
    };
    WebGL2dContext.prototype.clearRect = function (x, y, w, h) {
    };
    WebGL2dContext.prototype.moveTo = function (x, y) {
    };
    WebGL2dContext.prototype.getImageData = function (sx, sy, sw, sh) {
        return null;
    };
    WebGL2dContext.prototype.fillRect = function (x, y, w, h) {
    };
    WebGL2dContext.prototype.bezierCurveTo = function (cp1x, cp1y, cp2x, cp2y, x, y) {
    };
    WebGL2dContext.prototype.transform = function (m11, m12, m21, m22, dx, dy) {
    };
    WebGL2dContext.prototype.stroke = function () {
    };
    WebGL2dContext.prototype.strokeRect = function (x, y, w, h) {
    };
    WebGL2dContext.prototype.strokeText = function (text, x, y, maxWidth) {
    };
    WebGL2dContext.prototype.beginPath = function () {
    };
    WebGL2dContext.prototype.arcTo = function (x1, y1, x2, y2, radius) {
    };
    WebGL2dContext.prototype.createLinearGradient = function (x0, y0, x1, y1) {
        return null;
    };
    WebGL2dContext.prototype.clear = function () {
        var gl = this.gl;
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    };
    return WebGL2dContext;
})();
var TextureMap = (function () {
    function TextureMap() {
        this.buf = new Array();
    }
    TextureMap.prototype.add = function (image, texture) {
        this.buf.push({
            src: image,
            texture: texture
        });
        return texture;
    };
    TextureMap.prototype.get = function (image) {
        for(var i = 0; i < this.buf.length; i++) {
            if(this.buf[i].src == image) {
                return this.buf[i].texture;
            }
        }
        return null;
    };
    TextureMap.prototype.clear = function () {
        this.buf = new Array();
    };
    return TextureMap;
})();
var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var WebGLRenderer = (function (_super) {
    __extends(WebGLRenderer, _super);
    function WebGLRenderer(game, container, transferMode) {
        _super.call(this, game, container, transferMode, true);
    }
    WebGLRenderer.create2dContext = function create2dContext(canvas) {
        return new WebGL2dContext(canvas);
    };
    WebGLRenderer.prototype.refresh = function () {
        delete this.buffer;
        this.buffer = new Array();
        this.handler.innerHTML = "";
        this.buffer[0] = window.createCanvas(this.game.width, this.game.height);
        ;
        this.handler.appendChild(this.buffer[0]);
        this.fc = WebGLRenderer.create2dContext(this.buffer[0]);
        if(this.frontCanvasSize) {
            this.buffer[0].style.width = this.frontCanvasSize.width + "px";
            this.buffer[0].style.height = this.frontCanvasSize.height + "px";
            if(this.frontCanvasOffset) {
                this.handler.style.position = "relative";
                this.handler.style.left = this.frontCanvasOffset.x + "px";
                this.handler.style.top = this.frontCanvasOffset.y + "px";
            }
        }
    };
    WebGLRenderer.prototype.render = function () {
        var c = (this.fc);
        var gl = c.gl;
        var layer = this.scene.root;
        if(!this.disableClear) {
            c.clear();
        }
        this.renderParent(layer, this.fc);
        layer.reflected();
        gl.flush();
    };
    return WebGLRenderer;
})(GameRenderer);
