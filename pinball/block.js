export class Block {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.maxX = width + x;
        this.maxY = height + y;
    }

    draw(ctx) {
        const xGap = 80;
        const yGap = 60;

        ctx.fillStyle = '#ff384e';
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();

        // 그림자 만들기
        ctx.fillStyle = '#190f3a';
        ctx.beginPath();
        ctx.moveTo(this.maxX, this.maxY);
        ctx.lineTo(this.maxX - xGap, this.maxY + yGap);
        ctx.lineTo(this.x - xGap, this.maxY + yGap);
        ctx.lineTo(this.x, this.maxY);
        ctx.fill();

        ctx.fillStyle = '#9d0919';

    }
}