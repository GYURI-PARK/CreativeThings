import {
    Hill
} from'./hill.js';

import {
    SheepController
} from './sheep-controller.js';

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);

        this.hills = [
            new Hill('#fd6bea', 0.2, 12),
            new Hill('#ff59c2', 0.5, 8),
            new Hill('#ff4674', 1.4, 6)
        ];
        
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2,2);
        // canvas 사이즈를 두 배로 해줌으로써 retina display에서도 선명하게 보일 수 있도록 해준다.

        for (let i = 0; i < this.hills.length; i++){
            this.hills[i].resize(this.stageWidth, this.stageHeight);
        }

        this.SheepController.resize(this.stageWidth, this.stageHeight);

    } // 스크린 사이즈를 가져오기 위한 resize 이벤트

    animate(t) {
        requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        // canvas 초기화
        let dots; // 언덕 좌표
        for (let i = 0; i < this.hills.length; i++){
            dots = this.hills[i].draw(this.ctx);
        }
        this.SheepController.draw(this.ctx, t, dots);
        // hill class 에서 받은 언덕의 좌표를 sheepController로 넘겨줌
        // 언덕 마지막에 양이 나타나야하므로
        // t : FPS를 위한 타임스탬프를 파라미터로 넘겨줌
        // requestAnimationFrame 함수는 타임스탬프를 파라미터로 넘겨 받음
    }
}

window.onload = () => {
    new App();
};