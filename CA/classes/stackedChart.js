class StackedChart{
    constructor(obj) {
        this.data = obj.data;
        this.xValue = obj.xValue;
        this.yValues = obj.yValues || [];
        this.chartHeight=obj.chartHeight || 500;
        this.chartWidth=obj.chartWidth ||500;
        this.barWidth=obj.barWidth || 30;
        this.margin=obj.margin || 10;
        this.axisThickness =obj.axisThickness || 2;
        this.axisTickThickness = 2;
        this.chartPosX = obj.xPos || 900;
        this.chartPosY = obj.yPos || 950;
        this.chartTextSize = obj.chartTextSize || 8;
        this.total = obj.total;
        this.legendSize = 25;
    
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2))/(this.data.length-1);

        this.totals = this.data.map((row) => { // gets all of the totals from the dataset
            return row.Total
        })

        this.maxValue = max(this.totals) // max value is the highest total

        this.scaler = (this.chartHeight / this.maxValue);
    
        this.axisColour= color(111,112,117);
        this.axisTickColour= color(187,10,33);
        this.barColour = color (187,10,33);
        this.axisTextColour = color( 13,19,33);
        this.numTicks = 10;
        this.tickLength = 3;
        this.chartTitle = obj.chartTitle || "Stacked Chart...";
        
    }
    

    renderStackedTitle() {
        push();
        translate(this.chartPosX,this.chartPosY);
        textSize(20)
        textAlign(LEFT)
        text(this.chartTitle,0,-this.chartHeight - 20);//Chart Title
    }


    renderStackedBars() {
        pop();
        
        push();
        translate(this.chartPosX,this.chartPosY);
        for (let i = 0; i < this.data.length; i++) { //loops the other loop while translating the coordinates to draw the bars on top of each other
            xPos = (this.barWidth + this.gap) * i;
            push();
            translate(xPos,0);
            push();
    
            for (let j = 0; j < this.yValues.length; j++) {// draws the bars on top of each other
                fill(barColorsArray[j]);
                noStroke();
                rect (0,0, this.barWidth, -this.data[i][this.yValues[j]] * this.scaler);//draws bar
                translate(0,-this.data[i][this.yValues[j]] * this.scaler - 1); // moves coodinates to the top of the bar.
            }
            pop();
            pop();
        }
    }
    
    renderStackedAxis() { //renders x and y axis
        push();
        translate(-this.margin,0);
        noFill()
        stroke(this.axisColour);
        strokeWeight(this.axisThickness);
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);
    }
    
    renderStackedText() {
        push();
        translate(0,0);
        push();
        translate(this.margin,0);
        textFont(font);
    
        for (let i = 0; i < this.data.length; i++) {// rnders text labels on the x axis
            let xPos = (this.barWidth + this.gap) * i;
            push();
            fill(this.axisTextColour);
            textAlign(LEFT,CENTER);
            translate(xPos + (this.barWidth/2), 15); // moves coordinates to next bar
            textSize(20);
            rotate(60);
            noStroke()
            text(this.data[i][this.xValue], 0 ,0); //Text
            pop();
        }
        pop();
        pop();
    }

    renderStackedTicks() { //renders the ticks
        pop();
        push();
        translate(-this.margin,0);
        noFill();
        stroke(this.axisTickColour);
        strokeWeight(this.axisTickThickness);
        let tickIncrement = this.chartHeight/this.numTicks;
        for(let i = 0; i <= this.numTicks; i++) {
            line(0, -tickIncrement*i, -this.tickLength, -tickIncrement*i); // incrementaly places the ticks on the y axis
        }
        pop();
        pop();
    }

    renderStackedLegend() {
        textAlign(LEFT,CENTER)
        textSize(15)
        push();
        translate(this.chartPosX + this.chartWidth + 15, this.chartPosY -500);
        
        for (let i = 0; i < this.yValues.length; i++) { //loop draws the legend and
            fill(barColorsArray[i]); //colours the legend
            rect(0,(30 + (this.legendSize + 10) * i),this.legendSize,this.legendSize)// legend colours

            fill(0)
            // Legend Text
            text(this.yValues[i], 30 + this.legendSize / 2 ,(this.legendSize/2) + (30 + (this.legendSize + 10) * i))
        }
        pop();
    }
}

