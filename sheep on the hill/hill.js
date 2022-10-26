// 언덕 그리기
// hill class > resize 함수, draw 함수

export class Hill {
    constructor(color, speed, total){
        this.color = color;
        this.speed = speed;
        this.total = total;
    } // 여러개의 언덕을 만들기 위해 색상/속도/포인트 개수를 파라미터로 받아온다.
    resize(stageWidth, stageHeight) {
        this.stageHeight = stageHeight;
        this.stageWidth = stageWidth;
    }
    draw(ctx) {
        
    }
    geyY() {

    } // 언덕의 높낮이를 랜덤으로 주기 위한 함수

}