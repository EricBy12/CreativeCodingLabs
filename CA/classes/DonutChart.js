
class DonutChart {
    constructor(obj) {
        this.data = obj.data
        this.chartSize = obj.chartSize || 300;
        this.chartPosX = obj.xPos || 250;
        this.chartPosY = obj.yPos || 650;
    }

    renderDonutChart() {
        push()
        translate(this.chartPosX, this.chartPosY);
        noStroke();
        for (let i = 0; i < this.data.length; i++) {
            fill(random(255),random(255),random(255));
            let start = 0;
            let end = ((this.data[i] / total) * 360);
            arc(0,0,this.chartSize,this.chartSize, start, end, PIE);
            rotate(end);
        }

        pop();
        noStroke();
        fill(backgroundColor);
        ellipse(this.chartPosX,this.chartPosY,(this.chartSize) / 2, (this.chartSize) / 2) // makes a circle half the size of the chart.
        fill(0);
        textAlign(CENTER)
        textSize(15)
        //textFont(font)//need to import font
        text("Genres of", this.chartPosX, this.chartPosY);
        text("Nintendo releases", this.chartPosX, this.chartPosY + 15);
        pop();
    }

    renderDonutKey() {
        translate(this.chartPosX, this.chartPosY);
        text("Genres of", this.chartPosX, this.chartPosY);
        text("Nintendo releases", this.chartPosX, this.chartPosY + 15);
    }
}