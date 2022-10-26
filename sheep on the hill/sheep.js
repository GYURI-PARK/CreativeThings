export class Sheep {
    constructor(img, stageWidth) {
        // 양이 오른쪽 끝에 등장하므로 stageWidth를 변수로 받음
        this.img = img;

        // frame 정의
        this.totalFrame = 8; // 양 프레임 8
        this.curFrame = 0; // 현재 프레임

        this.imgWidth = 360; // 양 그림 너비
        this.imgHeight = 300; // 양 그림 높이

        this.sheepWidth = 180; // 화질을 위해 절반으로
        this.sheepHeight = 150;

        this.sheepWidthHalf = this.sheepWidth / 2;
        this.x = stageWidth + this.sheepWidth;
        this.y = 0;
        this.speed = Math.random() * 2 + 1;

        this.fps = 24;
        this.fpsTime = 1000 / this.fps;
    }

    draw(ctx, t, dots){
        this.animate(ctx, dots);
    }

    animate(ctx, dots){
        // 양의 중심점을 하단 중앙으로 잡아야 언덕 선을 따라간다.
        this.x = 650;
        this.y = 550;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = '#000000';
        ctx.fillRect (
            -this.sheepWidthHalf,
            -this.sheepHeight + 20,
            this.sheepWidth,
            this.sheepHeight
        );
        ctx.restore(); // 캔버스 복귀
    }
}
