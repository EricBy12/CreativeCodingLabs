class BarChart{
    constructor(obj) {
        this.data = obj.data;
        this.xValue = obj.xValue;
        this.yValue = obj.yValue;
        this.chartHeight=obj.chartHeight || 300;
        this.chartWidth=obj.chartWidth ||300;
        this.barWidth=obj.barWidth || 20;
        this.margin=obj.margin || 10;
        this.axisThickness =obj.axisThickness || 2;
        this.axisTickThickness = 2;
        this.chartPosX = obj.xPos || 50;
        this.chartPosY = obj.yPos || 350;
    
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2))/(this.data.length-1);
        this.scaler= this.chartHeight / (max(cleanedData.map(row => row[this.yValue])));
    
        this.axisColour= color(111,112,117);
        this.axisTickColour= color(187,10,33);
        this.barColour = color (10,187,33);
        this.axisTextColour = color( 13,19,33);
        this.numTicks = 10;
        this.tickLength = 3;
    }
    
    renderBarChartTitle() {
        push();
        translate(this.chartPosX,this.chartPosY);
        textSize(20)
        textAlign(LEFT)
        text("BarChart...",0,-this.chartHeight - 20);
        pop();
    }

    renderBarChartBars() {
        push();
        translate(this.chartPosX, this.chartPosY);
        push();
        translate(this.margin,0);
        for (let i = 0; i < this.data.length; i++) {
            let xPos = (this.barWidth + this.gap) * i;
            
            for(let j = 0; j < barColorsArray.length; j++) {
                fill(barColorsArray[i]);
            }
            noStroke();
            rect(xPos,0,this.barWidth,-this.data[i][this.yValue]*this.scaler);
        }
        pop();
        pop();
    }
    
    renderBarChartAxis() {
        push();
        translate(this.chartPosX, this.chartPosY);
        noFill();
        strokeWeight(this.axisThickness);
        stroke(this.axisColour);
        line(0,0,0,-this.chartHeight);
        line(0,0,this.chartWidth,0);
        pop();
    }
    
    renderBarChartLabels(){
        push();
        translate(this.chartPosX, this.chartPosY);
        push();
        translate(this.margin,0);
    
        for (let i = 0; i < this.data.length; i++) {
            let xPos = (this.barWidth + this.gap) * i;
            push();
            fill(this.axisTextColour);
            textAlign(LEFT,CENTER);
            translate(xPos + (this.barWidth/2), 15);
            textSize(15);
            rotate(60);
            text(this.data[i][this.xValue], 0 ,0);
            pop();
        }
        pop();
        pop();
    }
    
    renderBarChartTicks() {
        push();
        translate(this.chartPosX, this.chartPosY);
        noFill();
        stroke(this.axisTickColour);
        strokeWeight(this.axisTickThickness);
        let tickIncrement = this.chartHeight/this.numTicks;
        for(let i = 0; i <= this.numTicks; i++) {
            line(0, -tickIncrement*i, -this.tickLength, -tickIncrement*i);
        }
        pop();
    }
    }