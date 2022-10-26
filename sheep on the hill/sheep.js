export class Sheep {
    constructor(img, stageWidth) {
        // 양이 오른쪽 끝에 등장하므로 stageWidth를 변수로 받음
        this.img = img;
    }

    draw(ctx, t, dots){
        this.animate(ctx, dots);
    }

    animate(ctx, dots){

    }
}