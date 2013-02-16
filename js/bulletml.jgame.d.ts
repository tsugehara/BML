interface bulletmljs {
    build(data: any);
    Bullet: any;
}
module BML {
    class BulletML {
        static game: Game;
        static startBullet(owner: E, caller: any, callback: Function, attackPattern: AttackPattern, config?: any, game?: Game): void;
        static endBulet(owner: E, game?: Game): void;
        static defaultBulletFactory(opt: any): Sprite;
        static defaultIsInsideOfWorld(bullet: E): bool;
        static normalizeRadian(radian: number): number;
        static angleAtoB(a: CommonArea, b: CommonArea): number;
    }
    class BMLLoader extends ResourceLoader {
        constructor(resource: Resource);
        public load(url: string, identifier: string): void;
        public completed(name: string, bml: any, is_success: bool): void;
    }
    class AttackPattern {
        public _bulletml: any;
        constructor(bulletml: any);
        static defaultConfig: {
            bulletFactory: (opt: any) => Sprite;
            isInsideOfWorld: (bullet: E) => bool;
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