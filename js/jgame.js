var jg;
(function (jg) {
    (function (Angle) {
        Angle[Angle["Unknown"] = 0] = "Unknown";
        Angle[Angle["Left"] = 1] = "Left";
        Angle[Angle["Right"] = 2] = "Right";
        Angle[Angle["Up"] = 3] = "Up";
        Angle[Angle["Down"] = 4] = "Down";
    })(jg.Angle || (jg.Angle = {}));
    var Angle = jg.Angle;

    (function (RenderTransferMode) {
        RenderTransferMode[RenderTransferMode["Unknown"] = 0] = "Unknown";
        RenderTransferMode[RenderTransferMode["Transfer"] = 1] = "Transfer";
        RenderTransferMode[RenderTransferMode["Flip"] = 2] = "Flip";
        RenderTransferMode[RenderTransferMode["Direct"] = 3] = "Direct";
    })(jg.RenderTransferMode || (jg.RenderTransferMode = {}));
    var RenderTransferMode = jg.RenderTransferMode;

    (function (InputEventType) {
        InputEventType[InputEventType["Unknown"] = 0] = "Unknown";
        InputEventType[InputEventType["Keyboard"] = 1] = "Keyboard";
        InputEventType[InputEventType["Point"] = 2] = "Point";
    })(jg.InputEventType || (jg.InputEventType = {}));
    var InputEventType = jg.InputEventType;

    (function (InputEventAction) {
        InputEventAction[InputEventAction["Unknown"] = 0] = "Unknown";
        InputEventAction[InputEventAction["Down"] = 1] = "Down";
        InputEventAction[InputEventAction["Move"] = 2] = "Move";
        InputEventAction[InputEventAction["Up"] = 3] = "Up";
    })(jg.InputEventAction || (jg.InputEventAction = {}));
    var InputEventAction = jg.InputEventAction;

    (function (Keytype) {
        Keytype[Keytype["Unknown"] = 0] = "Unknown";
        Keytype[Keytype["Left"] = 1] = "Left";
        Keytype[Keytype["Right"] = 2] = "Right";
        Keytype[Keytype["Up"] = 3] = "Up";
        Keytype[Keytype["Down"] = 4] = "Down";
        Keytype[Keytype["Enter"] = 5] = "Enter";
        Keytype[Keytype["Esc"] = 6] = "Esc";
    })(jg.Keytype || (jg.Keytype = {}));
    var Keytype = jg.Keytype;

    (function (ShapeStyle) {
        ShapeStyle[ShapeStyle["Unknown"] = 0] = "Unknown";

        ShapeStyle[ShapeStyle["Stroke"] = 1] = "Stroke";

        ShapeStyle[ShapeStyle["Fill"] = 2] = "Fill";
    })(jg.ShapeStyle || (jg.ShapeStyle = {}));
    var ShapeStyle = jg.ShapeStyle;

    (function (ShapeType) {
        ShapeType[ShapeType["Unknown"] = 0] = "Unknown";
        ShapeType[ShapeType["Rect"] = 1] = "Rect";
        ShapeType[ShapeType["Arc"] = 2] = "Arc";
    })(jg.ShapeType || (jg.ShapeType = {}));
    var ShapeType = jg.ShapeType;

    (function (EffectType) {
        EffectType[EffectType["None"] = 0] = "None";
        EffectType[EffectType["Fade"] = 1] = "Fade";
        EffectType[EffectType["Mosaic"] = 2] = "Mosaic";
        EffectType[EffectType["Blur"] = 3] = "Blur";
        EffectType[EffectType["SlideUp"] = 4] = "SlideUp";
        EffectType[EffectType["SlideDown"] = 5] = "SlideDown";
        EffectType[EffectType["SlideLeft"] = 6] = "SlideLeft";
        EffectType[EffectType["SlideRight"] = 7] = "SlideRight";
        EffectType[EffectType["WipeUp"] = 8] = "WipeUp";
        EffectType[EffectType["WipeDown"] = 9] = "WipeDown";
        EffectType[EffectType["WipeLeft"] = 10] = "WipeLeft";
        EffectType[EffectType["WipeRight"] = 11] = "WipeRight";
        EffectType[EffectType["WipeFadeUp"] = 12] = "WipeFadeUp";
        EffectType[EffectType["WipeFadeDown"] = 13] = "WipeFadeDown";
        EffectType[EffectType["WipeFadeLeft"] = 14] = "WipeFadeLeft";
        EffectType[EffectType["WipeFadeRight"] = 15] = "WipeFadeRight";
        EffectType[EffectType["BoxOut"] = 16] = "BoxOut";
        EffectType[EffectType["BoxOut45"] = 17] = "BoxOut45";
        EffectType[EffectType["BoxIn"] = 18] = "BoxIn";
        EffectType[EffectType["BoxIn45"] = 19] = "BoxIn45";
        EffectType[EffectType["ArcOut"] = 20] = "ArcOut";
        EffectType[EffectType["ArcIn"] = 21] = "ArcIn";
        EffectType[EffectType["BoxOutBlack"] = 22] = "BoxOutBlack";
        EffectType[EffectType["BoxOut45Black"] = 23] = "BoxOut45Black";
        EffectType[EffectType["BoxInBlack"] = 24] = "BoxInBlack";
        EffectType[EffectType["BoxIn45Black"] = 25] = "BoxIn45Black";
        EffectType[EffectType["ArcOutBlack"] = 26] = "ArcOutBlack";
        EffectType[EffectType["ArcInBlack"] = 27] = "ArcInBlack";
        EffectType[EffectType["BoxOutWhite"] = 28] = "BoxOutWhite";
        EffectType[EffectType["BoxOut45White"] = 29] = "BoxOut45White";
        EffectType[EffectType["BoxInWhite"] = 30] = "BoxInWhite";
        EffectType[EffectType["BoxIn45White"] = 31] = "BoxIn45White";
        EffectType[EffectType["ArcOutWhite"] = 32] = "ArcOutWhite";
        EffectType[EffectType["ArcInWhite"] = 33] = "ArcInWhite";
    })(jg.EffectType || (jg.EffectType = {}));
    var EffectType = jg.EffectType;
})(jg || (jg = {}));
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = window["mozRequestAnimationFrame"] || window["webkitRequestAnimationFrame"] || window["msRequestAnimationFrame"] || ((function () {
        var lastTime = Date.now ? Date.now() : new Date().getTime();
        var frame = 1000 / 60;
        return function (func) {
            var currentTime = Date.now ? Date.now() : new Date().getTime();
            var _id = setTimeout(function () {
                func(Date.now ? Date.now() : new Date().getTime());
            }, Math.max(0, lastTime + frame - currentTime));
            lastTime = currentTime;
            return _id;
        };
    })());
}

window.createCanvas = function (width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    if ("imageSmoothingEnabled" in window) {
        var browser = jg.JGUtil.getBrowser();
        if (browser.opera) {
            canvas.style["imageRendering"] = "-o-crisp-edges";
        } else if (browser.msie) {
            canvas.style["msInterpolationMode"] = "nearest-neighbor";
        } else if (browser.safari) {
            canvas.style["imageRendering"] = "-webkit-optimize-contrast";
        }

        var context = canvas.getContext("2d");
        if (context["imageSmoothingEnabled"])
            context["imageSmoothingEnabled"] = false;
        if (context["webkitImageSmoothingEnabled"])
            context["webkitImageSmoothingEnabled"] = false;
        if (context["mozImageSmoothingEnabled"])
            context["mozImageSmoothingEnabled"] = false;
    }

    return canvas;
};
var jg;
(function (jg) {
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
            if (point.y < this.top)
                point.y = this.top;
else if (point.y > this.bottom)
                point.y = this.bottom;

            if (point.x < this.left)
                point.x = this.left;
else if (point.x > this.right)
                point.x = this.right;
        };

        Rectangle.prototype.width = function () {
            return Math.abs(this.right - this.left);
        };

        Rectangle.prototype.height = function () {
            return Math.abs(this.bottom - this.top);
        };
        return Rectangle;
    })();
    jg.Rectangle = Rectangle;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var Easing = (function () {
        function Easing() {
        }
        Easing.LINEAR = function (t, b, c, d) {
            return c * t / d + b;
        };

        Easing.SWING = function (t, b, c, d) {
            return c * (0.5 - Math.cos(((t / d) * Math.PI)) / 2) + b;
        };

        Easing.QUAD_EASEIN = function (t, b, c, d) {
            return c * (t /= d) * t + b;
        };

        Easing.QUAD_EASEOUT = function (t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        };

        Easing.QUAD_EASEINOUT = function (t, b, c, d) {
            if ((t /= d / 2) < 1) {
                return c / 2 * t * t + b;
            }
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        };

        Easing.CUBIC_EASEIN = function (t, b, c, d) {
            return c * (t /= d) * t * t + b;
        };

        Easing.CUBIC_EASEOUT = function (t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        };

        Easing.CUBIC_EASEINOUT = function (t, b, c, d) {
            if ((t /= d / 2) < 1) {
                return c / 2 * t * t * t + b;
            }
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        };

        Easing.QUART_EASEIN = function (t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        };

        Easing.QUART_EASEOUT = function (t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        };

        Easing.QUART_EASEINOUT = function (t, b, c, d) {
            if ((t /= d / 2) < 1) {
                return c / 2 * t * t * t * t + b;
            }
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        };

        Easing.QUINT_EASEIN = function (t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        };

        Easing.QUINT_EASEOUT = function (t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        };

        Easing.QUINT_EASEINOUT = function (t, b, c, d) {
            if ((t /= d / 2) < 1) {
                return c / 2 * t * t * t * t * t + b;
            }
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        };

        Easing.SIN_EASEIN = function (t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        };

        Easing.SIN_EASEOUT = function (t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        };

        Easing.SIN_EASEINOUT = function (t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        };

        Easing.CIRC_EASEIN = function (t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        };

        Easing.CIRC_EASEOUT = function (t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        };

        Easing.CIRC_EASEINOUT = function (t, b, c, d) {
            if ((t /= d / 2) < 1) {
                return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            }
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        };

        Easing.ELASTIC_EASEIN = function (t, b, c, d, a, p) {
            if (t === 0) {
                return b;
            }
            if ((t /= d) === 1) {
                return b + c;
            }

            if (!p) {
                p = d * 0.3;
            }

            var s;
            if (!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        };

        Easing.ELASTIC_EASEOUT = function (t, b, c, d, a, p) {
            if (t === 0) {
                return b;
            }
            if ((t /= d) === 1) {
                return b + c;
            }
            if (!p) {
                p = d * 0.3;
            }
            var s;
            if (!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
        };

        Easing.ELASTIC_EASEINOUT = function (t, b, c, d, a, p) {
            if (t === 0) {
                return b;
            }
            if ((t /= d / 2) === 2) {
                return b + c;
            }
            if (!p) {
                p = d * (0.3 * 1.5);
            }
            var s;
            if (!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            if (t < 1) {
                return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            }
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
        };

        Easing.BOUNCE_EASEOUT = function (t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
            }
        };

        Easing.BOUNCE_EASEIN = function (t, b, c, d) {
            return c - Easing.BOUNCE_EASEOUT(d - t, 0, c, d) + b;
        };

        Easing.BOUNCE_EASEINOUT = function (t, b, c, d) {
            if (t < d / 2) {
                return Easing.BOUNCE_EASEIN(t * 2, 0, c, d) * 0.5 + b;
            } else {
                return Easing.BOUNCE_EASEOUT(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
            }
        };

        Easing.BACK_EASEIN = function (t, b, c, d, s) {
            if (s === undefined) {
                s = 1.70158;
            }
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        };

        Easing.BACK_EASEOUT = function (t, b, c, d, s) {
            if (s === undefined) {
                s = 1.70158;
            }
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        };

        Easing.BACK_EASEINOUT = function (t, b, c, d, s) {
            if (s === undefined) {
                s = 1.70158;
            }
            if ((t /= d / 2) < 1) {
                return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            }
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        };

        Easing.EXPO_EASEIN = function (t, b, c, d) {
            return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        };

        Easing.EXPO_EASEOUT = function (t, b, c, d) {
            return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        };

        Easing.EXPO_EASEINOUT = function (t, b, c, d) {
            if (t === 0) {
                return b;
            }
            if (t === d) {
                return b + c;
            }
            if ((t /= d / 2) < 1) {
                return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            }
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        };
        return Easing;
    })();
    jg.Easing = Easing;
})(jg || (jg = {}));
var jg;
(function (jg) {
    jg.ENTITY_OPTIONS_DEFAULT_VALUES = {
        rotate: 0,
        translate: { x: 0, y: 0 },
        transform: { m11: 1, m12: 0, m21: 0, m22: 1, dx: 0, dy: 0 },
        scale: { x: 1, y: 1 },
        purescale: { x: 1, y: 1 },
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
        textAlign: undefined,
        textBaseline: undefined,
        globalCompositeOperation: undefined
    };

    var E = (function () {
        function E() {
            this.opacity = 1;
            this.x = 0;
            this.y = 0;
        }
        E.prototype.enablePointingEvent = function () {
            this.pointCapture = true;
            if (!this.pointDown)
                this.pointDown = new jg.Trigger();
            if (!this.pointUp)
                this.pointUp = new jg.Trigger();
            if (!this.pointMove)
                this.pointMove = new jg.Trigger();
        };

        E.prototype.disablePointingEvent = function () {
            delete this.pointCapture;
        };

        E.prototype.removeDrawOption = function (name) {
            if (!this.options)
                return;

            if (this.options[name] !== undefined)
                delete this.options[name];
            var cnt = 0;
            for (var i in this.options) {
                cnt++;
                break;
            }
            if (!cnt)
                delete this.options;
            this.updated();
        };

        E.prototype.setDrawOption = function (name, value) {
            if (!this.options)
                this.options = {};
            this.options[name] = value;
            this.updated();
        };

        E.prototype.getDrawOption = function (name) {
            if (!this.options || this.options[name] == undefined)
                return jg.ENTITY_OPTIONS_DEFAULT_VALUES[name];
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

        E.prototype.scrollTo = function (x, y) {
            this.scroll = {
                x: x,
                y: y
            };
            this.updated();
        };

        E.prototype.scrollBy = function (x, y) {
            if (!this.scroll)
                this.scroll = { x: 0, y: 0 };
            this.scroll.x += x;
            this.scroll.y += y;
            this.updated();
        };

        E.prototype.activate = function () {
            if (this.active_queue) {
                var f;
                while (f = this.active_queue.shift())
                    f.call(this);

                delete this.active_queue;
            }
            if (this.entities) {
                for (var i = 0; i < this.entities.length; i++) {
                    if (!this.entities[i].scene) {
                        this.entities[i].scene = this.scene;
                        this.entities[i].activate();
                    }
                }
            }
        };

        E.prototype.addActiveQueue = function (f) {
            if (this.scene) {
                f.call(this);
                return;
            }
            if (!this.active_queue)
                this.active_queue = [];
            this.active_queue.push(f);
        };

        E.prototype.appendTo = function (scene, layerName) {
            scene.append(this, layerName);
        };

        E.prototype.remove = function () {
            if (this.parent)
                this.parent.removeChild(this);
else
                throw "Can not remove layer. (use scene.deleteLayer)";
        };

        E.prototype.insert = function (entity, index) {
            if (!this.entities)
                throw "Can not call append of non-container entity";
            entity.scene = this.scene;
            entity.parent = this;
            if (typeof index != "number") {
                for (var i = 0; i < this.entities.length; i++) {
                    if (this.entities[i] == index) {
                        index = i;
                        break;
                    }
                }
            }
            this.entities.splice(index, 0, entity);
            entity.activate();
            this.updated();
        };

        E.prototype.append = function (entity) {
            if (!this.entities)
                throw "Can not call append of non-container entity";
            entity.scene = this.scene;
            entity.parent = this;
            this.entities.push(entity);
            if (this.scene)
                entity.activate();
            this.updated();
        };

        E.prototype.removeChild = function (entity) {
            if (!this.entities)
                throw "Can not call removeChild of non-container entity";

            for (var i = 0; i < this.entities.length; i++) {
                if (this.entities[i] == entity) {
                    if (entity.entities) {
                        var childEntity;
                        while (childEntity = entity.entities.pop())
                            entity.removeChild(childEntity);
                    }
                    this.entities.splice(i, 1);
                    entity.destroy();
                    this.updated();
                    return true;
                }
            }
            return false;
        };

        E.prototype.start = function () {
            if (this.started)
                return;
            this.started = true;
            if (this.scene)
                this.scene.game.update.handle(this, this.update);
else
                this.addActiveQueue(function () {
                    this.scene.game.update.handle(this, this.update);
                });
        };

        E.prototype.stop = function () {
            if (!this.started)
                return;
            this.started = false;
            if (this.scene)
                this.scene.game.update.remove(this, this.update);
else
                this.addActiveQueue(function () {
                    this.scene.game.update.remove(this, this.update);
                });
        };

        E.prototype.startTimer = function (wait, method) {
            if (this.scene)
                this.scene.game.addTimer(wait, this, method ? method : this.interval);
else
                this.addActiveQueue(function () {
                    this.scene.game.addTimer(wait, this, method ? method : this.interval);
                });
        };

        E.prototype.stopTimer = function (wait, method) {
            if (this.scene)
                this.scene.game.removeTimer(wait, this, method ? method : this.interval);
else
                this.addActiveQueue(function () {
                    this.scene.game.removeTimer(wait, this, method ? method : this.interval);
                });
        };

        E.prototype.updated = function () {
            var p = this;
            while (p.parent)
                p = p.parent;
            p.isUpdated = true;
        };

        E.prototype.tl = function () {
            if (!this._tl)
                this._tl = new jg.Timeline(this);
            return this._tl;
        };

        E.prototype.destroy = function () {
            if (this._tl) {
                this._tl.clear();
                delete this._tl;
            }
            this.stop();
            if (this.scene) {
                this.scene.game.removeTimerAll(this);
                this.scene = null;
            }
            delete this.parent;
            if (this.entities) {
                var childEntity;
                while (childEntity = this.entities.pop())
                    childEntity.destroy();
            }
            if (this.pointDown) {
                this.pointDown.destroy();
                delete this.pointDown;
            }
            if (this.pointUp) {
                this.pointUp.destroy();
                delete this.pointUp;
            }
            if (this.pointMove) {
                this.pointMove.destroy();
                delete this.pointMove;
            }
        };

        E.prototype.offset = function () {
            var parent_offset = this.parent ? this.parent.offset() : { x: this.scroll ? this.scroll.x : 0, y: this.scroll ? this.scroll.y : 0 };
            return {
                x: this.x + parent_offset.x,
                y: this.y + parent_offset.y
            };
        };

        E.prototype.rect = function () {
            var offset = this.offset();
            return new jg.Rectangle(offset.x, offset.y, offset.x + this.width, offset.y + this.height);
        };

        E.prototype.hitTest = function (point) {
            return this.rect().hitTest(point);
        };

        E.prototype.getDistance = function (point) {
            var area = point;
            if (area.width && area.height) {
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
            if (this.entities) {
                for (var i = this.entities.length - 1; i >= 0; i--) {
                    if (force || this.entities[i].pointCapture) {
                        var p = this.entities[i].getEntityByPoint(point);
                        if (p)
                            return p;
                    }
                }
            }
            if ((force || this.pointCapture) && this.hitTest(point))
                return this;

            return null;
        };

        E.prototype.createSprite = function () {
            var buffer = new jg.BufferedRenderer({ width: this.width, height: this.height });
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

        E.prototype.draw = function (context) {
        };

        E.prototype.show = function () {
            this.opacity = 1;
            this.updated();
        };

        E.prototype.hide = function () {
            this.opacity = 0;
            this.updated();
        };
        return E;
    })();
    jg.E = E;
})(jg || (jg = {}));

(function () {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    for (var p in jg.ENTITY_OPTIONS_DEFAULT_VALUES)
        if (jg.ENTITY_OPTIONS_DEFAULT_VALUES[p] === undefined)
            jg.ENTITY_OPTIONS_DEFAULT_VALUES[p] = context[p];
})();
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var jg;
(function (jg) {
    var Shape = (function (_super) {
        __extends(Shape, _super);
        function Shape(width, height, style, color, type) {
            _super.call(this);
            this.x = 0;
            this.y = 0;
            this.width = width;
            this.height = height;
            this.style = style ? style : jg.ShapeStyle.Stroke;
            if (color)
                this.setColor(color);
            this.type = type ? type : jg.ShapeType.Rect;
        }
        Shape.prototype.setClip = function (value) {
            this.clip = value;
            if (this.clip)
                this.disableTransform = true;
else
                delete this.disableTransform;
        };

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
            if (this.style == jg.ShapeStyle.Stroke)
                this.setDrawOption("strokeStyle", color);
else
                this.setDrawOption("fillStyle", color);
        };

        Shape.prototype.getColor = function () {
            if (this.style == jg.ShapeStyle.Stroke)
                return this.getDrawOption("strokeStyle");
else
                return this.getDrawOption("filltyle");
        };

        Shape.prototype.synchronize = function (syncObj, syncFunc) {
            this.syncObj = syncObj;
            this.syncFunc = syncFunc;
        };

        Shape.prototype.draw = function (context) {
            if (this.syncObj)
                this.syncFunc.call(this.syncObj, this);
            if (this.clip) {
                context.save();
                context.translate(this.x, this.y);
                if (this.options)
                    this.scene.game.renderer.useDrawOption(this, context);
            }
            context.beginPath();
            switch (this.type) {
                case jg.ShapeType.Rect:
                    context.rect(0, 0, this.width, this.height);
                    break;
                case jg.ShapeType.Arc:
                    var w2 = this.width / 2;
                    context.arc(w2, w2, w2, 0, Shape.PI_200_PER, false);
                    break;
            }

            if (this.clip) {
                context.restore();
                context.clip();
            } else if (this.style == jg.ShapeStyle.Fill)
                context.fill();
else
                context.stroke();
        };
        Shape.PI_200_PER = Math.PI * 2;
        return Shape;
    })(jg.E);
    jg.Shape = Shape;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var Trigger = (function () {
        function Trigger() {
            this.handlers = [];
        }
        Trigger.prototype.handleInsert = function (index, owner, handler) {
            if (!handler)
                this.handlers.splice(index, 0, { owner: window, handler: owner });
else
                this.handlers.splice(index, 0, { owner: owner, handler: handler });
        };

        Trigger.prototype.handle = function (owner, handler) {
            if (!handler)
                this.handlers.push({ owner: window, handler: owner });
else
                this.handlers.push({ owner: owner, handler: handler });
        };

        Trigger.prototype.destroy = function () {
            this.handlers = [];
        };

        Trigger.prototype.removeAll = function (owner) {
            var ret = [];
            var tmp;
            while (tmp = this.handlers.shift())
                if (tmp.owner != owner)
                    ret.push(tmp);

            this.handlers = ret;
        };

        Trigger.prototype.removeAllByHandler = function (handler) {
            var ret = [];
            var tmp;
            while (tmp = this.handlers.shift())
                if (tmp.handler != handler)
                    ret.push(tmp);

            this.handlers = ret;
        };

        Trigger.prototype.remove = function (owner, handler) {
            var ret = [];
            var tmp;
            if (!handler) {
                handler = owner;
                owner = window;
            }
            while (tmp = this.handlers.shift())
                if (tmp.handler != handler || tmp.owner != owner)
                    ret.push(tmp);

            this.handlers = ret;
        };

        Trigger.prototype.fire = function (param) {
            if (this.handlers.length == 0)
                return;

            var handlers = this.handlers.concat();
            for (var i = 0; i < handlers.length; i++)
                handlers[i].handler.call(handlers[i].owner, param);
        };

        Trigger.prototype.fastFire = function (param) {
            for (var i = 0; i < this.handlers.length; i++)
                this.handlers[i].handler.call(this.handlers[i].owner, param);
        };
        return Trigger;
    })();
    jg.Trigger = Trigger;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var SimpleSound = (function () {
        function SimpleSound() {
        }
        SimpleSound.play = function (sound, loop) {
            var _sound = new Audio(null);
            _sound.src = sound.src;
            _sound.loop = loop ? loop : false;
            ;
            _sound.play();
            return _sound;
        };

        SimpleSound.hasBgm = function () {
            return SimpleSound.bgm !== undefined;
        };

        SimpleSound.playBgm = function (sound, loop) {
            if (SimpleSound.bgm)
                SimpleSound.stopBgm();

            sound.load();
            sound.loop = loop ? loop : false;
            sound.play();
            SimpleSound.bgm = sound;
            return SimpleSound.bgm;
        };

        SimpleSound.stop = function (source) {
            if (!source)
                return;
            source.pause();
        };

        SimpleSound.stopBgm = function () {
            SimpleSound.stop(SimpleSound.bgm);
            delete SimpleSound.bgm;
        };
        return SimpleSound;
    })();
    jg.SimpleSound = SimpleSound;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var ResourceStructure = (function () {
        function ResourceStructure(img, sound) {
            this.img = img;
            this.sound = sound;
        }
        ResourceStructure.prototype.isAbsolute = function (url) {
            var white = [".", "/"];
            if (white.indexOf(url.charAt(0)) >= 0 || url.match(/^(http:|https:|data:)/))
                return url;
        };

        ResourceStructure.prototype.imageUrl = function (url) {
            if (this.isAbsolute(url))
                return url;
            return this.img + url;
        };

        ResourceStructure.prototype.soundUrl = function (url) {
            if (this.isAbsolute(url))
                return url;
            return this.sound + url;
        };
        ResourceStructure.Default = new ResourceStructure("img/", "sound/");

        ResourceStructure.Plain = new ResourceStructure("", "");
        return ResourceStructure;
    })();
    jg.ResourceStructure = ResourceStructure;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var ResourceLoader = (function () {
        function ResourceLoader(resource) {
            this.resource = resource;
        }
        ResourceLoader.prototype.load = function (url, identifier) {
        };
        return ResourceLoader;
    })();
    jg.ResourceLoader = ResourceLoader;

    var ImageResourceLoader = (function (_super) {
        __extends(ImageResourceLoader, _super);
        function ImageResourceLoader() {
            _super.apply(this, arguments);
        }
        ImageResourceLoader.prototype.load = function (url, identifier) {
            var image = new Image();
            image.src = this.resource.structure.imageUrl(url);
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
            if (!is_success)
                console.log("error: " + name);
else
                this.resource.images[name] = image;

            this.resource.requestCompleted(name);
        };
        return ImageResourceLoader;
    })(ResourceLoader);
    jg.ImageResourceLoader = ImageResourceLoader;

    var ScriptResourceLoader = (function (_super) {
        __extends(ScriptResourceLoader, _super);
        function ScriptResourceLoader() {
            _super.apply(this, arguments);
        }
        ScriptResourceLoader.prototype.load = function (url, identifier) {
            var _this = this;
            var callback = this.completed;
            var waitLoader = function () {
                if (ScriptResourceLoader.loading) {
                    window.setTimeout(waitLoader, 100);
                    return;
                }

                ScriptResourceLoader.loading = true;
                var script = document.createElement("script");
                var heads = document.getElementsByTagName("head");
                if (heads.length == 0)
                    throw "can not find head tag";
                script.src = url + "?" + (new Date()).getTime();
                script.onload = function () {
                    callback.call(_this, identifier, script, true);
                    ScriptResourceLoader.loading = false;
                };
                script.onerror = function () {
                    callback.call(_this, identifier, script, false);
                    ScriptResourceLoader.loading = false;
                };
                heads[0].appendChild(script);
            };
            waitLoader();
        };

        ScriptResourceLoader.prototype.completed = function (name, script, is_success) {
            if (!is_success)
                console.log("error: " + name);
else
                this.resource.scripts[name] = script;

            this.resource.requestCompleted(name);
        };
        return ScriptResourceLoader;
    })(ResourceLoader);
    jg.ScriptResourceLoader = ScriptResourceLoader;

    var SoundResourceLoader = (function (_super) {
        __extends(SoundResourceLoader, _super);
        function SoundResourceLoader() {
            _super.apply(this, arguments);
        }
        SoundResourceLoader.prototype.load = function (url, identifier) {
            var _this = this;
            var audio = new Audio(null);
            audio.autoplay = false;
            audio.preload = "auto";
            audio.src = this.resource.structure.soundUrl(url);
            audio.load();
            audio.addEventListener("canplaythrough", function () {
                _this.completed(identifier, audio, true);
            }, true);
            audio.addEventListener("error", function () {
                _this.completed(identifier, audio, false);
            }, true);
        };

        SoundResourceLoader.prototype.completed = function (name, audio, is_success) {
            if (!is_success)
                console.log("error: " + name);
else
                this.resource.sounds[name] = audio;

            this.resource.requestCompleted(name);
        };
        return SoundResourceLoader;
    })(ResourceLoader);
    jg.SoundResourceLoader = SoundResourceLoader;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var Resource = (function () {
        function Resource() {
            this.requests = [];
            this.loaded = new jg.Trigger();
            this.added = new jg.Trigger();
            this.clear();
            this.loaders = {};
            this.loaders["js"] = new jg.ScriptResourceLoader(this);
            this.loaders["default"] = new jg.ImageResourceLoader(this);
            this.loaders["mp3"] = new jg.SoundResourceLoader(this);
            this.loaders["ogg"] = this.loaders["mp3"];
            this.loaders["wav"] = this.loaders["mp3"];
            this.loaders["mid"] = this.loaders["mp3"];
            this.structure = jg.ResourceStructure.Default;
        }
        Resource.getInstance = function () {
            return (function () {
                if (!Resource.instance)
                    Resource.instance = new Resource();
                return Resource.instance;
            })();
        };

        Resource.prototype.clear = function () {
            this.images = {};
            this.scripts = {};
            this.sounds = {};
        };

        Resource.prototype.get = function (name) {
            return this.images[name];
        };

        Resource.prototype.sound = function (name) {
            return this.sounds[name];
        };

        Resource.prototype.requestCompleted = function (name) {
            for (var i = 0; i < this.requests.length; i++) {
                if (this.requests[i] == name) {
                    this.requests.splice(i, 1);
                    break;
                }
            }
            this.loaded.fire(this.requests.length);
        };

        Resource.prototype.load = function (name, url) {
            if (!url)
                url = name;

            this.requests.push(name);

            var dot = url.split(/\./g);
            var ext;
            if (dot.length == 0)
                ext = "";
else
                ext = dot[dot.length - 1];

            ext = ext.toLowerCase();
            var loader = this.loaders[ext] ? this.loaders[ext] : this.loaders["default"];
            loader.load(url, name);

            this.added.fire({
                name: name,
                url: url,
                loader: loader
            });
        };

        Resource.prototype.loadManual = function (name) {
            this.requests.push(name);
            this.added.fire({
                name: name,
                url: null,
                loader: null
            });
        };

        Resource.prototype.completeManual = function (name) {
            this.requestCompleted(name);
        };
        return Resource;
    })();
    jg.Resource = Resource;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var Scene = (function () {
        function Scene(game) {
            this.game = game;
            this.layers = {};
            this.root = new jg.Layer(this);
            this.layers["root"] = this.root;
            this.layerCount = 1;
            this.mode = [];
            this.started = new jg.Trigger();
            this.ended = new jg.Trigger();
            this.showed = new jg.Trigger();
            this.hid = new jg.Trigger();
        }
        Scene.prototype.currentMode = function () {
            return this.mode.length == 0 ? null : this.mode[this.mode.length - 1];
        };

        Scene.prototype.getLayerArray = function () {
            var ret = [];
            for (var i in this.layers)
                ret.push(this.layers[i]);
            return ret;
        };

        Scene.prototype.enablePointingEvent = function () {
            this.root.enablePointingEvent();
            if (!this.pointDown)
                this.pointDown = new jg.Trigger();
            if (!this.pointMove)
                this.pointMove = new jg.Trigger();
            if (!this.pointUp)
                this.pointUp = new jg.Trigger();
        };

        Scene.prototype.disablePointingEvent = function () {
            this.root.disablePointingEvent();
        };

        Scene.prototype.changeMode = function (mode) {
            var linkMode = this.currentMode();
            if (linkMode && this[linkMode + "Hide"])
                this[linkMode + "Hide"]();

            this.mode.push(mode);
            if (mode) {
                if (this[mode + "Start"])
                    this[mode + "Start"]();

                if (this[mode + "Show"])
                    this[mode + "Show"]();
            }
        };

        Scene.prototype.endCurrentMode = function (newMode) {
            if (this.mode.length == 0) {
                this.end();
                return;
            }

            var mode = this.mode.pop();
            if (mode)
                if (this[mode + "End"])
                    this[mode + "End"]();

            var linkMode = this.currentMode();
            if (newMode !== undefined)
                this.changeMode(newMode);
else if (linkMode && this[linkMode + "Show"])
                this[linkMode + "Show"]();
        };

        Scene.prototype.createLayer = function (name, size) {
            for (var i in this.layers)
                if (!this.layers[i].hasBuffer())
                    this.layers[i].createBuffer();

            if (size && size instanceof jg.Layer) {
                this.layers[name] = size;
                this.layers[name].scene = this;
            } else {
                this.layers[name] = new jg.Layer(this);
                if (size) {
                    this.layers[name].width = size.width;
                    this.layers[name].height = size.height;
                }
            }
            this.layers[name].createBuffer();
            this.layerCount++;
            return this.layers[name];
        };

        Scene.prototype.deleteLayer = function (name) {
            if (name == "root")
                throw "can not delete root layer";

            this.layers[name].destroy();
            delete this.layers[name];
            this.layerCount--;
            if (this.layerCount == 1)
                this.root.deleteBuffer();
        };

        Scene.prototype.destroy = function () {
            for (var i in this.layers)
                this.layers[i].destroy();
            if (this.keyDown)
                this.keyDown.destroy();
            if (this.keyUp)
                this.keyUp.destroy();
            if (this.pointDown)
                this.pointDown.destroy();
            if (this.pointUp)
                this.pointUp.destroy();
            if (this.pointMove)
                this.pointMove.destroy();
        };

        Scene.prototype.end = function () {
            this.game.endScene();
        };

        Scene.prototype.refresh = function () {
            for (var i in this.layers) {
                this.layers[i].refresh();
                this.layers[i].updated();
            }
        };

        Scene.prototype.scrollTo = function (x, y, layerName) {
            if (!layerName)
                layerName = "root";

            this.layers[layerName].scrollTo(x, y);
        };

        Scene.prototype.scrollBy = function (x, y, layerName) {
            if (x == 0 && y == 0)
                return;

            if (!layerName)
                layerName = "root";

            this.layers[layerName].scrollBy(x, y);
        };

        Scene.prototype.append = function (entity, layerName) {
            if (!layerName)
                this.root.append(entity);
else
                this.layers[layerName].append(entity);
        };

        Scene.prototype.removeEntity = function (entity) {
            for (var i in this.layers)
                this.layers[i].removeChild(entity);
        };
        return Scene;
    })();
    jg.Scene = Scene;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var Sprite = (function (_super) {
        __extends(Sprite, _super);
        function Sprite(image, srcWidth, srcHeight) {
            _super.call(this);
            this.x = 0;
            this.y = 0;
            this.width = srcWidth ? srcWidth : image.width;
            this.height = srcHeight ? srcHeight : image.height;
            this.srcWidth = this.width;
            this.srcHeight = this.height;
            this.srcX = 0;
            this.srcY = 0;
            this.image = image;
        }
        Sprite.prototype.draw = function (context) {
            context.drawImage(this.image, this.srcX, this.srcY, this.srcWidth, this.srcHeight, 0, 0, this.width, this.height);
        };
        return Sprite;
    })(jg.E);
    jg.Sprite = Sprite;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var FrameSprite = (function (_super) {
        __extends(FrameSprite, _super);
        function FrameSprite(image, srcWidth, srcHeight, wait) {
            _super.call(this, image, srcWidth, srcHeight);
            this.sep = Math.floor(this.image.width / this.width);
            var frameCnt = Math.ceil(image.width * image.height) / (srcWidth * srcHeight);
            this.frame = [];
            for (var i = 0; i < frameCnt; i++)
                this.frame.push(i);
            this.fno = 0;
            this.animation = false;
            this.wait = wait === undefined ? 200 : wait;
            this.loop = true;
        }
        FrameSprite.prototype.changeFrame = function () {
            this.srcX = (this.frame[this.fno] % this.sep) * this.srcWidth;
            this.srcY = Math.floor(this.frame[this.fno] / this.sep) * this.srcHeight;
            this.updated();
        };

        FrameSprite.prototype.animate = function (noClear) {
            if (this.animation)
                return true;
            if (!noClear)
                this.fno = 0;
            this.animation = true;
            this.startTimer(this.wait);
        };

        FrameSprite.prototype.inanimate = function () {
            if (!this.animation)
                return;
            this.stopTimer(this.wait);
            this.animation = false;
        };

        FrameSprite.prototype.interval = function () {
            this.fno++;
            if (this.fno >= this.frame.length) {
                if (this.loop) {
                    this.fno = 0;
                } else {
                    if (this.frameEnded) {
                        this.inanimate();
                        this.frameEnded.fire();
                        return;
                    }
                }
            }
            this.changeFrame();
        };
        return FrameSprite;
    })(jg.Sprite);
    jg.FrameSprite = FrameSprite;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var Character = (function (_super) {
        __extends(Character, _super);
        function Character(image, width, height, wait) {
            _super.call(this, image, width, height, wait);

            this.moving = false;
            if (!wait)
                wait = 200;

            this.animeCnt = 2;
            this.charaSeq = 0;
            this.charaCol = 1;
            this.movePixel = 64;
            this.moveTime = 300;

            this.animate();
        }
        Character.prototype.moveLeft = function (stackNext) {
            if (this.move(-this.movePixel, 0, this.moveTime)) {
                this.angle(jg.Angle.Left);
                return true;
            }
            if (stackNext && this.moveInfo.t * 2 >= this.moveInfo.f)
                this.nextMove = "Left";
            return false;
        };

        Character.prototype.moveRight = function (stackNext) {
            if (this.move(this.movePixel, 0, this.moveTime)) {
                this.angle(jg.Angle.Right);
                return true;
            }
            if (stackNext && this.moveInfo.t * 2 >= this.moveInfo.f)
                this.nextMove = "Right";
            return false;
        };

        Character.prototype.moveUp = function (stackNext) {
            if (this.move(0, -this.movePixel, this.moveTime)) {
                this.angle(jg.Angle.Up);
                return true;
            }
            if (stackNext && this.moveInfo.t * 2 >= this.moveInfo.f)
                this.nextMove = "Up";
            return false;
        };

        Character.prototype.moveDown = function (stackNext) {
            if (this.move(0, this.movePixel, this.moveTime)) {
                this.angle(jg.Angle.Down);
                return true;
            }
            if (stackNext && this.moveInfo.t * 2 >= this.moveInfo.f)
                this.nextMove = "Down";
            return false;
        };

        Character.prototype.move = function (x, y, f) {
            if (this.moving)
                return false;

            this.moving = true;
            this.moveInfo = {
                x: this.x,
                y: this.y,
                dx: this.x + x,
                dy: this.y + y,
                f: f,
                t: 0
            };
            if (this.beginMove)
                this.beginMove.fire(this.moveInfo);

            if (this.moving)
                this.start();

            return true;
        };

        Character.prototype.update = function (t) {
            if (this.moving) {
                this.moveInfo.t += t;
                if (this.moveInfo.t < this.moveInfo.f) {
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
            var e = {};
            if (this.nextMove) {
                e.nextMove = this.nextMove;
                delete this.nextMove;
            }
            if (this.moved)
                this.moved.fire(e);
            if (e.nextMove)
                this["move" + e.nextMove]();
        };

        Character.prototype.angle = function (angle) {
            this.currentAngle = angle;
            var rowP = Math.floor(this.charaSeq / this.charaCol) * 4;

            switch (angle) {
                case jg.Angle.Up:
                    rowP += (this.angleSeq ? this.angleSeq[jg.Angle.Up] : 3);
                    break;
                case jg.Angle.Down:
                    rowP += (this.angleSeq ? this.angleSeq[jg.Angle.Down] : 0);
                    break;
                case jg.Angle.Left:
                    rowP += (this.angleSeq ? this.angleSeq[jg.Angle.Left] : 1);
                    break;
                case jg.Angle.Right:
                    rowP += (this.angleSeq ? this.angleSeq[jg.Angle.Right] : 2);
                    break;
            }

            var f = this.animeCnt * (this.charaSeq % this.charaCol) + this.charaCol * this.animeCnt * rowP;
            this.frame = [];
            if (this.animeCnt % 2 == 1) {
                for (var i = 0; i < this.animeCnt; i++)
                    this.frame.push(i + f);
                for (var i = this.animeCnt - 2; i > 0; i--)
                    this.frame.push(i + f);
            } else {
                for (var i = 0; i < this.animeCnt; i++)
                    this.frame.push(i + f);
            }
            this.changeFrame();
        };
        return Character;
    })(jg.FrameSprite);
    jg.Character = Character;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var CharacterFactory = (function () {
        function CharacterFactory(image, width, height) {
            this.width = width;
            this.height = height;
            this.image = image;
            this.wait = 200;
            this.charaCol = 1;
            this.animeCnt = 2;
            this.moveTime = 300;
            this.movePixel = 64;
            this.angle = jg.Angle.Down;
            this.createClass = jg.Character;
        }
        CharacterFactory.prototype.create = function (charaSeq, offset, angle) {
            var c = new this.createClass(this.image, this.width, this.height, this.wait);
            var black = ["width", "height", "image", "wait", "angle"];
            for (var i in this) {
                if (typeof this[i] == "function")
                    continue;
                if (black.indexOf(i) >= 0)
                    continue;
                c[i] = this[i];
            }
            c.charaSeq = charaSeq;

            c.angle(angle == undefined ? this.angle : angle);

            if (offset)
                c.moveTo(offset.x, offset.y);

            return c;
        };
        return CharacterFactory;
    })();
    jg.CharacterFactory = CharacterFactory;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var Label = (function (_super) {
        __extends(Label, _super);
        function Label(text, fontSize, fontColor, baseline) {
            _super.call(this);
            this.x = 0;
            this.y = 0;
            if (text) {
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

        Label.prototype.draw = function (context) {
            if (this.syncObj) {
                var val;
                if (typeof this.syncObj[this.syncProp] == "function")
                    val = this.syncObj[this.syncProp](this);
else
                    val = this.syncObj[this.syncProp];

                this.text = this.syncRound ? Math.round(val) : val;
            }
            if (this.maxWidth) {
                context.fillText(this.text, 0, 0, this.maxWidth);
            } else {
                context.fillText(this.text, 0, 0);
            }
        };
        return Label;
    })(jg.E);
    jg.Label = Label;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var TextLineInfo = (function () {
        function TextLineInfo(offsetY) {
            this.width = 0;
            this.height = 0;
            this.offsetY = offsetY;
        }
        return TextLineInfo;
    })();
    jg.TextLineInfo = TextLineInfo;

    var MultilineScriptAnalyzer = (function () {
        function MultilineScriptAnalyzer() {
        }
        MultilineScriptAnalyzer.prototype.init = function (owner, context, pos) {
            this.mode = 0;
            this.owner = owner;
            this.context = context;
            this.pos = pos;
        };

        MultilineScriptAnalyzer.prototype.next = function (c) {
            if (this.mode) {
                if (c == " ") {
                    this.mode = 0;
                    if (this.buf == "page")
                        return -1;
                } else
                    this.buf += c;

                return 1;
            }
            if (c == "#") {
                this.mode = 1;
                this.buf = "";
                return 1;
            }
            return 0;
        };
        return MultilineScriptAnalyzer;
    })();
    jg.MultilineScriptAnalyzer = MultilineScriptAnalyzer;

    var MultilineText = (function (_super) {
        __extends(MultilineText, _super);
        function MultilineText(size, offset) {
            _super.call(this);
            this.scriptAnalyzer = new MultilineScriptAnalyzer();
            this.width = size.width;
            this.height = size.height;
            if (offset)
                this.moveTo(offset.x, offset.y);
else
                this.moveTo(0, 0);

            this.defaultStyle = "#000";
            this.defaultFont = "18px sans-serif";
            this.defaultBlur = 0.6;
            this.defaultShadowColor = "#000";
            this.defaultShadowOffsetX = 0.3;
            this.defaultShadowOffsetY = 0.3;

            this.clip = new jg.Line({ x: 0, y: 0 });
            this.clip.addLine(this.width, 0);
            this.clip.addLine(this.width, this.height);
            this.clip.addLine(0, this.height);
            this.clip.addLine(0, this.height);
            this.clip.addLine(0, this.height);
            this.clip.closePath = true;
            this.clip.setClip(true);

            this.entities = [];
            this.entities.push(this.clip);
            this.animeSpeed = 400;

            this.animated = new jg.Trigger();
        }
        MultilineText.prototype.setText = function (text, offset) {
            var plainScript = text;
            return this.setScript(plainScript, offset);
        };

        MultilineText.prototype.setScript = function (script, offset) {
            this.script = script.replace(/\r\n?/g, "\n");
            this.updated();
            return this.createBuffer(offset);
        };

        MultilineText.prototype.getLineHeight = function (c) {
            var font = c.font;
            var firstPos = font.indexOf("px");
            var lastPos = font.lastIndexOf(" ", firstPos);
            if (lastPos < 0)
                lastPos = 0;
            if (firstPos < 0)
                return 16;
            var fontSize = parseInt(font.substring(lastPos, firstPos));

            var line_height = Math.round(fontSize * MultilineText.LINE_HEIGHT_NORMAL);
            return line_height;
        };

        MultilineText.prototype.createBuffer = function (offset) {
            var _this = this;
            if (!this.buffer)
                this.buffer = window.createCanvas(this.width, this.height);
            if (offset === undefined)
                offset = 0;

            var script = this.script;
            var len = script.length;
            var pos = { x: 0, y: 0 };
            var c = this.buffer.getContext("2d");
            var s;
            var m = MultilineText.BROWSER_BASELINE_MARGIN;
            this.lines = [];

            if (this.bufferBg)
                c.putImageData(this.bufferBg, 0, 0);
else
                c.clearRect(0, 0, this.width, this.height);

            c.fillStyle = this.defaultStyle;
            c.font = this.defaultFont;
            c.textBaseline = "top";
            if (!this.disableShadow) {
                c.shadowBlur = this.defaultBlur;
                c.shadowColor = this.defaultShadowColor;
                c.shadowOffsetX = this.defaultShadowOffsetX;
                c.shadowOffsetY = this.defaultShadowOffsetY;
            }

            var lineHeight = this.getLineHeight(c);
            var lineInfo = new TextLineInfo(0);
            lineInfo.height = lineHeight;
            this.lines.push(lineInfo);

            var _newLine = function () {
                pos.x = 0;
                pos.y += lineInfo.height;
                if ((pos.y + lineInfo.height) > _this.height)
                    return false;
                lineInfo = new TextLineInfo(pos.y);
                lineInfo.height = lineHeight;
                _this.lines.push(lineInfo);
                return true;
            };

            this.scriptAnalyzer.init(this, c, pos);
            while (offset < len) {
                s = script.substr(offset, 1);

                var script_ret = this.scriptAnalyzer.next(s);
                if (script_ret) {
                    lineHeight = lineInfo.height;
                    if (script_ret < 0) {
                        offset -= script_ret;
                        break;
                    }
                    offset += script_ret;
                    continue;
                }
                if (s == "\n") {
                    offset++;
                    if (!_newLine())
                        break;
                    continue;
                }

                var metric = c.measureText(s);
                if ((pos.x + metric.width) > this.width) {
                    if (!_newLine())
                        break;
                }

                c.fillText(s, pos.x, pos.y + m);
                pos.x += metric.width;
                lineInfo.width += metric.width;

                offset++;
            }

            this.sprite = new jg.Sprite(this.buffer);
            this.sprite.moveTo(0, 0);
            if (this.entities.length == 1)
                this.entities.push(this.sprite);
else
                this.entities[1] = this.sprite;

            return offset == len ? -1 : offset;
        };

        MultilineText.prototype.refresh = function () {
            delete this.buffer;
            this.createBuffer();
        };

        MultilineText.prototype.startAnimation = function (animeSpeed) {
            this.start();
            this.animeLine = 0;
            this.animePos = { x: 0, y: this.lines[this.animeLine].height };
            if (animeSpeed !== undefined)
                this.animeSpeed = animeSpeed;
            this.hideAll();
            this.clip.p[4].y = this.animePos.y;
            this.clip.p[5].y = this.animePos.y;
        };

        MultilineText.prototype.update = function (t) {
            this.animePos.x += this.animeSpeed / 1000 * t;
            if (this.animePos.x >= this.lines[this.animeLine].width) {
                this.animePos.x = 0;
                this.animePos.y += this.lines[this.animeLine].height;
                this.animeLine++;

                if (this.animeLine < this.lines.length) {
                    this.clip.p[2].y = this.lines[this.animeLine].offsetY;
                    this.clip.p[3].y = this.clip.p[2].y;
                    this.clip.p[4].y = this.animePos.y;
                    this.clip.p[5].y = this.animePos.y;
                }
            }

            if (this.animeLine >= this.lines.length) {
                this.showAll();
            } else {
                this.clip.p[3].x = this.animePos.x;
                this.clip.p[4].x = this.clip.p[3].x;
            }

            this.updated();
        };

        MultilineText.prototype.hideAll = function () {
            this.clip.p[0] = { x: 0, y: 0 };
            this.clip.p[1] = { x: this.width, y: 0 };
            this.clip.p[2] = { x: this.width, y: 0 };
            this.clip.p[3] = { x: 0, y: 0 };
            this.clip.p[4] = { x: 0, y: 0 };
            this.clip.p[5] = { x: 0, y: 0 };
        };

        MultilineText.prototype.showAll = function () {
            this.clip.p[0] = { x: 0, y: 0 };
            this.clip.p[1] = { x: this.width, y: 0 };
            this.clip.p[2] = { x: this.width, y: this.height };
            this.clip.p[3] = { x: 0, y: this.height };
            this.clip.p[4] = { x: 0, y: this.height };
            this.clip.p[5] = { x: 0, y: this.height };
            this.stop();
            this.animated.fire();
        };
        MultilineText.LINE_HEIGHT_NORMAL = 1.2;

        MultilineText.BROWSER_BASELINE_MARGIN = 0;
        return MultilineText;
    })(jg.E);
    jg.MultilineText = MultilineText;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var ChipSet = (function () {
        function ChipSet(image) {
            this.image = image;
        }
        ChipSet.prototype.count = function (tile) {
            return Math.round((this.image.width * this.image.height) / (tile.tileWidth * tile.tileHeight));
        };

        ChipSet.prototype.draw = function (tile, c, x, y, chip) {
            var tw = tile.tileWidth;
            var th = tile.tileHeight;
            var sep = Math.floor(this.image.width / tile.tileWidth);
            c.drawImage(this.image, (chip % sep) * tw, Math.floor(chip / sep) * th, tw, th, x * tw, y * th, tw, th);
        };

        ChipSet.prototype.getChips = function (tile) {
            var len = this.count(tile);
            var sprite = new jg.Sprite(this.image);
            var buf = new jg.BufferedRenderer(sprite);
            var ret = [];
            var w = tile.tileWidth;
            var h = tile.tileHeight;
            var area = {
                x: 0,
                y: 0,
                width: w,
                height: h
            };
            buf.renderUnit(sprite);
            var sep = Math.floor(this.image.width / tile.tileWidth);

            for (var i = 0; i < len; i++) {
                ret.push(buf.createSprite({
                    x: (i % sep) * w,
                    y: Math.floor(i / sep) * h,
                    width: w,
                    height: h
                }, area, area));
            }
            return ret;
        };
        return ChipSet;
    })();
    jg.ChipSet = ChipSet;

    var AutoTileChipSet = (function (_super) {
        __extends(AutoTileChipSet, _super);
        function AutoTileChipSet() {
            _super.apply(this, arguments);
        }
        AutoTileChipSet.prototype.map = function (tile, x, y, out_value) {
            if (x < 0 || y < 0 || x >= tile.size.width || y >= tile.size.height)
                return out_value !== undefined ? out_value : -1;
            return tile.data[x][y];
        };

        AutoTileChipSet.prototype.count = function (tile) {
            return 1;
        };

        AutoTileChipSet.prototype.draw = function (tile, c, x, y, chip) {
            var tw = tile.tileWidth;
            var th = tile.tileHeight;
            var tw2 = Math.floor(tw / 2);
            var th2 = Math.floor(th / 2);
            var sep = Math.floor(this.image.width / tile.tileWidth);

            chip += this.chipOffset;
            for (var i = 0; i < 2; i++) {
                for (var j = 0; j < 2; j++) {
                    var tx = x + (i == 0 ? -1 : 1);
                    var ty = y + (j == 0 ? -1 : 1);
                    var v = this.map(tile, tx, y, chip);
                    var h = this.map(tile, x, ty, chip);
                    var vh = this.map(tile, tx, ty, chip);
                    var sel = 0;
                    if (h == chip)
                        sel++;
                    if (v == chip)
                        sel += 2;
                    if (sel == 3 && vh == chip)
                        sel++;

                    c.drawImage(this.image, (sel % sep) * tw + tw2 * i, Math.floor(sel / sep) * th + th2 * j, tw2, th2, x * tw + tw2 * i, y * th + th2 * j, tw2, th2);
                }
            }
        };

        AutoTileChipSet.prototype.getChips = function (tile) {
            var len = this.count(tile);
            var sprite = new jg.Sprite(this.image, tile.tileWidth, tile.tileHeight);

            return [sprite.createSprite()];
        };
        return AutoTileChipSet;
    })(ChipSet);
    jg.AutoTileChipSet = AutoTileChipSet;

    var Tile = (function (_super) {
        __extends(Tile, _super);
        function Tile(image, tileWidth, tileHeight) {
            _super.call(this);
            this.tileWidth = tileWidth;
            this.tileHeight = tileHeight;
            this.chips = [];
            this.chipMap = [];
            this.chipCount = 0;
            if (image)
                this.addChipSet(image);
            this.x = 0;
            this.y = 0;
            this.disableTransform = true;
        }
        Tile.prototype.addChipSet = function (image, opt) {
            var chipset;
            if (opt) {
                if (opt.autoTile) {
                    chipset = new AutoTileChipSet(image);
                }
            }

            if (!chipset)
                chipset = new ChipSet(image);

            chipset.chipOffset = this.chipCount;
            this.chips.push(chipset);
            var cnt = chipset.count(this);
            var cnt2 = this.chipCount + cnt;
            for (var i = this.chipCount; i < cnt2; i++)
                this.chipMap[i] = chipset;
            this.chipCount = cnt2;
        };

        Tile.prototype.copyChips = function (tile) {
            tile.chips = this.chips;
            tile.chipCount = this.chipCount;
            tile.chipMap = this.chipMap;
        };

        Tile.prototype._clear = function (width, height) {
            this.size = {
                width: width,
                height: height
            };
            this.width = this.tileWidth * width;
            this.height = this.tileHeight * height;
        };

        Tile.prototype.clear = function (width, height, value) {
            if (!width)
                width = this.size.width;
            if (!height)
                height = this.size.height;
            if (value === undefined)
                value = -1;
            this._clear(width, height);
            this.data = [];
            for (var x = 0; x < width; x++) {
                this.data[x] = [];
                for (var y = 0; y < height; y++)
                    this.data[x][y] = value;
            }
            this.refresh();
        };

        Tile.prototype.generate = function (data, width, height, transpose) {
            if (width === true) {
                transpose = true;
                width = data.length;
                height = data[0].length;
            }
            if (!width)
                width = data.length;
            if (!height)
                height = data[0].length;

            this.data = transpose ? jg.JGUtil.transpose(data) : data;

            this._clear(width, height);
            this.refresh();
        };

        Tile.prototype.refresh = function () {
            this.canvas = window.createCanvas(this.width, this.height);
            var c = this.canvas.getContext("2d");

            var chipset;
            var w = this.size.width;
            var h = this.size.height;
            var d = this.data;
            var cm = this.chipMap;
            for (var x = 0; x < w; x++)
                for (var y = 0; y < h; y++)
                    this.drawChip(x, y, false, c);

            this.updated();
        };

        Tile.prototype.drawChip = function (x, y, clear, context) {
            if (context === undefined)
                context = this.canvas.getContext("2d");

            if (clear)
                context.clearRect(x * this.tileWidth, y * this.tileHeight, this.tileWidth, this.tileHeight);

            if (this.data[x][y] < 0)
                return;
            var cs = this.chipMap[this.data[x][y]];
            cs.draw(this, context, x, y, this.data[x][y] - cs.chipOffset);
        };

        Tile.prototype.draw = function (context) {
            if (!this.canvas)
                return;
            var parent = this.parent ? this.parent : this;
            var scroll = parent.scroll ? parent.scroll : { x: 0, y: 0 };
            var src = {
                x: -scroll.x,
                y: -scroll.y,
                width: parent.width,
                height: parent.height
            };
            var dist = {
                x: -scroll.x,
                y: -scroll.y,
                width: parent.width,
                height: parent.height
            };
            if (src.x < 0) {
                src.width += src.x;
                if (src.width <= 0)
                    return;
                dist.x -= src.x;
                dist.width += src.x;
                src.x = 0;
            } else if ((src.x + src.width) > this.width) {
                var p = ((src.x + src.width) - this.width);
                src.width -= p;
                if (src.width <= 0)
                    return;
                dist.width -= p;
            }
            if (src.y < 0) {
                src.height += src.y;
                if (src.height <= 0)
                    return;
                dist.y -= src.y;
                dist.height += src.y;
                src.y = 0;
            } else if ((src.y + src.height) > this.height) {
                var p = ((src.y + src.height) - this.height);
                src.height -= p;
                if (src.height <= 0)
                    return;
                dist.height -= p;
            }

            context.drawImage(this.canvas, src.x, src.y, src.width, src.height, dist.x, dist.y, dist.width, dist.height);
        };

        Tile.prototype.getChips = function () {
            var ret = [];
            var len = this.chips.length;
            for (var i = 0; i < len; i++)
                ret = ret.concat(this.chips[i].getChips(this));
            return ret;
        };
        return Tile;
    })(jg.E);
    jg.Tile = Tile;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var Layer = (function (_super) {
        __extends(Layer, _super);
        function Layer(scene) {
            _super.call(this);
            this.entities = [];
            this.x = 0;
            this.y = 0;
            this.scene = scene;
            if (this.scene) {
                this.width = this.scene.game.width;
                this.height = this.scene.game.height;
            }
            this.isUpdated = true;
        }
        Layer.prototype.hasBuffer = function () {
            if (this.canvas)
                return true;
            return false;
        };

        Layer.prototype.createBuffer = function () {
            this.refresh(true);
        };

        Layer.prototype.refresh = function (must) {
            if (must || this.hasBuffer()) {
                this.canvas = window.createCanvas(this.width, this.height);
                this.context = this.canvas.getContext("2d");
                this.updated();
            }
            if (this.entities) {
                for (var i = 0; i < this.entities.length; i++) {
                    if (this.entities[i]["refresh"])
                        this.entities[i]["refresh"]();
                }
            }
        };

        Layer.prototype.deleteBuffer = function () {
            delete this.context;
            delete this.canvas;
        };

        Layer.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            if (this.hasBuffer())
                this.deleteBuffer();
        };
        return Layer;
    })(jg.E);
    jg.Layer = Layer;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var LoadingScene = (function (_super) {
        __extends(LoadingScene, _super);
        function LoadingScene(game, resource) {
            _super.call(this, game);
            this.resource = resource;
            this.resource.loaded.handle(this, this.complete);
            this.resource.added.handle(this, this.added);
            this.requestCount = this.resource.requests.length;
            this.finished = new jg.Trigger();

            this.init();
        }
        LoadingScene.prototype.init = function () {
            this.shape = new jg.Shape(this.game.width, 32);
            this.shape.moveTo(0, this.game.height / 2 - 16);

            this.shapeP = new jg.Shape(1, 32, jg.ShapeStyle.Fill);
            this.shapeP.moveTo(0, this.game.height / 2 - 16);

            this.append(this.shape);
            this.append(this.shapeP);
        };

        LoadingScene.prototype.animate = function (per) {
            this.shapeP.width = this.game.width * per;
            this.shapeP.updated();
        };

        LoadingScene.prototype.complete = function (cnt) {
            var per = (this.requestCount - cnt) / this.requestCount;
            this.animate(per);

            if (per == 1) {
                this.resource.loaded.remove(this, this.complete);
                this.resource.added.remove(this, this.added);
                this.end();
                this.finished.fire();
            }
        };

        LoadingScene.prototype.added = function (e) {
            this.requestCount++;
        };
        return LoadingScene;
    })(jg.Scene);
    jg.LoadingScene = LoadingScene;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var InputEvent = (function () {
        function InputEvent(type, action, param) {
            this.type = type;
            this.action = action;
            this.param = param;
        }
        return InputEvent;
    })();
    jg.InputEvent = InputEvent;

    var InputKeyboardEvent = (function (_super) {
        __extends(InputKeyboardEvent, _super);
        function InputKeyboardEvent(action, key, e) {
            _super.call(this, jg.InputEventType.Keyboard, action, e);
            this.key = key;
        }
        return InputKeyboardEvent;
    })(InputEvent);
    jg.InputKeyboardEvent = InputKeyboardEvent;

    var InputPointEvent = (function (_super) {
        __extends(InputPointEvent, _super);
        function InputPointEvent(action, e, point) {
            _super.call(this, jg.InputEventType.Point, action, e);
            this.point = point;
        }
        InputPointEvent.prototype.set = function (entity) {
            var entityOffset = entity.offset();
            this.entity = entity;
            this.x = this.point.x - entityOffset.x;
            this.y = this.point.y - entityOffset.y;
        };
        return InputPointEvent;
    })(InputEvent);
    jg.InputPointEvent = InputPointEvent;
})(jg || (jg = {}));
var jg;
(function (jg) {
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
                purescale: function (c, entity, params) {
                    c.scale(params.x, params.y);
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

        Renderer.prototype.renderParent = function (parent, c) {
            if (parent.orderDraw)
                parent.orderDraw(parent);

            c.save();
            if (parent.opacity != 1)
                c.globalAlpha = parent.opacity;
            if (parent.options) {
                if (this.useDrawOption(parent, c)) {
                    c.restore();
                    return;
                }
            }

            if (parent.scroll)
                c.translate(parent.scroll.x, parent.scroll.y);

            for (var i = 0; i < parent.entities.length; i++)
                this.renderEntity(parent.entities[i], c);

            c.restore();
        };

        Renderer.prototype.renderEntity = function (entity, c) {
            if (!entity.opacity)
                return;

            if (entity.disableTransform) {
                entity.draw(c);
            } else {
                c.save();
                c.translate(entity.x, entity.y);
                if (entity.opacity != 1)
                    c.globalAlpha *= entity.opacity;

                if (entity.options) {
                    if (this.useDrawOption(entity, c)) {
                        c.restore();
                        return;
                    }
                }

                if (entity.filter) {
                    this.filterDraw(entity, c);
                } else {
                    entity.draw(c);
                    if (entity.entities) {
                        if (entity.scroll)
                            c.translate(entity.scroll.x, entity.scroll.y);
                        for (var i = 0; i < entity.entities.length; i++)
                            this.renderEntity(entity.entities[i], c);
                    }
                }

                c.restore();
            }
        };

        Renderer.prototype.renderPure = function (entity, c) {
            entity.draw(c);
            if (entity.entities) {
                for (var i = 0; i < entity.entities.length; i++)
                    this.renderEntity(entity.entities[i], c);
            }
        };

        Renderer.prototype.filterDraw = function (entity, c) {
            var buffer = new jg.BufferedRenderer(entity);
            buffer.filter = entity.filter;
            buffer.renderPure(entity, buffer.c);
            buffer.applyFilter(buffer.c, entity);
            buffer.draw(c);
        };

        Renderer.prototype.useDrawOption = function (entity, c) {
            for (var p in entity.options) {
                if (this.drawOptionFunctions[p])
                    this.drawOptionFunctions[p].call(this, c, entity, entity.options[p]);
else {
                    c[p] = entity.options[p];
                }
            }
        };
        return Renderer;
    })();
    jg.Renderer = Renderer;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var GameRenderer = (function (_super) {
        __extends(GameRenderer, _super);
        function GameRenderer(game, container, transferMode, disableBg) {
            _super.call(this);
            this.game = game;
            this.container = container ? container : document.getElementById("jgame");
            if (!this.container) {
                var div = document.createElement("div");
                div.id = "jgame";
                var bodies = document.getElementsByTagName("body");
                if (bodies.length == 0)
                    throw "can not initialize game engine";

                bodies[0].appendChild(div);
                this.container = div;
            }

            this.handler = document.createElement("div");
            this.handler.style.display = "inline-block";

            this.handler.setAttribute("tabindex", "1");
            this.handler.className = "input-handler";
            this.handler.style.outline = 'none';
            this.container.appendChild(this.handler);
            this.handler.focus();

            this.changeTransferMode(transferMode ? transferMode : jg.RenderTransferMode.Transfer);

            if (!disableBg) {
                this.bg = this.fc.getImageData(0, 0, this.game.width, this.game.height);
                for (var i = 0; i < this.bg.data.length; i++)
                    this.bg.data[i] = 255;
            }
        }
        GameRenderer.prototype.changeFrontCanvasSize = function (size, offset) {
            this.frontCanvasSize = size;
            this.frontCanvasOffset = offset;
            this.refresh();
        };

        GameRenderer.prototype.changeTransferMode = function (mode) {
            this.transferMode = mode;
            if (this.transferMode == jg.RenderTransferMode.Flip) {
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
            var hasUpdate = false;
            if (this.scene.layerCount == 1) {
                var layer = this.scene.root;
                if (!layer.isUpdated) {
                } else {
                    hasUpdate = true;
                    if (!this.disableClear)
                        this.bc.putImageData(this.bg, 0, 0);
                    this.renderParent(layer, this.bc);
                    layer.isUpdated = false;
                }
            } else {
                for (var i in this.scene.layers) {
                    if (this.scene.layers[i].isUpdated) {
                        hasUpdate = true;
                        break;
                    }
                }

                if (hasUpdate) {
                    if (!this.disableClear)
                        this.bc.putImageData(this.bg, 0, 0);
                    for (var i in this.scene.layers) {
                        var layer = this.scene.layers[i];
                        if (layer.isUpdated) {
                            layer.context.clearRect(0, 0, layer.width, layer.height);
                            this.renderParent(layer, layer.context);
                        }
                        this.bc.drawImage(layer.canvas, layer.x, layer.y);
                        layer.isUpdated = false;
                    }
                }
            }

            if (hasUpdate) {
                if (this.filter) {
                    var imageData = this.bc.getImageData(0, 0, this.game.width, this.game.height);
                    this.filter.filter(imageData);
                    this.fc.putImageData(imageData, 0, 0);
                } else {
                    if (this.bc != this.fc) {
                        this.fc.drawImage(this.buffer[1], 0, 0);
                    } else if (this.transferMode == jg.RenderTransferMode.Flip) {
                        this.flip();
                    }
                }
            }
        };

        GameRenderer.prototype.refresh = function () {
            delete this.buffer;
            this.buffer = [];

            if (this.transferMode == jg.RenderTransferMode.Flip) {
                this.handler.innerHTML = "";
                for (var i = 0; i < 2; i++) {
                    this.buffer[i] = window.createCanvas(this.game.width, this.game.height);
                    ;
                    this.buffer[i].style.position = "absolute";
                    this.buffer[i].style.zIndex = i.toString();
                    this.handler.appendChild(this.buffer[i]);
                }
                this.fc = this.buffer[1].getContext("2d");
                this.bc = this.buffer[0].getContext("2d");
                this.flipNo = 1;
                if (this.frontCanvasSize) {
                    jg.JGUtil.scaleCanvas(this.buffer[1], this.frontCanvasSize);
                }
            } else if (this.transferMode == jg.RenderTransferMode.Transfer) {
                this.handler.innerHTML = "";
                for (var i = 0; i < 2; i++) {
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
            if (this.frontCanvasSize) {
                jg.JGUtil.scaleCanvas(this.buffer[0], this.frontCanvasSize);
                if (this.frontCanvasOffset) {
                    this.handler.style.position = "relative";
                    this.handler.style.left = this.frontCanvasOffset.x + "px";
                    this.handler.style.top = this.frontCanvasOffset.y + "px";
                }
            }

            var bounding = this.handler.getBoundingClientRect();
            this._pageX = Math.round(window["scrollX"] || window.pageXOffset + bounding.left);
            this._pageY = Math.round(window["scrollY"] || window.pageYOffset + bounding.top);
        };
        return GameRenderer;
    })(jg.Renderer);
    jg.GameRenderer = GameRenderer;
})(jg || (jg = {}));
var jg;
(function (jg) {
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

        BufferedRenderer.prototype.createImage = function (area, distArea, canvasSize) {
            if (!area)
                area = { x: 0, y: 0, width: this.size.width, height: this.size.height };
            if (!distArea)
                distArea = { x: 0, y: 0, width: area.width, height: area.height };
            if (!canvasSize)
                canvasSize = area;

            var canvas = window.createCanvas(canvasSize.width, canvasSize.height);

            var context = canvas.getContext("2d");
            context.drawImage(this.buffer, area.x, area.y, area.width, area.height, distArea.x, distArea.y, distArea.width, distArea.height);
            if (this.filter)
                this.applyFilter(context, distArea);
            return canvas;
        };

        BufferedRenderer.prototype.createSprite = function (area, distArea, canvasSize) {
            if (!area)
                area = { x: 0, y: 0, width: this.size.width, height: this.size.height };
            if (!distArea)
                distArea = { x: 0, y: 0, width: area.width, height: area.height };
            return new jg.Sprite(this.createImage(area, distArea, canvasSize), area.width, area.height);
        };

        BufferedRenderer.prototype.applyFilter = function (c, size) {
            var imageData = c.getImageData(0, 0, size.width, size.height);
            this.filter.filter(imageData);
            c.putImageData(imageData, 0, 0);
        };

        BufferedRenderer.prototype.renderUnit = function (entity) {
            var area = { x: 0, y: 0, width: entity.width, height: entity.height };
            this.renderEntity(entity, this.c);
        };

        BufferedRenderer.prototype.renderLayer = function (layer) {
            this.renderParent(layer, this.c);
        };

        BufferedRenderer.prototype.renderScene = function (scene) {
            this.clear();
            for (var i in scene.layers) {
                this.c.save();
                var layer = scene.layers[i];
                if (layer.x || layer.y)
                    this.c.translate(layer.x, layer.y);
                this.renderLayer(layer);
                this.c.restore();
            }
        };

        BufferedRenderer.prototype.refresh = function () {
            delete this.buffer;
            this.buffer = window.createCanvas(this.size.width, this.size.height);
            this.c = this.buffer.getContext("2d");
        };

        BufferedRenderer.prototype.draw = function (context) {
            context.drawImage(this.buffer, 0, 0, this.size.width, this.size.height, 0, 0, this.size.width, this.size.height);
        };
        return BufferedRenderer;
    })(jg.Renderer);
    jg.BufferedRenderer = BufferedRenderer;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var GameTimer = (function () {
        function GameTimer(wait) {
            this.wait = wait;
            this.tick = 0;
            this.trigger = new jg.Trigger();
        }
        GameTimer.prototype.tryFire = function (t) {
            this.tick += t;
            if (this.wait <= this.tick)
                this.fire();
        };

        GameTimer.prototype.fire = function () {
            this.tick = 0;

            this.trigger.fastFire(this);
        };
        return GameTimer;
    })();
    jg.GameTimer = GameTimer;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var Game = (function () {
        function Game(width, height) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 2); _i++) {
                args[_i] = arguments[_i + 2];
            }
            var _this = this;
            this._exit = false;
            this.id = jg.JGUtil.generateId();
            this.width = width;
            this.height = height;
            this.targetFps = 0;
            this.loadingSceneClass = jg.LoadingScene;
            this.keymap = {
                13: jg.Keytype.Enter,
                27: jg.Keytype.Esc,
                37: jg.Keytype.Left,
                38: jg.Keytype.Up,
                39: jg.Keytype.Right,
                40: jg.Keytype.Down
            };

            this.loaded = new jg.Trigger();
            this.update = new jg.Trigger();
            this.pointDown = new jg.Trigger();
            this.pointUp = new jg.Trigger();
            this.pointMove = new jg.Trigger();
            this.keyDown = new jg.Trigger();
            this.keyUp = new jg.Trigger();
            this.userEvent = new jg.Trigger();
            this.timers = [];

            this.scene = new jg.Scene(this);
            this.scenes = [];
            this.scenes.push(this.scene);

            this.resource = jg.Resource.getInstance();

            var container, transferMode;
            for (var i = 2; i < arguments.length; i++) {
                if (arguments[i] instanceof HTMLElement)
                    container = arguments[i];
else if (typeof arguments[i] == "string") {
                    this.renderer = new window[arguments[i]](this, container, transferMode);
                    this.renderer.changeScene(this.scene);
                } else
                    transferMode = arguments[i];
            }
            if (!this.renderer) {
                this.renderer = new jg.GameRenderer(this, container, transferMode);
                this.renderer.changeScene(this.scene);
            }

            this.eventQueue = [];
            this.inputEventMap = {};
            this.inputEventMap[jg.InputEventType.Keyboard] = {};
            this.inputEventMap[jg.InputEventType.Keyboard][jg.InputEventAction.Down] = "keyDown";
            this.inputEventMap[jg.InputEventType.Keyboard][jg.InputEventAction.Up] = "keyUp";
            this.inputEventMap[jg.InputEventType.Point] = {};
            this.inputEventMap[jg.InputEventType.Point][jg.InputEventAction.Down] = "pointDown";
            this.inputEventMap[jg.InputEventType.Point][jg.InputEventAction.Move] = "pointMove";
            this.inputEventMap[jg.InputEventType.Point][jg.InputEventAction.Up] = "pointUp";

            if (document.getElementById("fps_show"))
                this.fps = document.getElementById("fps_show");

            this.renderer.handler.addEventListener("focus", function () {
                _this.focus = true;
            }, false);
            this.renderer.handler.addEventListener("blur", function () {
                _this.focus = false;
            }, false);
            this.focus = true;

            this.setSeed();

            this.main();
        }
        Game.prototype.setSeed = function (seed) {
            this.seed = seed === undefined ? new Date().getTime() : seed;
            this.mt = new jg.MT(seed);
        };

        Game.prototype.random = function (min, max) {
            return this.mt.nextInt(min, max - min + 1);
        };

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
            for (var i = 0; i < this.renderer.bg.data.length; i += 4) {
                this.renderer.bg.data[i] = r;
                this.renderer.bg.data[i + 1] = g;
                this.renderer.bg.data[i + 2] = b;
                this.renderer.bg.data[i + 3] = a;
            }
        };

        Game.prototype.refresh = function () {
            this.renderer.refresh();
            for (var i = 0; i < this.scenes.length; i++)
                this.scenes[i].refresh();
        };

        Game.prototype.isTouchEnable = function () {
            var div = document.createElement('div');
            div.setAttribute('ontouchstart', 'return');
            return typeof div.ontouchstart === 'function';
        };

        Game.prototype.getOffsetByEvent = function (e) {
            e.offset = {
                x: e.pageX - this.renderer._pageX,
                y: e.pageY - this.renderer._pageY
            };
            return {
                x: this.scale ? e.offset.x / this.scale : e.offset.x,
                y: this.scale ? e.offset.y / this.scale : e.offset.y
            };
        };

        Game.prototype.onmousedown = function (e) {
            this.isPointDown = true;
            this.eventQueue.push(new jg.InputPointEvent(jg.InputEventAction.Down, e, this.getOffsetByEvent(e)));
            if (!this.focus)
                this.renderer.handler.focus();
            e.preventDefault();
        };

        Game.prototype.ontouchstart = function (e) {
            var touches = e.changedTouches;
            this.isPointDown = true;
            for (var i = 0, l = touches.length; i < l; i++)
                this.eventQueue.push(new jg.InputPointEvent(jg.InputEventAction.Down, touches[i], this.getOffsetByEvent(touches[i])));

            if (!this.focus)
                this.renderer.handler.focus();

            e.preventDefault();
        };

        Game.prototype.onmousemove = function (e) {
            if (!this.isPointDown)
                return;

            this.eventQueue.push(new jg.InputPointEvent(jg.InputEventAction.Move, e, this.getOffsetByEvent(e)));

            e.preventDefault();
        };

        Game.prototype.ontouchmove = function (e) {
            if (!this.isPointDown)
                return;

            var touches = e.changedTouches;
            for (var i = 0, l = touches.length; i < l; i++)
                this.eventQueue.push(new jg.InputPointEvent(jg.InputEventAction.Move, touches[i], this.getOffsetByEvent(touches[i])));

            e.preventDefault();
        };

        Game.prototype.onmouseup = function (e) {
            if (!this.isPointDown)
                return;

            this.eventQueue.push(new jg.InputPointEvent(jg.InputEventAction.Up, e, this.getOffsetByEvent(e)));

            this.isPointDown = false;

            e.preventDefault();
        };

        Game.prototype.ontouchend = function (e) {
            if (!this.isPointDown)
                return;

            var touches = e.changedTouches;
            for (var i = 0, l = touches.length; i < l; i++)
                this.eventQueue.push(new jg.InputPointEvent(jg.InputEventAction.Up, touches[i], this.getOffsetByEvent(touches[i])));

            this.isPointDown = false;

            e.preventDefault();
        };

        Game.prototype.enablePointHandler = function () {
            this.disablePointHandler();

            try  {
                if (this.isTouchEnable()) {
                    this.renderer.handler.addEventListener("touchstart", jg.JGUtil.createIdProxy(this.id, this.ontouchstart, this), false);
                    this.renderer.handler.addEventListener("touchmove", jg.JGUtil.createIdProxy(this.id, this.ontouchmove, this), false);
                    this.renderer.handler.addEventListener("touchend", jg.JGUtil.createIdProxy(this.id, this.ontouchend, this), false);
                } else {
                    this.renderer.handler.addEventListener("mousedown", jg.JGUtil.createIdProxy(this.id, this.onmousedown, this), false);
                    this.renderer.handler.addEventListener("mousemove", jg.JGUtil.createIdProxy(this.id, this.onmousemove, this), false);
                    this.renderer.handler.addEventListener("mouseup", jg.JGUtil.createIdProxy(this.id, this.onmouseup, this), false);
                }
            } catch (ex) {
            }
        };

        Game.prototype.disablePointHandler = function () {
            this.dragParam = null;
            try  {
                if (this.isTouchEnable()) {
                    if (jg.JGUtil.getIdProxy(this.id, this.ontouchstart, this)) {
                        this.renderer.handler.removeEventListener("touchstart", jg.JGUtil.getIdProxy(this.id, this.ontouchstart, this), false);
                        this.renderer.handler.removeEventListener("touchmove", jg.JGUtil.getIdProxy(this.id, this.ontouchmove, this), false);
                        this.renderer.handler.removeEventListener("touchend", jg.JGUtil.getIdProxy(this.id, this.ontouchend, this), false);
                        jg.JGUtil.deleteIdProxy(this.id, this.ontouchstart, this);
                        jg.JGUtil.deleteIdProxy(this.id, this.ontouchmove, this);
                        jg.JGUtil.deleteIdProxy(this.id, this.ontouchend, this);
                    }
                } else {
                    if (jg.JGUtil.getIdProxy(this.id, this.onmousedown, this)) {
                        this.renderer.handler.removeEventListener("mousedown", jg.JGUtil.getIdProxy(this.id, this.onmousedown, this), false);
                        this.renderer.handler.removeEventListener("mousemove", jg.JGUtil.getIdProxy(this.id, this.onmousemove, this), false);
                        this.renderer.handler.removeEventListener("mouseup", jg.JGUtil.getIdProxy(this.id, this.onmouseup, this), false);
                        jg.JGUtil.deleteIdProxy(this.id, this.onmousedown, this);
                        jg.JGUtil.deleteIdProxy(this.id, this.onmousemove, this);
                        jg.JGUtil.deleteIdProxy(this.id, this.onmouseup, this);
                    }
                }
            } catch (ex) {
            }
        };

        Game.prototype.onkeydown = function (e) {
            var keyParam = new jg.InputKeyboardEvent(jg.InputEventAction.Down, this.keymap[e.keyCode], e);
            this.eventQueue.push(keyParam);
            if (this.keymap[e.keyCode] != undefined)
                e.preventDefault();
        };

        Game.prototype.onkeyup = function (e) {
            var keyParam = new jg.InputKeyboardEvent(jg.InputEventAction.Up, this.keymap[e.keyCode], e);
            this.eventQueue.push(keyParam);
            if (this.keymap[e.keyCode] != undefined)
                e.preventDefault();
        };

        Game.prototype.enableKeyboardHandler = function () {
            this.disableKeyboardHandler();
            try  {
                this.renderer.handler.addEventListener("keydown", jg.JGUtil.createIdProxy(this.id, this.onkeydown, this), false);
                this.renderer.handler.addEventListener("keyup", jg.JGUtil.createIdProxy(this.id, this.onkeyup, this), false);
            } catch (ex) {
            }
        };

        Game.prototype.disableKeyboardHandler = function () {
            if (jg.JGUtil.getIdProxy(this.id, this.onkeydown, this)) {
                this.renderer.handler.removeEventListener("keydown", jg.JGUtil.getIdProxy(this.id, this.onkeydown, this), false);
                this.renderer.handler.removeEventListener("keyup", jg.JGUtil.getIdProxy(this.id, this.onkeyup, this), false);
                jg.JGUtil.deleteIdProxy(this.id, this.onkeydown, this);
                jg.JGUtil.deleteIdProxy(this.id, this.onkeyup, this);
            }
        };

        Game.prototype.addTimer = function (wait, owner, handler) {
            var timer = null;
            for (var i = 0; i < this.timers.length; i++) {
                if (this.timers[i].wait == wait) {
                    timer = this.timers[i];
                    break;
                }
            }
            if (timer == null) {
                timer = new jg.GameTimer(wait);
                this.timers.push(timer);
            }
            timer.trigger.handle(owner, handler);
        };

        Game.prototype.removeTimer = function (wait, owner, handler) {
            var timer = null;
            for (var i = 0; i < this.timers.length; i++) {
                if (this.timers[i].wait == wait) {
                    timer = this.timers[i];
                    break;
                }
            }
            if (timer == null)
                throw "error removeTimer: dont have " + wait + " timer";

            timer.trigger.remove(owner, handler);
        };

        Game.prototype.removeTimerAll = function (owner) {
            for (var i = 0; i < this.timers.length; i++) {
                this.timers[i].trigger.removeAll(owner);
            }
        };

        Game.prototype.changeScene = function (scene, effect, endOldScene) {
            var _this = this;
            if (effect) {
                var currentScene = this.scene;
                jg.Effect.sceneEffect(this, currentScene, scene, effect, function () {
                    _this.endScene();
                    _this.changeScene(scene);
                }, endOldScene);
                return;
            }
            this.scenes.push(scene);
            scene.game = this;
            this.scene.hid.fire();
            this.scene = scene;
            this.renderer.changeScene(this.scene);
            this.scene.started.fire();
        };

        Game.prototype.endScene = function (effect) {
            var _this = this;
            if (this.scenes.length == 1) {
                this.end();
                return;
            }
            if (effect) {
                jg.Effect.sceneEffect(this, this.scene, this.scenes[this.scenes.length - 2], effect, function () {
                    _this.endScene();
                }, true);
                return;
            }
            this.scene.destroy();
            this.scenes.pop();
            this.scene.ended.fire();
            this.scene = this.scenes[this.scenes.length - 1];
            this.renderer.changeScene(this.scene);
            this.scene.showed.fire();
        };

        Game.prototype.r = function (name) {
            return this.resource.get(name);
        };

        Game.prototype.s = function (name) {
            return this.resource.sound(name);
        };

        Game.prototype.preload = function (ary) {
            if (ary instanceof Array) {
                for (var i = 0; i < ary.length; i++)
                    this.resource.load(ary[i], ary[i]);
            } else if (typeof ary == "string") {
                for (var i = 0; i < arguments.length; i++)
                    this.resource.load(arguments[i], arguments[i]);
            } else {
                for (var j in ary)
                    this.resource.load(j, ary[j]);
            }

            if (this.loadingSceneClass && !this.loadingScene)
                this.setLoadingScene(this.loadingSceneClass);
        };

        Game.prototype.preloadOther = function (identity) {
            this.resource.loadManual(identity);
        };

        Game.prototype.preloadCompleteOther = function (identity) {
            this.resource.completeManual(identity);
        };

        Game.prototype.setLoadingScene = function (scene) {
            if (!this.loadingScene) {
                if (scene instanceof jg.LoadingScene)
                    this.loadingScene = scene;
else
                    this.loadingScene = new scene(this, this.resource);

                this.loadingScene.finished.handle(this, this.preloadComplete);
                this.changeScene(this.loadingScene);
            }
        };

        Game.prototype.preloadComplete = function () {
            if (this.loadingScene)
                delete this.loadingScene;
            this.loaded.fire();
        };

        Game.prototype.end = function () {
            if (this._exit)
                return false;
            this.renderer.render();
            this._exit = true;
            return true;
        };

        Game.prototype.resume = function () {
            if (!this._exit)
                return false;
            this._exit = false;
            this.main();
            return true;
        };

        Game.prototype.setPointingEntity = function (param) {
            var layers = this.scene.getLayerArray();
            var layer;
            var offset = param.point;
            while (layer = layers.pop()) {
                if (!layer.pointCapture)
                    continue;

                var dragObj = layer.getEntityByPoint(offset);
                if (!dragObj)
                    dragObj = layer;

                param.set(dragObj);
                this.dragParam = param;

                break;
            }
        };

        Game.prototype.raiseInputEvent = function () {
            var e;
            while (e = this.eventQueue.shift()) {
                if (!this.inputEventMap[e.type]) {
                    this.userEvent.fire(e);
                    continue;
                }

                var n = this.inputEventMap[e.type][e.action];
                if (e.type == jg.InputEventType.Keyboard) {
                    if (this.scene[n])
                        this.scene[n].fire(e);
                    this[n].fire(e);
                } else {
                    if (e.action == jg.InputEventAction.Down)
                        this.setPointingEntity(e);
else if (!this.dragParam)
                        continue;
else
                        (e).set(this.dragParam.entity);

                    if ((e).entity && (e).entity[n])
                        (e).entity[n].fire(e);
                    if (this.scene[n])
                        this.scene[n].fire(e);

                    this[n].fire(e);
                }
            }
        };

        Game.prototype.main = function () {
            var _this = this;
            var fps_stack = [];
            var _main = function (t) {
                if (_this._exit)
                    return;

                if (t === undefined)
                    t = Date.now ? Date.now() : new Date().getTime();
                if (_this.tick > (t + 10000) || (_this.tick + 10000) < t) {
                    _this.tick = t - 1;
                    _this.renderTick = t - _this.targetFps;
                    _this.refresh();
                }

                var time = t - _this.tick;
                if (_this.tick < t) {
                    _this.raiseInputEvent();
                    _this.update.fire(time);
                    _this.tick = t;
                }

                for (var i = 0; i < _this.timers.length; i++)
                    _this.timers[i].tryFire(time);

                if (_this.targetFps == 0 || _this.renderTick <= t) {
                    if (_this.render)
                        _this.render.fire();

                    _this.renderer.render();
                    if (_this.targetFps)
                        _this.renderTick = t + _this.targetFps;
                    if (_this.fps) {
                        if (fps_stack.length == 19) {
                            _this.fps.innerHTML = Math.round(20000 / (t - fps_stack[0])).toString();
                            fps_stack = [];
                        } else {
                            fps_stack.push(t);
                        }
                    }
                }

                window.requestAnimationFrame(_main);
            };

            this.tick = 0;
            this.renderTick = 0;
            window.requestAnimationFrame(_main);
        };

        Game.prototype.fullscreen = function () {
            var t = this.renderer.container;
            if (t["requestFullScreen"])
                t["requestFullScreen"]();
else if (t["webkitRequestFullScreen"])
                t["webkitRequestFullScreen"]();
else if (t["mozRequestFullScreen"])
                t["mozRequestFullScreen"]();
else
                return false;
            return true;
        };

        Game.prototype.exitFullscreen = function () {
            var t = this.renderer.container;
            if (t["exitFullscreen"])
                t["exitFullscreen"]();
else if (t["webkitCancelFullScreen"])
                t["webkitCancelFullScreen"]();
else if (t["mozCancelFullScreen"])
                t["mozCancelFullScreen"]();
else
                return false;
            return true;
        };
        return Game;
    })();
    jg.Game = Game;
})(jg || (jg = {}));
var jg;
(function (jg) {
    (function (ImageFilter) {
        var FilterChain = (function () {
            function FilterChain() {
                this.filters = [];
            }
            FilterChain.prototype.get = function (index) {
                return this.filters[index];
            };

            FilterChain.prototype.add = function (filter) {
                this.filters.push(filter);
                return this;
            };

            FilterChain.prototype.set = function (filter) {
                this.filters = [filter];
                return this;
            };

            FilterChain.prototype.insert = function (index, filter) {
                for (var i = 1; i < arguments.length; i++)
                    this.filters.splice(index, 0, arguments[i]);
                return this;
            };

            FilterChain.prototype.remove = function (filter) {
                for (var i = 0; i < this.filters.length; i++) {
                    if (this.filters[i] == filter) {
                        this.filters.splice(i, 1);
                        return;
                    }
                }
            };

            FilterChain.prototype.clear = function () {
                this.filters = [];
                return this;
            };

            FilterChain.prototype.count = function () {
                return this.filters.length;
            };

            FilterChain.prototype.has = function () {
                return this.filters.length > 0;
            };

            FilterChain.prototype.createSprite = function (entity) {
                var buffer = new jg.BufferedRenderer({ width: entity.width, height: entity.height });
                buffer.filter = this;
                var x = entity.x;
                var y = entity.y;
                entity.x = 0;
                entity.y = 0;
                buffer.renderUnit(entity);
                entity.x = x;
                entity.y = y;
                return buffer.createSprite();
            };

            FilterChain.prototype.createImage = function (entity) {
                var buffer = new jg.BufferedRenderer({ width: entity.image.width, height: entity.image.height });
                var image = new jg.Sprite(entity.image);
                image.x = 0;
                image.y = 0;
                buffer.filter = this;
                buffer.renderUnit(image);
                return buffer.createImage();
            };

            FilterChain.prototype.filter = function (pixels) {
                var length = this.filters.length;
                for (var i = 0; i < length; i++)
                    this.filters[i].filter(pixels);
            };
            return FilterChain;
        })();
        ImageFilter.FilterChain = FilterChain;

        var Filter = (function () {
            function Filter(game) {
                this.opt = {};
                this.game = game;
            }
            Filter.prototype.filter = function (pixels) {
            };

            Filter.prototype.getOption = function (name, defaultValue) {
                if (this.opt[name] === undefined)
                    return defaultValue;
                return this.opt[name];
            };

            Filter.prototype.findColorDifference = function (dif, dest, src) {
                return (dif * dest + (1 - dif) * src);
            };

            Filter.prototype.createColor = function (src) {
                src = src.replace(/^#/, '');
                if (src.length == 3)
                    src = src.replace(/(.)/g, '$1$1');

                return src;
            };

            Filter.prototype.applyMatrix = function (pixels, matrix, amount) {
                var data = pixels.data, imgWidth = pixels.width, height = pixels.height;
                var datalen = data.length;
                var bufferedData = new Array(data.length);
                for (var i = 0; i < datalen; i++)
                    bufferedData[i] = data[i];

                var matrixSize = Math.sqrt(matrix.length);

                var kernelRadius = Math.floor(matrixSize / 2);

                for (var i = 1; i < imgWidth - 1; i++) {
                    for (var j = 1; j < height - 1; j++) {
                        var sumR = 0, sumG = 0, sumB = 0;

                        for (var h = 0; h < matrixSize; h++) {
                            for (var w = 0; w < matrixSize; w++) {
                                var i2 = ((i + w - kernelRadius) + (j + h - kernelRadius) * imgWidth) << 2;

                                sumR += bufferedData[i2] * matrix[w + h * matrixSize];
                                sumG += bufferedData[i2 + 1] * matrix[w + h * matrixSize];
                                sumB += bufferedData[i2 + 2] * matrix[w + h * matrixSize];
                            }
                        }

                        var ref = (i + j * imgWidth) << 2;
                        var r = data[ref], g = data[ref + 1], b = data[ref + 2];

                        data[ref] = this.findColorDifference(amount, sumR, r);
                        data[ref + 1] = this.findColorDifference(amount, sumG, g);
                        data[ref + 2] = this.findColorDifference(amount, sumB, b);
                    }
                }

                return (pixels);
            };

            Filter.prototype.checkRGBBoundary = function (val) {
                if (val < 0)
                    return 0;
else if (val > 255)
                    return 255;

                return val;
            };
            return Filter;
        })();
        ImageFilter.Filter = Filter;

        var UniversalTransitionFilter = (function (_super) {
            __extends(UniversalTransitionFilter, _super);
            function UniversalTransitionFilter(game, image, amount, repeat) {
                _super.call(this, game);
                this.opt.amount = amount;
                this.opt.image = image;
                this.opt.repeat = repeat;
            }
            UniversalTransitionFilter.prototype.getImageData = function (image, canvas) {
                var context;
                if (!canvas) {
                    canvas = window.createCanvas(image.width, image.height);
                    context = canvas.getContext("2d");
                    context.drawImage(image, 0, 0);
                } else {
                    context = canvas.getContext("2d");
                }
                return context.getImageData(0, 0, image.width, image.height);
            };

            UniversalTransitionFilter.prototype.createRuleImage = function () {
                var image = this.opt.image;
                if (image instanceof ImageData) {
                    this.ruleImage = image;
                } else if (image instanceof HTMLCanvasElement) {
                    this.ruleImage = this.getImageData(image, image);
                } else if (image instanceof HTMLImageElement || image instanceof HTMLVideoElement) {
                    this.ruleImage = this.getImageData(image);
                } else {
                    var sprite = image.createSprite();
                    this.ruleImage = this.getImageData(sprite.image);
                }
            };

            UniversalTransitionFilter.prototype.createMask = function () {
                var mask;
                var a = (this.getImageData(this.opt.mask1)).data;
                var b = (this.getImageData(this.opt.mask2)).data;
                var d = this.ruleImage.data;
                mask = {};
                var enableCount = 0;
                for (var i = 0, len = a.length; i < len; i += 4) {
                    if (a[i] == b[i] && a[i + 1] == b[i + 1] && a[i + 2] == b[i + 2] && a[i + 3] == b[i + 3])
                        mask[i] = 1;
else
                        mask[i] = 0;
                }
                this.mask = mask;
                return mask;
            };

            UniversalTransitionFilter.prototype.filter = function (pixels) {
                if (!this.ruleImage)
                    this.createRuleImage();

                var amount = this.getOption("amount", 255);
                var repeat = this.getOption("repeat", false);

                var w = pixels.width;
                var h = pixels.height;
                var w2 = this.ruleImage.width;
                var h2 = this.ruleImage.height;
                var data = pixels.data;
                var data2 = this.ruleImage.data;
                var mask;

                if (this.opt.mask1 && this.opt.mask2)
                    mask = (this.mask) ? this.mask : this.createMask();

                if (w == w2 && h == h2) {
                    for (var i = 0, length = data.length; i < length >> 2; i++) {
                        var index = i << 2;
                        if (mask && mask[index]) {
                            if (this.opt.maskDraw) {
                                continue;
                            } else {
                                data[index + 3] = 0;
                                continue;
                            }
                        }
                        data[index + 3] = Math.round(data[index + 3] / 255 * Math.max(0, data2[index] - amount));
                    }
                } else if (repeat) {
                    for (var x = 0; x < w; x++) {
                        for (var y = 0; y < h; y++) {
                            var index = (x + y * w) * 4;
                            if (mask && mask[index]) {
                                if (this.opt.maskDraw) {
                                    continue;
                                } else {
                                    data[index + 3] = 0;
                                    continue;
                                }
                            }
                            var x2 = x % w2;
                            var y2 = y % h2;
                            var index2 = (x2 + y2 * w2) * 4;
                            data[index + 3] = Math.round(data[index + 3] / 255 * Math.max(0, data2[index2] - amount));
                        }
                    }
                } else {
                    var xPer = Math.round(w2 / w * 100) / 100;
                    var yPer = Math.round(h2 / h * 100) / 100;
                    for (var x = 0; x < w; x++) {
                        for (var y = 0; y < h; y++) {
                            var index = (x + y * w) * 4;
                            if (mask && mask[index]) {
                                if (this.opt.maskDraw) {
                                    continue;
                                } else {
                                    data[index + 3] = 0;
                                    continue;
                                }
                            }
                            var x2 = Math.round(xPer * x);
                            var y2 = Math.round(yPer * y);
                            var index2 = (x2 + y2 * w2) * 4;
                            data[index + 3] = Math.round(data[index + 3] / 255 * Math.max(0, data2[index2] - amount));
                        }
                    }
                }
            };
            return UniversalTransitionFilter;
        })(Filter);
        ImageFilter.UniversalTransitionFilter = UniversalTransitionFilter;

        var ReverseUniversalTransitionFilter = (function (_super) {
            __extends(ReverseUniversalTransitionFilter, _super);
            function ReverseUniversalTransitionFilter() {
                _super.apply(this, arguments);
            }
            ReverseUniversalTransitionFilter.prototype.createImageData = function (width, height) {
                var canvas = window.createCanvas(width, height);
                var context = canvas.getContext("2d");
                return context.createImageData(width, height);
            };

            ReverseUniversalTransitionFilter.prototype.createRuleImage = function () {
                _super.prototype.createRuleImage.call(this);
                var d = this.ruleImage.data;
                for (var i = 0, length = d.length; i < length >> 2; i++) {
                    var index = i << 2;
                    d[index] = 255 - d[index];
                    d[index + 1] = 255 - d[index + 1];
                    d[index + 2] = 255 - d[index + 2];
                }
            };
            return ReverseUniversalTransitionFilter;
        })(UniversalTransitionFilter);
        ImageFilter.ReverseUniversalTransitionFilter = ReverseUniversalTransitionFilter;

        var GreyscaleFilter = (function (_super) {
            __extends(GreyscaleFilter, _super);
            function GreyscaleFilter(game, opacity) {
                _super.call(this, game);
                this.opt.opacity = opacity;
            }
            GreyscaleFilter.prototype.filter = function (pixels) {
                var opacity = this.getOption("opacity", 1);
                var data = pixels.data;

                for (var i = 0, length = data.length; i < length >> 2; i++) {
                    var index = i << 2;
                    var r = data[index], g = data[index + 1], b = data[index + 2];

                    var val = r * 0.21 + g * 0.71 + b * 0.07;
                    data[index] = this.findColorDifference(opacity, val, r);
                    data[index + 1] = this.findColorDifference(opacity, val, g);
                    data[index + 2] = this.findColorDifference(opacity, val, b);
                }
            };
            return GreyscaleFilter;
        })(Filter);
        ImageFilter.GreyscaleFilter = GreyscaleFilter;

        var SepiaFilter = (function (_super) {
            __extends(SepiaFilter, _super);
            function SepiaFilter(game, opacity) {
                _super.call(this, game);
                this.opt.opacity = opacity;
            }
            SepiaFilter.prototype.filter = function (pixels) {
                var opacity = this.getOption("opacity", 1);
                var data = pixels.data;

                for (var i = 0, length = data.length; i < length >> 2; i++) {
                    var index = i << 2;
                    var r = data[index], g = data[index + 1], b = data[index + 2];
                    data[index] = this.findColorDifference(opacity, r * 0.393 + g * 0.769 + b * 0.189, r);
                    data[index + 1] = this.findColorDifference(opacity, r * 0.349 + g * 0.686 + b * 0.168, g);
                    data[index + 2] = this.findColorDifference(opacity, r * 0.272 + g * 0.534 + b * 0.131, b);
                }
            };
            return SepiaFilter;
        })(Filter);
        ImageFilter.SepiaFilter = SepiaFilter;

        var TintFilter = (function (_super) {
            __extends(TintFilter, _super);
            function TintFilter(game, color, opacity) {
                _super.call(this, game);
                this.opt.color = color;
                this.opt.opacity = opacity;
            }
            TintFilter.prototype.filter = function (pixels) {
                var opacity = this.getOption("opacity", 1);
                var color = this.getOption("color", "#f00");
                var data = pixels.data;

                var src = parseInt(this.createColor(color), 16);
                var r2 = (src & 0xFF0000) >> 16, g2 = (src & 0x00FF00) >> 8, b2 = (src & 0x0000FF);

                for (var i = 0, length = data.length; i < length >> 2; i++) {
                    var index = i << 2;
                    var r = data[index], g = data[index + 1], b = data[index + 2];
                    data[index] = this.findColorDifference(opacity, r2, r);
                    data[index + 1] = this.findColorDifference(opacity, g2, g);
                    data[index + 2] = this.findColorDifference(opacity, b2, b);
                }
            };
            return TintFilter;
        })(Filter);
        ImageFilter.TintFilter = TintFilter;

        var EdgesFilter = (function (_super) {
            __extends(EdgesFilter, _super);
            function EdgesFilter(game, amount) {
                _super.call(this, game);
                this.opt.amount = amount;
            }
            EdgesFilter.prototype.filter = function (pixels) {
                var matrix = [
                    0,
                    1,
                    0,
                    1,
                    -4,
                    1,
                    0,
                    1,
                    0
                ];
                this.applyMatrix(pixels, matrix, this.getOption("amount", 1));
            };
            return EdgesFilter;
        })(Filter);
        ImageFilter.EdgesFilter = EdgesFilter;

        var EmbossFilter = (function (_super) {
            __extends(EmbossFilter, _super);
            function EmbossFilter(game, amount) {
                _super.call(this, game);
                this.opt.amount = amount;
            }
            EmbossFilter.prototype.filter = function (pixels) {
                var matrix = [
                    -2,
                    -1,
                    0,
                    -1,
                    1,
                    1,
                    0,
                    1,
                    2
                ];
                this.applyMatrix(pixels, matrix, this.getOption("amount", 0.5));
            };
            return EmbossFilter;
        })(Filter);
        ImageFilter.EmbossFilter = EmbossFilter;

        var SharpenFilter = (function (_super) {
            __extends(SharpenFilter, _super);
            function SharpenFilter(game, amount) {
                _super.call(this, game);
                this.opt.amount = amount;
            }
            SharpenFilter.prototype.filter = function (pixels) {
                var matrix = [
                    -1,
                    -1,
                    -1,
                    -1,
                    9,
                    -1,
                    -1,
                    -1,
                    -1
                ];
                this.applyMatrix(pixels, matrix, this.getOption("amount", 0.5));
            };
            return SharpenFilter;
        })(Filter);
        ImageFilter.SharpenFilter = SharpenFilter;

        var MatrixFilter = (function (_super) {
            __extends(MatrixFilter, _super);
            function MatrixFilter(game, amount, matrix) {
                _super.call(this, game);
                this.opt.amount = amount;
                this.opt.matrix = matrix;
            }
            MatrixFilter.prototype.filter = function (pixels) {
                var matrix = this.getOption("matrix", [
                    0.111,
                    0.111,
                    0.111,
                    0.111,
                    0.111,
                    0.111,
                    0.111,
                    0.111,
                    0.111
                ]);
                this.applyMatrix(pixels, matrix, this.getOption("amount", 0.5));
            };
            return MatrixFilter;
        })(Filter);
        ImageFilter.MatrixFilter = MatrixFilter;

        var BlurFilter = (function (_super) {
            __extends(BlurFilter, _super);
            function BlurFilter(game, amount) {
                _super.call(this, game);
                this.opt.amount = amount;
            }
            BlurFilter.prototype.filter = function (pixels) {
                var width = pixels.width;
                var width4 = width << 2;
                var height = pixels.height;
                var amount = this.getOption("amount", 2);

                if (pixels) {
                    var data = pixels.data;

                    var q;
                    if (amount < 0.0)
                        amount = 0.0;

                    if (amount >= 2.5) {
                        q = 0.98711 * amount - 0.96330;
                    } else if (amount >= 0.5) {
                        q = 3.97156 - 4.14554 * Math.sqrt(1.0 - 0.26891 * amount);
                    } else {
                        q = 2 * amount * (3.97156 - 4.14554 * Math.sqrt(1.0 - 0.26891 * 0.5));
                    }

                    var qq = q * q;
                    var qqq = qq * q;
                    var b0 = 1.57825 + (2.44413 * q) + (1.4281 * qq) + (0.422205 * qqq);
                    var b1 = ((2.44413 * q) + (2.85619 * qq) + (1.26661 * qqq)) / b0;
                    var b2 = (-((1.4281 * qq) + (1.26661 * qqq))) / b0;
                    var b3 = (0.422205 * qqq) / b0;
                    var bigB = 1.0 - (b1 + b2 + b3);

                    for (var c = 0; c < 3; c++) {
                        for (var y = 0; y < height; y++) {
                            var index = y * width4 + c;
                            var indexLast = y * width4 + ((width - 1) << 2) + c;
                            var pixel = data[index];
                            var ppixel = pixel;
                            var pppixel = ppixel;
                            var ppppixel = pppixel;
                            for (; index <= indexLast; index += 4) {
                                pixel = bigB * data[index] + b1 * ppixel + b2 * pppixel + b3 * ppppixel;
                                data[index] = pixel;
                                ppppixel = pppixel;
                                pppixel = ppixel;
                                ppixel = pixel;
                            }

                            index = y * width4 + ((width - 1) << 2) + c;
                            indexLast = y * width4 + c;
                            pixel = data[index];
                            ppixel = pixel;
                            pppixel = ppixel;
                            ppppixel = pppixel;
                            for (; index >= indexLast; index -= 4) {
                                pixel = bigB * data[index] + b1 * ppixel + b2 * pppixel + b3 * ppppixel;
                                data[index] = pixel;
                                ppppixel = pppixel;
                                pppixel = ppixel;
                                ppixel = pixel;
                            }
                        }
                    }

                    for (var c = 0; c < 3; c++) {
                        for (var x = 0; x < width; x++) {
                            var index = (x << 2) + c;
                            var indexLast = (height - 1) * width4 + (x << 2) + c;
                            var pixel = data[index];
                            var ppixel = pixel;
                            var pppixel = ppixel;
                            var ppppixel = pppixel;
                            for (; index <= indexLast; index += width4) {
                                pixel = bigB * data[index] + b1 * ppixel + b2 * pppixel + b3 * ppppixel;
                                data[index] = pixel;
                                ppppixel = pppixel;
                                pppixel = ppixel;
                                ppixel = pixel;
                            }

                            index = (height - 1) * width4 + (x << 2) + c;
                            indexLast = (x << 2) + c;
                            pixel = data[index];
                            ppixel = pixel;
                            pppixel = ppixel;
                            ppppixel = pppixel;
                            for (; index >= indexLast; index -= width4) {
                                pixel = bigB * data[index] + b1 * ppixel + b2 * pppixel + b3 * ppppixel;
                                data[index] = pixel;
                                ppppixel = pppixel;
                                pppixel = ppixel;
                                ppixel = pixel;
                            }
                        }
                    }
                }
            };
            return BlurFilter;
        })(Filter);
        ImageFilter.BlurFilter = BlurFilter;

        var MosaicFilter = (function (_super) {
            __extends(MosaicFilter, _super);
            function MosaicFilter(game, size, opacity) {
                _super.call(this, game);
                this.opt.size = size;
                this.opt.opacity = opacity;
            }
            MosaicFilter.prototype.filter = function (pixels) {
                var opacity = this.getOption("opacity", 1);
                var size = Math.round(this.getOption("size", 5));
                var width = pixels.width;

                for (var i = 0, data = pixels.data, length = data.length; i < length >> 2; i++) {
                    var index = i << 2;
                    var r = data[index], g = data[index + 1], b = data[index + 2];

                    var pos = index >> 2;
                    var stepY = Math.floor(pos / width);
                    var stepY1 = stepY % size;
                    var stepX = pos - (stepY * width);
                    var stepX1 = stepX % size;

                    if (stepY1)
                        pos -= stepY1 * width;
                    if (stepX1)
                        pos -= stepX1;
                    pos = pos << 2;

                    data[index] = this.findColorDifference(opacity, data[pos], r);
                    data[index + 1] = this.findColorDifference(opacity, data[pos + 1], g);
                    data[index + 2] = this.findColorDifference(opacity, data[pos + 2], b);
                }
            };
            return MosaicFilter;
        })(Filter);
        ImageFilter.MosaicFilter = MosaicFilter;

        (function (NoiseType) {
            NoiseType[NoiseType["Mono"] = 0] = "Mono";
            NoiseType[NoiseType["Color"] = 1] = "Color";
        })(ImageFilter.NoiseType || (ImageFilter.NoiseType = {}));
        var NoiseType = ImageFilter.NoiseType;

        var NoiseFilter = (function (_super) {
            __extends(NoiseFilter, _super);
            function NoiseFilter(game, amount, type) {
                _super.call(this, game);
                this.opt.amount = amount;
                this.opt.type = type;
            }
            NoiseFilter.prototype.filter = function (pixels) {
                var amount = this.getOption("amount", 30);
                var type = this.getOption("type", NoiseType.Mono);
                var max = (amount >> 1) - 1;
                var min = max - amount;

                for (var i = 0, data = pixels.data, length = data.length; i < length >> 2; i++) {
                    var index = i << 2;
                    var r = data[index], g = data[index + 1], b = data[index + 2];

                    if (type == NoiseType.Mono) {
                        var val = this.game.random(min, max);
                        data[index] = this.checkRGBBoundary(r + val);
                        data[index + 1] = this.checkRGBBoundary(g + val);
                        data[index + 2] = this.checkRGBBoundary(b + val);
                    } else {
                        data[index] = this.checkRGBBoundary(r + this.game.random(min, max));
                        data[index + 1] = this.checkRGBBoundary(g + this.game.random(min, max));
                        data[index + 2] = this.checkRGBBoundary(b + this.game.random(min, max));
                    }
                }
            };
            return NoiseFilter;
        })(Filter);
        ImageFilter.NoiseFilter = NoiseFilter;

        var PosterizeFilter = (function (_super) {
            __extends(PosterizeFilter, _super);
            function PosterizeFilter(game, amount, opacity) {
                _super.call(this, game);
                this.opt.opacity = opacity;
                this.opt.amount = amount;
            }
            PosterizeFilter.prototype.filter = function (pixels) {
                var opacity = this.getOption("opacity", 1);
                var amount = this.getOption("amount", 2);
                var areas = 256 / amount;
                var values = 255 / (amount - 1);

                for (var i = 0, data = pixels.data, length = data.length; i < length >> 2; i++) {
                    var index = i << 2;
                    var r = data[index], g = data[index + 1], b = data[index + 2];

                    data[index] = this.findColorDifference(opacity, Math.round(values * Math.round(r / areas)), r);
                    data[index + 1] = this.findColorDifference(opacity, Math.round(values * Math.round(g / areas)), g);
                    data[index + 2] = this.findColorDifference(opacity, Math.round(values * Math.round(b / areas)), b);
                }
            };
            return PosterizeFilter;
        })(Filter);
        ImageFilter.PosterizeFilter = PosterizeFilter;
    })(jg.ImageFilter || (jg.ImageFilter = {}));
    var ImageFilter = jg.ImageFilter;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var Action = (function () {
        function Action(param) {
            this.added_to_timeline = new jg.Trigger();
            this.removed_from_timeline = new jg.Trigger();
            this.action_tick = new jg.Trigger();

            this.time = null;
            this.frame = 0;
            if (param) {
                for (var key in param) {
                    if (param.hasOwnProperty(key)) {
                        if (param[key] != null) {
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
            if (this.time != null && remaining <= 0) {
                this.frame = this.time;
                p.timeline.next(-remaining);
            } else {
                this.frame += p.elapsed;
            }
        };
        return Action;
    })();
    jg.Action = Action;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var ParallelAction = (function (_super) {
        __extends(ParallelAction, _super);
        function ParallelAction(param) {
            _super.call(this, param);
            this.actions = [];
            this.endedActions = [];

            this.action_start = new jg.Trigger();
            this.action_start.handle(this, this.parallelActionStart);
        }
        ParallelAction.prototype.addedToTimeline = function (p) {
            _super.prototype.addedToTimeline.call(this, p);
            for (var i = 0, len = this.actions.length; i < len; i++) {
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

                    if (action.action_end)
                        action.action_end.fire({ timeline: this });

                    action.removed_from_timeline.fire({ timeline: this });
                }
            };

            var e = {
                timeline: timeline,
                elapsed: evt.elapsed
            };
            for (i = 0, len = this.actions.length; i < len; i++) {
                this.actions[i].action_tick.fire(e);
            }

            if (this.actions.length === 0) {
                evt.timeline.next(1);
            }
        };

        ParallelAction.prototype.parallelActionStart = function (e) {
            for (var i = 0, len = this.actions.length; i < len; i++) {
                if (this.actions[i].action_start)
                    this.actions[i].action_start.fire(e);
            }
        };
        return ParallelAction;
    })(jg.Action);
    jg.ParallelAction = ParallelAction;
})(jg || (jg = {}));
var jg;
(function (jg) {
    jg.TWEEN_DRAW_OPTION_SETTERS = {};

    var Tween = (function (_super) {
        __extends(Tween, _super);
        function Tween(params) {
            _super.call(this, params);
            this.origin = {};
            this.target = {};
            this.old = {};

            this.props = {};
            var excepted = ["frame", "easing", "time", "callback", "onactiontick", "onactionstart", "onactionend"];
            for (var p in params) {
                if (excepted.indexOf(p) === -1)
                    this.props[p] = params[p];
            }

            if (this.easing == null) {
                this.easing = function (t, b, c, d) {
                    return c * t / d + b;
                };
            }

            this.action_start = new jg.Trigger();
            this.action_start.handle(this, this.actionStart);

            this.action_tick.handleInsert(0, this, this.tweenActionTick);
        }
        Tween.prototype.actionStart = function (e) {
            for (var prop in this.props) {
                if (prop == "filter") {
                    var filter = new this.props[prop].targetClass(this.entity.scene.game);
                    if (!this.entity.filter)
                        this.entity.filter = new jg.ImageFilter.FilterChain();
                    this.entity.filter.add(filter);
                    if (this.props[prop].autoDelete) {
                        this.removed_from_timeline.handleInsert(0, this, function () {
                            if (this.entity.filter) {
                                this.entity.filter.remove(filter);
                                if (this.entity.filter.count() == 0)
                                    delete this.entity.filter;
                                this.entity.updated();
                            }
                        });
                    }
                    this.target[prop] = {};
                    this.origin[prop] = {};
                    this.old[prop] = {};
                    for (var j in this.props[prop]) {
                        if (j == "targetClass" || j == "autoDelete")
                            continue;
                        if (this.props[prop][j].start !== undefined && this.props[prop][j].start != jg.E.prototype.start) {
                            var s = this.props[prop][j].start;
                            filter.opt[j] = s;
                            this.origin[prop][j] = s;
                            this.old[prop][j] = s;
                            this.target[prop][j] = this.props[prop][j].end;
                        } else {
                            filter.opt[j] = this.props[prop][j];
                        }
                    }
                    this.otherTarget = filter;
                    continue;
                }

                if (!jg.TWEEN_DRAW_OPTION_SETTERS[prop] && typeof this.props[prop] === "object") {
                    this.target[prop] = {};
                    this.origin[prop] = {};
                    this.old[prop] = {};
                    for (var j in this.props[prop]) {
                        if (typeof this.props[prop][j] === "function")
                            this.target[prop][j] = this.props[prop][j].call(this.entity);
else
                            this.target[prop][j] = this.props[prop][j];
                        this.origin[prop][j] = this.entity[prop][j];
                        this.old[prop][j] = this.entity[prop][j];
                    }
                    this.otherTarget = this.entity[prop];
                    continue;
                }

                if (typeof this.props[prop] === "function")
                    this.target[prop] = this.props[prop].call(this.entity);
else
                    this.target[prop] = this.props[prop];

                if (jg.TWEEN_DRAW_OPTION_SETTERS[prop])
                    this.origin[prop] = this.entity.getDrawOption(prop);
else
                    this.origin[prop] = this.entity[prop];

                this.old[prop] = this.origin[prop];
            }
        };

        Tween.prototype.tweenActionTick = function (e) {
            var ratio = this.time === 0 ? 1 : this.easing(Math.min(this.time, this.frame + e.elapsed), 0, 1, this.time) - this.easing(this.frame, 0, 1, this.time);

            for (var prop in this.target) {
                if (this[prop] === undefined)
                    continue;

                if (jg.TWEEN_DRAW_OPTION_SETTERS[prop]) {
                    var f = jg.TWEEN_DRAW_OPTION_SETTERS[prop];
                    this.old[prop] = f(this.entity, prop, this.old[prop], this.target[prop], this.origin[prop], ratio);
                } else if (prop == "filter") {
                    for (var j in this.target[prop]) {
                        this.otherTarget.opt[j] = this.old[prop][j] + (this.target[prop][j] - this.origin[prop][j]) * ratio;
                        if (Math.abs(this.otherTarget.opt[j]) < 10e-8)
                            this.otherTarget.opt[j] = 0;
                        this.old[prop][j] = this.otherTarget.opt[j];
                    }
                } else if (this.otherTarget) {
                    for (var j in this.target[prop]) {
                        this.otherTarget[j] = this.old[prop][j] + (this.target[prop][j] - this.origin[prop][j]) * ratio;
                        if (Math.abs(this.otherTarget[j]) < 10e-8)
                            this.otherTarget[j] = 0;
                        this.old[prop][j] = this.otherTarget[j];
                    }
                } else {
                    this.entity[prop] = this.old[prop] + (this.target[prop] - this.origin[prop]) * ratio;
                    if (Math.abs(this.entity[prop]) < 10e-8)
                        this.entity[prop] = 0;

                    this.old[prop] = this.entity[prop];
                }
            }
            this.entity.updated();
        };
        return Tween;
    })(jg.Action);
    jg.Tween = Tween;
})(jg || (jg = {}));

for (var p in jg.ENTITY_OPTIONS_DEFAULT_VALUES) {
    if (typeof jg.ENTITY_OPTIONS_DEFAULT_VALUES[p] == "object") {
        if (p == "translate") {
            jg.TWEEN_DRAW_OPTION_SETTERS[p] = function (entity, name, old, target, origin, ratio) {
                var ret = {
                    x: old.x + (target.x - origin.x) * ratio,
                    y: old.y + (target.y - origin.y) * ratio
                };
                entity.setDrawOption(name, ret);
                return ret;
            };
        } else if (p == "transform") {
            jg.TWEEN_DRAW_OPTION_SETTERS[p] = function (entity, name, old, target, origin, ratio) {
                throw "unsupported transform tween";
            };
        } else if (p == "scale") {
            jg.TWEEN_DRAW_OPTION_SETTERS[p] = function (entity, name, old, target, origin, ratio) {
                var ret = {
                    x: old.x + (target.x - origin.x) * ratio,
                    y: old.y + (target.y - origin.y) * ratio
                };
                entity.setDrawOption(name, ret);
                return ret;
            };
        }
    } else {
        jg.TWEEN_DRAW_OPTION_SETTERS[p] = function (entity, name, old, target, origin, ratio) {
            var ret = old + (target - origin) * ratio;
            if (Math.abs(ret) < 10e-8) {
                ret = 0;
            }
            entity.setDrawOption(name, ret);
            return ret;
        };
    }
}
var jg;
(function (jg) {
    var Timeline = (function () {
        function Timeline(entity) {
            this.entity = entity;
            this.queue = [];
            this.paused = false;
            this.looped = false;
            this._parallel = null;
            this._activated = false;
        }
        Timeline.prototype._deactivateTimeline = function (force) {
            var _this = this;
            if (force || this._activated) {
                this._activated = false;
                if (this.entity.scene)
                    this.entity.scene.game.update.remove(this, this.tick);
else
                    this.entity.addActiveQueue(function () {
                        _this.entity.scene.game.update.remove(_this, _this.tick);
                    });
            }
        };

        Timeline.prototype._activateTimeline = function (force) {
            var _this = this;
            if (force || (!this._activated && !this.paused)) {
                if (this.entity.scene)
                    this.entity.scene.game.update.handle(this, this.tick);
else
                    this.entity.addActiveQueue(function () {
                        _this.entity.scene.game.update.handle(_this, _this.tick);
                    });
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
            if (!action)
                return;
            if (action.action_end) {
                action.action_end.fire({ timeline: this });
            }

            if (this.queue.length === 0 && !this.looped) {
                action.removed_from_timeline.fire({ timeline: this });
                this._deactivateTimeline(true);
                return;
            }

            if (this.looped) {
                action.removed_from_timeline.fire({ timeline: this });
                action.frame = 0;

                this.add(action);
            } else {
                action.removed_from_timeline.fire({ timeline: this });
            }
            if (remainingTime > 0 || (this.queue[0] && this.queue[0].time === 0)) {
                this.tick(remainingTime);
            }
        };

        Timeline.prototype.tick = function (t) {
            if (this.paused) {
                return;
            }
            if (this.queue.length > 0) {
                var action = this.queue[0];
                if (action.frame === 0) {
                    if (action.action_start) {
                        action.action_start.fire({ timeline: this });
                    }
                }

                action.action_tick.fire({
                    timeline: this,
                    elapsed: (this.isFrameBased) ? 1 : t
                });
            }
        };

        Timeline.prototype.add = function (action) {
            if (!this._activated) {
                this._activateTimeline(true);
            }
            if (this._parallel) {
                this._parallel.actions.push(action);
                this._parallel = null;
            } else {
                this.queue.push(action);
            }
            action.frame = 0;

            action.added_to_timeline.fire({ timeline: this });

            return this;
        };

        Timeline.prototype.action = function (params) {
            return this.add(new jg.Action(params));
        };

        Timeline.prototype.tween = function (params) {
            return this.add(new jg.Tween(params));
        };

        Timeline.prototype.clear = function () {
            for (var i = 0, len = this.queue.length; i < len; i++) {
                this.queue[i].removed_from_timeline.fire({ timeline: this });
            }
            this.queue = [];
            this._deactivateTimeline();
            return this;
        };

        Timeline.prototype.skip = function (frames) {
            var e = {};
            if (this.isFrameBased) {
                e.elapsed = 1;
            } else {
                e.elapsed = frames;
                frames = 1;
            }
            while (frames--) {
                this.tick(e);
            }
            return this;
        };

        Timeline.prototype.pause = function () {
            if (!this.paused) {
                this.paused = true;
                this._deactivateTimeline();
            }
            return this;
        };

        Timeline.prototype.resume = function () {
            if (this.paused) {
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
            this.add(new jg.Action({
                time: time
            }));
            return this;
        };

        Timeline.prototype.then = function (func) {
            var _this = this;
            var action = new jg.Action({ time: 0 });
            action.action_tick.handleInsert(0, action, function (e) {
                func.call(_this.entity, e);
            });
            this.add(action);
            return this;
        };

        Timeline.prototype.frame = function (wait, frame) {
            var s = this.entity;
            if (frame == undefined) {
                this.then(function () {
                    s.frame = wait;
                    s.changeFrame();
                });
            } else {
                this.delay(wait).then(function () {
                    s.frame = frame;
                    s.changeFrame();
                });
            }
            return this;
        };

        Timeline.prototype.fno = function (wait, fno) {
            var s = this.entity;
            if (fno == undefined) {
                this.then(function () {
                    s.fno = wait;
                    s.changeFrame();
                });
            } else {
                this.delay(wait).then(function () {
                    s.fno = fno;
                    s.changeFrame();
                });
            }
            return this;
        };

        Timeline.prototype.cue = function (cue) {
            var ptr = 0;
            for (var frame in cue) {
                var f = parseInt(frame);
                if (cue.hasOwnProperty(frame)) {
                    this.delay(f - ptr);
                    this.then(cue[frame]);
                    ptr = f;
                }
            }
        };

        Timeline.prototype.repeat = function (func, time) {
            var action = new jg.Action({ time: time });
            action.action_tick.handle(action, function (e) {
                func.call(action, e);
            });
            return this;
        };

        Timeline.prototype.and = function () {
            var last = this.queue.pop();
            if (last instanceof jg.ParallelAction) {
                this._parallel = last;
                this.queue.push(last);
            } else {
                var parallel = new jg.ParallelAction();
                parallel.actions.push(last);
                this.queue.push(parallel);
                this._parallel = parallel;
            }
            return this;
        };

        Timeline.prototype.waitUntil = function (func) {
            var _this = this;
            var action = new jg.Action();
            action.action_start = new jg.Trigger();

            action.action_tick.handle(action, function (e) {
                if (func.call(action, e))
                    _this.next(0);
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

        Timeline.prototype.scrollTo = function (x, y, time, easing) {
            if (!this.entity.scroll)
                this.entity.scrollTo(0, 0);
            return this.tween({
                scroll: { x: x, y: y },
                time: time,
                easing: easing
            });
        };

        Timeline.prototype.scrollX = function (x, time, easing) {
            if (!this.entity.scroll)
                this.entity.scrollTo(0, 0);
            return this.tween({
                scroll: { x: x },
                time: time,
                easing: easing
            });
        };

        Timeline.prototype.scrollY = function (y, time, easing) {
            if (!this.entity.scroll)
                this.entity.scrollTo(0, 0);
            return this.tween({
                scroll: { y: y },
                time: time,
                easing: easing
            });
        };

        Timeline.prototype.scrollBy = function (x, y, time, easing) {
            if (!this.entity.scroll)
                this.entity.scrollTo(0, 0);
            return this.tween({
                scroll: {
                    x: function () {
                        return this.scroll ? this.scroll.x + x : x;
                    },
                    y: function () {
                        return this.scroll ? this.scroll.y + y : y;
                    }
                },
                time: time,
                easing: easing
            });
        };

        Timeline.prototype.fadeTo = function (opacity, time, easing) {
            this.tween({
                opacity: opacity,
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
                this.hide();
            });
        };

        Timeline.prototype.show = function () {
            return this.then(function () {
                this.show();
            });
        };

        Timeline.prototype.resizeTo = function (size, time, easing, easing2) {
            if (typeof easing === "number") {
                return this.tween({
                    width: size,
                    height: time,
                    time: easing,
                    easing: easing2
                });
            }
            return this.tween({
                width: size,
                height: size,
                time: time,
                easing: easing
            });
        };

        Timeline.prototype.resizeBy = function (size, time, easing, easing2) {
            if (typeof easing === "number") {
                return this.tween({
                    width: function () {
                        return this.width + size;
                    },
                    height: function () {
                        return this.height + time;
                    },
                    time: easing,
                    easing: easing2
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

        Timeline.prototype.scaleTo = function (scale, time, easing, easing2) {
            if (typeof easing === "number") {
                return this.tween({
                    scale: { x: scale, y: time },
                    time: easing,
                    easing: easing2
                });
            }
            return this.tween({
                scale: { x: scale, y: scale },
                time: time,
                easing: easing
            });
        };

        Timeline.prototype.scaleBy = function (scale, time, easing, easing2) {
            if (typeof easing === "number") {
                return this.tween({
                    scale: function () {
                        var _scale = this.getDrawOption("scale");
                        return {
                            x: _scale.x * scale,
                            y: _scale.y * time
                        };
                    },
                    time: easing,
                    easing: easing2
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

        Timeline.prototype.filter = function (targetClass, props, time, easing) {
            var filterVal = { targetClass: targetClass, autoDelete: true };
            for (var i in props)
                filterVal[i] = props[i];
            return this.tween({
                filter: filterVal,
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
    jg.Timeline = Timeline;

    Timeline.prototype.isFrameBased = false;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var JGUtil = (function () {
        function JGUtil() {
        }
        JGUtil.autoStop = function () {
            var games = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                games[_i] = arguments[_i + 0];
            }
            games.forEach(function (game) {
                game.renderer.handler.addEventListener("focus", JGUtil.proxy(function () {
                    this.resume();
                }, game), false);
                game.renderer.handler.addEventListener("blur", JGUtil.proxy(function () {
                    this.end();
                }, game), false);

                if (document.activeElement !== game.renderer.handler) {
                    var initEnd = function () {
                        this.end();
                        game.loaded.remove(this, initEnd);
                    };
                    if (game.scene instanceof jg.LoadingScene)
                        game.loaded.handle(game, initEnd);
else
                        initEnd.call(game);
                }
            });
        };

        JGUtil.getCenterPoint = function (p) {
            var a = p;
            if (a.width && a.height) {
                return {
                    x: p.x + a.width / 2,
                    y: p.y + a.height / 2
                };
            }
            return p;
        };

        JGUtil.getMargin = function (p) {
            var a = p;
            if (a.width && a.height) {
                return {
                    x: a.width / 2,
                    y: a.height / 2
                };
            }
            return { x: 0, y: 0 };
        };

        JGUtil.intersect = function (p1, p2) {
            var a1 = p1;
            var a2 = p2;
            if (a1.width && a1.height) {
                if (a2.width && a2.height) {
                    return a1.x < (a2.x + a2.width) && a2.x < (a1.x + a1.width) && a1.y < (a2.y + a2.height) && a2.y < (a1.y + a1.height);
                } else {
                    return a2.x >= a1.x && a2.x < (a1.x + a1.width) && a2.y >= a1.y && a2.y < (a1.y + a1.height);
                }
            } else if (a2.width && a2.height) {
                return a1.x >= a2.x && a1.x < (a2.x + a2.width) && a1.y >= a2.y && a1.y < (a2.y + a2.height);
            }

            return p1.x == p2.x && p1.y == p2.y;
        };

        JGUtil.getDistance = function (p1, p2) {
            var _p1 = JGUtil.getCenterPoint(p1);
            var _p2 = JGUtil.getCenterPoint(p2);
            return {
                x: Math.abs(_p1.x - _p2.x),
                y: Math.abs(_p1.y - _p2.y)
            };
        };

        JGUtil.getMovePoint = function (p1, p2, power, maxMove) {
            var _p1 = JGUtil.getCenterPoint(p1);
            var _p2 = JGUtil.getCenterPoint(p2);

            if (!power)
                power = 1;
            var ret = {
                x: (_p1.x - _p2.x) * power,
                y: (_p1.y - _p2.y) * power
            };
            var absx = Math.abs(ret.x);
            var absy = Math.abs(ret.y);
            var max = Math.max(absx, absy);
            var xper = absx / max;
            var yper = absy / max;
            if (maxMove) {
                if (absx > maxMove || absy > maxMove) {
                    if (ret.x < 0)
                        ret.x = -maxMove * xper;
else
                        ret.x = maxMove * xper;
                    if (ret.y < 0)
                        ret.y = -maxMove * yper;
else
                        ret.y = maxMove * yper;
                }
            }
            return ret;
        };

        JGUtil.getDirectionAngle = function (p1, p2, minDistance) {
            var _p1 = JGUtil.getCenterPoint(p1);
            var _p2 = JGUtil.getCenterPoint(p2);
            var xp = Math.abs(_p1.x - _p2.x);
            var yp = Math.abs(_p1.y - _p2.y);

            if (minDistance && Math.max(xp, yp) < minDistance)
                return null;

            if (xp > yp)
                return (_p1.x > _p2.x) ? jg.Angle.Left : jg.Angle.Right;
else
                return (_p1.y > _p2.y) ? jg.Angle.Up : jg.Angle.Down;
        };

        JGUtil.getDirectionKeytype = function (p1, p2, minDistance) {
            var _p1 = JGUtil.getCenterPoint(p1);
            var _p2 = JGUtil.getCenterPoint(p2);
            var xp = Math.abs(_p1.x - _p2.x);
            var yp = Math.abs(_p1.y - _p2.y);

            if (minDistance && Math.max(xp, yp) < minDistance)
                return null;

            if (xp > yp)
                return (_p1.x > _p2.x) ? jg.Keytype.Left : jg.Keytype.Right;
else
                return (_p1.y > _p2.y) ? jg.Keytype.Up : jg.Keytype.Down;
        };

        JGUtil.homingX = function (p1, p2, speed, t) {
            var m1 = JGUtil.getMargin(p1);
            var m2 = JGUtil.getMargin(p2);
            var x = p2.x + m2.x - m1.x;
            if (p1.x > x) {
                p1.x -= speed * t;
                if (p1.x < x) {
                    p1.x = x;
                    return true;
                }
                return false;
            } else if (p1.x < x) {
                p1.x += speed * t;
                if (p1.x > x) {
                    p1.x = x;
                    return true;
                }
                return false;
            }
            return true;
        };

        JGUtil.homingY = function (p1, p2, speed, t) {
            var m1 = JGUtil.getMargin(p1);
            var m2 = JGUtil.getMargin(p2);
            var y = p2.y + m2.y - m1.y;
            if (p1.y > y) {
                p1.y -= speed * t;
                if (p1.y < y) {
                    p1.y = y;
                    return true;
                }
                return false;
            } else if (p1.y < y) {
                p1.y += speed * t;
                if (p1.y > y) {
                    p1.y = y;
                    return true;
                }
                return false;
            }
            return true;
        };

        JGUtil.homing = function (p1, p2, speed, t) {
            var m1 = JGUtil.getMargin(p1);
            var m2 = JGUtil.getMargin(p2);
            var p = {
                x: p2.x + m2.x - m1.x,
                y: p2.y + m2.y - m1.y
            };
            var xng, yng;
            if (p1.x > p.x) {
                p1.x -= speed * t;
                if (p1.x < p.x)
                    p1.x = p.x;
else
                    xng = true;
            } else if (p1.x < p.x) {
                p1.x += speed * t;
                if (p1.x > p.x)
                    p1.x = p.x;
else
                    xng = true;
            }

            if (p1.y > p.y) {
                p1.y -= speed * t;
                if (p1.y < p.y)
                    p1.y = p.y;
else
                    yng = true;
            } else if (p1.y < p.y) {
                p1.y += speed * t;
                if (p1.y > p.y)
                    p1.y = p.y;
else
                    yng = true;
            }

            return xng || yng ? false : true;
        };

        JGUtil.orderDrawY = function (target) {
            var e = target.entities, len = e.length;
            for (var i = 1; i < len; i++) {
                for (var j = i; j > 0; j--) {
                    if (e[j].y >= e[j - 1].y)
                        break;

                    var tmp = e[j];
                    e[j] = e[j - 1];
                    e[j - 1] = tmp;
                }
            }
        };

        JGUtil.createLinearGradient = function (rect, colors, offsets) {
            var canvas = window.createCanvas(1, 1);
            var context = canvas.getContext("2d");

            if (typeof rect == "number") {
                rect = new jg.Rectangle(arguments[0], arguments[1], arguments[2], arguments[3]);
                colors = arguments[4];
                offsets = arguments[5];
            }

            if (offsets == undefined) {
                offsets = [];
                var p = 1 / (colors.length - 1);
                for (var i = 0; i < colors.length; i++)
                    offsets.push(i * p);
            }

            var gradient = context.createLinearGradient(rect.left, rect.top, rect.right, rect.bottom);
            for (var i = 0; i < colors.length; i++)
                gradient.addColorStop(offsets[i], colors[i]);

            return gradient;
        };

        JGUtil.createRadialGradient = function (rect, radius1, radius2, colors, offsets) {
            var canvas = window.createCanvas(1, 1);
            var context = canvas.getContext("2d");

            if (typeof rect == "number") {
                rect = new jg.Rectangle(arguments[0], arguments[1], arguments[2], arguments[3]);
                radius1 = arguments[4];
                radius2 = arguments[5];
                colors = arguments[6];
                offsets = arguments[7];
            }

            if (offsets == undefined) {
                offsets = [];
                var p = 1 / (colors.length - 1);
                for (var i = 0; i < colors.length; i++)
                    offsets.push(i * p);
            }

            var gradient = context.createRadialGradient(rect.left, rect.top, radius1, rect.right, rect.bottom, radius2);
            for (var i = 0; i < colors.length; i++)
                gradient.addColorStop(offsets[i], colors[i]);

            return gradient;
        };

        JGUtil.createPattern = function (image, repeat) {
            var canvas = window.createCanvas(1, 1);
            var context = canvas.getContext("2d");
            return context.createPattern(image, repeat == undefined ? "repeat" : repeat);
        };

        JGUtil.isTransformMode = function () {
            if (JGUtil.isStyleScale === undefined) {
                var test = document.createElement("canvas");
                JGUtil.isStyleScale = test.style['webkitTransform'] === undefined;
            }
            return !JGUtil.isStyleScale;
        };

        JGUtil.scaleCanvas = function (canvas, size) {
            if (JGUtil.isTransformMode()) {
                canvas.style['webkitTransformOrigin'] = '0 0';
                canvas.style['webkitTransform'] = 'scale(' + Math.max(size.width / canvas.width, size.height / canvas.height) + ')';
            } else {
                canvas.style.width = size.width + "px";
                canvas.style.height = size.height + "px";
            }
        };

        JGUtil.getBrowser = function () {
            if (JGUtil.browser)
                return JGUtil.browser;

            var ua = navigator.userAgent.toLowerCase();

            var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];

            var ret = {};
            if (match[1]) {
                ret[match[1]] = true;
                ret["version"] = match[2];
            }

            if (ret.chrome)
                ret.webkit = true;
else if (ret.webkit)
                ret.safari = true;

            JGUtil.browser = ret;

            return ret;
        };

        JGUtil.setCrispEdges = function (game, crispEdges) {
            if (crispEdges)
                window["imageSmoothingEnabled"] = crispEdges;
else
                delete window["imageSmoothingEnabled"];
            game.refresh();
        };

        JGUtil.proxy = function (func, self) {
            return function () {
                func.apply(self, arguments);
            };
        };

        JGUtil.createIdProxy = function (id, func, self) {
            var proxy = JGUtil.proxy(func, self);
            JGUtil.idData[id].proxies.push(new ProxyData(func, self, proxy));
            return proxy;
        };

        JGUtil.getIdProxy = function (id, func, self) {
            var proxies = JGUtil.idData[id].proxies;
            for (var i = 0; i < proxies.length; i++)
                if (proxies[i].is(func, self))
                    return proxies[i].proxy;

            return null;
        };

        JGUtil.deleteIdProxy = function (id, func, self) {
            var proxies = JGUtil.idData[id].proxies;
            for (var i = 0; i < proxies.length; i++) {
                if (proxies[i].is(func, self)) {
                    proxies.splice(i, 1);
                    i--;
                }
            }
        };

        JGUtil.generateId = function () {
            if (!JGUtil.idData)
                JGUtil.idData = [];
            JGUtil.idData.push(new IdData());
            return JGUtil.idData.length - 1;
        };

        JGUtil.transpose = function (src) {
            var ret = new Array(src[0].length);
            for (var y = 0, ylen = ret.length; y < ylen; y++)
                ret[y] = new Array(src.length);

            for (var x = 0, xlen = src.length; x < xlen; x++)
                for (var y = 0, ylen = src[x].length; y < ylen; y++)
                    ret[y][x] = src[x][y];

            return ret;
        };
        return JGUtil;
    })();
    jg.JGUtil = JGUtil;

    var IdData = (function () {
        function IdData() {
            this.proxies = [];
        }
        return IdData;
    })();

    var ProxyData = (function () {
        function ProxyData(func, self, proxy) {
            this.func = func;
            this.self = self;
            this.proxy = proxy;
        }
        ProxyData.prototype.is = function (func, self) {
            return this.func == func && this.self == self;
        };
        return ProxyData;
    })();
})(jg || (jg = {}));
var jg;
(function (jg) {
    var Line = (function (_super) {
        __extends(Line, _super);
        function Line(pos, line, color, width) {
            _super.call(this);
            this.x = pos.x;
            this.y = pos.y;
            this.p = [];
            this.p.push({ x: pos.x, y: pos.y });
            if (line) {
                this.p.push({ x: line.x, y: line.y });
                this.updateSize();
            }
            if (color)
                this.setColor(color);
            if (width)
                this.setLineWidth(width);
        }
        Line.prototype.setClip = function (value) {
            this.clip = value;
            if (this.clip)
                this.disableTransform = true;
else
                delete this.disableTransform;
        };

        Line.prototype.updateSize = function () {
            var min = { x: this.p[0].x, y: this.p[0].y };
            var max = { x: this.p[0].x, y: this.p[0].y };
            for (var i = 1; i < this.p.length; i++) {
                var x = this.p[0].x + this.p[i].x;
                var y = this.p[0].y + this.p[i].y;
                if (min.x > x)
                    min.x = x;
else if (max.x < x)
                    max.x = x;
                if (min.y > y)
                    min.y = y;
else if (max.y < y)
                    max.y = y;
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
            if (closePath !== undefined)
                this.closePath = closePath;
            if (stroke !== undefined)
                this.stroke = stroke;
            return this;
        };

        Line.prototype.addLine = function (line, y) {
            if (arguments.length == 2)
                line = { x: line, y: y };

            this.p.push(line);
            this.updateSize();
            return this;
        };

        Line.prototype.addQuadraticLine = function (cp, p) {
            var qp;
            if (arguments.length == 4) {
                qp = {
                    cp1x: arguments[0],
                    cp1y: arguments[1],
                    x: arguments[2],
                    y: arguments[3]
                };
            } else if (arguments.length == 2) {
                qp = {
                    cp1x: cp.x,
                    cp1y: cp.y,
                    x: p.x,
                    y: p.y
                };
            } else
                qp = cp;

            this.p.push(qp);
            this.updateSize();

            return this;
        };

        Line.prototype.addBezierLine = function (cp1, cp2, p) {
            var bp;
            if (arguments.length == 6) {
                bp = {
                    cp1x: arguments[0],
                    cp1y: arguments[1],
                    cp2x: arguments[2],
                    cp2y: arguments[3],
                    x: arguments[4],
                    y: arguments[5]
                };
            } else if (arguments.length == 3) {
                bp = {
                    cp1x: cp1.x,
                    cp1y: cp1.y,
                    cp2x: cp2.x,
                    cp2y: cp2.y,
                    x: p.x,
                    y: p.y
                };
            } else
                bp = cp1;

            this.p.push(bp);
            this.updateSize();

            return this;
        };

        Line.prototype.addArc = function (p, p2, radius) {
            var ap;
            if (arguments.length == 5) {
                ap = {
                    x: arguments[0],
                    y: arguments[1],
                    x2: arguments[2],
                    y2: arguments[3],
                    radius: arguments[4]
                };
            } else if (arguments.length == 3) {
                ap = {
                    x: p.x,
                    y: p.y,
                    x2: p2.x,
                    y2: p2.y,
                    radius: radius
                };
            } else
                ap = p;

            this.p.push(ap);
            this.updateSize();
        };

        Line.prototype.add = function () {
            if (arguments.length == 1)
                return this.addLine.apply(this, arguments);
            if (arguments.length == 2)
                return this.addQuadraticLine.apply(this, arguments);
            if (arguments.length == 3)
                return this.addBezierLine.apply(this, arguments);
            throw "invalid arguments";
        };

        Line.prototype.draw = function (context) {
            context.beginPath();
            if (this.clip) {
                context.save();
                context.translate(this.x, this.y);
                if (this.options)
                    this.scene.game.renderer.useDrawOption(this, context);
            }
            context.moveTo(0, 0);
            for (var i = 1; i < this.p.length; i++) {
                var p = this.p[i];
                if (p.cp2x !== undefined) {
                    context.bezierCurveTo(p.cp1x, p.cp1y, p.cp2x, p.cp2y, p.x, p.y);
                } else if (p.cp1x !== undefined) {
                    context.quadraticCurveTo(p.cp1x, p.cp1y, p.x, p.y);
                } else {
                    if ((this.p[i]).radius !== undefined) {
                        var ap = this.p[i];
                        context.arcTo(ap.x, ap.y, ap.x2, ap.y2, ap.radius);
                    } else
                        context.lineTo(p.x, p.y);
                }
            }
            if (this.closePath)
                context.closePath();

            if (this.clip) {
                context.restore();
                context.clip();
            } else if (this.fill) {
                context.fill();
                if (this.stroke)
                    context.stroke();
            } else
                context.stroke();
        };
        return Line;
    })(jg.E);
    jg.Line = Line;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var Effect = (function () {
        function Effect(method) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            this.method = method;
            this.arguments = args;
        }
        Effect.sceneEffect = function (game, scene1, scene2, type, callback, endOldScene) {
            var effect = new EffectScene(game, scene1, scene2);
            if (endOldScene) {
                game.endScene();
                if (game._exit)
                    return;
            }
            game.changeScene(effect);
            effect.effected.handle(game, callback);
            if (typeof type == "number") {
                switch (type) {
                    case jg.EffectType.Fade:
                        effect.fade(Effect.color);
                        break;
                    case jg.EffectType.Mosaic:
                        effect.mosaic();
                        break;
                    case jg.EffectType.Blur:
                        effect.blur();
                        break;
                    case jg.EffectType.SlideUp:
                        effect.slide(jg.Angle.Up);
                        break;
                    case jg.EffectType.SlideDown:
                        effect.slide(jg.Angle.Down);
                        break;
                    case jg.EffectType.SlideLeft:
                        effect.slide(jg.Angle.Left);
                        break;
                    case jg.EffectType.SlideRight:
                        effect.slide(jg.Angle.Right);
                        break;
                    case jg.EffectType.WipeUp:
                        effect.wipe(jg.Angle.Up);
                        break;
                    case jg.EffectType.WipeDown:
                        effect.wipe(jg.Angle.Down);
                        break;
                    case jg.EffectType.WipeLeft:
                        effect.wipe(jg.Angle.Left);
                        break;
                    case jg.EffectType.WipeRight:
                        effect.wipe(jg.Angle.Right);
                        break;
                    case jg.EffectType.WipeFadeUp:
                        effect.wipeFade(jg.Angle.Up);
                        break;
                    case jg.EffectType.WipeFadeDown:
                        effect.wipeFade(jg.Angle.Down);
                        break;
                    case jg.EffectType.WipeFadeLeft:
                        effect.wipeFade(jg.Angle.Left);
                        break;
                    case jg.EffectType.WipeFadeRight:
                        effect.wipeFade(jg.Angle.Right);
                        break;
                    case jg.EffectType.BoxOut:
                        effect.boxOut(0, Effect.color);
                        break;
                    case jg.EffectType.BoxOut45:
                        effect.boxOut(45, Effect.color);
                        break;
                    case jg.EffectType.BoxIn:
                        effect.boxIn(0, Effect.color);
                        break;
                    case jg.EffectType.BoxIn45:
                        effect.boxIn(45, Effect.color);
                        break;
                    case jg.EffectType.ArcIn:
                        effect.arcIn(Effect.color);
                        break;
                    case jg.EffectType.ArcOut:
                        effect.arcOut(Effect.color);
                        break;
                }
            } else {
                type.callEffect(effect);
            }
        };

        Effect.prototype.callEffect = function (scene) {
            scene[this.method].apply(scene, this.arguments);
        };
        Effect.time = 1000;
        return Effect;
    })();
    jg.Effect = Effect;

    var EffectScene = (function (_super) {
        __extends(EffectScene, _super);
        function EffectScene(game, scene1, scene2) {
            _super.call(this, game);
            var sp1 = this.captureScene(scene1);
            var sp2 = this.captureScene(scene2);
            sp2.hide();
            sp1.x = sp1.y = sp2.x = sp2.y = 0;
            this.append(sp1);
            this.append(sp2);
            this.sp1 = sp1;
            this.sp2 = sp2;
            this.effected = new jg.Trigger();
        }
        EffectScene.prototype.captureScene = function (scene) {
            var buffer = new jg.BufferedRenderer(this.game);
            buffer.renderScene(scene);
            return buffer.createSprite();
        };

        EffectScene.prototype.fade = function (color) {
            var _this = this;
            if (color) {
                this._fadeColor(color);
                return;
            }
            this.sp1.tl().fadeOut(Effect.time).removeFromScene();
            this.sp2.tl().fadeIn(Effect.time).then(function () {
                _this.effected.fire();
            });
        };

        EffectScene.prototype._fadeColor = function (color) {
            var _this = this;
            var shape = new jg.Shape(this.sp1.width, this.sp1.height, jg.ShapeStyle.Fill, color);
            shape.hide();
            this.root.append(shape);
            var t = Effect.time / 2;
            this.sp1.tl().fadeOut(t);
            shape.tl().fadeIn(t).fadeOut(t).removeFromScene();
            this.sp2.tl().delay(t).fadeIn(t).then(function () {
                _this.effected.fire();
            });
        };

        EffectScene.prototype.mosaic = function () {
            var _this = this;
            var t = Effect.time / 2;
            this.sp1.tl().filter(jg.ImageFilter.MosaicFilter, { size: { start: 1, end: 64 } }, t).removeFromScene();
            this.sp2.tl().delay(t).show().filter(jg.ImageFilter.MosaicFilter, { size: { start: 64, end: 1 } }, t).then(function () {
                _this.effected.fire();
            });
        };

        EffectScene.prototype.blur = function () {
            var _this = this;
            var t = Effect.time / 2;
            this.sp1.tl().filter(jg.ImageFilter.BlurFilter, { amount: { start: 1, end: 20 } }, t, jg.Easing.CUBIC_EASEIN).removeFromScene();
            this.sp2.tl().delay(t).show().filter(jg.ImageFilter.BlurFilter, { amount: { start: 20, end: 1 } }, t, jg.Easing.CUBIC_EASEOUT).then(function () {
                _this.effected.fire();
            });
        };

        EffectScene.prototype.slide = function (angle) {
            var _this = this;
            var t = Effect.time;
            switch (angle) {
                case jg.Angle.Up:
                    this.sp1.tl().moveTo(0, -this.game.height, t).removeFromScene();
                    this.sp2.moveTo(0, this.game.height);
                    this.sp2.tl().show().moveTo(0, 0, t);
                    break;
                case jg.Angle.Down:
                    this.sp1.tl().moveTo(0, this.game.height, t).removeFromScene();
                    this.sp2.moveTo(0, -this.game.height);
                    this.sp2.tl().show().moveTo(0, 0, t);
                    break;
                case jg.Angle.Left:
                    this.sp1.tl().moveTo(-this.game.width, 0, t).removeFromScene();
                    this.sp2.moveTo(this.game.width, 0);
                    this.sp2.tl().show().moveTo(0, 0, t);
                    break;
                case jg.Angle.Right:
                    this.sp1.tl().moveTo(this.game.width, 0, t).removeFromScene();
                    this.sp2.moveTo(-this.game.width, 0);
                    this.sp2.tl().show().moveTo(0, 0, t);
                    break;
            }
            this.sp2.tl().then(function () {
                _this.effected.fire();
            });
        };

        EffectScene.prototype.wipe = function (angle) {
            var _this = this;
            var t = Effect.time;
            this.sp2.tl().show();
            var sp = new jg.Shape(this.game.width, 1, jg.ShapeStyle.Fill);
            sp.moveTo(0, 0);
            sp.setClip(true);
            this.root.insert(sp, 1);
            switch (angle) {
                case jg.Angle.Up:
                    sp.width = this.game.width;
                    sp.height = 1;
                    sp.y = this.game.height;
                    sp.tl().resizeTo(this.game.width, this.game.height, t).and().moveTo(0, 0, t);
                    break;
                case jg.Angle.Down:
                    sp.width = this.game.width;
                    sp.height = 1;
                    sp.tl().resizeTo(this.game.width, this.game.height, t);
                    break;
                case jg.Angle.Left:
                    sp.width = 1;
                    sp.height = this.game.height;
                    sp.x = this.game.width;
                    sp.tl().resizeTo(this.game.width, this.game.height, t).and().moveTo(0, 0, t);
                    break;
                case jg.Angle.Right:
                    sp.width = 1;
                    sp.height = this.game.height;
                    sp.tl().resizeTo(this.game.width, this.game.height, t);
                    break;
            }
            sp.tl().then(function () {
                _this.effected.fire();
            });
        };

        EffectScene.prototype.wipeFade = function (angle) {
            this.wipe(angle);
            this.sp1.tl().fadeOut(Effect.time);
        };

        EffectScene.prototype.boxOut = function (rotate, color) {
            var _this = this;
            var t = Effect.time;
            this.sp2.tl().fadeIn(t);
            var sp = new jg.Shape(1, 1, jg.ShapeStyle.Fill);
            sp.moveTo(this.game.width / 2, this.game.height / 2);
            sp.setClip(true);
            if (rotate)
                sp.setDrawOption("rotate", rotate);

            this.root.insert(sp, 1);

            if (color) {
                var bg = new jg.Shape(this.game.width, this.game.height, jg.ShapeStyle.Fill, color);
                this.root.insert(bg, 1);
                bg.hide();
                bg.tl().fadeIn(t * 0.6);
            }

            if (rotate)
                sp.tl().resizeTo(this.game.width * 2, this.game.height * 2, t).and().moveTo(-this.game.width / 2, -this.game.height / 2, t);
else
                sp.tl().resizeTo(this.game.width, this.game.height, t).and().moveTo(0, 0, t);
            sp.tl().then(function () {
                _this.effected.fire();
            });
        };

        EffectScene.prototype.boxIn = function (rotate, color) {
            var _this = this;
            this.swapScene();
            var t = Effect.time;
            this.sp2.tl().fadeIn(t);
            var sp = new jg.Shape(1, 1, jg.ShapeStyle.Fill);
            if (rotate) {
                sp.moveTo(-this.game.width / 2, -this.game.height / 2);
                sp.width = this.game.width * 2;
                sp.height = this.game.height * 2;
            } else {
                sp.moveTo(0, 0);
                sp.width = this.game.width;
                sp.height = this.game.height;
            }
            sp.setClip(true);
            if (rotate)
                sp.setDrawOption("rotate", rotate);
            this.root.insert(sp, 1);

            if (color) {
                var bg = new jg.Shape(sp.width, sp.height, jg.ShapeStyle.Fill, color);
                bg.moveTo(sp.x, sp.y);
                this.root.append(bg);
                bg.hide();
                bg.tl().fadeIn(t * 0.8).and().resizeTo(1, 1, t).and().moveTo(this.game.width / 2, this.game.height / 2, t);
                if (rotate)
                    bg.setDrawOption("rotate", rotate);
            } else {
                this.sp1.tl().fadeOut(t);
            }

            sp.tl().resizeTo(1, 1, t).and().moveTo(this.game.width / 2, this.game.height / 2, t);
            sp.tl().then(function () {
                _this.effected.fire();
            });
        };

        EffectScene.prototype.arcOut = function (color) {
            var _this = this;
            var t = Effect.time;
            this.sp2.tl().fadeIn(t);
            var sp = new jg.Shape(1, 1, jg.ShapeStyle.Fill, "black", jg.ShapeType.Arc);
            sp.moveTo(this.game.width / 2, this.game.height / 2);
            sp.setClip(true);
            this.root.insert(sp, 1);

            if (color) {
                var bg = new jg.Shape(this.game.width, this.game.height, jg.ShapeStyle.Fill, color);
                this.root.insert(bg, 1);
                bg.hide();
                bg.tl().fadeIn(t * 0.6);
            }

            sp.tl().resizeTo(this.game.width * 2, this.game.height * 2, t).and().moveTo(-this.game.width / 2, -this.game.height / 2, t);
            sp.tl().then(function () {
                _this.effected.fire();
            });
        };

        EffectScene.prototype.arcIn = function (color) {
            var _this = this;
            this.swapScene();
            var t = Effect.time;
            this.sp2.tl().fadeIn(t);
            var sp = new jg.Shape(1, 1, jg.ShapeStyle.Fill, "black", jg.ShapeType.Arc);
            sp.moveTo(-this.game.width / 2, -this.game.height / 2);
            sp.width = this.game.width * 2;
            sp.height = this.game.height * 2;
            sp.setClip(true);
            this.root.insert(sp, 1);

            if (color) {
                var bg = new jg.Shape(sp.width, sp.height, jg.ShapeStyle.Fill, color);
                bg.moveTo(sp.x, sp.y);
                this.root.append(bg);
                bg.hide();
                bg.tl().fadeIn(t * 0.9).and().resizeTo(1, 1, t).and().moveTo(this.game.width / 2, this.game.height / 2, t);
            } else {
                this.sp1.tl().fadeOut(t);
            }

            sp.tl().resizeTo(1, 1, t).and().moveTo(this.game.width / 2, this.game.height / 2, t);
            sp.tl().then(function () {
                _this.effected.fire();
            });
        };

        EffectScene.prototype.universal = function (image, repeat) {
            var _this = this;
            var t = Effect.time;
            this.swapScene();
            this.sp1.tl().filter(jg.ImageFilter.UniversalTransitionFilter, { image: image, repeat: repeat, amount: { start: -255, end: 255 } }, t).removeFromScene();
            this.sp2.tl().show().delay(t).then(function () {
                _this.effected.fire();
            });
        };

        EffectScene.prototype.universalTwin = function (image, repeat) {
            var _this = this;
            var t = Effect.time;
            this.sp1.tl().filter(jg.ImageFilter.UniversalTransitionFilter, { image: image, repeat: repeat, amount: { start: -255, end: 255 } }, t).removeFromScene();
            this.sp2.tl().show().filter(jg.ImageFilter.ReverseUniversalTransitionFilter, { image: image, repeat: repeat, amount: { start: 255, end: -255 } }, t).then(function () {
                _this.effected.fire();
            });
        };

        EffectScene.prototype.universalDelay = function (image, repeat, color) {
            var _this = this;
            var t = Effect.time / 2;
            var shape = new jg.Shape(this.sp1.width, this.sp1.height, jg.ShapeStyle.Fill, color);

            shape.hide();
            this.root.insert(shape, 0);
            this.sp1.tl().filter(jg.ImageFilter.UniversalTransitionFilter, { image: image, repeat: repeat, amount: { start: -255, end: 255 } }, t).removeFromScene();
            shape.tl().fadeIn(t).delay(t).removeFromScene();
            this.sp2.tl().delay(t).show().filter(jg.ImageFilter.UniversalTransitionFilter, { image: image, repeat: repeat, amount: { start: 255, end: -255 } }, t).then(function () {
                _this.effected.fire();
            });
        };

        EffectScene.prototype.getFilter = function (target) {
            if (!target.filter)
                target.filter = new jg.ImageFilter.FilterChain();
            return target.filter;
        };

        EffectScene.prototype.swapScene = function () {
            var tmp = this.root.entities[0];
            this.root.entities[0] = this.root.entities[1];
            this.root.entities[1] = tmp;
        };
        return EffectScene;
    })(jg.Scene);
    jg.EffectScene = EffectScene;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var UIWindow = (function (_super) {
        __extends(UIWindow, _super);
        function UIWindow(width, height, bgImage, padding) {
            _super.call(this);
            this.width = width;
            this.height = height;

            this.padding = padding ? padding : new jg.Rectangle(8, 8, 8, 8);
            this.entities = [];
            if (bgImage) {
                var bg = (bgImage instanceof jg.E) ? bgImage : new jg.Sprite(bgImage);
                this.setBg(this.createBgImage(bg));
            } else {
                this.defaultSkin();
            }
        }
        UIWindow.prototype.getBg = function () {
            return this.entities[0];
        };

        UIWindow.prototype.setBg = function (bg) {
            if (this.bg)
                this.bg.remove();
            this.bg = bg;
            this.insert(bg, 0);
        };

        UIWindow.prototype.createBgImage = function (e, srcPadding, buf) {
            if (!buf)
                buf = new jg.BufferedRenderer(e);
            if (srcPadding === undefined)
                srcPadding = this.padding;
            buf.renderUnit(e);
            if (buf.filter)
                buf.applyFilter(buf.c, buf.size);
            var bg = new jg.E();
            bg.width = this.width;
            bg.height = this.height;
            bg.entities = [];

            var s4_1 = buf.createSprite({ x: 0, y: 0, width: srcPadding.left, height: srcPadding.top });
            s4_1.moveTo(0, 0);
            bg.append(s4_1);
            var s4_2 = buf.createSprite({ x: e.width - srcPadding.right, y: 0, width: srcPadding.right, height: srcPadding.top });
            s4_2.moveTo(this.width - srcPadding.right, 0);
            bg.append(s4_2);
            var s4_3 = buf.createSprite({ x: e.width - srcPadding.right, y: e.height - srcPadding.bottom, width: srcPadding.right, height: srcPadding.bottom });
            s4_3.moveTo(this.width - srcPadding.right, this.height - srcPadding.bottom);
            bg.append(s4_3);
            var s4_4 = buf.createSprite({ x: 0, y: e.height - srcPadding.bottom, width: srcPadding.left, height: srcPadding.bottom });
            s4_4.moveTo(0, this.height - srcPadding.bottom);
            bg.append(s4_4);

            var h4_1 = buf.createSprite({
                x: srcPadding.left,
                y: 0,
                width: e.width - srcPadding.right - srcPadding.left,
                height: srcPadding.top
            });
            h4_1.moveTo(srcPadding.left, 0);
            h4_1.width = this.width - srcPadding.right - srcPadding.left;
            bg.append(h4_1);
            var h4_2 = buf.createSprite({
                x: e.width - srcPadding.right,
                y: srcPadding.top,
                width: srcPadding.right,
                height: e.height - srcPadding.top - srcPadding.bottom
            });
            h4_2.moveTo(this.width - srcPadding.right, srcPadding.top);
            h4_2.height = this.height - srcPadding.top - srcPadding.bottom;
            bg.append(h4_2);
            var h4_3 = buf.createSprite({
                x: srcPadding.left,
                y: e.height - srcPadding.bottom,
                width: e.width - srcPadding.right - srcPadding.left,
                height: srcPadding.bottom
            });
            h4_3.moveTo(srcPadding.left, this.height - srcPadding.bottom);
            h4_3.width = this.width - srcPadding.right - srcPadding.left;
            bg.append(h4_3);
            var h4_4 = buf.createSprite({
                x: 0,
                y: srcPadding.top,
                width: srcPadding.left,
                height: e.height - srcPadding.top - srcPadding.bottom
            });
            h4_4.moveTo(0, srcPadding.top);
            h4_4.height = this.height - srcPadding.top - srcPadding.bottom;
            bg.append(h4_4);

            var center = buf.createSprite({
                x: srcPadding.left,
                y: srcPadding.top,
                width: e.width - srcPadding.left - srcPadding.right,
                height: e.height - srcPadding.top - srcPadding.bottom
            });
            center.moveTo(srcPadding.left, srcPadding.top);
            center.width = this.width - srcPadding.left - srcPadding.right;
            center.height = this.height - srcPadding.top - srcPadding.bottom;
            bg.append(center);

            return bg.createSprite();
        };

        UIWindow.prototype.defaultSkin = function () {
            if (this.bg)
                this.bg.remove();
            var bgColor = jg.JGUtil.createLinearGradient(new jg.Rectangle(0, 0, this.width, this.height), ["rgba(138,193,255,0.5)", "rgba(222, 235, 250, 0.5)"]);
            var dummy = new jg.E();
            dummy.width = this.width;
            dummy.height = this.height;
            dummy.entities = [];
            var bg = new jg.Shape(this.width, this.height, jg.ShapeStyle.Fill, bgColor);
            dummy.append(bg);

            var textBg = new jg.Shape(this.width - (this.padding.left + this.padding.right) + 4, this.height - (this.padding.top + this.padding.bottom) + 4, jg.ShapeStyle.Fill, "rgba(45,73,136,0.2)");
            textBg.moveTo(this.padding.left - 2, this.padding.top - 2);
            dummy.append(textBg);
            this.setBg(dummy.createSprite());
        };
        return UIWindow;
    })(jg.E);
    jg.UIWindow = UIWindow;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var MessageWindow = (function (_super) {
        __extends(MessageWindow, _super);
        function MessageWindow(width, height, bgImage, padding) {
            _super.call(this, width, height, bgImage, padding);

            this.normalSpeed = 400;
            this.fastSpeed = 800;

            this.readed = new jg.Trigger();
            this.isReaded = true;
            this.hasNextCursor = false;

            var textArea = new jg.MultilineText({
                width: this.width - this.padding.left - this.padding.right,
                height: this.height - this.padding.top - this.padding.bottom
            }, {
                x: this.padding.left,
                y: this.padding.top
            });
            this.setTextArea(textArea);

            var cursor = new jg.Line({ x: 0, y: 0 }, { x: 6, y: 8 });
            cursor.addLine(12, 0);
            cursor.closePath = true;
            cursor.fill = true;
            cursor.setFillColor("rgba(255, 255, 255, 0.8)");
            cursor.width = 12;
            cursor.height = 8;
            this.nextCursor = cursor;
        }
        MessageWindow.prototype.setTextArea = function (textArea) {
            if (this.textArea) {
                this.textArea.remove();
                this.textClip.remove();
            }
            textArea.animated.handle(this, this.onAnimated);
            this.textArea = textArea;
            this.textClip = new jg.Shape(this.width, this.height);
            this.textClip.setClip(true);
            this.textClip.moveTo(textArea.x, textArea.y);
            this.append(this.textClip);
            this.append(textArea);
        };

        MessageWindow.prototype.getNextCursor = function () {
            return this.nextCursor;
        };

        MessageWindow.prototype.setNextCursor = function (cursor) {
            this.nextCursor = cursor;
        };

        MessageWindow.prototype.setText = function (text, offset) {
            var textArea = this.textArea;
            this.scriptOffset = textArea.setText(text, offset);
            this.script = textArea.script;
            textArea.hideAll();
            this.deleteNextCursor();
            this.isReaded = false;
            return this.scriptOffset;
        };

        MessageWindow.prototype.setScript = function (script, offset) {
            var textArea = this.textArea;
            this.script = script;
            this.scriptOffset = textArea.setScript(script, offset);
            textArea.hideAll();
            this.deleteNextCursor();
            this.isReaded = false;
            return this.scriptOffset;
        };

        MessageWindow.prototype.showNextCursor = function () {
            if (this.hasNextCursor)
                return;
            var nextCursor = this.nextCursor.createSprite();
            var textArea = this.textArea;
            var lastLine = textArea.lines[textArea.lines.length - 1];
            nextCursor.moveTo(this.width / 2 - nextCursor.width / 2, this.height - nextCursor.height - this.padding.bottom - 4);
            nextCursor.tl().moveBy(0, 4, 500).moveBy(0, -4, 500).delay(500).loop();
            this.append(nextCursor);
            this.hasNextCursor = true;
            this._nextCursor = nextCursor;
        };

        MessageWindow.prototype.deleteNextCursor = function () {
            if (this.hasNextCursor) {
                this._nextCursor.remove();
                delete this._nextCursor;
                this.hasNextCursor = false;
            }
        };

        MessageWindow.prototype.hide = function (fade) {
            if (fade)
                this.tl().fadeOut(200);
else
                _super.prototype.hide.call(this);
        };

        MessageWindow.prototype.show = function (fade) {
            if (fade)
                this.tl().fadeIn(200);
else
                _super.prototype.show.call(this);
        };

        MessageWindow.prototype.showText = function () {
            this.textArea.startAnimation();
        };

        MessageWindow.prototype.fastMode = function () {
            this.textArea.animeSpeed = this.fastSpeed;
        };

        MessageWindow.prototype.normalMode = function () {
            this.textArea.animeSpeed = this.normalSpeed;
        };

        MessageWindow.prototype.showAll = function () {
            this.textArea.showAll();
        };

        MessageWindow.prototype.next = function () {
            if (this.scriptOffset < 0)
                return false;
            this.oldWipeOut();
            this.setScript(this.script, this.scriptOffset);
            this.textArea.startAnimation();
        };

        MessageWindow.prototype.oldWipeOut = function (time) {
            if (time === undefined)
                time = 800;
            var textArea = this.textArea;
            var old = textArea.createSprite();
            old.moveTo(textArea.x, textArea.y);
            this.append(old);
            var lastLine = textArea.lines[textArea.lines.length - 1];
            var movePoint = lastLine.offsetY + lastLine.height;
            textArea.moveTo(textArea.x, textArea.y + movePoint);
            old.tl().moveBy(0, -textArea.height, time).removeFromScene();
            textArea.tl().moveBy(0, -movePoint, (movePoint / textArea.height) * time);
        };

        MessageWindow.prototype.oldFadeOut = function (time) {
            if (time === undefined)
                time = 500;
            var textArea = this.textArea;
            var old = textArea.createSprite();
            old.moveTo(textArea.x, textArea.y);
            this.append(old);
            old.tl().fadeOut(time).removeFromScene();
        };

        MessageWindow.prototype.onAnimated = function () {
            var hasNext = this.scriptOffset >= 0;
            if (hasNext)
                this.showNextCursor();

            this.isReaded = true;
            this.readed.fire(hasNext);
        };
        return MessageWindow;
    })(jg.UIWindow);
    jg.MessageWindow = MessageWindow;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var Pixel = (function (_super) {
        __extends(Pixel, _super);
        function Pixel(width, height, srcImage, scale) {
            _super.call(this);
            this.x = 0;
            this.y = 0;
            this.width = width;
            this.height = height;
            var canvas = window.createCanvas(this.width, this.height);
            var context = canvas.getContext("2d");
            if (srcImage) {
                var image = srcImage;
                if (srcImage instanceof jg.E) {
                    var sprite = srcImage.createSprite();
                    image = sprite.image;
                }
                if (scale)
                    context.drawImage(image, 0, 0, width, height);
else
                    context.drawImage(image, 0, 0);
            }
            this.imageData = context.getImageData(0, 0, this.width, this.height);
            this.disableTransform = true;
        }
        Pixel.prototype.clear = function (r, g, b, a) {
            if (r === undefined)
                r = 0;
            if (g === undefined)
                g = 0;
            if (b === undefined)
                b = 0;
            if (a === undefined)
                a = 0;
            for (var i = 0, len = this.imageData.data.length; i < len; i += 4) {
                this.imageData.data[i] = r;
                this.imageData.data[i + 1] = g;
                this.imageData.data[i + 2] = b;
                this.imageData.data[i + 3] = a;
            }
        };

        Pixel.prototype.draw = function (context) {
            context.putImageData(this.imageData, this.x, this.y);
        };
        return Pixel;
    })(jg.E);
    jg.Pixel = Pixel;
})(jg || (jg = {}));
var jg;
(function (jg) {
    function globalize() {
        for (var i in jg) {
            window[i] = jg[i];
        }
    }
    jg.globalize = globalize;
})(jg || (jg = {}));
var jg;
(function (jg) {
    var MT = (function () {
        function MT(seed) {
            if (seed === undefined)
                seed = new Date().getTime();
            this._mt = new Array(624);
            this.setSeed(seed);
        }
        MT._mulUint32 = function (a, b) {
            var a1 = a >> 16, a2 = a & 0xffff;
            var b1 = b >> 16, b2 = b & 0xffff;
            return (((a1 * b2 + a2 * b1) << 16) + a2 * b2);
        };

        MT.prototype.setSeed = function (seed) {
            var mt = this._mt;
            if (typeof seed == "number") {
                mt[0] = seed;
                for (var i = 1; i < mt.length; i++) {
                    var x = mt[i - 1] ^ (mt[i - 1] >> 30);
                    mt[i] = MT._mulUint32(1812433253, x) + i;
                }
                this._index = mt.length;
            } else if (seed instanceof Array) {
                var i = 1, j = 0;
                this.setSeed(19650218);
                for (var k = Math.max(mt.length, seed.length); k > 0; k--) {
                    var x = mt[i - 1] ^ (mt[i - 1] >> 30);
                    x = MT._mulUint32(x, 1664525);
                    mt[i] = (mt[i] ^ x) + (seed[j]) + j;
                    if (++i >= mt.length) {
                        mt[0] = mt[mt.length - 1];
                        i = 1;
                    }
                    if (++j >= seed.length) {
                        j = 0;
                    }
                }
                for (var k = mt.length - 1; k > 0; k--) {
                    var x = mt[i - 1] ^ (mt[i - 1] >> 30);
                    x = MT._mulUint32(x, 1566083941);
                    mt[i] = (mt[i] ^ x) - i;
                    if (++i >= mt.length) {
                        mt[0] = mt[mt.length - 1];
                        i = 1;
                    }
                }
                mt[0] = 0x80000000;
            } else {
                throw new TypeError("MersenneTwister: illegal seed.");
            }
        };

        MT.prototype._nextInt = function () {
            var mt = this._mt, value;

            if (this._index >= mt.length) {
                var k = 0, N = mt.length, M = 397;
                do {
                    value = (mt[k] & 0x80000000) | (mt[k + 1] & 0x7fffffff);
                    mt[k] = mt[k + M] ^ (value >> 1) ^ ((value & 1) ? 0x9908b0df : 0);
                } while(++k < N - M);
                do {
                    value = (mt[k] & 0x80000000) | (mt[k + 1] & 0x7fffffff);
                    mt[k] = mt[k + M - N] ^ (value >> 1) ^ ((value & 1) ? 0x9908b0df : 0);
                } while(++k < N - 1);
                value = (mt[N - 1] & 0x80000000) | (mt[0] & 0x7fffffff);
                mt[N - 1] = mt[M - 1] ^ (value >> 1) ^ ((value & 1) ? 0x9908b0df : 0);
                this._index = 0;
            }

            value = mt[this._index++];
            value ^= value >> 11;
            value ^= (value << 7) & 0x9d2c5680;
            value ^= (value << 15) & 0xefc60000;
            value ^= value >> 18;
            return value;
        };

        MT.prototype.next = function () {
            var a = this._nextInt() >> 5, b = this._nextInt() >> 6;
            return (a * 0x4000000 + b) / 0x10000000000000;
        };

        MT.prototype.nextInt = function (min, sup) {
            if (!(0 < sup && sup < 0x100000000))
                return this._nextInt() + min;
            if ((sup & (~sup + 1)) == sup)
                return ((sup - 1) & this._nextInt()) + min;

            var value;
            do {
                value = this._nextInt();
            } while(sup > 2147483647 - (value - (value %= sup)));
            return value + min;
        };
        return MT;
    })();
    jg.MT = MT;
})(jg || (jg = {}));
