class DonutChart {
    constructor(obj) {
        this.data = obj.data
        this.chartSize = obj.chartSize || 300;
        this.chartPosX = obj.xPos || 50;
        this.chartPosY = obj.yPos || 350;

        chartColor = color(200,0,0);
    }

    renderDonutChart() {
        push()
        translate(this.chartPosX, this.chartPosY);
        for (let i = 0; i < this.data.length; i++) {
            fill(this.chartColor);
            let start = 0;
            let end = ((this.data[i] / total) * 360);
            arc(0,0,this.chartSize,this.chartSize, start, end, PIE);
            rotate(end);
        }
        
        fill(0);
        noStroke();
        textFont(font)//need to import font
        text("This is a Donut chart...", 150, 200);

        fill(200);
        ellipse(0,0,(this.chartSize) / 2, (this.chartSize) / 2) // makes a circle half the size of the chart.
        pop()
    }
}