import {Point} from './point.js';

const FOLLOW_SPEED = 0.08;
const ROTATE_SPEED = 0.12;
const SPEED_REDUCE = 0.8;
const MAX_ANGLE = 30;
const FPS = 1000 / 60;
const WIDTH = 260;
const HEIGHT = 260;

export class Dialog {
    constructor() {
        this.pos = new Point();
        this.target = new Point();
        this.prevPos = new Point();
        this.downPos = new Point();
        this.speedPos = new Point();
        this.startPos = new Point();
        this.mousePos = new Point();
        this.centerPos = new Point();
        this.origin = new Point();
        this.rotation = 0;
        this.sideValue = 0;
        this.isDown = false;
    }

    resize(stageWidth, stageHeight) {
        this.pos.x = Math.random() * (stageWidth - WIDTH);
        this.pos.y = Math.random() * (stageHeight - HEIGHT);
        this.target = this.pos.clone();
        this.prevPos = this.pos.clone();
    }

    animate(ctx) {
        const move = this.target.clone().subtract(this.pos).reduce(FOLLOW_SPEED);
        this.pos.add(move);
        // 마우스에 따라 사각형 움직임

        this.centerPos = this.pos.clone().add(this.mousePos);

        ctx.beginPath();
        ctx.fillStyle = '#f4255a';
        ctx.fillRect(this.pos.x, this.pos.y, WIDTH, HEIGHT);
        // 사각형 등장
    }

    swingDrug(ctx) {

    }

    down(point){
        if (point.collide(this.pos, WIDTH, HEIGHT)) {
            this.isDown = true;
            this.startPos = this.pos.clone();
            this.downPos = point.clone();
            this.mousePos = point.clone().subtract(this.pos);

            const xRatioValue = this.mousePos.x / WIDTH;
            this.origin.x = WIDTH * xRatioValue;
            this.origin.y = HEIGHT * this.mousePos.y / HEIGHT;

            this.sideValue = xRatioValue - 0.5;


            return this;
        } else {
            return null;
        }
    }

    move(point){
        if(this.isDown) {
            this.target = this.startPos.clone().add(point).subtract(this.downPos);
        }
    }

    up() {
        this.isDown = false;
    }
}