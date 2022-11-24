const PI2 = Math.PI * 2;

export class Ball {
    constructor(stageWidth, stageHeight, radius, speed) {
        this.radius = radius;
        this.vx = speed;
        this.vy = speed;
        this.x = stageWidth / 2;
        this.y = stageHeight / 2;
    }

    animate() {
        
    }
}