import Rectangle from "./Rectangle";
export default class GameArea {
    canvas = undefined;
    r;
    constructor() {
        this.r = new Rectangle(10, 120,20,20, "black");
        this.canvas = document.getElementById("GameArea");
        this.canvas.width = 480;
        this.canvas.heigth = 270;
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(this.updateGameArea, 20);
    }
    drawRect(component) {
        this.context.fillStyle = component.color;
        this.context.fillRect(component.x, component.y, component.width, component.heigth);
    }
    updateGameArea = () => {

    }
}