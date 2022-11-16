class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appednChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        this.strings = [];
        this.moveX = -5000;
        this.moveY = -5000;
        this.isDown = false;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        document.addEventListener('pointerdown', this.onDown.bind(this), false);
        document.addEventListener('pointermove', this.onMove.bind(this), false);
        document.addEventListener('pointerup', this.onUp.bind(this), false);

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
    
        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.sclae(this.pixelRatio, this.pixelRatio);
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0,0, this.stageWidth, this.stageHeight);
    }

    onDown(e) {
        this.isDown = true;
        this.moveX = e.clientX;
        this.moveY = e.clientY;
    }

    onMove(e) {

    }

    onUp(e) {

    }
}


window.onload = () => {
    new App();
};