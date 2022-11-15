export class BounceString {
    constructor(pos, color) {
        
        this.points = [
            {
                x: pos.x1,
                y: pos.y1,
                ox: pos.x1,
                oy: pos.y1,
                vx: 0,
                vy: 0,
            },
            {
                x: ((pos.x2 - pos.x1) / 2) + pos.x1,
                y: ((pos.y2 - pos.y1) / 2) + pos.y1,
                ox: pos.x1,
                oy: pos.y1,
                vx: 0,
                vy: 0,
            },
            {
                x: pos.x2,
                y: pos.y2,
                ox: pos.x2,
                oy: pos.y2,
                vx: 0,
                vy: 0,
            },
        ];
    }
}