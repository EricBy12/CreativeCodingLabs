class StackedChartAVG{
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
        this.chartPosY = obj.yPos || 1700;
        this.chartTextSize = obj.chartTextSize || 8;
        this.total = obj.total;
        this.legendSize = 25;
    
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2))/(this.data.length-1);

        this.totals = this.data.map((row) => {
            return row.Total
        })

        this.maxValue = max(this.totals)

        this.scaler = (this.chartHeight / this.maxValue);

        this.averages = this.data.map((row) => {
            let sum = 0;
            for (let i = 0; i < this.yValues.length; i++) {
                //console.log(sum);
                sum += row[this.yValues[i]];  // Sum the values of the publishers
                
            }
            return Math.round(sum/ this.yValues.length);  // Return the average
            
           
        });
        //this.averages = averages;
        this.maxAVGValue = max(this.averages);
        console.log(this.maxAVGValue);
        this.AVGscaler = (this.chartHeight / this.maxAVGValue);
        console.log(this.AVGscaler);

        this.axisColour= color(111,112,117);
        this.axisTickColour= color(187,10,33);
        this.barColour = color (187,10,33);
        this.axisTextColour = color( 13,19,33);
        this.numTicks = 10;
        this.tickLength = 3;
        this.chartTitle = obj.chartTitle || "Stacked Chart...";
        
    }
    

    renderStackedAVGTitle() {
        push();
        translate(this.chartPosX,this.chartPosY);
        textSize(20)
        textAlign(LEFT)
        text(this.chartTitle,0,-this.chartHeight - 20);
    }


    renderStackedAVGBars() {
        pop();
        
        push();
        translate(this.chartPosX,this.chartPosY);
        for (let i = 0; i < this.data.length; i++) {
            xPos = (this.barWidth + this.gap) * i;
            push();
            translate(xPos,0);
            push();
    
            for (let j = 0; j < this.yValues.length; j++) {
                fill(barColorsArray[j]);
                noStroke();
                rect (0,0, this.barWidth, -this.data[i][this.yValues[j]] * this.scaler);
                translate(0,-this.data[i][this.yValues[j]] * this.scaler - 1);

                
            }
            pop();
            pop();
        }
        
    }
    
    //troubleshooting using Chat GPT and updataed code from suggestions
    renderStackedAVGLines() {
        
        console.log("Computed Averages:", this.averages);//debugging avg line not appearing, avgs are good

        push();
        translate(this.chartPosX, this.chartPosY);

        beginShape();
        stroke(0, 255, 0);  // Green color for the average line
        strokeWeight(2);
        noFill();

        // Plot the average line
        for (let i = 0; i < this.data.length; i++) {
            let x = (this.barWidth + this.gap) * i;
            let y = this.averages[i] * this.AVGscaler;  // Position the point based on the average value NOT WORKING
            
            vertex(x, y);

            // Optional: Draw a point at each average value
            stroke(255, 0, 0);  // Red color for points
            strokeWeight(5);
            ellipse(x, y, 10, 10);  // Draw a red point at the average value
        }

        endShape();
        pop();
    }
    //GPT

    renderStackedAVGAxis() { //
        push();
        translate(-this.margin,0);
        noFill()
        stroke(this.axisColour);
        strokeWeight(this.axisThickness);
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);
    }
    
    renderStackedAVGText() {
        push();
        translate(0,0);
        push();
        translate(this.margin,0);
        textFont(font);
    
        for (let i = 0; i < this.data.length; i++) {
            let xPos = (this.barWidth + this.gap) * i;
            push();
            fill(this.axisTextColour);
            textAlign(LEFT,CENTER);
            translate(xPos + (this.barWidth/2), 15);
            textSize(20);
            rotate(60);
            noStroke()
            text(this.data[i][this.xValue], 0 ,0);
            pop();
        }
        pop();
        pop();
    }

    renderStackedAVGTicks() {
        pop();
        push();
        translate(-this.margin,0);
        noFill();
        stroke(this.axisTickColour);
        strokeWeight(this.axisTickThickness);
        let tickIncrement = this.chartHeight/this.numTicks;
        for(let i = 0; i <= this.numTicks; i++) {
            line(0, -tickIncrement*i, -this.tickLength, -tickIncrement*i);
        }
        pop();
        pop();
    }

    renderStackedAVGLegend() {
        textAlign(LEFT,CENTER)
        textSize(15)
        push();
        translate(this.chartPosX + this.chartWidth + 15, this.chartPosY -500);
        
        for (let i = 0; i < this.yValues.length; i++) { //loop draws the legend
            fill(barColorsArray[i]); //colours the legend
            rect(0,(30 + (this.legendSize + 10) * i),this.legendSize,this.legendSize)// legend colours

            fill(0)
            // Legend Text
            text(this.yValues[i], 30 + this.legendSize / 2 ,(this.legendSize/2) + (30 + (this.legendSize + 10) * i))
        }
        pop();
    }
}

