class BarChart{
    constructor(obj) {
        this.data = obj.data;
        this.xValue = obj.xValue;
        this.yValue = obj.yValue;
        this.chartHeight=obj.chartHeight || 300;
        this.chartWidth=obj.chartWidth ||350;
        this.barWidth=obj.barWidth || 20;
        this.margin=obj.margin || 10;
        this.axisThickness =obj.axisThickness || 2;
        this.axisTickThickness = 2;
        this.chartPosX = obj.xPos || 50;
        this.chartPosY = obj.yPos || 350;
    
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2))/(this.data.length-1);// calculates the gap between each bar
        this.scaler= this.chartHeight / (max(cleanedData.map(row => row[this.yValue]))); //calculates the scale of the chart
    
        this.axisColour= color(111,112,117);
        this.axisTickColour= color(187,10,33);
        this.barColour = color (10,187,33);
        this.axisTextColour = color( 13,19,33);
        this.numTicks = 10;
        this.tickLength = 3;
        this.chartTitle = obj.chartTitle || "BarChart...";
    }
    
    renderBarChartTitle() { //Renders the title
        push();
        translate(this.chartPosX,this.chartPosY);
        textSize(20);
        textFont(font)// applys Nunito font
        textAlign(LEFT);
        text(this.chartTitle,0,-this.chartHeight - 20);//Title
        pop();
    }

    renderBarChartBars() {
        push();
        translate(this.chartPosX, this.chartPosY);
        push();
        translate(this.margin,0);
        for (let i = 0; i < this.data.length; i++) {
            let xPos = (this.barWidth + this.gap) * i; // spaces the bars
            
            fill(this.barColour);
            noStroke();
            rect(xPos,0,this.barWidth,-this.data[i][this.yValue]*this.scaler);//Draws the bars on the bar chart
            fill(0);
            textFont(font);
            text(this.data[i][this.yValue], xPos,-this.data[i][this.yValue]*this.scaler -5);//Adds text value above bars
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
        line(0,0,0,-this.chartHeight);//draws the y axis
        line(0,0,this.chartWidth,0);// draws the x axis
        pop();
    }
    
    renderBarChartLabels(){
        push();
        translate(this.chartPosX, this.chartPosY);
        push();
        translate(this.margin,0);
        textFont(font);
    
        for (let i = 0; i < this.data.length; i++) { //draws the labels under each bar
            let xPos = (this.barWidth + this.gap) * i; // spaces the labels
            push();
            fill(this.axisTextColour);
            textAlign(LEFT,CENTER);
            translate(xPos + (this.barWidth/2), 15);// moves the coordinate system while placing labels
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
        for(let i = 0; i <= this.numTicks; i++) { // draws the ticks inctrementaly on the y axis
            line(0, -tickIncrement*i, -this.tickLength, -tickIncrement*i);
        }
        pop();
    }
    }