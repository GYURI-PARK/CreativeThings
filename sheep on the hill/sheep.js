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
        if (!this.time){
            this.time = t;
        }

        const now = t - this.time;
        if (now > this.fpsTime) {
            this.time = t;
            this.curFrame += 1;
            if (this.curFrame == this.totalFrame) {
                this.curFrame = 0;
            }
        }
        // requestAnimationFrame 함수에서 넘겨받은 타임 스탬프를 시간으로 정의하고
        // 내가 정한 FPS의 시간과 비교하는 코드
        // -> 프레임을 증가시키는 속도를 시간에 맞춰서 조절

        this.animate(ctx, dots);
    }

    animate(ctx, dots){
        // 양의 중심점을 하단 중앙으로 잡아야 언덕 선을 따라간다.
        this.x -= this.speed; // 양의 x값을 스테이지 넓이에 양에 넓이를 더한 만큼 초기지정
        const closest = this.getY(this.x, dots);
        this.y = closest.y; // x값과 가장 맞는 y값 대입

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(closest.rotation);
        // drawImage() 함수 : 캔버스에 이미지 그리기
        ctx.drawImage(
            this.img,
            this.imgWidth * this.curFrame,
            0,
            this.imgWidth,
            this.imgHeight,
            -this.sheepWidthHalf,
            -this.sheepHeight + 20,
            this.sheepWidth,
            this.sheepHeight
        );
        ctx.restore(); // 캔버스 복귀
    }

    // 여러개의 연결된 곡선 가운데 어떤 곡선이 x값에 해당하는지 확인하는 함수
    getY(x, dots){
        for(let i = 1; i<dots.length; i++){
            if(x >= dots[i].x1 && x <= dots[i].x3){
                return this.getY2(x, dots[i]);
            }
        }
        return {
            y: 0,
            rotation: 0
        };
    }

    // 양의 x값에 맞는 곡선의 y를 찾아보고 리턴해주는 함수
    getY2(x, dot) {
        const total = 200;
        let pt = this.getPointOnQuad(dot.x1, dot.y1, dot.x2, dot.y2, dot.x3, dot.y3, 0);
        let prevX = pt.x;
        for (let i = 1; i < total; i++){
            const t = i / total;
            pt = this.getPointOnQuad(dot.x1, dot.y1, dot.x2, dot.y2, dot.x3, dot.y3, t);

            if (x>= prevX && x <= pt.x) {
                return pt;
            }
            prevX = pt.x;
        }
        return pt;
    }


    // 비율에 따른 좌표 찾기 -> 양이 언덕을 따라갈 수 있도록
    getQuadValue(p0, p1, p2, t) {
        return (1-t) * (1-t) * p0 + 2 * (1-t) * t * p1 + t * t * p2;
    }

    getPointOnQuad(x1, y1, x2, y2, x3, y3, t) {
        const tx = this.quadTangent(x1, x2, x3, t);
        const ty = this.quadTangent(y1, y2, y3, t);
        const rotation = -Math.atan2(tx, ty) + (90 * Math.PI / 180);
        return {
            x: this.getQuadValue(x1, x2, x3, t),
            y: this.getQuadValue(y1, y2, y3, t),
            rotation: rotation,
        };
    }

    // 양이 수평으로 움직이는 것이 아니라 기울기에 맞게 회전되어야 한다.
    quadTangent(a, b, c, t){
        return 2 * (1-t) * (b-a) + 2 * (c-b) * t;
    }


}


