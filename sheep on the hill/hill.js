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

        this.points = []; // for 포인트 저장
        this.gap = Match.ceil(this.stageWidth / (this.total - 2));
        // stage보다 넓게 언덕을 그려(-2) 양이 자연스럽게 걸어올수있도록 구현 (2:15)

        for (let i = 0; i < this.total; i++){
            this.points[i] = {
                x : i*this.gap,
                y : this.getY()
            };
        }
    }
    draw(ctx) {
        
    }
    geyY() {

    } // 언덕의 높낮이를 랜덤으로 주기 위한 함수

}