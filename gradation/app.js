const COLORS = [
    {r: 45, g: 74, b: 227},
    {r: 250, g: 255, b: 89},
    {r: 255, g: 104, b: 248},
    {r: 44, g: 209, b: 252},
    {r: 54, g: 233, b: 84},
];

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

        this.totalParticles = 1;
        this.particles = [];
        this.maxRadius = 90;
        this.minRadius = 40;

        window.addEventListener('resize', this.resize.bind(this),false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {

    }

    animate() {
        
    }
}

window.onload = () => {
    new App();
}