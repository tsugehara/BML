var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BML;
(function (BML) {
    var RAD_TO_DEG = 180 / Math.PI;
    var DEG_TO_RAD = Math.PI / 180;
    var BulletML = (function () {
        function BulletML() { }
        BulletML.startBullet = function startBullet(owner, caller, callback, attackPattern, config, game) {
            if(game === undefined) {
                game = BulletML.game;
            }
            BulletML.endBulet(owner, game);
            owner["age"] = 0;
            game.update.handle(owner, attackPattern.createTicker(caller, callback, config));
        };
        BulletML.endBulet = function endBulet(owner, game) {
            if(game === undefined) {
                game = BulletML.game;
            }
            var handlers = game.update.handlers;
            var newHandlers = new Array();
            for(var i = 0; i < handlers.length; i++) {
                if(handlers[i].owner == owner && handlers[i].handler["isDanmaku"]) {
                    continue;
                }
                newHandlers.push(handlers[i]);
            }
            game.update.handlers = newHandlers;
        };
        BulletML.defaultBulletFactory = function defaultBulletFactory(opt) {
            var gra = JGUtil.createRadialGradient(new Rectangle(4, 4, 4, 4), 0, 4, [
                "rgba(255,255,255,1.0)", 
                "rgba(255,255,255,1.0)", 
                "rgba(255,0,0,0.8)", 
                "rgba(255,0,0,0.0)"
            ], [
                0.0, 
                0.5, 
                0.8, 
                1.0
            ]);
            var shape = new Shape(8, 8, ShapeStyle.fill, gra, ShapeType.arc);
            var bullet = shape.createSprite();
            if(opt && opt.label) {
                bullet["label"] = opt.label;
            }
            return bullet;
        };
        BulletML.bulletContainerFactory = function bulletContainerFactory(opt) {
            var bullet = new Bullet();
            if(opt && opt.label) {
                bullet.label = opt.label;
            }
            return bullet;
        };
        BulletML.defaultIsInsideOfWorld = function defaultIsInsideOfWorld(bullet) {
            var _game = BulletML.game;
            var scw = _game.width;
            var sch = _game.height;
            var w = bullet.width || 0;
            var h = bullet.height || 0;
            return (-w <= bullet.x && bullet.x < scw && -h <= bullet.y && bullet.y < sch);
        };
        BulletML.normalizeRadian = function normalizeRadian(radian) {
            while(radian <= -Math.PI) {
                radian += Math.PI * 2;
            }
            while(Math.PI < radian) {
                radian -= Math.PI * 2;
            }
            return radian;
        };
        BulletML.angleAtoB = function angleAtoB(a, b) {
            var ca = {
                x: a.x + (a.width || 0) / 2,
                y: a.y + (a.height || 0) / 2
            };
            var cb = {
                x: b.x + (b.width || 0) / 2,
                y: b.y + (b.height || 0) / 2
            };
            return Math.atan2(cb.y - ca.y, cb.x - ca.x);
        };
        return BulletML;
    })();
    BML.BulletML = BulletML;    
    var BMLLoader = (function (_super) {
        __extends(BMLLoader, _super);
        function BMLLoader(resource) {
                _super.call(this, resource);
        }
        BMLLoader.prototype.load = function (url, identifier) {
            var xhr = new XMLHttpRequest();
            var caller = this;
            var callback = this.completed;
            xhr.onreadystatechange = function (e) {
                if(xhr.readyState === 4) {
                    if(xhr.status !== 200 && xhr.status !== 0) {
                        throw new Error(xhr.status + ': ' + 'Cannot load an asset: ' + url);
                    }
                    if(xhr.responseXML != null) {
                        var bml = bulletml.build(xhr.responseXML);
                        if(bml) {
                            callback.call(caller, identifier, bml, true);
                        } else {
                            console.log(url + "は妥当なBulletMLではありません。");
                            callback.call(caller, identifier, bml, false);
                        }
                    } else {
                        callback.call(caller, identifier, null, false);
                    }
                }
            };
            xhr.open('GET', url, true);
            if(xhr["overrideMimeType"]) {
                xhr["overrideMimeType"]("application/xml");
            }
            xhr.send(null);
        };
        BMLLoader.prototype.completed = function (name, bml, is_success) {
            if(!is_success) {
                console.log("error: " + name);
            } else {
                this.resource["images"][name] = new AttackPattern(bml);
            }
            this.resource.requestCompleted(name);
        };
        return BMLLoader;
    })(ResourceLoader);
    BML.BMLLoader = BMLLoader;    
    var Bullet = (function () {
        function Bullet() {
            this.x = 0;
            this.y = 0;
            this.width = 8;
            this.height = 8;
        }
        Bullet.prototype.moveTo = function (x, y) {
            this.x = x;
            this.y = y;
        };
        Bullet.prototype.update = function () {
        };
        Bullet.prototype.remove = function () {
            this.parent.removeBullet(this);
        };
        return Bullet;
    })();
    BML.Bullet = Bullet;    
    var BulletContainer = (function (_super) {
        __extends(BulletContainer, _super);
        function BulletContainer() {
                _super.call(this);
            this.bullets = new Array();
            this.disableTransform = true;
            this.sprite = BulletML.defaultBulletFactory();
            this.image = this.sprite.image;
            this.start();
        }
        BulletContainer.prototype.appendBullet = function (bullet) {
            this.bullets.push(bullet);
            bullet.parent = this;
        };
        BulletContainer.prototype.removeBullet = function (bullet) {
            for(var i = 0; i < this.bullets.length; i++) {
                if(this.bullets[i] == bullet) {
                    this.bullets.splice(i, 1);
                    return true;
                }
            }
            return false;
        };
        BulletContainer.prototype.update = function (t) {
            for(var i = 0; i < this.bullets.length; i++) {
                this.bullets[i].update();
            }
        };
        BulletContainer.prototype.draw = function (area, context) {
            for(var i = 0; i < this.bullets.length; i++) {
                var b = this.bullets[i];
                context.drawImage(this.image, 0, 0, b.width, b.height, area.x + b.x, area.y + b.y, b.width, b.height);
            }
        };
        return BulletContainer;
    })(E);
    BML.BulletContainer = BulletContainer;    
    var AttackPattern = (function () {
        function AttackPattern(bulletml) {
            this._bulletml = bulletml;
        }
        AttackPattern.defaultConfig = {
            bulletFactory: BulletML.defaultBulletFactory,
            isInsideOfWorld: BulletML.defaultIsInsideOfWorld,
            rank: 0,
            updateProperties: false,
            speedRate: 2
        };
        AttackPattern.prototype.createTicker = function (caller, callback, config, action) {
            if(config instanceof E) {
                config = {
                    target: config
                };
            }
            var topLabels = this._bulletml.getTopActionLabels();
            if(action === undefined && topLabels.length > 1) {
                var tickers = [];
                for(var i = 0, end = topLabels.length; i < end; i++) {
                    tickers[tickers.length] = this._createTicker(caller, callback, config, topLabels[i]);
                }
                var parentTicker = function () {
                    for(var i = tickers.length; i--; ) {
                        tickers[i].call(this);
                    }
                    if(parentTicker.compChildCount === tickers.length) {
                        parentTicker.complete = true;
                        if(callback) {
                            callback.call(caller);
                        }
                    }
                };
                for(var i = tickers.length; i--; ) {
                    tickers[i].parentTicker = parentTicker;
                }
                parentTicker.compChildCount = 0;
                parentTicker.completeChild = function () {
                    this.compChildCount++;
                };
                parentTicker.compChildCount = 0;
                parentTicker.complete = false;
                parentTicker.isDanmaku = true;
                return parentTicker;
            } else {
                return this._createTicker(caller, callback, config, action);
            }
        };
        AttackPattern.prototype._createTicker = function (caller, callback, config, action) {
            config = (function (base) {
                var result = {
                };
                var def = AttackPattern.defaultConfig;
                for(var prop in def) {
                    if(def.hasOwnProperty(prop)) {
                        result[prop] = def[prop];
                    }
                }
                for(var prop in base) {
                    if(base.hasOwnProperty(prop)) {
                        result[prop] = base[prop];
                    }
                }
                return result;
            })(config);
            if(!config.target) {
                throw new Error("target is undefined in config.");
            }
            var ticker = function () {
                this.age++;
                var conf = ticker.config;
                var ptn = ticker._pattern;
                if(!ptn) {
                    return;
                }
                if(this.age < ticker.chDirEnd) {
                    ticker.direction += ticker.dirIncr;
                } else if(this.age === ticker.chDirEnd) {
                    ticker.direction = ticker.dirFin;
                }
                if(this.age < ticker.chSpdEnd) {
                    ticker.speed += ticker.spdIncr;
                } else if(this.age === ticker.chSpdEnd) {
                    ticker.speed = ticker.spdFin;
                }
                if(this.age < ticker.aclEnd) {
                    ticker.speedH += ticker.aclIncrH;
                    ticker.speedV += ticker.aclIncrV;
                } else if(this.age === ticker.aclEnd) {
                    ticker.speedH = ticker.aclFinH;
                    ticker.speedV = ticker.aclFinV;
                }
                this.moveTo(this.x + Math.cos(ticker.direction) * ticker.speed * conf.speedRate + ticker.speedH * conf.speedRate, this.y + Math.sin(ticker.direction) * ticker.speed * conf.speedRate + ticker.speedV * conf.speedRate);
                if(!conf.isInsideOfWorld(this)) {
                    this.remove();
                    ticker.completed = true;
                    if(ticker.parentTicker) {
                        ticker.parentTicker.completeChild();
                    } else if(callback) {
                        callback.call(caller);
                    }
                    return;
                }
                if(conf.updateProperties) {
                    this.rotation = (ticker.direction) * RAD_TO_DEG;
                    this.speed = ticker.speed;
                }
                if(this.age < ticker.waitTo || ticker.completed) {
                    return;
                }
                var cmd;
                while(cmd = ticker.walker.next()) {
                    switch(cmd.commandName) {
                        case "fire":
                            ptn._fire.call(this, caller, callback, cmd, conf, ticker, ptn);
                            break;
                        case "wait":
                            var v = 0;
                            if(typeof (cmd.value) === 'number') {
                                ticker.waitTo = this.age + cmd.value;
                            } else if((v = ~~(cmd.value)) !== 0) {
                                ticker.waitTo = this.age + v;
                            } else {
                                ticker.waitTo = this.age + eval(cmd.value);
                            }
                            return;
                        case "changeDirection":
                            ptn._changeDirection.call(this, cmd, conf, ticker);
                            break;
                        case "changeSpeed":
                            ptn._changeSpeed.call(this, cmd, ticker);
                            break;
                        case "accel":
                            ptn._accel.call(this, cmd, ticker);
                            break;
                        case "vanish":
                            this.remove();
                            break;
                    }
                }
                ticker.completed = true;
                if(ticker.parentTicker) {
                    ticker.parentTicker.completeChild();
                } else if(callback) {
                    callback.call(caller);
                }
            };
            action = action || "top";
            if(typeof (action) === "string") {
                ticker.walker = this._bulletml.getWalker(action, config.rank);
            } else if(action instanceof bulletml.Bullet) {
                ticker.walker = action.getWalker(config.rank);
            } else {
                throw new Error("Invalid arguments");
            }
            ticker._pattern = this;
            ticker.config = config;
            ticker.waitTo = -1;
            ticker.completed = false;
            ticker.direction = 0;
            ticker.lastDirection = 0;
            ticker.speed = 0;
            ticker.lastSpeed = 0;
            ticker.speedH = 0;
            ticker.speedV = 0;
            ticker.dirIncr = 0;
            ticker.dirFin = 0;
            ticker.chDirEnd = -1;
            ticker.spdIncr = 0;
            ticker.spdFin = 0;
            ticker.chSpdEnd = -1;
            ticker.aclIncrH = 0;
            ticker.aclFinH = 0;
            ticker.aclIncrV = 0;
            ticker.aclFinV = 0;
            ticker.aclEnd = -1;
            ticker.isDanmaku = true;
            return ticker;
        };
        AttackPattern.prototype._fire = function (caller, callback, cmd, config, ticker, pattern) {
            var e = this;
            var b = config.bulletFactory({
                label: cmd.bullet.label
            });
            if(!b) {
                return;
            }
            var bt = pattern.createTicker(null, null, config, cmd.bullet);
            var calcDirection = function (d) {
                var dv = eval(d.value) * DEG_TO_RAD;
                switch(d.type) {
                    case "aim":
                        if(config.target) {
                            return BulletML.angleAtoB(e, config.target) + dv;
                        } else {
                            return dv - Math.PI / 2;
                        }
                    case "absolute":
                        return dv - Math.PI / 2;
                    case "relative":
                        return ticker.direction + dv;
                    case "sequence":
                    default:
                        return ticker.lastDirection + dv;
                }
            };
            ticker.lastDirection = bt.direction = calcDirection(cmd.direction || cmd.bullet.direction);
            var calcSpeed = function (s) {
                var sv = eval(s.value);
                switch(s.type) {
                    case "relative":
                        return ticker.speed + sv;
                    case "sequence":
                        return ticker.lastSpeed + sv;
                    case "absolute":
                    default:
                        return sv;
                }
            };
            ticker.lastSpeed = bt.speed = calcSpeed(cmd.speed || cmd.bullet.speed);
            b.x = e.x + ((e.width || 0) - (b.width || 0)) / 2;
            b.y = e.y + ((e.height || 0) - (b.height || 0)) / 2;
            if(config.addTarget) {
                if(config.addTarget["appendBullet"]) {
                    config.addTarget.appendBullet(b);
                } else {
                    config.addTarget.append(b);
                }
            } else if(e.parent) {
                e.parent.append(b);
            }
            b["age"] = 0;
            b.update = bt;
            if(b.start) {
                b.start();
            }
        };
        AttackPattern.prototype._changeDirection = function (cmd, config, ticker) {
            var d = eval(cmd.direction.value) * DEG_TO_RAD;
            var t = eval(cmd.term);
            var e = this;
            switch(cmd.direction.type) {
                case "aim":
                    var tar = config.target;
                    if(!tar) {
                        return;
                    }
                    ticker.dirFin = BulletML.angleAtoB(e, tar) + d;
                    ticker.dirIncr = BulletML.normalizeRadian(ticker.dirFin - ticker.direction) / t;
                    break;
                case "absolute":
                    ticker.dirFin = d - Math.PI / 2;
                    ticker.dirIncr = BulletML.normalizeRadian(ticker.dirFin - ticker.direction) / t;
                    break;
                case "relative":
                    ticker.dirFin = ticker.direction + d;
                    ticker.dirIncr = BulletML.normalizeRadian(ticker.dirFin - ticker.direction) / t;
                    break;
                case "sequence":
                    ticker.dirIncr = d;
                    ticker.dirFin = ticker.direction + ticker.dirIncr * (t - 1);
                    break;
            }
            ticker.chDirEnd = e.age + t;
        };
        AttackPattern.prototype._changeSpeed = function (cmd, ticker) {
            var s = eval(cmd.speed.value);
            var t = eval(cmd.term);
            var e = this;
            switch(cmd.speed.type) {
                case "absolute":
                    ticker.spdFin = s;
                    ticker.spdIncr = (ticker.spdFin - ticker.speed) / t;
                    break;
                case "relative":
                    ticker.spdFin = s + ticker.speed;
                    ticker.spdIncr = (ticker.spdFin - ticker.speed) / t;
                    break;
                case "sequence":
                    ticker.spdIncr = s;
                    ticker.spdFin = ticker.speed + ticker.spdIncr * t;
                    break;
            }
            ticker.chSpdEnd = e.age + t;
        };
        AttackPattern.prototype._accel = function (cmd, ticker) {
            var t = eval(cmd.term);
            var e = this;
            ticker.aclEnd = e.age + t;
            if(cmd.horizontal) {
                var h = eval(cmd.horizontal.value);
                switch(cmd.horizontal.type) {
                    case "absolute":
                    case "sequence":
                        ticker.aclIncrH = (h - ticker.speedH) / t;
                        ticker.aclFinH = h;
                        break;
                    case "relative":
                        ticker.aclIncrH = h;
                        ticker.aclFinH = (h - ticker.speedH) * t;
                        break;
                }
            } else {
                ticker.aclIncrH = 0;
                ticker.aclFinH = ticker.speedH;
            }
            if(cmd.vertical) {
                var v = eval(cmd.vertical.value);
                switch(cmd.vertical.type) {
                    case "absolute":
                    case "sequence":
                        ticker.aclIncrV = (v - ticker.speedV) / t;
                        ticker.aclFinV = v;
                        break;
                    case "relative":
                        ticker.aclIncrV = v;
                        ticker.aclFinV = (v - ticker.speedV) * t;
                        break;
                }
            } else {
                ticker.aclIncrV = 0;
                ticker.aclFinV = ticker.speedV;
            }
        };
        return AttackPattern;
    })();
    BML.AttackPattern = AttackPattern;    
})(BML || (BML = {}));
(function () {
    var resource = Resource.getInstance();
    resource.loaders["xml"] = new BML.BMLLoader(resource);
    resource.loaders["bml"] = resource.loaders["xml"];
})();
