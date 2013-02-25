window.getTime = ((function () {
    if(window.performance && window.performance.now) {
        return function () {
            return window.performance.now();
        };
    } else if(window.performance && window.performance.webkitNow) {
        return function () {
            return window.performance.webkitNow();
        };
    } else {
        return Date.now;
    }
})());
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || ((function () {
    var lastTime = window.getTime();
    var frame = 1000 / 60;
    return function (func) {
        var currentTime = window.getTime();
        var _id = setTimeout(function () {
            func(window.getTime());
        }, Math.max(0, lastTime + frame - currentTime));
        lastTime = currentTime;
        return _id;
    };
})());
window.createCanvas = function (width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    if("imageSmoothingEnabled" in window) {
        var browser = JGUtil.getBrowser();
        if(browser.opera) {
            canvas.style["imageRendering"] = "-o-crisp-edges";
        } else if(browser.msie) {
            canvas.style["msInterpolationMode"] = "nearest-neighbor";
        } else if(browser.safari) {
            canvas.style["imageRendering"] = "-webkit-optimize-contrast";
        }
        var context = canvas.getContext("2d");
        if(context["imageSmoothingEnabled"]) {
            context["imageSmoothingEnabled"] = false;
        }
        if(context["webkitImageSmoothingEnabled"]) {
            context["webkitImageSmoothingEnabled"] = false;
        }
        if(context["mozImageSmoothingEnabled"]) {
            context["mozImageSmoothingEnabled"] = false;
        }
    }
    return canvas;
};
var Angle;
(function (Angle) {
    Angle._map = [];
    Angle._map[0] = "left";
    Angle.left = 0;
    Angle._map[1] = "right";
    Angle.right = 1;
    Angle._map[2] = "up";
    Angle.up = 2;
    Angle._map[3] = "down";
    Angle.down = 3;
})(Angle || (Angle = {}));
var Area = (function () {
    function Area(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    return Area;
})();
var Rectangle = (function () {
    function Rectangle(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    Rectangle.prototype.hitTest = function (point) {
        return (this.left <= point.x && this.right >= point.x && this.top <= point.y && this.bottom >= point.y);
    };
    Rectangle.prototype.fit = function (point) {
        if(point.y < this.top) {
            point.y = this.top;
        } else if(point.y > this.bottom) {
            point.y = this.bottom;
        }
        if(point.x < this.left) {
            point.x = this.left;
        } else if(point.x > this.right) {
            point.x = this.right;
        }
    };
    Rectangle.prototype.width = function () {
        return Math.abs(this.right - this.left);
    };
    Rectangle.prototype.height = function () {
        return Math.abs(this.bottom - this.top);
    };
    return Rectangle;
})();
var Easing = (function () {
    function Easing() { }
    Easing.LINEAR = function LINEAR(t, b, c, d) {
        return c * t / d + b;
    };
    Easing.SWING = function SWING(t, b, c, d) {
        return c * (0.5 - Math.cos(((t / d) * Math.PI)) / 2) + b;
    };
    Easing.QUAD_EASEIN = function QUAD_EASEIN(t, b, c, d) {
        return c * (t /= d) * t + b;
    };
    Easing.QUAD_EASEOUT = function QUAD_EASEOUT(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    };
    Easing.QUAD_EASEINOUT = function QUAD_EASEINOUT(t, b, c, d) {
        if((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    };
    Easing.CUBIC_EASEIN = function CUBIC_EASEIN(t, b, c, d) {
        return c * (t /= d) * t * t + b;
    };
    Easing.CUBIC_EASEOUT = function CUBIC_EASEOUT(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    };
    Easing.CUBIC_EASEINOUT = function CUBIC_EASEINOUT(t, b, c, d) {
        if((t /= d / 2) < 1) {
            return c / 2 * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };
    Easing.QUART_EASEIN = function QUART_EASEIN(t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    };
    Easing.QUART_EASEOUT = function QUART_EASEOUT(t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    };
    Easing.QUART_EASEINOUT = function QUART_EASEINOUT(t, b, c, d) {
        if((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b;
        }
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    };
    Easing.QUINT_EASEIN = function QUINT_EASEIN(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    };
    Easing.QUINT_EASEOUT = function QUINT_EASEOUT(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    };
    Easing.QUINT_EASEINOUT = function QUINT_EASEINOUT(t, b, c, d) {
        if((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    };
    Easing.SIN_EASEIN = function SIN_EASEIN(t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    };
    Easing.SIN_EASEOUT = function SIN_EASEOUT(t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    };
    Easing.SIN_EASEINOUT = function SIN_EASEINOUT(t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    };
    Easing.CIRC_EASEIN = function CIRC_EASEIN(t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    };
    Easing.CIRC_EASEOUT = function CIRC_EASEOUT(t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    };
    Easing.CIRC_EASEINOUT = function CIRC_EASEINOUT(t, b, c, d) {
        if((t /= d / 2) < 1) {
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        }
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    };
    Easing.ELASTIC_EASEIN = function ELASTIC_EASEIN(t, b, c, d, a, p) {
        if(t === 0) {
            return b;
        }
        if((t /= d) === 1) {
            return b + c;
        }
        if(!p) {
            p = d * 0.3;
        }
        var s;
        if(!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    };
    Easing.ELASTIC_EASEOUT = function ELASTIC_EASEOUT(t, b, c, d, a, p) {
        if(t === 0) {
            return b;
        }
        if((t /= d) === 1) {
            return b + c;
        }
        if(!p) {
            p = d * 0.3;
        }
        var s;
        if(!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
    };
    Easing.ELASTIC_EASEINOUT = function ELASTIC_EASEINOUT(t, b, c, d, a, p) {
        if(t === 0) {
            return b;
        }
        if((t /= d / 2) === 2) {
            return b + c;
        }
        if(!p) {
            p = d * (0.3 * 1.5);
        }
        var s;
        if(!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if(t < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    };
    Easing.BOUNCE_EASEOUT = function BOUNCE_EASEOUT(t, b, c, d) {
        if((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if(t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
        } else if(t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
        }
    };
    Easing.BOUNCE_EASEIN = function BOUNCE_EASEIN(t, b, c, d) {
        return c - Easing.BOUNCE_EASEOUT(d - t, 0, c, d) + b;
    };
    Easing.BOUNCE_EASEINOUT = function BOUNCE_EASEINOUT(t, b, c, d) {
        if(t < d / 2) {
            return Easing.BOUNCE_EASEIN(t * 2, 0, c, d) * 0.5 + b;
        } else {
            return Easing.BOUNCE_EASEOUT(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
        }
    };
    Easing.BACK_EASEIN = function BACK_EASEIN(t, b, c, d, s) {
        if(s === undefined) {
            s = 1.70158;
        }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    };
    Easing.BACK_EASEOUT = function BACK_EASEOUT(t, b, c, d, s) {
        if(s === undefined) {
            s = 1.70158;
        }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    };
    Easing.BACK_EASEINOUT = function BACK_EASEINOUT(t, b, c, d, s) {
        if(s === undefined) {
            s = 1.70158;
        }
        if((t /= d / 2) < 1) {
            return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        }
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    };
    Easing.EXPO_EASEIN = function EXPO_EASEIN(t, b, c, d) {
        return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    };
    Easing.EXPO_EASEOUT = function EXPO_EASEOUT(t, b, c, d) {
        return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    };
    Easing.EXPO_EASEINOUT = function EXPO_EASEINOUT(t, b, c, d) {
        if(t === 0) {
            return b;
        }
        if(t === d) {
            return b + c;
        }
        if((t /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        }
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    };
    Easing.RANDOM = function RANDOM() {
        var ary = [];
        for(var i in Easing) {
            if(i != "RANDOM") {
                ary.push(i);
            }
        }
        return Easing[ary[Math.floor(Math.random() * ary.length)]];
    };
    return Easing;
})();
var ENTITY_OPTIONS_DEFAULT_VALUES = {
    rotate: 0,
    translate: {
        x: 0,
        y: 0
    },
    transform: {
        m11: 1,
        m12: 0,
        m21: 0,
        m22: 1,
        dx: 0,
        dy: 0
    },
    scale: {
        x: 1,
        y: 1
    },
    globalAlpha: undefined,
    font: undefined,
    fillStyle: undefined,
    strokeStyle: undefined,
    lineCap: undefined,
    lineJoin: undefined,
    lineWidth: undefined,
    miterLimit: undefined,
    shadowBlur: undefined,
    shadowColor: undefined,
    shadowOffsetX: undefined,
    shadowOffsetY: undefined,
    strokeStyle: undefined,
    textAlign: undefined,
    textBaseline: undefined
};
(function () {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    for(var p in ENTITY_OPTIONS_DEFAULT_VALUES) {
        if(ENTITY_OPTIONS_DEFAULT_VALUES[p] == undefined) {
            ENTITY_OPTIONS_DEFAULT_VALUES[p] = context[p];
        }
    }
})();
var E = (function () {
    function E() {
    }
    E.prototype.enablePointingEvent = function () {
        this.pointCapture = true;
        if(!this.inputDown) {
            this.inputDown = new Trigger();
        }
        if(!this.inputUp) {
            this.inputUp = new Trigger();
        }
        if(!this.inputMove) {
            this.inputMove = new Trigger();
        }
    };
    E.prototype.disablePointingEvent = function () {
        delete this.pointCapture;
    };
    E.prototype.removeDrawOption = function (name) {
        if(!this.options) {
            return;
        }
        if(this.options[name]) {
            delete this.options[name];
        }
        var cnt = 0;
        for(var i in this.options) {
            cnt++;
            break;
        }
        if(!cnt) {
            delete this.options;
        }
    };
    E.prototype.setDrawOption = function (name, value) {
        if(!this.options) {
            this.options = {
            };
        }
        this.options[name] = value;
        this.updated();
    };
    E.prototype.getDrawOption = function (name) {
        if(!this.options || this.options[name] == undefined) {
            return ENTITY_OPTIONS_DEFAULT_VALUES[name];
        }
        return this.options[name];
    };
    E.prototype.moveTo = function (x, y) {
        this.x = x;
        this.y = y;
        this.updated();
    };
    E.prototype.moveBy = function (x, y) {
        this.x += x;
        this.y += y;
        this.updated();
    };
    E.prototype.activate = function () {
        if(this.active_queue) {
            var f;
            while(f = this.active_queue.shift()) {
                f.call(this);
            }
            delete this.active_queue;
        }
    };
    E.prototype.addActiveQueue = function (f) {
        if(this.scene) {
            f.call(this);
            return;
        }
        if(!this.active_queue) {
            this.active_queue = [];
        }
        this.active_queue.push(f);
    };
    E.prototype.appendTo = function (scene, layerName) {
        scene.append(this, layerName);
    };
    E.prototype.remove = function () {
        if(this.parent) {
            this.parent.removeChild(this);
        } else {
            throw "Can not remove layer. (use scene.deleteLayer)";
        }
    };
    E.prototype.insert = function (entity, index) {
        if(!this.entities) {
            throw "Can not call append of non-container entity";
        }
        entity.scene = this.scene;
        entity.parent = this;
        if(typeof index != "number") {
            for(var i = 0; i < this.entities.length; i++) {
                if(this.entities[i] == index) {
                    index = i;
                    break;
                }
            }
        }
        this.entities.splice(index, 0, entity);
        entity.activate();
    };
    E.prototype.append = function (entity) {
        if(!this.entities) {
            throw "Can not call append of non-container entity";
        }
        entity.scene = this.scene;
        entity.parent = this;
        this.entities.push(entity);
        entity.activate();
    };
    E.prototype.removeChild = function (entity) {
        if(!this.entities) {
            throw "Can not call removeChild of non-container entity";
        }
        for(var i = 0; i < this.entities.length; i++) {
            if(this.entities[i] == entity) {
                if(entity.entities) {
                    var childEntity;
                    while(childEntity = entity.entities.pop()) {
                        entity.removeChild(childEntity);
                    }
                }
                this.entities.splice(i, 1);
                entity.destroy();
                return true;
            }
        }
        return false;
    };
    E.prototype.start = function () {
        if(this.started) {
            return;
        }
        this.started = true;
        if(this.scene) {
            this.scene.game.update.handle(this, this.update);
        } else {
            this.addActiveQueue(function () {
                this.scene.game.update.handle(this, this.update);
            });
        }
    };
    E.prototype.stop = function () {
        if(!this.started) {
            return;
        }
        this.started = false;
        if(this.scene) {
            this.scene.game.update.remove(this, this.update);
        } else {
            this.addActiveQueue(function () {
                this.scene.game.update.remove(this, this.update);
            });
        }
    };
    E.prototype.startTimer = function (wait, method) {
        if(this.scene) {
            this.scene.game.addTimer(wait, this, method ? method : this.interval);
        } else {
            this.addActiveQueue(function () {
                this.scene.game.addTimer(wait, this, method ? method : this.interval);
            });
        }
    };
    E.prototype.stopTimer = function (wait, method) {
        if(this.scene) {
            this.scene.game.removeTimer(wait, this, method ? method : this.interval);
        } else {
            this.addActiveQueue(function () {
                this.scene.game.removeTimer(wait, this, method ? method : this.interval);
            });
        }
    };
    E.prototype.updated = function () {
        if(this.parent) {
            this.parent.updated();
        } else {
            this.isUpdated = true;
        }
    };
    E.prototype.isUpdate = function () {
        return this.isUpdated;
    };
    E.prototype.reflected = function () {
        this.isUpdated = false;
    };
    E.prototype.tl = function () {
        if(!this._tl) {
            this._tl = new Timeline(this);
        }
        return this._tl;
    };
    E.prototype.destroy = function () {
        if(this._tl) {
            this._tl.clear();
            delete this._tl;
        }
        this.stop();
        if(this.scene) {
            this.scene.game.removeTimerAll(this);
            this.scene = null;
        }
        delete this.parent;
        if(this.entities) {
            var childEntity;
            while(childEntity = this.entities.pop()) {
                childEntity.destroy();
            }
        }
        if(this.inputDown) {
            this.inputDown.destroy();
            delete this.inputDown;
        }
        if(this.inputUp) {
            this.inputUp.destroy();
            delete this.inputUp;
        }
        if(this.inputMove) {
            this.inputMove.destroy();
            delete this.inputMove;
        }
    };
    E.prototype.offset = function () {
        var parent_offset = this.parent ? this.parent.offset() : {
            x: 0,
            y: 0
        };
        return {
            x: this.x + parent_offset.x,
            y: this.y + parent_offset.y
        };
    };
    E.prototype.rect = function () {
        var offset = this.offset();
        return new Rectangle(offset.x, offset.y, offset.x + this.width, offset.y + this.height);
    };
    E.prototype.hitTest = function (point) {
        return this.rect().hitTest(point);
    };
    E.prototype.getDistance = function (point) {
        var area = point;
        if(area.width && area.height) {
            return {
                x: Math.abs((area.x + area.width / 2) - (this.x + this.width / 2)),
                y: Math.abs((area.y + area.height / 2) - (this.y + this.height / 2))
            };
        } else {
            return {
                x: Math.abs(point.x - (this.x + this.width / 2)),
                y: Math.abs(point.y - (this.y + this.height / 2))
            };
        }
    };
    E.prototype.getEntityByPoint = function (point, force) {
        if(this.entities) {
            for(var i = this.entities.length - 1; i >= 0; i--) {
                if(force || this.entities[i].pointCapture) {
                    var p = this.entities[i].getEntityByPoint(point);
                    if(p) {
                        return p;
                    }
                }
            }
        }
        if((force || this.pointCapture) && this.hitTest(point)) {
            return this;
        }
        return null;
    };
    E.prototype.createSprite = function () {
        var buffer = new BufferedRenderer({
            width: this.width,
            height: this.height
        });
        var x = this.x;
        var y = this.y;
        this.x = 0;
        this.y = 0;
        buffer.renderUnit(this);
        this.x = x;
        this.y = y;
        return buffer.createSprite();
    };
    E.prototype.update = function (t) {
    };
    E.prototype.interval = function () {
    };
    E.prototype.draw = function (area, context) {
    };
    return E;
})();
var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ShapeStyle;
(function (ShapeStyle) {
    ShapeStyle._map = [];
    ShapeStyle._map[0] = "stroke";
    ShapeStyle.stroke = 0;
    ShapeStyle._map[1] = "fill";
    ShapeStyle.fill = 1;
})(ShapeStyle || (ShapeStyle = {}));
var ShapeType;
(function (ShapeType) {
    ShapeType._map = [];
    ShapeType._map[0] = "rect";
    ShapeType.rect = 0;
    ShapeType._map[1] = "arc";
    ShapeType.arc = 1;
})(ShapeType || (ShapeType = {}));
var Shape = (function (_super) {
    __extends(Shape, _super);
    function Shape(width, height, style, color, type) {
        _super.call(this);
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.style = style ? style : ShapeStyle.stroke;
        if(color) {
            this.setColor(color);
        }
        this.type = type ? type : ShapeType.rect;
    }
    Shape.PI_200_PER = Math.PI * 2;
    Shape.prototype.setStyle = function (style) {
        this.style = style;
        this.setColor(this.getColor());
    };
    Shape.prototype.setLineWidth = function (width) {
        this.setDrawOption("lineWidth", width);
    };
    Shape.prototype.getLineWidth = function () {
        return this.getDrawOption("lineWidth");
    };
    Shape.prototype.setColor = function (color) {
        if(this.style == ShapeStyle.stroke) {
            this.setDrawOption("strokeStyle", color);
        } else {
            this.setDrawOption("fillStyle", color);
        }
    };
    Shape.prototype.getColor = function () {
        if(this.style == ShapeStyle.stroke) {
            return this.getDrawOption("strokeStyle");
        } else {
            return this.getDrawOption("filltyle");
        }
    };
    Shape.prototype.synchronize = function (syncObj, syncFunc) {
        this.syncObj = syncObj;
        this.syncFunc = syncFunc;
    };
    Shape.prototype.draw = function (area, context) {
        if(this.syncObj) {
            this.syncFunc.call(this.syncObj, this);
        }
        context.beginPath();
        switch(this.type) {
            case ShapeType.rect:
                context.rect(0, 0, this.width, this.height);
                break;
            case ShapeType.arc:
                var w2 = this.width / 2;
                context.arc(w2, w2, w2, 0, Shape.PI_200_PER, false);
                break;
        }
        if(this.style == ShapeStyle.fill) {
            context.fill();
        } else {
            context.stroke();
        }
    };
    return Shape;
})(E);
var Trigger = (function () {
    function Trigger() {
        this.handlers = [];
    }
    Trigger.prototype.handleInsert = function (index, owner, handler) {
        this.handlers.splice(index, 0, {
            owner: owner,
            handler: handler
        });
    };
    Trigger.prototype.handle = function (owner, handler) {
        if(!handler) {
            this.handlers.push({
                owner: window,
                handler: owner
            });
        } else {
            this.handlers.push({
                owner: owner,
                handler: handler
            });
        }
    };
    Trigger.prototype.destroy = function () {
        this.handlers = new Array();
    };
    Trigger.prototype.removeAll = function (owner) {
        var ret = [];
        var tmp;
        while(tmp = this.handlers.pop()) {
            if(tmp.owner != owner) {
                ret.push(tmp);
            }
        }
        this.handlers = ret;
    };
    Trigger.prototype.removeAllByHandler = function (handler) {
        var ret = [];
        var tmp;
        while(tmp = this.handlers.pop()) {
            if(tmp.handler != handler) {
                ret.push(tmp);
            }
        }
        this.handlers = ret;
    };
    Trigger.prototype.remove = function (owner, handler) {
        var ret = [];
        var tmp;
        if(!handler) {
            handler = owner;
            owner = window;
        }
        while(tmp = this.handlers.pop()) {
            if(tmp.handler != handler || tmp.owner != owner) {
                ret.push(tmp);
            }
        }
        this.handlers = ret;
    };
    Trigger.prototype.fire = function (param) {
        if(this.handlers.length == 0) {
            return;
        }
        var handlers = [];
        for(var i = 0; i < this.handlers.length; i++) {
            handlers[i] = this.handlers[i];
        }
        for(var i = 0; i < handlers.length; i++) {
            handlers[i].handler.call(handlers[i].owner, param);
        }
    };
    Trigger.prototype.fastFire = function (param) {
        for(var i = 0; i < this.handlers.length; i++) {
            this.handlers[i].handler.call(this.handlers[i].owner, param);
        }
    };
    return Trigger;
})();
var ResourceLoader = (function () {
    function ResourceLoader(resource) {
        this.resource = resource;
    }
    ResourceLoader.prototype.load = function (url, identifier) {
    };
    return ResourceLoader;
})();
var ImageResourceLoader = (function (_super) {
    __extends(ImageResourceLoader, _super);
    function ImageResourceLoader() {
        _super.apply(this, arguments);

    }
    ImageResourceLoader.prototype.load = function (url, identifier) {
        var image = new Image();
        image.src = "img/" + url;
        var caller = this;
        var callback = this.completed;
        image.onerror = function () {
            callback.call(caller, identifier, image, false);
        };
        image.onload = function () {
            callback.call(caller, identifier, image, true);
        };
    };
    ImageResourceLoader.prototype.completed = function (name, image, is_success) {
        if(!is_success) {
            console.log("error: " + name);
        } else {
            this.resource.images[name] = image;
        }
        this.resource.requestCompleted(name);
    };
    return ImageResourceLoader;
})(ResourceLoader);
var ScriptResourceLoader = (function (_super) {
    __extends(ScriptResourceLoader, _super);
    function ScriptResourceLoader() {
        _super.apply(this, arguments);

    }
    ScriptResourceLoader.prototype.load = function (url, identifier) {
        var script = document.createElement("script");
        var heads = document.getElementsByTagName("head");
        if(heads.length == 0) {
            throw "can not find head tag";
        }
        script.src = url + "?" + (new Date()).getTime();
        var caller = this;
        var callback = this.completed;
        script.onload = function () {
            callback.call(caller, identifier, script, true);
        };
        script.onerror = function () {
            callback.call(caller, identifier, script, false);
        };
        heads[0].appendChild(script);
    };
    ScriptResourceLoader.prototype.completed = function (name, script, is_success) {
        if(!is_success) {
            console.log("error: " + name);
        } else {
            this.resource.scripts[name] = script;
        }
        this.resource.requestCompleted(name);
    };
    return ScriptResourceLoader;
})(ResourceLoader);
var Resource = (function () {
    function Resource() {
        this.requests = [];
        this.loaded = new Trigger();
        this.images = {
        };
        this.scripts = {
        };
        this.loaders = {
        };
        this.loaders["js"] = new ScriptResourceLoader(this);
        this.loaders["default"] = new ImageResourceLoader(this);
    }
    Resource.getInstance = function getInstance() {
        return (function () {
            if(!Resource.instance) {
                Resource.instance = new Resource();
            }
            return Resource.instance;
        })();
    };
    Resource.prototype.get = function (name) {
        return this.images[name];
    };
    Resource.prototype.requestCompleted = function (name) {
        for(var i = 0; i < this.requests.length; i++) {
            if(this.requests[i] == name) {
                this.requests.splice(i, 1);
                break;
            }
        }
        this.loaded.fire(this.requests.length);
    };
    Resource.prototype.load = function (name, url) {
        if(!url) {
            url = name;
        }
        this.requests.push(name);
        var dot = url.split(/\./g);
        var ext;
        if(dot.length == 0) {
            ext = "";
        } else {
            ext = dot[dot.length - 1];
        }
        ext = ext.toLowerCase();
        if(this.loaders[ext]) {
            this.loaders[ext].load(url, name);
        } else {
            this.loaders["default"].load(url, name);
        }
    };
    return Resource;
})();
var Scene = (function () {
    function Scene(game) {
        this.game = game;
        this.layers = {
        };
        this.root = new Layer(this);
        this.layers["root"] = this.root;
        this.layerCount = 1;
        this.mode = new Array();
        this.started = new Trigger();
        this.ended = new Trigger();
        this.showed = new Trigger();
        this.hid = new Trigger();
    }
    Scene.prototype.currentMode = function () {
        return this.mode.length == 0 ? null : this.mode[this.mode.length - 1];
    };
    Scene.prototype.getLayerArray = function () {
        var ret = new Array();
        for(var i in this.layers) {
            ret.push(this.layers[i]);
        }
        return ret;
    };
    Scene.prototype.enablePointingEvent = function () {
        this.root.enablePointingEvent();
    };
    Scene.prototype.disablePointingEvent = function () {
        this.root.disablePointingEvent();
    };
    Scene.prototype.changeMode = function (mode) {
        var linkMode = this.currentMode();
        if(linkMode && this[linkMode + "Hide"]) {
            this[linkMode + "Hide"]();
        }
        this.mode.push(mode);
        if(mode) {
            if(this[mode + "Start"]) {
                this[mode + "Start"]();
            }
            if(this[mode + "Show"]) {
                this[mode + "Show"]();
            }
        }
    };
    Scene.prototype.endCurrentMode = function (newMode) {
        if(this.mode.length == 0) {
            this.end();
            return;
        }
        var mode = this.mode.pop();
        if(mode) {
            if(this[mode + "End"]) {
                this[mode + "End"]();
            }
        }
        var linkMode = this.currentMode();
        if(linkMode && this[linkMode + "Show"]) {
            this[linkMode + "Show"]();
        }
        if(newMode) {
            this.changeMode(newMode);
        }
    };
    Scene.prototype.createLayer = function (name, size) {
        for(var i in this.layers) {
            if(!this.layers[i].hasBuffer()) {
                this.layers[i].createBuffer();
            }
        }
        this.layers[name] = new Layer(this);
        if(size) {
            this.layers[name].width = size.width;
            this.layers[name].height = size.height;
        }
        this.layers[name].createBuffer();
        this.layerCount++;
        return this.layers[name];
    };
    Scene.prototype.deleteLayer = function (name) {
        if(name == "root") {
            throw "can not delete root layer";
        }
        this.layers[name].destroy();
        delete this.layers[name];
        this.layerCount--;
        if(this.layerCount == 1) {
            this.root.deleteBuffer();
        }
    };
    Scene.prototype.destroy = function () {
        for(var i in this.layers) {
            this.layers[i].destroy();
        }
    };
    Scene.prototype.end = function () {
        this.game.endScene();
    };
    Scene.prototype.refresh = function () {
        for(var i in this.layers) {
            this.layers[i].refresh();
        }
    };
    Scene.prototype.scrollTo = function (x, y, layerName) {
        if(!layerName) {
            layerName = "root";
        }
        if(this.layers[layerName].x != x || this.layers[layerName].y != y) {
            this.layers[layerName].moveTo(x, y);
        }
    };
    Scene.prototype.scrollBy = function (x, y, layerName) {
        if(x == 0 && y == 0) {
            return;
        }
        if(!layerName) {
            layerName = "root";
        }
        this.layers[layerName].moveBy(x, y);
    };
    Scene.prototype.append = function (entity, layerName) {
        if(!layerName) {
            this.root.append(entity);
        } else {
            this.layers[layerName].append(entity);
        }
    };
    Scene.prototype.removeEntity = function (entity) {
        for(var i in this.layers) {
            this.layers[i].removeChild(entity);
        }
    };
    return Scene;
})();
var Sprite = (function (_super) {
    __extends(Sprite, _super);
    function Sprite(width, height, image) {
        _super.call(this);
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.image = image;
        this.sep = Math.floor(this.image.width / this.width);
        this.frame = [
            0
        ];
        this.fno = 0;
    }
    Sprite.prototype.draw = function (area, context) {
        context.drawImage(this.image, (this.frame[this.fno] % this.sep) * this.width, Math.floor(this.frame[this.fno] / this.sep) * this.height, this.width, this.height, 0, 0, this.width, this.height);
    };
    Sprite.prototype.refresh = function () {
        if(this.image instanceof HTMLCanvasElement) {
        }
    };
    return Sprite;
})(E);
var Character = (function (_super) {
    __extends(Character, _super);
    function Character(width, height, image, wait) {
        _super.call(this, width, height, image);
        this.moving = false;
        if(!wait) {
            wait = 200;
        }
        this.startTimer(wait);
        this.animeCnt = 2;
        this.charaSeq = 0;
        this.charaCol = 1;
        this.movePixel = 64;
        this.moveTime = 300;
        this.animation = true;
    }
    Character.prototype.moveLeft = function (stackNext) {
        if(this.move(-this.movePixel, 0, this.moveTime)) {
            this.angle(Angle.left);
            return true;
        }
        if(stackNext && this.moveInfo.t * 2 >= this.moveInfo.f) {
            this.nextMove = "Left";
        }
        return false;
    };
    Character.prototype.moveRight = function (stackNext) {
        if(this.move(this.movePixel, 0, this.moveTime)) {
            this.angle(Angle.right);
            return true;
        }
        if(stackNext && this.moveInfo.t * 2 >= this.moveInfo.f) {
            this.nextMove = "Right";
        }
        return false;
    };
    Character.prototype.moveUp = function (stackNext) {
        if(this.move(0, -this.movePixel, this.moveTime)) {
            this.angle(Angle.up);
            return true;
        }
        if(stackNext && this.moveInfo.t * 2 >= this.moveInfo.f) {
            this.nextMove = "Up";
        }
        return false;
    };
    Character.prototype.moveDown = function (stackNext) {
        if(this.move(0, 64, this.moveTime)) {
            this.angle(Angle.down);
            return true;
        }
        if(stackNext && this.moveInfo.t * 2 >= this.moveInfo.f) {
            this.nextMove = "Down";
        }
        return false;
    };
    Character.prototype.move = function (x, y, f) {
        if(this.moving) {
            return false;
        }
        this.moving = true;
        this.moveInfo = {
            x: this.x,
            y: this.y,
            dx: this.x + x,
            dy: this.y + y,
            f: f,
            t: 0
        };
        this.start();
        return true;
    };
    Character.prototype.update = function (t) {
        if(this.moving) {
            this.moveInfo.t += t;
            if(this.moveInfo.t < this.moveInfo.f) {
                this.moveTo(this.moveInfo.x + Math.round((this.moveInfo.dx - this.moveInfo.x) / this.moveInfo.f * this.moveInfo.t), this.moveInfo.y + Math.round((this.moveInfo.dy - this.moveInfo.y) / this.moveInfo.f * this.moveInfo.t));
            } else {
                this.moveTo(this.moveInfo.dx, this.moveInfo.dy);
                this.endMove();
            }
        }
    };
    Character.prototype.endMove = function () {
        this.moving = false;
        this.stop();
        var e = {
        };
        if(this.nextMove) {
            e.nextMove = this.nextMove;
            delete this.nextMove;
        }
        if(this.moved) {
            this.moved.fire(e);
        }
        if(e.nextMove) {
            this["move" + e.nextMove]();
        }
    };
    Character.prototype.angle = function (angle) {
        this.currentAngle = angle;
        var rowP = Math.floor(this.charaSeq / this.charaCol) * 4;
        switch(angle) {
            case Angle.up:
                rowP += (this.angleSeq ? this.angleSeq[Angle.up] : 3);
                break;
            case Angle.down:
                rowP += (this.angleSeq ? this.angleSeq[Angle.down] : 0);
                break;
            case Angle.left:
                rowP += (this.angleSeq ? this.angleSeq[Angle.left] : 1);
                break;
            case Angle.right:
                rowP += (this.angleSeq ? this.angleSeq[Angle.right] : 2);
                break;
        }
        var f = this.animeCnt * (this.charaSeq % this.charaCol) + this.charaCol * this.animeCnt * rowP;
        this.frame = [];
        if(this.animeCnt % 2 == 1) {
            for(var i = 0; i < this.animeCnt; i++) {
                this.frame.push(i + f);
            }
            for(var i = this.animeCnt - 2; i > 0; i--) {
                this.frame.push(i + f);
            }
        } else {
            for(var i = 0; i < this.animeCnt; i++) {
                this.frame.push(i + f);
            }
        }
    };
    Character.prototype.interval = function () {
        if(this.animation) {
            this.fno = (this.fno + 1) % this.frame.length;
            this.updated();
        }
    };
    return Character;
})(Sprite);
var CharacterFactory = (function () {
    function CharacterFactory(width, height, image) {
        this.width = width;
        this.height = height;
        this.image = image;
        this.wait = 200;
        this.charaCol = 1;
        this.animeCnt = 2;
        this.moveTime = 300;
        this.movePixel = 64;
        this.angle = Angle.down;
        this.createClass = Character;
    }
    CharacterFactory.prototype.create = function (charaSeq, offset, angle) {
        var c = new this.createClass(this.width, this.height, this.image, this.wait);
        var black = [
            "width", 
            "height", 
            "image", 
            "wait", 
            "angle"
        ];
        for(var i in this) {
            if(typeof this[i] == "function") {
                continue;
            }
            if(black.indexOf(i) >= 0) {
                continue;
            }
            c[i] = this[i];
        }
        c.charaSeq = charaSeq;
        c.angle(angle == undefined ? this.angle : angle);
        if(offset) {
            c.moveTo(offset.x, offset.y);
        }
        return c;
    };
    return CharacterFactory;
})();
var Label = (function (_super) {
    __extends(Label, _super);
    function Label(text, fontSize, fontColor, baseline) {
        _super.call(this);
        this.x = 0;
        this.y = 0;
        if(text) {
            this.setText(text);
        } else {
            this.setText("");
            this.width = 0;
            this.height = 0;
        }
        this.setTextBaseline(baseline ? baseline : "top");
        this.setFontSize(fontSize ? fontSize : 14);
        this.setColor(fontColor ? fontColor : "black");
    }
    Label.prototype.setMaxWidth = function (maxWidth) {
        this.maxWidth = maxWidth;
        this.updateSize();
    };
    Label.prototype.updateSize = function () {
        var canvas = window.createCanvas(10, 10);
        var ctx = canvas.getContext("2d");
        ctx.font = this.getFont();
        var metrix = ctx.measureText(this.text);
        this.width = metrix.width;
        this.height = this.getFontSize();
    };
    Label.prototype.addShadow = function (color) {
        this.setDrawOption("shadowBlur", 2);
        this.setDrawOption("shadowColor", color ? color : "black");
    };
    Label.prototype.removeShadow = function () {
        this.removeDrawOption("shadowBlur");
        this.removeDrawOption("shadowColor");
    };
    Label.prototype.setText = function (text) {
        this.text = text;
        this.updateSize();
        this.updated();
    };
    Label.prototype.setFont = function (fontString) {
        this.setDrawOption("font", fontString);
        this.updateSize();
    };
    Label.prototype.getFont = function () {
        return this.getDrawOption("font");
    };
    Label.prototype.setFontSize = function (size) {
        var font = this.getFont();
        var firstPos = font.indexOf(" ");
        this.setFont(size + "px " + font.substr(firstPos + 1));
    };
    Label.prototype.getFontSize = function () {
        var font = this.getFont();
        var firstPos = font.indexOf(" ");
        try  {
            return parseInt(font.substr(0, firstPos - 2));
        } catch (ex) {
        }
        return this.height;
    };
    Label.prototype.setTextAlign = function (align) {
        this.setDrawOption("textAlign", align);
    };
    Label.prototype.getTextAlign = function () {
        return this.getDrawOption("textAlign");
    };
    Label.prototype.setTextBaseline = function (baseline) {
        this.setDrawOption("textBaseline", baseline);
    };
    Label.prototype.getTextBaseline = function () {
        return this.getDrawOption("textBaseline");
    };
    Label.prototype.setColor = function (color) {
        this.setDrawOption("fillStyle", color);
    };
    Label.prototype.getColor = function () {
        return this.getDrawOption("fillStyle");
    };
    Label.prototype.synchronize = function (obj, prop, round) {
        this.syncObj = obj;
        this.syncProp = prop;
        this.syncRound = round;
    };
    Label.prototype.draw = function (area, context) {
        if(this.syncObj) {
            var val;
            if(typeof this.syncObj[this.syncProp] == "function") {
                val = this.syncObj[this.syncProp](this);
            } else {
                val = this.syncObj[this.syncProp];
            }
            this.text = this.syncRound ? Math.round(val) : val;
        }
        if(this.maxWidth) {
            context.fillText(this.text, 0, 0, this.maxWidth);
        } else {
            context.fillText(this.text, 0, 0);
        }
    };
    return Label;
})(E);
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile(tileWidth, tileHeight, image) {
        _super.call(this);
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.image = image;
        this.x = 0;
        this.y = 0;
        this.sep = Math.floor(this.image.width / this.tileWidth);
        this.disableTransform = true;
    }
    Tile.prototype.generate = function (data, width, height) {
        this.data = data;
        if(!width) {
            width = this.data.length;
        }
        if(!height) {
            height = this.data[0].length;
        }
        this.chipCount = {
            width: width,
            height: height
        };
        this.width = this.tileWidth * width;
        this.height = this.tileHeight * height;
        this.refresh();
    };
    Tile.prototype.refresh = function () {
        this.canvas = window.createCanvas(this.width, this.height);
        var c = this.canvas.getContext("2d");
        for(var x = 0; x < this.chipCount.width; x++) {
            for(var y = 0; y < this.chipCount.height; y++) {
                c.drawImage(this.image, (this.data[x][y] % this.sep) * this.tileWidth, Math.floor(this.data[x][y] / this.sep) * this.tileHeight, this.tileWidth, this.tileHeight, x * this.tileWidth, y * this.tileHeight, this.tileWidth, this.tileHeight);
            }
        }
    };
    Tile.prototype.draw = function (area, context) {
        var src = new Area(-area.x, -area.y, area.width, area.height);
        var dist = new Area(0, 0, area.width, area.height);
        if(src.x < 0) {
            src.width += src.x;
            if(src.width <= 0) {
                return;
            }
            dist.x -= src.x;
            dist.width += src.x;
            src.x = 0;
        } else if((src.x + src.width) > this.width) {
            var p = ((src.x + src.width) - this.width);
            src.width -= p;
            if(src.width <= 0) {
                return;
            }
            dist.width -= p;
        }
        if(src.y < 0) {
            src.height += src.y;
            if(src.height <= 0) {
                return;
            }
            dist.y -= src.y;
            dist.height += src.y;
            src.y = 0;
        } else if((src.y + src.height) > this.height) {
            var p = ((src.y + src.height) - this.height);
            src.height -= p;
            if(src.height <= 0) {
                return;
            }
            dist.height -= p;
        }
        context.drawImage(this.canvas, src.x, src.y, src.width, src.height, dist.x, dist.y, dist.width, dist.height);
    };
    return Tile;
})(E);
var Layer = (function (_super) {
    __extends(Layer, _super);
    function Layer(scene) {
        _super.call(this);
        this.entities = [];
        this.x = 0;
        this.y = 0;
        this.scene = scene;
        this.width = this.scene.game.width;
        this.height = this.scene.game.height;
        this.isUpdated = true;
    }
    Layer.prototype.hasBuffer = function () {
        if(this.canvas) {
            return true;
        }
        return false;
    };
    Layer.prototype.createBuffer = function () {
        this.refresh(true);
    };
    Layer.prototype.refresh = function (must) {
        if(must || this.hasBuffer()) {
            this.canvas = window.createCanvas(this.width, this.height);
            this.context = this.canvas.getContext("2d");
            this.updated();
        }
        if(this.entities) {
            for(var i = 0; i < this.entities.length; i++) {
                if(this.entities[i]["refresh"]) {
                    this.entities[i]["refresh"]();
                }
            }
        }
    };
    Layer.prototype.deleteBuffer = function () {
        delete this.context;
        delete this.canvas;
    };
    Layer.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        if(this.hasBuffer()) {
            this.deleteBuffer();
        }
    };
    return Layer;
})(E);
var LoadingScene = (function (_super) {
    __extends(LoadingScene, _super);
    function LoadingScene(game, resource) {
        _super.call(this, game);
        this.resource = resource;
        this.resource.loaded.handle(this, this.complete);
        this.requestCount = this.resource.requests.length;
        this.shape = new Shape(game.width, 32);
        this.shape.moveTo(0, game.height / 2 - 16);
        this.shapeP = new Shape(1, 32, ShapeStyle.fill);
        this.shapeP.moveTo(0, game.height / 2 - 16);
        this.append(this.shape);
        this.append(this.shapeP);
    }
    LoadingScene.prototype.complete = function (cnt) {
        this.shapeP.width = this.game.width * ((this.requestCount - cnt) / this.requestCount);
        this.shapeP.updated();
        if(cnt == 0) {
            this.resource.loaded.remove(this, this.complete);
            this.end();
        }
    };
    return LoadingScene;
})(Scene);
var InputEventType;
(function (InputEventType) {
    InputEventType._map = [];
    InputEventType._map[0] = "Keyboard";
    InputEventType.Keyboard = 0;
    InputEventType._map[1] = "Point";
    InputEventType.Point = 1;
})(InputEventType || (InputEventType = {}));
var Keytype;
(function (Keytype) {
    Keytype._map = [];
    Keytype._map[0] = "left";
    Keytype.left = 0;
    Keytype._map[1] = "right";
    Keytype.right = 1;
    Keytype._map[2] = "up";
    Keytype.up = 2;
    Keytype._map[3] = "down";
    Keytype.down = 3;
    Keytype._map[4] = "enter";
    Keytype.enter = 4;
    Keytype._map[5] = "esc";
    Keytype.esc = 5;
})(Keytype || (Keytype = {}));
var InputEvent = (function () {
    function InputEvent(type, param) {
        this.type = type;
        this.param = param;
    }
    return InputEvent;
})();
var InputKeyboardEvent = (function (_super) {
    __extends(InputKeyboardEvent, _super);
    function InputKeyboardEvent(key, e) {
        _super.call(this, InputEventType.Keyboard, e);
        this.key = key;
    }
    return InputKeyboardEvent;
})(InputEvent);
var InputPointEvent = (function (_super) {
    __extends(InputPointEvent, _super);
    function InputPointEvent(e, entity, scale) {
        _super.call(this, InputEventType.Point, e);
        var entityOffset = entity.offset();
        this.entity = entity;
        this.point = {
            x: scale ? e.offsetX / scale : e.offsetX,
            y: scale ? e.offsetY / scale : e.offsetY
        };
        this.x = this.point.x - entityOffset.x;
        this.y = this.point.y - entityOffset.y;
    }
    return InputPointEvent;
})(InputEvent);
var Renderer = (function () {
    function Renderer() {
        var _this = this;
        this.radian = Math.PI / 180;
        this.drawOptionFunctions = {
            transform: function (c, entity, params) {
                c.transform(params.m11, params.m12, params.m21, params.m22, params.dx, params.dy);
            },
            translate: function (c, entity, params) {
                c.translate(params.x, params.y);
            },
            scale: function (c, entity, params) {
                c.transform.apply(c, _this.getMatrix(entity.width, entity.height, params.x, params.y, 0));
            },
            rotate: function (c, entity, params) {
                c.transform.apply(c, _this.getMatrix(entity.width, entity.height, 1, 1, params));
            }
        };
    }
    Renderer.prototype.getMatrix = function (width, height, scaleX, scaleY, angle) {
        var r = angle * this.radian;
        var _cos = Math.cos(r);
        var _sin = Math.sin(r);
        var a = _cos * scaleX;
        var b = _sin * scaleX;
        var c = _sin * scaleY;
        var d = _cos * scaleY;
        var w = width / 2;
        var h = height / 2;
        return [
            a, 
            b, 
            -c, 
            d, 
            (-a * w + c * h + w), 
            (-b * w - d * h + h)
        ];
    };
    Renderer.prototype.renderParent = function (parent, c, area) {
        if(!area) {
            area = new Area(Math.round(parent.x), Math.round(parent.y), parent.width, parent.height);
        }
        if(parent.orderDraw) {
            parent.orderDraw();
        }
        c.save();
        if(parent.options) {
            this.useDrawOption(parent, c);
        }
        for(var i = 0; i < parent.entities.length; i++) {
            this.renderEntity(area, parent.entities[i], c);
        }
        c.restore();
    };
    Renderer.prototype.renderEntity = function (area, entity, c) {
        if(entity.disableTransform) {
            entity.draw(area, c);
        } else {
            c.save();
            c.translate(area.x + entity.x, area.y + entity.y);
            if(entity.options) {
                this.useDrawOption(entity, c);
            }
            entity.draw(area, c);
            if(entity.entities) {
                for(var i = 0; i < entity.entities.length; i++) {
                    this.renderEntity(new Area(0, 0, entity.width, entity.height), entity.entities[i], c);
                }
            }
            c.restore();
        }
    };
    Renderer.prototype.useDrawOption = function (entity, c) {
        for(var p in entity.options) {
            if(this.drawOptionFunctions[p]) {
                this.drawOptionFunctions[p].call(this, c, entity, entity.options[p]);
            } else {
                c[p] = entity.options[p];
            }
        }
    };
    return Renderer;
})();
var RenderTransferMode;
(function (RenderTransferMode) {
    RenderTransferMode._map = [];
    RenderTransferMode._map[0] = "Transfer";
    RenderTransferMode.Transfer = 0;
    RenderTransferMode._map[1] = "Flip";
    RenderTransferMode.Flip = 1;
    RenderTransferMode._map[2] = "Direct";
    RenderTransferMode.Direct = 2;
})(RenderTransferMode || (RenderTransferMode = {}));
var GameRenderer = (function (_super) {
    __extends(GameRenderer, _super);
    function GameRenderer(game, container, transferMode, disableBg) {
        _super.call(this);
        this.game = game;
        this.container = container ? container : document.getElementById("jgame");
        if(!this.container) {
            var div = document.createElement("div");
            div.id = "jgame";
            var bodies = document.getElementsByTagName("body");
            if(bodies.length == 0) {
                throw "can not initialize game engine";
            }
            bodies[0].appendChild(div);
            this.container = div;
        }
        this.handler = document.createElement("div");
        this.container.appendChild(this.handler);
        this.changeTransferMode(transferMode ? transferMode : RenderTransferMode.Transfer);
        if(!disableBg) {
            this.bg = this.fc.getImageData(0, 0, this.game.width, this.game.height);
            for(var i = 0; i < this.bg.data.length; i++) {
                this.bg.data[i] = 255;
            }
        }
    }
    GameRenderer.prototype.changeFrontCanvasSize = function (size, offset) {
        this.frontCanvasSize = size;
        this.frontCanvasOffset = offset;
        this.refresh();
    };
    GameRenderer.prototype.changeTransferMode = function (mode) {
        this.transferMode = mode;
        if(this.transferMode == RenderTransferMode.Flip) {
            this.handler.style.position = "relative";
            this.handler.style.width = this.game.width + "px";
            this.handler.style.height = this.game.height + "px";
        }
        this.refresh();
    };
    GameRenderer.prototype.changeScene = function (scene) {
        this.scene = scene;
    };
    GameRenderer.prototype.flip = function () {
        var c = this.fc;
        this.fc = this.bc;
        this.bc = this.fc;
        this.flipNo = this.flipNo ? 0 : 1;
        this.buffer[this.flipNo].style.zIndex = "1";
        this.buffer[this.flipNo ? 0 : 1].style.zIndex = "0";
    };
    GameRenderer.prototype.render = function () {
        if(this.scene.layerCount == 1) {
            var layer = this.scene.root;
            if(!layer.isUpdate()) {
            } else {
                if(!this.disableClear) {
                    this.bc.putImageData(this.bg, 0, 0);
                }
                this.renderParent(layer, this.bc);
                layer.reflected();
                if(this.transferMode == RenderTransferMode.Flip) {
                    this.flip();
                } else if(this.bc != this.fc) {
                    this.fc.drawImage(this.buffer[1], 0, 0);
                }
            }
        } else {
            var hasUpdate = false;
            for(var i in this.scene.layers) {
                if(this.scene.layers[i].isUpdate()) {
                    hasUpdate = true;
                    break;
                }
            }
            if(hasUpdate) {
                if(!this.disableClear) {
                    this.bc.putImageData(this.bg, 0, 0);
                }
                for(var i in this.scene.layers) {
                    var layer = this.scene.layers[i];
                    if(layer.isUpdate()) {
                        layer.context.clearRect(0, 0, layer.width, layer.height);
                        this.renderParent(layer, layer.context);
                    }
                    this.bc.drawImage(layer.canvas, 0, 0);
                    layer.reflected();
                }
                if(this.bc != this.fc) {
                    this.fc.drawImage(this.buffer[1], 0, 0);
                } else if(this.transferMode == RenderTransferMode.Flip) {
                    this.flip();
                }
            }
        }
    };
    GameRenderer.prototype.refresh = function () {
        delete this.buffer;
        this.buffer = new Array();
        if(this.transferMode == RenderTransferMode.Flip) {
            this.handler.innerHTML = "";
            for(var i = 0; i < 2; i++) {
                this.buffer[i] = window.createCanvas(this.game.width, this.game.height);
                ;
                this.buffer[i].style.position = "absolute";
                this.buffer[i].style.zIndex = i.toString();
                this.handler.appendChild(this.buffer[i]);
            }
            this.fc = this.buffer[1].getContext("2d");
            this.bc = this.buffer[0].getContext("2d");
            this.flipNo = 1;
            if(this.frontCanvasSize) {
                this.buffer[1].style.width = this.frontCanvasSize.width + "px";
                this.buffer[1].style.height = this.frontCanvasSize.height + "px";
            }
        } else if(this.transferMode == RenderTransferMode.Transfer) {
            this.handler.innerHTML = "";
            for(var i = 0; i < 2; i++) {
                this.buffer[i] = window.createCanvas(this.game.width, this.game.height);
                ;
            }
            this.handler.appendChild(this.buffer[0]);
            this.fc = this.buffer[0].getContext("2d");
            this.bc = this.buffer[1].getContext("2d");
        } else {
            this.handler.innerHTML = "";
            this.buffer[0] = window.createCanvas(this.game.width, this.game.height);
            ;
            this.handler.appendChild(this.buffer[0]);
            this.fc = this.buffer[0].getContext("2d");
            this.bc = this.fc;
        }
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
    return GameRenderer;
})(Renderer);
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
var BufferedRenderer = (function (_super) {
    __extends(BufferedRenderer, _super);
    function BufferedRenderer(size) {
        _super.call(this);
        this.size = size;
        this.refresh();
    }
    BufferedRenderer.prototype.clear = function () {
        this.c.clearRect(0, 0, this.size.width, this.size.height);
    };
    BufferedRenderer.prototype.createSprite = function (area, distArea) {
        if(!area) {
            area = new Area(0, 0, this.size.width, this.size.height);
        }
        if(!distArea) {
            distArea = new Area(0, 0, area.width, area.height);
        }
        var canvas = window.createCanvas(area.width, area.height);
        var context = canvas.getContext("2d");
        context.drawImage(this.buffer, area.x, area.y, area.width, area.height, distArea.x, distArea.y, distArea.width, distArea.height);
        return new Sprite(area.width, area.height, canvas);
    };
    BufferedRenderer.prototype.renderUnit = function (entity) {
        var area = new Area(0, 0, entity.width, entity.height);
        this.renderEntity(area, entity, this.c);
    };
    BufferedRenderer.prototype.renderLayer = function (layer) {
        this.renderParent(layer, this.c);
    };
    BufferedRenderer.prototype.renderScene = function (scene) {
        this.clear();
        for(var i in scene.layers) {
            this.renderLayer(scene.layers[i]);
        }
    };
    BufferedRenderer.prototype.refresh = function () {
        delete this.buffer;
        this.buffer = window.createCanvas(this.size.width, this.size.height);
        this.c = this.buffer.getContext("2d");
    };
    return BufferedRenderer;
})(Renderer);
var GameTimer = (function () {
    function GameTimer(wait) {
        this.wait = wait;
        this.tick = window.getTime() + this.wait;
        this.trigger = new Trigger();
    }
    GameTimer.prototype.tryFire = function (t) {
        if(t >= this.tick) {
            this.fire(t);
        }
    };
    GameTimer.prototype.fire = function (t) {
        this.tick = t + this.wait;
        this.trigger.fastFire(t);
    };
    return GameTimer;
})();
var Game = (function () {
    function Game(width, height) {
        this._exit = false;
        this.width = width;
        this.height = height;
        this.targetFps = 0;
        this.loaded = new Trigger();
        this.update = new Trigger();
        this.inputDown = new Trigger();
        this.inputUp = new Trigger();
        this.inputMove = new Trigger();
        this.timers = new Array();
        this.currentScene = new Scene(this);
        this.scenes = new Array();
        this.scenes.push(this.currentScene);
        this.resource = Resource.getInstance();
        var container, transferMode;
        for(var i = 2; i < arguments.length; i++) {
            if(arguments[i] instanceof HTMLElement) {
                container = arguments[i];
            } else if(typeof arguments[i] == "string") {
                this.renderer = new window[arguments[i]](this, container, transferMode);
                this.renderer.changeScene(this.currentScene);
            } else {
                transferMode = arguments[i];
            }
        }
        if(!this.renderer) {
            this.renderer = new GameRenderer(this, container, transferMode);
            this.renderer.changeScene(this.currentScene);
        }
        this.keyboardHandler();
        this.pointHandler();
        if(document.getElementById("fps_show")) {
            this.fps = document.getElementById("fps_show");
        }
        this.main();
    }
    Game.prototype.getWindowSize = function () {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        };
    };
    Game.prototype.fitToWindow = function (no_center) {
        var elem = this.renderer.container.parentElement;
        elem.style.margin = "0";
        elem.style.padding = "0";
        elem.style.overflow = "hidden";
        this.renderer.container.style.margin = "0";
        this.renderer.container.style.padding = "0";
        var size = this.getWindowSize();
        this.renderer.container.style.width = size.width + "px";
        this.renderer.container.style.height = size.height + "px";
        this.scale = Math.min(size.width / this.width, size.height / this.height);
        var size2 = {
            width: Math.floor(this.width * this.scale),
            height: Math.floor(this.height * this.scale)
        };
        this.renderer.changeFrontCanvasSize(size2, no_center ? undefined : {
            x: Math.floor((size.width - size2.width) / 2),
            y: Math.floor((size.height - size2.height) / 2)
        });
    };
    Game.prototype.setBgColor = function (r, g, b, a) {
        for(var i = 0; i < this.renderer.bg.data.length; i += 4) {
            this.renderer.bg.data[i] = r;
            this.renderer.bg.data[i + 1] = g;
            this.renderer.bg.data[i + 2] = b;
            this.renderer.bg.data[i + 3] = a;
        }
    };
    Game.prototype.refresh = function () {
        if(document.addEventListener) {
            if(this.isTouchEnable()) {
                this.renderer.handler.removeEventListener("mousedown", this.onmousedown, false);
                this.renderer.handler.removeEventListener("mousemove", this.onmousemove, false);
                this.renderer.handler.removeEventListener("mouseup", this.onmouseup, false);
            } else {
                this.renderer.handler.removeEventListener("mousedown", this.onmousedown, false);
                this.renderer.handler.removeEventListener("mousemove", this.onmousemove, false);
                this.renderer.handler.removeEventListener("mouseup", this.onmouseup, false);
            }
        } else {
            if(this.isTouchEnable()) {
                this.renderer.handler.detachEvent("onmousedown", this.onmousedown);
                this.renderer.handler.detachEvent("onmousemove", this.onmousemove);
                this.renderer.handler.detachEvent("onmouseup", this.onmouseup);
            } else {
                this.renderer.handler.detachEvent("onmousedown", this.onmousedown);
                this.renderer.handler.detachEvent("onmousemove", this.onmousemove);
                this.renderer.handler.detachEvent("onmouseup", this.onmouseup);
            }
        }
        this.renderer.refresh();
        for(var i = 0; i < this.scenes.length; i++) {
            this.scenes[i].refresh();
        }
        this.pointHandler();
    };
    Game.prototype.isTouchEnable = function () {
        var div = document.createElement('div');
        div.setAttribute('ontouchstart', 'return');
        return typeof div.ontouchstart === 'function';
    };
    Game.prototype.pointHandler = function () {
        var _this = this;
        var dragParam = null;
        this.onmousedown = function (e) {
            var layers = _this.currentScene.getLayerArray();
            var layer;
            var offset = {
                x: _this.scale ? e.offsetX / _this.scale : e.offsetX,
                y: _this.scale ? e.offsetY / _this.scale : e.offsetY
            };
            while(layer = layers.pop()) {
                if(!layer.pointCapture) {
                    continue;
                }
                var dragObj = layer.getEntityByPoint(offset);
                if(!dragObj) {
                    dragObj = layer;
                }
                dragParam = new InputPointEvent(e, dragObj, _this.scale);
                _this.inputDown.fire(dragParam);
                if(dragObj.inputDown) {
                    dragObj.inputDown.fire(dragParam);
                }
                break;
            }
            e.preventDefault();
        };
        this.onmousemove = function (e) {
            if(!dragParam) {
                return;
            }
            var param = new InputPointEvent(e, dragParam.entity, _this.scale);
            if(dragParam.entity.inputMove) {
                dragParam.entity.inputMove.fire(param);
            }
            _this.inputMove.fire(param);
            e.preventDefault();
        };
        this.onmouseup = function (e) {
            if(!dragParam) {
                return;
            }
            var param = new InputPointEvent(e, dragParam.entity, _this.scale);
            if(dragParam.entity.inputUp) {
                dragParam.entity.inputUp.fire(param);
            }
            _this.inputUp.fire(param);
            dragParam = null;
            e.preventDefault();
        };
        if(document.addEventListener) {
            if(this.isTouchEnable()) {
                this.renderer.handler.addEventListener("mousedown", this.onmousedown, false);
                this.renderer.handler.addEventListener("mousemove", this.onmousemove, false);
                this.renderer.handler.addEventListener("mouseup", this.onmouseup, false);
            } else {
                this.renderer.handler.addEventListener("mousedown", this.onmousedown, false);
                this.renderer.handler.addEventListener("mousemove", this.onmousemove, false);
                this.renderer.handler.addEventListener("mouseup", this.onmouseup, false);
            }
        } else {
            if(this.isTouchEnable()) {
                this.renderer.handler.attachEvent("onmousedown", onmousedown);
                this.renderer.handler.attachEvent("onmousemove", onmousemove);
                this.renderer.handler.attachEvent("onmouseup", onmouseup);
            } else {
                this.renderer.handler.attachEvent("onmousedown", onmousedown);
                this.renderer.handler.attachEvent("onmousemove", onmousemove);
                this.renderer.handler.attachEvent("onmouseup", onmouseup);
            }
        }
    };
    Game.prototype.keyboardHandler = function () {
        var _this = this;
        this.keymap = {
            13: Keytype.enter,
            27: Keytype.esc,
            37: Keytype.left,
            38: Keytype.up,
            39: Keytype.right,
            40: Keytype.down
        };
        var onkeydown = function (e) {
            _this.inputDown.fire(new InputKeyboardEvent(_this.keymap[e.keyCode], e));
            if(_this.keymap[e.keyCode] != undefined) {
                e.preventDefault();
            }
        };
        var onkeyup = function (e) {
            _this.inputUp.fire(new InputKeyboardEvent(_this.keymap[e.keyCode], e));
            if(_this.keymap[e.keyCode] != undefined) {
                e.preventDefault();
            }
        };
        if(document.addEventListener) {
            document.addEventListener("keydown", onkeydown, false);
            document.addEventListener("keyup", onkeyup, false);
        } else {
            document.attachEvent("onkeydown", onkeydown);
            document.attachEvent("onkeyup", onkeyup);
        }
    };
    Game.prototype.addTimer = function (wait, owner, handler) {
        var timer = null;
        for(var i = 0; i < this.timers.length; i++) {
            if(this.timers[i].wait == wait) {
                timer = this.timers[i];
                break;
            }
        }
        if(timer == null) {
            timer = new GameTimer(wait);
            this.timers.push(timer);
        }
        timer.trigger.handle(owner, handler);
    };
    Game.prototype.removeTimer = function (wait, owner, handler) {
        var timer = null;
        for(var i = 0; i < this.timers.length; i++) {
            if(this.timers[i].wait == wait) {
                timer = this.timers[i];
                break;
            }
        }
        if(timer == null) {
            throw "error removeTimer: dont have " + wait + " timer";
        }
        timer.trigger.remove(owner, handler);
    };
    Game.prototype.removeTimerAll = function (owner) {
        for(var i = 0; i < this.timers.length; i++) {
            this.timers[i].trigger.removeAll(owner);
        }
    };
    Game.prototype.exit = function () {
        this._exit = true;
    };
    Game.prototype.changeScene = function (scene) {
        this.scenes.push(scene);
        scene.game = this;
        this.currentScene.hid.fire();
        this.currentScene = scene;
        this.renderer.changeScene(this.currentScene);
        this.currentScene.started.fire();
    };
    Game.prototype.endScene = function () {
        if(this.scenes.length == 1) {
            this.exit();
            return;
        }
        this.currentScene.destroy();
        this.scenes.pop();
        this.currentScene.ended.fire();
        this.currentScene = this.scenes[this.scenes.length - 1];
        this.renderer.changeScene(this.currentScene);
        this.currentScene.showed.fire();
    };
    Game.prototype.r = function (name) {
        return this.resource.get(name);
    };
    Game.prototype.preloadArray = function (ary, loadingScene) {
        var param = {
        };
        for(var i = 0; i < ary.length; i++) {
            param[ary[i]] = ary[i];
        }
        this.preload(param);
    };
    Game.prototype.preload = function (ary, loadingScene) {
        if(ary instanceof Array) {
            for(var i = 0; i < ary.length; i++) {
                this.resource.load(ary[i], ary[i]);
            }
        } else if(typeof ary == "string") {
            var hasLoadingScene = false;
            for(var i = 0; i < arguments.length; i++) {
                if(typeof arguments[i] != "string") {
                    loadingScene = arguments[i];
                    hasLoadingScene = true;
                } else {
                    this.resource.load(arguments[i], arguments[i]);
                }
            }
            if(!hasLoadingScene) {
                loadingScene = new LoadingScene(this, this.resource);
            }
        } else {
            for(var i in ary) {
                this.resource.load(i, ary[i]);
            }
        }
        if(!loadingScene) {
            loadingScene = new LoadingScene(this, this.resource);
        }
        this.changeScene(loadingScene);
        this.resource.loaded.handle(this, this.preloadComplete);
    };
    Game.prototype.preloadComplete = function (cnt) {
        if(cnt == 0) {
            this.loaded.fire();
            this.resource.loaded.remove(this, this.preloadComplete);
        }
    };
    Game.prototype.end = function () {
        this.renderer.render();
        this._exit = true;
    };
    Game.prototype.main = function () {
        var _this = this;
        var fps_stack = new Array();
        var _main = function () {
            var t = window.getTime();
            if(_this.tick > (t + 10000) || (_this.tick + 10000) < t) {
                _this.tick = t - 1;
                _this.renderTick = t - _this.targetFps;
                if(_this.enterFrame) {
                    _this.enterFrameTick = t - 1;
                }
                _this.refresh();
            }
            if(_this.tick < t) {
                _this.update.fire(t - _this.tick);
                _this.tick = t;
            }
            if(_this.enterFrame) {
                if(!_this.enterFrameTick) {
                    _this.enterFrameTick = t - 1;
                }
                while((_this.enterFrameTick + 16) < t) {
                    _this.enterFrameTick += 16;
                    _this.enterFrame.fire();
                }
            }
            for(var i = 0; i < _this.timers.length; i++) {
                _this.timers[i].tryFire(t);
            }
            if(_this.targetFps == 0 || _this.renderTick <= t) {
                if(_this.render) {
                    _this.render.fire();
                }
                _this.renderer.render();
                if(_this.targetFps) {
                    _this.renderTick = t + _this.targetFps;
                }
                if(_this.fps) {
                    if(fps_stack.length == 19) {
                        _this.fps.innerHTML = Math.round(20000 / (t - fps_stack[0])).toString();
                        fps_stack = [];
                    } else {
                        fps_stack.push(t);
                    }
                }
            }
            if(!_this._exit) {
                window.requestAnimationFrame(_main);
            }
        };
        this.tick = window.getTime();
        this.renderTick = this.tick - this.targetFps;
        window.requestAnimationFrame(_main);
    };
    return Game;
})();
;
var FrameGame = (function (_super) {
    __extends(FrameGame, _super);
    function FrameGame(width, height, fps) {
        _super.call(this, width, height);
        this._fps = fps;
        this.targetFps = Math.floor(1000 / this._fps);
        Timeline.prototype.isFrameBased = true;
    }
    FrameGame.prototype.main = function () {
        var _this = this;
        var fps_stack = new Array();
        var _main = function () {
            var t = window.getTime();
            if(_this.tick > (t + 10000) || (_this.tick + 10000) < t) {
                _this.tick = t - 1;
                _this.renderTick = t - _this.targetFps;
                _this.refresh();
            }
            for(var i = 0; i < _this.timers.length; i++) {
                _this.timers[i].tryFire(t);
            }
            if((_this.renderTick + _this.targetFps) <= t) {
                if(_this.fps) {
                    fps_stack.push(t);
                    if(fps_stack.length == 20) {
                        _this.fps.innerHTML = Math.round(20000 / (t - fps_stack[0])).toString();
                        fps_stack = [];
                    }
                }
                if(_this.enterFrame) {
                    _this.enterFrame.fire();
                }
                _this.update.fire(t - _this.tick);
                _this.tick = t;
                if(_this.render) {
                    _this.render.fire();
                }
                _this.renderer.render();
                _this.renderTick = t;
            }
            if(!_this._exit) {
                window.requestAnimationFrame(_main);
            }
        };
        this.tick = window.getTime();
        this.renderTick = this.tick - this.targetFps;
        window.requestAnimationFrame(_main);
    };
    return FrameGame;
})(Game);
var Action = (function () {
    function Action(param) {
        this.added_to_timeline = new Trigger();
        this.removed_from_timeline = new Trigger();
        this.action_tick = new Trigger();
        this.time = null;
        this.frame = 0;
        if(param) {
            for(var key in param) {
                if(param.hasOwnProperty(key)) {
                    if(param[key] != null) {
                        this[key] = param[key];
                    }
                }
            }
        }
        var action = this;
        this.timeline = null;
        this.entity = null;
        this.removed_from_timeline.handle(this, this.removedFromTimeline);
        this.added_to_timeline.handle(this, this.addedToTimeline);
        this.action_tick.handle(this, this.actionTick);
    }
    Action.prototype.removedFromTimeline = function () {
        this.timeline = null;
        this.entity = null;
        this.frame = 0;
    };
    Action.prototype.addedToTimeline = function (p) {
        this.timeline = p.timeline;
        this.entity = p.timeline.entity;
        this.frame = 0;
    };
    Action.prototype.actionTick = function (p) {
        var remaining = this.time - (this.frame + p.elapsed);
        if(this.time != null && remaining <= 0) {
            this.frame = this.time;
            p.timeline.next(-remaining);
        } else {
            this.frame += p.elapsed;
        }
    };
    return Action;
})();
var ParallelAction = (function (_super) {
    __extends(ParallelAction, _super);
    function ParallelAction(param) {
        _super.call(this, param);
        this.actions = new Array();
        this.endedActions = new Array();
        this.action_start = new Trigger();
        this.action_start.handle(this, this.parallelActionStart);
    }
    ParallelAction.prototype.addedToTimeline = function (p) {
        _super.prototype.addedToTimeline.call(this, p);
        for(var i = 0, len = this.actions.length; i < len; i++) {
            this.actions[i].added_to_timeline.fire(p);
        }
    };
    ParallelAction.prototype.removedFromTimeline = function () {
        _super.prototype.removedFromTimeline.call(this);
        this.actions = this.endedActions;
        this.endedActions = [];
    };
    ParallelAction.prototype.actionTick = function (evt) {
        _super.prototype.actionTick.call(this, evt);
        var self = this;
        var i, len, timeline = {
            next: function (remaining) {
                var action = self.actions[i];
                self.actions.splice(i--, 1);
                len = self.actions.length;
                self.endedActions.push(action);
                if(action.action_end) {
                    action.action_end.fire({
                        timeline: this
                    });
                }
                action.removed_from_timeline.fire({
                    timeline: this
                });
            }
        };
        var e = {
            timeline: timeline,
            elapsed: evt.elapsed
        };
        for(i = 0 , len = this.actions.length; i < len; i++) {
            this.actions[i].action_tick.fire(e);
        }
        if(this.actions.length === 0) {
            evt.timeline.next();
        }
    };
    ParallelAction.prototype.parallelActionStart = function (e) {
        for(var i = 0, len = this.actions.length; i < len; i++) {
            if(this.actions[i].action_start) {
                this.actions[i].action_start.fire(e);
            }
        }
    };
    return ParallelAction;
})(Action);
var TWEEN_DRAW_OPTION_SETTERS = {
};
for(var p in ENTITY_OPTIONS_DEFAULT_VALUES) {
    if(typeof ENTITY_OPTIONS_DEFAULT_VALUES[p] == "object") {
        if(p == "translate") {
            TWEEN_DRAW_OPTION_SETTERS[p] = function (entity, name, old, target, origin, ratio) {
                var ret = {
                    x: old.x + (target.x - origin.x) * ratio,
                    y: old.y + (target.y - origin.y) * ratio
                };
                entity.setDrawOption(name, ret);
                return ret;
            };
        } else if(p == "transform") {
            TWEEN_DRAW_OPTION_SETTERS[p] = function (entity, name, old, target, origin, ratio) {
                throw "unsupported transform tween";
            };
        } else if(p == "scale") {
            TWEEN_DRAW_OPTION_SETTERS[p] = function (entity, name, old, target, origin, ratio) {
                var ret = {
                    x: old.x + (target.x - origin.x) * ratio,
                    y: old.y + (target.y - origin.y) * ratio
                };
                entity.setDrawOption(name, ret);
                return ret;
            };
        }
    } else {
        TWEEN_DRAW_OPTION_SETTERS[p] = function (entity, name, old, target, origin, ratio) {
            var ret = old + (target - origin) * ratio;
            if(Math.abs(ret) < 1e-7) {
                ret = 0;
            }
            entity.setDrawOption(name, ret);
            return ret;
        };
    }
}
var Tween = (function (_super) {
    __extends(Tween, _super);
    function Tween(params) {
        _super.call(this, params);
        this.origin = {
        };
        this.target = {
        };
        this.old = {
        };
        this.props = {
        };
        var excepted = [
            "frame", 
            "easing", 
            "time", 
            "callback", 
            "onactiontick", 
            "onactionstart", 
            "onactionend"
        ];
        for(var p in params) {
            if(excepted.indexOf(p) === -1) {
                this.props[p] = params[p];
            }
        }
        if(this.easing == null) {
            this.easing = function (t, b, c, d) {
                return c * t / d + b;
            };
        }
        this.action_start = new Trigger();
        this.action_start.handle(this, this.actionStart);
        this.action_tick.handleInsert(0, this, this.tweenActionTick);
    }
    Tween.prototype.actionStart = function (e) {
        for(var prop in this.props) {
            var target_val;
            if(typeof this.props[prop] === "function") {
                target_val = this.props[prop].call(this.entity);
            } else {
                target_val = this.props[prop];
            }
            this.target[prop] = target_val;
            if(TWEEN_DRAW_OPTION_SETTERS[prop]) {
                this.origin[prop] = this.entity.getDrawOption(prop);
            } else {
                this.origin[prop] = this.entity[prop];
            }
            this.old[prop] = this.origin[prop];
        }
    };
    Tween.prototype.tweenActionTick = function (e) {
        var ratio = this.time === 0 ? 1 : this.easing(Math.min(this.time, this.frame + e.elapsed), 0, 1, this.time) - this.easing(this.frame, 0, 1, this.time);
        for(var prop in this.target) {
            if(typeof this[prop] === "undefined") {
                continue;
            }
            if(TWEEN_DRAW_OPTION_SETTERS[prop]) {
                var f = TWEEN_DRAW_OPTION_SETTERS[prop];
                this.old[prop] = f(this.entity, prop, this.old[prop], this.target[prop], this.origin[prop], ratio);
            } else {
                this.entity[prop] = this.old[prop] + (this.target[prop] - this.origin[prop]) * ratio;
                if(Math.abs(this.entity[prop]) < 1e-7) {
                    this.entity[prop] = 0;
                }
                this.old[prop] = this.entity[prop];
            }
        }
        this.entity.updated();
    };
    return Tween;
})(Action);
var Timeline = (function () {
    function Timeline(entity) {
        this.entity = entity;
        this.queue = new Array();
        this.paused = false;
        this.looped = false;
        this._parallel = null;
        this._activated = false;
    }
    Timeline.prototype._deactivateTimeline = function (force) {
        var _this = this;
        if(force || this._activated) {
            this._activated = false;
            if(this.entity.scene) {
                this.entity.scene.game.update.remove(this, this.tick);
            } else {
                this.entity.addActiveQueue(function () {
                    _this.entity.scene.game.update.remove(_this, _this.tick);
                });
            }
        }
    };
    Timeline.prototype._activateTimeline = function (force) {
        var _this = this;
        if(force || (!this._activated && !this.paused)) {
            if(this.entity.scene) {
                this.entity.scene.game.update.handle(this, this.tick);
            } else {
                this.entity.addActiveQueue(function () {
                    _this.entity.scene.game.update.handle(_this, _this.tick);
                });
            }
            this._activated = true;
        }
    };
    Timeline.prototype.setFrameBased = function () {
        this.isFrameBased = true;
    };
    Timeline.prototype.setTimeBased = function () {
        this.isFrameBased = false;
    };
    Timeline.prototype.next = function (remainingTime) {
        var action = this.queue.shift();
        if(!action) {
            return;
        }
        if(action.action_end) {
            action.action_end.fire({
                timeline: this
            });
        }
        if(this.queue.length === 0 && !this.looped) {
            this._deactivateTimeline(true);
            return;
        }
        if(this.looped) {
            action.removed_from_timeline.fire({
                timeline: this
            });
            action.frame = 0;
            this.add(action);
        } else {
            action.removed_from_timeline.fire({
                timeline: this
            });
        }
        if(remainingTime > 0 || (this.queue[0] && this.queue[0].time === 0)) {
            this.tick(remainingTime);
        }
    };
    Timeline.prototype.tick = function (t) {
        if(this.paused) {
            return;
        }
        if(this.queue.length > 0) {
            var action = this.queue[0];
            if(action.frame === 0) {
                if(action.action_start) {
                    action.action_start.fire({
                        timeline: this
                    });
                }
            }
            action.action_tick.fire({
                timeline: this,
                elapsed: (this.isFrameBased) ? 1 : t
            });
        }
    };
    Timeline.prototype.add = function (action) {
        if(!this._activated) {
            this._activateTimeline(true);
        }
        if(this._parallel) {
            this._parallel.actions.push(action);
            this._parallel = null;
        } else {
            this.queue.push(action);
        }
        action.frame = 0;
        action.added_to_timeline.fire({
            timeline: this
        });
        return this;
    };
    Timeline.prototype.action = function (params) {
        return this.add(new Action(params));
    };
    Timeline.prototype.tween = function (params) {
        return this.add(new Tween(params));
    };
    Timeline.prototype.clear = function () {
        for(var i = 0, len = this.queue.length; i < len; i++) {
            this.queue[i].removed_from_timeline.fire({
                timeline: this
            });
        }
        this.queue = [];
        this._deactivateTimeline();
        return this;
    };
    Timeline.prototype.skip = function (frames) {
        var e = {
        };
        if(this.isFrameBased) {
            e.elapsed = 1;
        } else {
            e.elapsed = frames;
            frames = 1;
        }
        while(frames--) {
            this.tick(e);
        }
        return this;
    };
    Timeline.prototype.pause = function () {
        if(!this.paused) {
            this.paused = true;
            this._deactivateTimeline();
        }
        return this;
    };
    Timeline.prototype.resume = function () {
        if(this.paused) {
            this.paused = false;
            this._activateTimeline();
        }
        return this;
    };
    Timeline.prototype.loop = function () {
        this.looped = true;
        return this;
    };
    Timeline.prototype.unloop = function () {
        this.looped = false;
        return this;
    };
    Timeline.prototype.delay = function (time) {
        this.add(new Action({
            time: time
        }));
        return this;
    };
    Timeline.prototype.then = function (func) {
        var _this = this;
        var action = new Action({
            time: 0
        });
        action.action_tick.handleInsert(0, action, function (e) {
            func.call(_this.entity, e);
        });
        this.add(action);
        return this;
    };
    Timeline.prototype.exec = function (func) {
        this.then(func);
    };
    Timeline.prototype.frame = function (wait, frame) {
        var s = this.entity;
        if(frame == undefined) {
            this.then(function () {
                s.frame = wait;
            });
        } else {
            this.delay(wait).then(function () {
                s.frame = frame;
            });
        }
        return this;
    };
    Timeline.prototype.fno = function (wait, fno) {
        var s = this.entity;
        if(fno == undefined) {
            this.then(function () {
                s.fno = wait;
            });
        } else {
            this.delay(wait).then(function () {
                s.fno = fno;
            });
        }
        return this;
    };
    Timeline.prototype.cue = function (cue) {
        var ptr = 0;
        for(var frame in cue) {
            var f = parseInt(frame);
            if(cue.hasOwnProperty(frame)) {
                this.delay(f - ptr);
                this.then(cue[frame]);
                ptr = f;
            }
        }
    };
    Timeline.prototype.repeat = function (func, time) {
        var action = new Action({
            time: time
        });
        action.action_tick.handle(action, function (e) {
            func.call(action, e);
        });
        return this;
    };
    Timeline.prototype.and = function () {
        var last = this.queue.pop();
        if(last instanceof ParallelAction) {
            this._parallel = last;
            this.queue.push(last);
        } else {
            var parallel = new ParallelAction();
            parallel.actions.push(last);
            this.queue.push(parallel);
            this._parallel = parallel;
        }
        return this;
    };
    Timeline.prototype.waitUntil = function (func) {
        var _this = this;
        var action = new Action();
        action.action_start = new Trigger();
        action.action_tick.handle(action, function (e) {
            if(func.call(action, e)) {
                _this.next(0);
            }
        });
        this.add(action);
        return this;
    };
    Timeline.prototype.moveTo = function (x, y, time, easing) {
        return this.tween({
            x: x,
            y: y,
            time: time,
            easing: easing
        });
    };
    Timeline.prototype.moveX = function (x, time, easing) {
        return this.tween({
            x: x,
            time: time,
            easing: easing
        });
    };
    Timeline.prototype.moveY = function (y, time, easing) {
        return this.tween({
            y: y,
            time: time,
            easing: easing
        });
    };
    Timeline.prototype.moveBy = function (x, y, time, easing) {
        return this.tween({
            x: function () {
                return this.x + x;
            },
            y: function () {
                return this.y + y;
            },
            time: time,
            easing: easing
        });
    };
    Timeline.prototype.fadeTo = function (opacity, time, easing) {
        this.tween({
            globalAlpha: opacity,
            time: time,
            easing: easing
        });
        return this;
    };
    Timeline.prototype.fadeIn = function (time, easing) {
        return this.fadeTo(1, time, easing);
    };
    Timeline.prototype.fadeOut = function (time, easing) {
        return this.fadeTo(0, time, easing);
    };
    Timeline.prototype.hide = function () {
        return this.then(function () {
            this.setDrawOption("globalAlpha", 0);
        });
    };
    Timeline.prototype.show = function () {
        return this.then(function () {
            this.setDrawOption("globalAlpha", 1);
        });
    };
    Timeline.prototype.resizeTo = function (size, time, easing) {
        if(typeof easing === "number") {
            return this.tween({
                width: arguments[0],
                height: arguments[1],
                time: arguments[2],
                easing: arguments[3]
            });
        }
        return this.tween({
            width: size,
            height: size,
            time: time,
            easing: easing
        });
    };
    Timeline.prototype.resizeBy = function (size, time, easing) {
        if(typeof easing === "number") {
            return this.tween({
                width: function () {
                    return this.width + arguments[0];
                },
                height: function () {
                    return this.height + arguments[1];
                },
                time: arguments[2],
                easing: arguments[3]
            });
        }
        return this.tween({
            width: function () {
                return this.width + size;
            },
            height: function () {
                return this.height + size;
            },
            time: time,
            easing: easing
        });
    };
    Timeline.prototype.scaleTo = function (scale, time, easing) {
        if(typeof easing === "number") {
            return this.tween({
                scale: {
                    x: arguments[0],
                    y: arguments[1]
                },
                time: arguments[2],
                easing: arguments[3]
            });
        }
        return this.tween({
            scale: {
                x: scale,
                y: scale
            },
            time: time,
            easing: easing
        });
    };
    Timeline.prototype.scaleBy = function (scale, time, easing) {
        if(typeof easing === "number") {
            return this.tween({
                scale: function () {
                    var _scale = this.getDrawOption("scale");
                    return {
                        x: _scale.x * arguments[0],
                        y: _scale.y * arguments[1]
                    };
                },
                time: arguments[2],
                easing: arguments[3]
            });
        }
        return this.tween({
            scale: function () {
                var _scale = this.getDrawOption("scale");
                return {
                    x: _scale.x * scale,
                    y: _scale.y * scale
                };
            },
            time: time,
            easing: easing
        });
    };
    Timeline.prototype.rotateTo = function (deg, time, easing) {
        return this.tween({
            rotate: deg,
            time: time,
            easing: easing
        });
    };
    Timeline.prototype.rotateBy = function (deg, time, easing) {
        return this.tween({
            rotate: function () {
                return this.getDrawOption("rotate") + deg;
            },
            time: time,
            easing: easing
        });
    };
    Timeline.prototype.removeFromScene = function () {
        return this.then(function () {
            this.remove();
        });
    };
    return Timeline;
})();
Timeline.prototype.isFrameBased = false;
var JGUtil = (function () {
    function JGUtil() { }
    JGUtil.getCenterPoint = function getCenterPoint(p) {
        var a = p;
        if(a.width && a.height) {
            return {
                x: p.x + a.width / 2,
                y: p.y + a.height / 2
            };
        }
        return p;
    };
    JGUtil.getMargin = function getMargin(p) {
        var a = p;
        if(a.width && a.height) {
            return {
                x: a.width / 2,
                y: a.height / 2
            };
        }
        return {
            x: 0,
            y: 0
        };
    };
    JGUtil.intersect = function intersect(p1, p2) {
        var a1 = p1;
        var a2 = p2;
        if(a1.width && a1.height) {
            if(a2.width && a2.height) {
                return a1.x <= (a2.x + a2.width) && a2.x <= (a1.x + a1.width) && a1.y <= (a2.y + a2.height) && a2.y <= (a1.y + a1.height);
            } else {
                return a2.x >= a1.x && a2.x <= (a1.x + a1.width) && a2.y >= a1.y && a2.y <= (a1.y + a1.height);
            }
        } else if(a2.width && a2.height) {
            return a1.x >= a2.x && a1.x <= (a2.x + a2.width) && a1.y >= a2.y && a1.y <= (a2.y + a2.height);
        }
        return p1.x == p2.x && p1.y == p2.y;
    };
    JGUtil.getDistance = function getDistance(p1, p2) {
        var _p1 = JGUtil.getCenterPoint(p1);
        var _p2 = JGUtil.getCenterPoint(p2);
        return {
            x: Math.abs(_p1.x - _p2.x),
            y: Math.abs(_p1.y - _p2.y)
        };
    };
    JGUtil.getMovePoint = function getMovePoint(p1, p2, power, maxMove) {
        var _p1 = JGUtil.getCenterPoint(p1);
        var _p2 = JGUtil.getCenterPoint(p2);
        if(!power) {
            power = 1;
        }
        var ret = {
            x: (_p1.x - _p2.x) * power,
            y: (_p1.y - _p2.y) * power
        };
        var absx = Math.abs(ret.x);
        var absy = Math.abs(ret.y);
        var max = Math.max(absx, absy);
        var xper = absx / max;
        var yper = absy / max;
        if(maxMove) {
            if(absx > maxMove || absy > maxMove) {
                if(ret.x < 0) {
                    ret.x = -maxMove * xper;
                } else {
                    ret.x = maxMove * xper;
                }
                if(ret.y < 0) {
                    ret.y = -maxMove * yper;
                } else {
                    ret.y = maxMove * yper;
                }
            }
        }
        return ret;
    };
    JGUtil.getDirectionAngle = function getDirectionAngle(p1, p2, minDistance) {
        var _p1 = JGUtil.getCenterPoint(p1);
        var _p2 = JGUtil.getCenterPoint(p2);
        var xp = Math.abs(_p1.x - _p2.x);
        var yp = Math.abs(_p1.y - _p2.y);
        if(minDistance && Math.max(xp, yp) < minDistance) {
            return null;
        }
        if(xp > yp) {
            if(_p1.x > _p2.x) {
                return Angle.left;
            } else {
                return Angle.right;
            }
        } else {
            if(_p1.y > _p2.y) {
                return Angle.up;
            } else {
                return Angle.down;
            }
        }
    };
    JGUtil.getDirectionKeytype = function getDirectionKeytype(p1, p2, minDistance) {
        var _p1 = JGUtil.getCenterPoint(p1);
        var _p2 = JGUtil.getCenterPoint(p2);
        var xp = Math.abs(_p1.x - _p2.x);
        var yp = Math.abs(_p1.y - _p2.y);
        if(minDistance && Math.max(xp, yp) < minDistance) {
            return null;
        }
        if(xp > yp) {
            if(_p1.x > _p2.x) {
                return Keytype.left;
            } else {
                return Keytype.right;
            }
        } else {
            if(_p1.y > _p2.y) {
                return Keytype.up;
            } else {
                return Keytype.down;
            }
        }
    };
    JGUtil.homingX = function homingX(p1, p2, speed, t) {
        var m1 = JGUtil.getMargin(p1);
        var m2 = JGUtil.getMargin(p2);
        var x = p2.x + m2.x - m1.x;
        if(p1.x > x) {
            p1.x -= speed * t;
            if(p1.x < x) {
                p1.x = x;
                return true;
            }
            return false;
        } else if(p1.x < x) {
            p1.x += speed * t;
            if(p1.x > x) {
                p1.x = x;
                return true;
            }
            return false;
        }
        return true;
    };
    JGUtil.homingY = function homingY(p1, p2, speed, t) {
        var m1 = JGUtil.getMargin(p1);
        var m2 = JGUtil.getMargin(p2);
        var y = p2.y + m2.y - m1.y;
        if(p1.y > y) {
            p1.y -= speed * t;
            if(p1.y < y) {
                p1.y = y;
                return true;
            }
            return false;
        } else if(p1.y < y) {
            p1.y += speed * t;
            if(p1.y > y) {
                p1.y = y;
                return true;
            }
            return false;
        }
        return true;
    };
    JGUtil.homing = function homing(p1, p2, speed, t) {
        var m1 = JGUtil.getMargin(p1);
        var m2 = JGUtil.getMargin(p2);
        var p = {
            x: p2.x + m2.x - m1.x,
            y: p2.y + m2.y - m1.y
        };
        var xng, yng;
        if(p1.x > p.x) {
            p1.x -= speed * t;
            if(p1.x < p.x) {
                p1.x = p.x;
            } else {
                xng = true;
            }
        } else if(p1.x < p.x) {
            p1.x += speed * t;
            if(p1.x > p.x) {
                p1.x = p.x;
            } else {
                xng = true;
            }
        }
        if(p1.y > p.y) {
            p1.y -= speed * t;
            if(p1.y < p.y) {
                p1.y = p.y;
            } else {
                yng = true;
            }
        } else if(p1.y < p.y) {
            p1.y += speed * t;
            if(p1.y > p.y) {
                p1.y = p.y;
            } else {
                yng = true;
            }
        }
        return xng || yng ? false : true;
    };
    JGUtil.orderDrawY = function orderDrawY() {
        var e = this.entities, len = e.length;
        for(var i = 1; i < len; i++) {
            for(var j = i; j > 0; j--) {
                if(e[j].y >= e[j - 1].y) {
                    break;
                }
                var tmp = e[j];
                e[j] = e[j - 1];
                e[j - 1] = tmp;
            }
        }
    };
    JGUtil.createLinearGradient = function createLinearGradient(rect, colors, offsets) {
        var canvas = window.createCanvas(1, 1);
        var context = canvas.getContext("2d");
        if(typeof rect == "number") {
            rect = new Rectangle(arguments[0], arguments[1], arguments[2], arguments[3]);
            colors = arguments[4];
            offsets = arguments[5];
        }
        if(offsets == undefined) {
            offsets = [];
            var p = 1 / (colors.length - 1);
            for(var i = 0; i < colors.length; i++) {
                offsets.push(i * p);
            }
        }
        var gradient = context.createLinearGradient(rect.left, rect.top, rect.right, rect.bottom);
        for(var i = 0; i < colors.length; i++) {
            gradient.addColorStop(offsets[i], colors[i]);
        }
        return gradient;
    };
    JGUtil.createRadialGradient = function createRadialGradient(rect, radius1, radius2, colors, offsets) {
        var canvas = window.createCanvas(1, 1);
        var context = canvas.getContext("2d");
        if(typeof rect == "number") {
            rect = new Rectangle(arguments[0], arguments[1], arguments[2], arguments[3]);
            radius1 = arguments[4];
            radius2 = arguments[5];
            colors = arguments[6];
            offsets = arguments[7];
        }
        if(offsets == undefined) {
            offsets = [];
            var p = 1 / (colors.length - 1);
            for(var i = 0; i < colors.length; i++) {
                offsets.push(i * p);
            }
        }
        var gradient = context.createRadialGradient(rect.left, rect.top, radius1, rect.right, rect.bottom, radius2);
        for(var i = 0; i < colors.length; i++) {
            gradient.addColorStop(offsets[i], colors[i]);
        }
        return gradient;
    };
    JGUtil.createPattern = function createPattern(image, repeat) {
        var canvas = window.createCanvas(1, 1);
        var context = canvas.getContext("2d");
        return context.createPattern(image, repeat == undefined ? "repeat" : repeat);
    };
    JGUtil.getBrowser = function getBrowser() {
        if(JGUtil.browser) {
            return JGUtil.browser;
        }
        var ua = navigator.userAgent.toLowerCase();
        var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
        var ret = {
        };
        if(match[1]) {
            ret[match[1]] = true;
            ret["version"] = match[2];
        }
        if(ret.chrome) {
            ret.webkit = true;
        } else if(ret.webkit) {
            ret.safari = true;
        }
        JGUtil.browser = ret;
        return ret;
    };
    JGUtil.setCrispEdges = function setCrispEdges(game, crispEdges) {
        if(crispEdges) {
            window["imageSmoothingEnabled"] = crispEdges;
        } else {
            delete window["imageSmoothingEnabled"];
        }
        game.refresh();
    };
    return JGUtil;
})();
var Line = (function (_super) {
    __extends(Line, _super);
    function Line(pos, line, color, width) {
        _super.call(this);
        this.x = pos.x;
        this.y = pos.y;
        this.p = new Array();
        this.p.push({
            x: pos.x,
            y: pos.y
        });
        if(line) {
            this.p.push({
                x: line.x,
                y: line.y
            });
            this.updateSize();
        }
        if(color) {
            this.setColor(color);
        }
        if(width) {
            this.setLineWidth(width);
        }
    }
    Line.prototype.updateSize = function () {
        var min = {
            x: this.p[0].x,
            y: this.p[0].y
        };
        var max = {
            x: this.p[0].x,
            y: this.p[0].y
        };
        for(var i = 1; i < this.p.length; i++) {
            var x = this.p[0].x + this.p[i].x;
            var y = this.p[0].y + this.p[i].y;
            if(min.x > x) {
                min.x = x;
            } else if(max.x < x) {
                max.x = x;
            }
            if(min.y > y) {
                min.y = y;
            } else if(max.y < y) {
                max.y = y;
            }
        }
        this.width = max.x - min.x;
        this.height = max.y - min.y;
    };
    Line.prototype.setColor = function (color) {
        this.setDrawOption("strokeStyle", color);
        return this;
    };
    Line.prototype.getColor = function () {
        return this.getDrawOption("strokeStyle");
    };
    Line.prototype.setFillColor = function (color) {
        this.setDrawOption("fillStyle", color);
        return this;
    };
    Line.prototype.getFillColor = function () {
        return this.getDrawOption("fillStyle");
    };
    Line.prototype.setLineWidth = function (width) {
        this.setDrawOption("lineWidth", width);
        return this;
    };
    Line.prototype.getLineWidth = function () {
        return this.getDrawOption("lineWidth");
    };
    Line.prototype.setLineCap = function (lineCap) {
        this.setDrawOption("lineCap", lineCap);
        return this;
    };
    Line.prototype.getLineCap = function () {
        return this.getDrawOption("lineCap");
    };
    Line.prototype.setLineJoin = function (lineJoin) {
        this.setDrawOption("lineJoin", lineJoin);
        return this;
    };
    Line.prototype.getLineJoin = function () {
        return this.getDrawOption("lineJoin");
    };
    Line.prototype.setMiterLimit = function (miterLimit) {
        this.setDrawOption("miterLimit", miterLimit);
        return this;
    };
    Line.prototype.getMiterLimit = function () {
        return this.getDrawOption("miterLimit");
    };
    Line.prototype.setFill = function (fill, color, closePath, stroke) {
        this.fill = fill;
        this.setFillColor(color);
        if(closePath !== undefined) {
            this.closePath = closePath;
        }
        if(stroke !== undefined) {
            this.stroke = stroke;
        }
        return this;
    };
    Line.prototype.addLine = function (line, y) {
        if(arguments.length == 2) {
            line = {
                x: line,
                y: y
            };
        }
        this.p.push(line);
        this.updateSize();
        return this;
    };
    Line.prototype.addQuadraticLine = function (cp, p) {
        var qp;
        if(arguments.length == 4) {
            qp = {
                cp1x: arguments[0],
                cp1y: arguments[1],
                x: arguments[2],
                y: arguments[3]
            };
        } else if(arguments.length == 2) {
            qp = {
                cp1x: cp.x,
                cp1y: cp.y,
                x: p.x,
                y: p.y
            };
        } else {
            qp = cp;
        }
        this.p.push(qp);
        this.updateSize();
        return this;
    };
    Line.prototype.addBezierLine = function (cp1, cp2, p) {
        var bp;
        if(arguments.length == 6) {
            bp = {
                cp1x: arguments[0],
                cp1y: arguments[1],
                cp2x: arguments[2],
                cp2y: arguments[3],
                x: arguments[4],
                y: arguments[5]
            };
        } else if(arguments.length == 3) {
            bp = {
                cp1x: cp1.x,
                cp1y: cp1.y,
                cp2x: cp2.x,
                cp2y: cp2.y,
                x: p.x,
                y: p.y
            };
        } else {
            bp = cp1;
        }
        this.p.push(bp);
        this.updateSize();
        return this;
    };
    Line.prototype.addArc = function (p, p2, radius) {
        var ap;
        if(arguments.length == 5) {
            ap = {
                x: arguments[0],
                y: arguments[1],
                x2: arguments[2],
                y2: arguments[3],
                radius: arguments[4]
            };
        } else if(arguments.length == 3) {
            ap = {
                x: p.x,
                y: p.y,
                x2: p2.x,
                y2: p2.y,
                radius: radius
            };
        } else {
            ap = p;
        }
        this.p.push(ap);
        this.updateSize();
    };
    Line.prototype.add = function () {
        if(arguments.length == 1) {
            return this.addLine.apply(this, arguments);
        }
        if(arguments.length == 2) {
            return this.addQuadraticLine.apply(this, arguments);
        }
        if(arguments.length == 3) {
            return this.addBezierLine.apply(this, arguments);
        }
        throw "invalid arguments";
    };
    Line.prototype.draw = function (area, context) {
        context.beginPath();
        context.moveTo(0, 0);
        for(var i = 1; i < this.p.length; i++) {
            var p = this.p[i];
            if(p.cp2x !== undefined) {
                context.bezierCurveTo(p.cp1x, p.cp1y, p.cp2x, p.cp2y, p.x, p.y);
            } else if(p.cp1x !== undefined) {
                context.quadraticCurveTo(p.cp1x, p.cp1y, p.x, p.y);
            } else {
                if((this.p[i]).radius !== undefined) {
                    var ap = this.p[i];
                    context.arcTo(ap.x, ap.y, ap.x2, ap.y2, ap.radius);
                } else {
                    context.lineTo(p.x, p.y);
                }
            }
        }
        if(this.closePath) {
            context.closePath();
        }
        if(this.fill) {
            context.fill();
            if(this.stroke) {
                context.stroke();
            }
        } else {
            context.stroke();
        }
    };
    return Line;
})(E);
