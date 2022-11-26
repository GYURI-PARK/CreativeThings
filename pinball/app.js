class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
    }
}

window.onload = () => {
    new App();
};