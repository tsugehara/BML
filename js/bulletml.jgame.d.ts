interface bulletmljs {
    build(data: any);
    Bullet: any;
}
module BML {
    class BulletML {
        static game: jg.Game;
        static defaultSprite: jg.Sprite;
        static container: BulletContainer;
        static startBullet(owner: jg.E, caller: any, callback: Function, attackPattern: AttackPattern, config?: any, game?: jg.Game): void;
        static endBulet(owner: jg.E, game?: jg.Game): void;
        static defaultBulletFactory(opt?: any): jg.Sprite;
        static bulletContainerFactory(opt?: any): Bullet;
        static defaultIsInsideOfWorld(bullet: jg.E): bool;
        static normalizeRadian(radian: number): number;
        static angleAtoB(a: jg.CommonArea, b: jg.CommonArea): number;
    }
    class BMLLoader extends jg.ResourceLoader {
        constructor(resource: jg.Resource);
        public load(url: string, identifier: string): void;
        public completed(name: string, bml: any, is_success: bool): void;
    }
    class Bullet implements jg.CommonArea {
        public x: number;
        public y: number;
        public width: number;
        public height: number;
        public age: number;
        public parent: BulletContainer;
        public label: any;
        constructor();
        public moveTo(x: number, y: number): void;
        public update(): void;
        public remove(): void;
    }
    class BulletContainer extends jg.E {
        public sprite: jg.Sprite;
        public image: any;
        public bullets: Bullet[];
        constructor();
        public appendBullet(bullet: Bullet): void;
        public removeBullet(bullet: Bullet): bool;
        public update(t: number): void;
        public draw(context: CanvasRenderingContext2D): void;
    }
    class AttackPattern {
        public _bulletml: any;
        constructor(bulletml: any);
        static defaultConfig: {
            bulletFactory: (opt?: any) => jg.Sprite;
            isInsideOfWorld: (bullet: jg.E) => bool;
            rank: number;
            updateProperties: bool;
            speedRate: number;
        };
        public createTicker(caller: any, callback: Function, config: any, action?: any): Function;
        public _createTicker(caller: any, callback: Function, config: any, action: any);
        public _fire(caller: any, callback: Function, cmd: any, config: any, ticker: any, pattern: any): void;
        public _changeDirection(cmd: any, config: any, ticker: any): void;
        public _changeSpeed(cmd: any, ticker: any): void;
        public _accel(cmd: any, ticker: any): void;
    }
}
