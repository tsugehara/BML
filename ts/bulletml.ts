interface bulletmljs {
	build(data:any);
	Bullet:any;
}

declare var bulletml: bulletmljs;

module BML {
	var RAD_TO_DEG = 180 / Math.PI;
	var DEG_TO_RAD = Math.PI / 180;

	export class BulletML {
		static game:jg.Game;
		static defaultSprite:jg.Sprite;
		static container:BulletContainer;

		static startBullet(owner:jg.E, caller:any, callback:Function, attackPattern:AttackPattern, config?:any, game?:jg.Game) {
			if (game === undefined)
				game = BulletML.game;

			BulletML.endBulet(owner, game);
			owner["age"] = 0;
			game.update.handle(owner, attackPattern.createTicker(caller, callback, config));
		}

		static endBulet(owner:jg.E, game?:jg.Game) {
			if (game === undefined)
				game = BulletML.game;

			var handlers:jg.TriggerHandler[] = game.update.handlers;
			var newHandlers = [];
			for (var i=0; i<handlers.length; i++) {
				if (handlers[i].owner == owner && handlers[i].handler["isDanmaku"])
					continue;

				newHandlers.push(handlers[i]);
			}
			game.update.handlers = newHandlers;
		}

		static defaultBulletFactory(opt?:any) {
			if (! BulletML.defaultSprite) {
				var gra = jg.JGUtil.createRadialGradient(
					new jg.Rectangle(4, 4, 4, 4),
					0,
					4,
					["rgba(255,255,255,1.0)", "rgba(255,255,255,1.0)", "rgba(255,0,0,0.8)", "rgba(255,0,0,0.0)"],
					[0.0, 0.5, 0.8, 1.0]
				);
				var shape = new jg.Shape(8, 8, jg.ShapeStyle.Fill, gra, jg.ShapeType.Arc);
				BulletML.defaultSprite = shape.createSprite();
			}
			var bullet = new jg.Sprite(BulletML.defaultSprite.image);
			if (opt && opt.label)
				bullet["label"] = opt.label;

			return bullet;
		}

		static bulletContainerFactory(opt?:any) {
			var bullet:Bullet = new Bullet();
			if (opt && opt.label)
				bullet.label = opt.label;

			return bullet;
		}

		static defaultIsInsideOfWorld(bullet:jg.E) {
			var _game = BulletML.game;
			var scw = _game.width;
			var sch = _game.height;
			var w = bullet.width || 0;
			var h = bullet.height || 0;
			return (-w <= bullet.x && bullet.x < scw && -h <= bullet.y && bullet.y < sch);
		}

		static normalizeRadian(radian:number) {
			while (radian <= -Math.PI)
				radian += Math.PI * 2;

			while (Math.PI < radian)
				radian -= Math.PI * 2;

			return radian;
		}

		static angleAtoB(a:jg.CommonArea, b:jg.CommonArea) {
			var ca = {
				x : a.x + (a.width || 0) / 2,
				y : a.y + (a.height || 0) / 2
			};
			var cb = {
				x : b.x + (b.width || 0) / 2,
				y : b.y + (b.height || 0) / 2
			};
			return Math.atan2(cb.y - ca.y, cb.x - ca.x);
		}
	}

	export class BMLLoader extends jg.ResourceLoader {
		constructor(resource:jg.Resource) {
			super(resource);
		}

		load(url:string, identifier:string) {
			var xhr = new XMLHttpRequest();
			var caller = this;
			var callback = this.completed;
			xhr.onreadystatechange = (e) => {
				if (xhr.readyState === 4) {
					if (xhr.status !== 200 && xhr.status !== 0)
						throw new Error(xhr.status + ': ' + 'Cannot load an asset: ' + url);

					if (xhr.responseXML != null) {
						var bml = bulletml.build(xhr.responseXML);
						if (bml)
							callback.call(caller, identifier, bml, true);
						else {
							console.log(url + "は妥当なBulletMLではありません。");
							callback.call(caller, identifier, bml, false);
						}
					} else {
						callback.call(caller, identifier, null, false);
					}
				}
			};

			xhr.open('GET', url, true);
			if (xhr["overrideMimeType"])
				xhr["overrideMimeType"]("application/xml");

			xhr.send(null);
		}

		completed(name:string, bml:any, is_success:bool) {
			if (! is_success)
				console.log("error: "+name);
			else
				this.resource["images"][name] = new AttackPattern(bml);	//bad know how

			this.resource.requestCompleted(name);
		}

	}

	export class Bullet implements jg.CommonArea {
		x:number;
		y:number;
		width:number;
		height:number;
		age:number;
		parent:BulletContainer;
		label:any;

		constructor() {
			this.x = 0;
			this.y = 0;
			this.width = 8;
			this.height = 8;
		}

		moveTo(x:number, y:number) {
			this.x = x;
			this.y = y;
		}

		update() {}

		remove() {
			this.parent.removeBullet(this);
		}
	}

	export class BulletContainer extends jg.E {
		sprite:jg.Sprite;
		image:any;
		bullets:Bullet[];

		constructor() {
			super();
			this.bullets = new Bullet[];
			this.disableTransform = true;
			this.sprite = BulletML.defaultBulletFactory();
			this.image = this.sprite.image;
			this.start();
		}

		appendBullet(bullet:Bullet) {
			this.bullets.push(bullet);
			bullet.parent = this;
		}

		removeBullet(bullet:Bullet) {
			for (var i=0; i<this.bullets.length; i++) {
				if (this.bullets[i] == bullet) {
					this.bullets.splice(i, 1);
					return true;
				}
			}
			return false;
		}

		update(t:number) {
			for (var i=0; i<this.bullets.length; i++) {
				this.bullets[i].update();
			}
		}

		draw(context:CanvasRenderingContext2D) {
			//TODO: support scroll?
			for (var i=0; i<this.bullets.length; i++) {
				var b = this.bullets[i];
				context.drawImage(
					this.image,
					0,
					0,
					b.width,
					b.height,
					b.x,
					b.y,
					b.width,
					b.height
				);
			}
		}
		//TODO: 衝突判定系メソッド群
	}

	export class AttackPattern {
		_bulletml:any;

		constructor(bulletml:any) {
			this._bulletml = bulletml;
		}

		static defaultConfig = {
			bulletFactory : BulletML.defaultBulletFactory,
			isInsideOfWorld : BulletML.defaultIsInsideOfWorld,
			rank : 0,
			updateProperties : false,
			speedRate : 2
		}

		createTicker(caller:any, callback:Function, config:any, action?:any):Function {
			if (config instanceof jg.E)
				config = { target: config };

			var topLabels = this._bulletml.getTopActionLabels()
			if (action === undefined && topLabels.length > 1) {
				var tickers = [];
				for ( var i = 0, end = topLabels.length; i < end; i++)
					tickers[tickers.length] = this._createTicker(caller, callback, config, topLabels[i]);

				var parentTicker = function() {
					for ( var i = tickers.length; i--;)
						tickers[i].call(this);

					if (parentTicker.compChildCount === tickers.length) {
						parentTicker.complete = true;
						if (callback)
							callback.call(caller);	//complete
					}
				};

				for ( var i = tickers.length; i--;)
					tickers[i].parentTicker = parentTicker;

				parentTicker.compChildCount = 0;
				parentTicker.completeChild = function() {
					this.compChildCount++;
				};

				parentTicker.compChildCount = 0;
				parentTicker.complete = false;
				parentTicker.isDanmaku = true;

				return parentTicker;
			} else {
				return this._createTicker(caller, callback, config, action);
			}
		}

		_createTicker(caller:any, callback:Function, config:any, action:any) {
			config = (function(base) {
				var result = {};
				var def = AttackPattern.defaultConfig;
				for ( var prop in def)
					if (def.hasOwnProperty(prop))
						result[prop] = def[prop];

				for ( var prop in base)
					if (base.hasOwnProperty(prop))
						result[prop] = base[prop];

				return result;
			})(config);

			if (!config.target)
				throw new Error("target is undefined in config.");

			var ticker = function() {
				this.age++;
				var conf = ticker.config;
				var ptn = ticker._pattern;

				if (!ptn)
					return;

				if (this.age < ticker.chDirEnd)
					ticker.direction += ticker.dirIncr;
				else if (this.age === ticker.chDirEnd)
					ticker.direction = ticker.dirFin;

				if (this.age < ticker.chSpdEnd)
					ticker.speed += ticker.spdIncr;
				else if (this.age === ticker.chSpdEnd)
					ticker.speed = ticker.spdFin;

				if (this.age < ticker.aclEnd) {
					ticker.speedH += ticker.aclIncrH;
					ticker.speedV += ticker.aclIncrV;
				} else if (this.age === ticker.aclEnd) {
					ticker.speedH = ticker.aclFinH;
					ticker.speedV = ticker.aclFinV;
				}

				this.moveTo(
					this.x
					+ Math.cos(ticker.direction) * ticker.speed * conf.speedRate
					+ ticker.speedH * conf.speedRate,
					this.y
					+ Math.sin(ticker.direction) * ticker.speed * conf.speedRate
					+ ticker.speedV * conf.speedRate
				);

				if (!conf.isInsideOfWorld(this)) {
					this.remove();
					ticker.completed = true;

					if (ticker.parentTicker)
						ticker.parentTicker.completeChild();
					else
						if (callback)
							callback.call(caller);	//complete

					return;
				}

				if (conf.updateProperties) {
					this.rotation = (ticker.direction) * RAD_TO_DEG;
					this.speed = ticker.speed;
				}

				if (this.age < ticker.waitTo || ticker.completed)
					return;

				var cmd;
				while (cmd = ticker.walker.next()) {
					switch (cmd.commandName) {
					case "fire":
						ptn._fire.call(this, caller, callback, cmd, conf, ticker, ptn);
					break;

					case "wait":
						var v = 0;
						if (typeof(cmd.value) === 'number')
							ticker.waitTo = this.age + cmd.value;
						else if ((v = ~~(cmd.value)) !== 0)
							ticker.waitTo = this.age + v;
						else
							ticker.waitTo = this.age + eval(cmd.value);

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
				if (ticker.parentTicker)
					ticker.parentTicker.completeChild();
				else
					if (callback)
						callback.call(caller);	//complete
			};

			action = action || "top";
			if (typeof (action) === "string")
				ticker.walker = this._bulletml.getWalker(action, config.rank);
			else if (action instanceof bulletml.Bullet)
				ticker.walker = action.getWalker(config.rank);
			else
				throw new Error("Invalid arguments");

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
		}

		_fire(caller:any, callback:Function, cmd:any, config:any, ticker:any, pattern:any) {
			var e = <jg.E><any>this;
			var b = config.bulletFactory({
				label : cmd.bullet.label
			});

			if (!b)
				return;

			var bt = pattern.createTicker(null, null, config, cmd.bullet);

			var calcDirection = function(d) {
				var dv = eval(d.value) * DEG_TO_RAD;

				switch (d.type) {
				case "aim":
					if (config.target)
						return BulletML.angleAtoB(e, config.target) + dv;
					else
						return dv - Math.PI / 2;

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

			var calcSpeed = function(s) {
				var sv = eval(s.value);
				switch (s.type) {
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

			if (config.addTarget)
				if (config.addTarget["appendBullet"])
					config.addTarget.appendBullet(b);
				else
					config.addTarget.append(b);
			else if (e.parent)
				e.parent.append(b);

			b["age"] = 0;
			b.update = bt;
			if (b.start) {
				b.start();
			}
		}

		_changeDirection(cmd:any, config:any, ticker:any) {
			var d = eval(cmd.direction.value) * DEG_TO_RAD;
			var t = eval(cmd.term);
			var e = <any>this;

			switch (cmd.direction.type) {
			case "aim":
				var tar = config.target;
				if (!tar)
					return;

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
				ticker.dirFin = ticker.direction + ticker.dirIncr * (t-1);
			break;
			}
			ticker.chDirEnd = e.age + t;
		}

		_changeSpeed(cmd:any, ticker:any) {
			var s = eval(cmd.speed.value);
			var t = eval(cmd.term);
			var e = <any>this;
			switch (cmd.speed.type) {
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
		}

		_accel(cmd:any, ticker:any) {
			var t = eval(cmd.term);
			var e = <any>this;
			ticker.aclEnd = e.age + t;

			if (cmd.horizontal) {
				var h = eval(cmd.horizontal.value);
				switch (cmd.horizontal.type) {
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

			if (cmd.vertical) {
				var v = eval(cmd.vertical.value);
				switch (cmd.vertical.type) {
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
		}
	}
}

(function() {
	var resource = jg.Resource.getInstance();
	resource.loaders["xml"] = new BML.BMLLoader(resource);
	resource.loaders["bml"] = resource.loaders["xml"];
})();

