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
        this.gap = Math.ceil(this.stageWidth / (this.total - 2));
        // stage보다 넓게 언덕을 그려(-2) 양이 자연스럽게 걸어올수있도록 구현 (2:15)

        for (let i = 0; i < this.total; i++){
            this.points[i] = {
                x: i*this.gap,
                y: this.getY()
            };
        }
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        
        let cur = this.points[0];
        let prev = cur;

        let dots = [];
        // 양의 좌표값 저장
        ctx.x += this.speed;
        ctx.moveTo(cur.x, cur.y);

        let prevCx = cur.x;
        let prevCy = cur.y;

        for (let i = 1; i < this.points.length; i++){
            cur = this.points[i];

            const cx = (prev.x + cur.x) / 2;
            const cy = (prev.y + cur.y) / 2;
            ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);
            
            dots.push({
                x1: prevCx,
                y1: prevCy,
                x2: prev.x,
                y2: prev.y,
                x3: cx,
                y3: cy,
            });

            prev = cur;
            prevCx = cx;
            prevCy = cy;
        }

        ctx.lineTo(prev.x, prev.y);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.fill();

        return dots; // 양의 좌표를 리턴값으로 넘겨주기
        
    } // point배열을 가져와 quadraticCurveTo를 사용해 언덕그리기
    geyY() {
        const min = this.stageHeight / 8;
        const max = this.stageHeight - min;
        return min + Math.random() * max;

    } // 언덕의 높낮이를 랜덤으로 주기 위한 함수

}