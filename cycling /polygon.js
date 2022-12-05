const PI2 = Math.PI * 2;

export class Polygon {
    constructor(x, y, radius, sides) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sides = sides;
        this.rotate = 0;
    }

    animate(ctx) {
        ctx.save();
        ctx.fillStyle = '#00000';
        ctx.beginPath();

        const angle = PI2 / this.sides;

        ctx.translate(this.x, this.y);

        for (let i = 0; i < this.sides; i++) {
            const x = this.radius * Math.cos(angle * i);
            const y = this.radius * Math.sin(angle * i);

            (i == 0) ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
        }

        ctx.fill();
        ctx.closePath();
        ctx.restore();

    }
}