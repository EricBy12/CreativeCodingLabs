
class DonutChart {
    constructor(obj) {
        this.data = obj.data
        this.titles = obj.titles;
        this.donutValues = obj.donutValues;
        this.chartSize = obj.chartSize || 600;
        this.textSize = (this.chartSize / 20)
        this.chartPosX = obj.xPos || 250;
        this.chartPosY = obj.yPos || 650;
        this.keySize = this.chartSize / 15;
    }


    renderDonutChart() {
        push()
        translate(this.chartPosX, this.chartPosY);
        noStroke();
        for (let i = 0; i < this.data.length; i++) {
            for(let j = 0; j < barColorsArray.length; j++) {
                fill(barColorsArray[i]);
            }
            let start = 0;
            let end = ((this.data[i][this.donutValues] / total) * 360);
            arc(0,0,this.chartSize,this.chartSize, start, end, PIE);
            rotate(end);
        }

        pop();
        noStroke();
        fill(backgroundColor);
        ellipse(this.chartPosX,this.chartPosY,(this.chartSize) / 2, (this.chartSize) / 2) // makes a circle half the size of the chart.
        fill(0);
        textAlign(CENTER)
        textSize(this.textSize)
        //textFont(font)//need to import font
        text("Genres of", this.chartPosX, this.chartPosY);
        text("Nintendo releases", this.chartPosX, this.chartPosY + (this.textSize));
        pop();
    }

    renderDonutKey() {
        textAlign(LEFT,CENTER)
        textSize(15)
        push();
        translate(this.chartPosX + this.chartSize/1.5, this.chartPosY - (this.chartSize/2));
        for (let i = 0; i < this.data.length; i++) {
            for(let j = 0; j < barColorsArray.length; j++) {
                fill(barColorsArray[i]);
            }
            rect(0,(30 + this.keySize * i),this.keySize,this.keySize)

            fill(0)
            text(this.data[i][this.titles], 30,(this.keySize/2) + (30 + this.keySize * i))
            
        }
        pop();
    }
}