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
            {},
            {},
        ];
    }
}