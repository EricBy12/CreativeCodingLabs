class StakedChart{
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
        this.chartTextSize = obj.chartTextSize || 8;
    
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2))/(this.data.length-1);
        this.scaler= this.chartHeight / (max(cleanedData.map(row => row[this.yValue])));
    
        this.axisColour= color(211,212,217);
        this.axisTickColour= color(187,10,33);
        this.barColour = color (187,10,33);
        this.axisTextColour = color( 13,19,33);
        this.numTicks = 10;
        this.tickLength = 3;
        
    }
}

function renderStackedBars() {
    push();
    for (let i = 0; i < this.data.length; i++) {
        xPos = (this.barWidth + this.gap) * i;
        push();
        translate(xPos,0);
        push();

        for (let j = 0; j < this.yValues.length; i++) {
            fill(barColours[j]);
            noStroke();
            rect (0,0, this.barWidth, -this.data[i][this.yValues[j]] * this.scaler);
            translate(0,-this.data[i][this.yValues[j]] * this.scaler - 1);
        }
        pop();
        pop();


    }
}

function renderStackedAxis() {
    push();
    translate(this.chartPosX,this.chartPosY);
    noFill()
    stroke(this.axisColour);
    strokeWeight(this.axisThickness);
    line (0,0,0,-this.chartHeight);
    line (0,0,this.chartWidth,0);
}

function renderStackedText() {
    fill(this.axisTextColour);
    noStroke();
    textAlign(LEFT, CENTER);
    textSize(this.chartTextSize);
    push();
    translate(xPos + (this.barWidth/2),10);
    rotate(60);
    text(this.data[i][this.xValue],0,0);
    pop();
}