
class DonutChart {
    constructor(obj) {
        this.data = obj.data
        this.titles = obj.titles;
        this.donutValues = obj.donutValues;
        this.chartSize = obj.chartSize || 300;
        this.textSize = (this.chartSize / 20)
        this.chartPosX = obj.xPos || 250;
        this.chartPosY = obj.yPos || 650;
        this.keySize = this.chartSize / 15;
        this.chartTitle = obj.chartTitle || "DonutChart...";
    }


    renderDonutChart() {
        push()
        translate(this.chartPosX, this.chartPosY);
        noStroke();
        for (let i = 0; i < this.data.length; i++) {
            fill(barColorsArray[i]); //Changes colour for each arc.
            let start = 0;
            let end = ((this.data[i][this.donutValues] / donutTotal) * 360); // Calculates the size each arc
            arc(0,0,this.chartSize,this.chartSize, start, end, PIE); // Draws the arc
            rotate(end);
        }

        pop();
        noStroke();
        fill(backgroundColor);// makes the middle the
        ellipse(this.chartPosX,this.chartPosY,(this.chartSize) / 2, (this.chartSize) / 2) // makes a circle half the size of the chart.
        fill(0);
        textAlign(CENTER)
        textSize(this.textSize)
        textFont(font)
        // Chart Title
        text(this.chartTitle, this.chartPosX, this.chartPosY);
        //text("Nintendo releases", this.chartPosX, this.chartPosY + (this.textSize));
        pop();
    }

    renderDonutKey() {// renders the legend
        textAlign(LEFT,CENTER)
        textSize(15)
        push();
        translate(this.chartPosX + this.chartSize/1.5, this.chartPosY - (this.chartSize/2));
        
        for (let i = 0; i < this.data.length; i++) { //loop draws the legend
            fill(barColorsArray[i]); //colours the legend
            donutPercentages.push(((this.data[i][this.donutValues] / donutTotal) * 100));//Finds each values percentage of the chart
            rect(0,(30 + (this.keySize + 10) * i),this.keySize,this.keySize)// legend colours

            fill(0)
            // Legend Text
            text(this.data[i][this.titles] + " (" + (this.data[i][this.donutValues]) + ")  " + Math.round(donutPercentages[i]) + "%", 30 + this.keySize / 2 ,(this.keySize/2) + (30 + (this.keySize + 10) * i))
        }
        pop();
    }
}