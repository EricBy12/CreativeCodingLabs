class HorizontalChart{
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
        this.chartPosX = obj.xPos || 600;
        this.chartPosY = obj.yPos || 350;
    
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2))/(this.data.length-1);
        this.scaler= this.chartHeight / (max(cleanedData.map(row => row[this.yValue])));
    
        this.axisColour= color(111,112,117);
        this.axisTickColour= color(187,10,33);
        this.barColour = color (0,0,150);
        this.axisTextColour = color( 13,19,33);
        this.numTicks = 10;
        this.tickLength = 3;
        this.chartTitle = obj.chartTitle || "HorizontalChart...";
    }
    
    renderHorizontalTitle() {
        push();
        translate(this.chartPosX,this.chartPosY);
        textSize(20)
    
        textAlign(LEFT)
        text(this.chartTitle,0,-this.chartHeight - 20);//Draws the title
        pop();
    }
    
    renderHorizontalBars() {
        push();
        translate(this.chartPosX, (this.chartPosY - this.chartHeight) + (this.barWidth + this.gap));
        push();
        rotate(90);
        translate(-this.margin,0);
        for (let i = 0; i < this.data.length; i++) {
            let xPos = (this.barWidth + this.gap) * i;
            fill(this.barColour);
            noStroke();
            rect(xPos,0,this.barWidth,-this.data[i][this.yValue]*this.scaler);
            fill(0)
            text(this.data[i][this.yValue], xPos,-this.data[i][this.yValue]*this.scaler -5)
        }
        pop();
        pop();
    }
    
    renderHorizontalAxis() {
        push();
        translate(this.chartPosX, this.chartPosY);
        noFill();
        strokeWeight(this.axisThickness);
        stroke(this.axisColour);
        line(0,0,0,-this.chartHeight);
        line(0,0,this.chartWidth,0);
        pop();
    }

    renderHorizontalAxisLabels() {}
    
    renderHorizontalLabels(){
        push();
        translate(this.chartPosX, (this.chartPosY - this.chartHeight) + (this.barWidth + this.gap));
        push();
        translate(-this.margin,0);
        textFont(font);
    
        for (let i = 0; i < this.data.length; i++) {
            let yPos = (this.barWidth + this.gap) * i;
            push();
            fill(this.axisTextColour);
            textAlign(RIGHT,CENTER);
            translate(this.barWidth/2, yPos);
            textSize(15);
            text(this.data[i][this.xValue], -10 ,0);
            pop();
        }
        pop();
        pop();
    }
    
    renderHorizontalTicks() {
        push();
        translate(this.chartPosX, this.chartPosY);
        noFill();
        stroke(this.axisTickColour);
        strokeWeight(this.axisTickThickness);
        let tickIncrement = this.chartHeight/this.numTicks;
        rotate(90)//rotates ticks to x axis
        for(let i = 0; i <= this.numTicks; i++) {
            line(0, -tickIncrement*i, this.tickLength, -tickIncrement*i);
        }
        pop();
    }
    }