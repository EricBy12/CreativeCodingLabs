class BarChart {
    constructor(obj) {
        this.data = obj.data;
        this.xValue = obj.xValue
        this.yValue = obj.yValue;
        this.chartHeight=obj.chartHeight || 300;
        this.chartWidth=obj.chartWidth || 300;
        this.barWidth=obj.barWidth || 20;
        this.margin=obj.margin || 10;
        this.axisThickness =obj.axisThickness || 2;
        this.axisTickThickness = 2 ;
        this.chartPosX = obj.xPos || 50;
        this.chartPosY = obj.yPos || 350;

        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2))/(this.data.length-1);
        this.scaler= this.chartHeight / (max(cleanedData.map(row => row[this.yValue])));

        this.axisColour= color(211,212,217);
        this.axisTickColour= color(187,10,33);
        this.barColour = color (187,10,33);
        this.axisTextColour = color( 13,19,33);
        this.numTicks = 10;
        this.tickLength = 3;
    }

    renderBars() {
        push();
        translate(this.chartPosX,this.chartPosY)
        push()
        translate(this.margin,0)
        for (let i = 0; i < this.data.length; i++) {
            let xPos = (this.barWidth + this.gap) * i;
            fill(this.barColour)
            noStroke()
            rect(xPos,0,this.barWidth,-this.data[i][this.yValue]*this.scaler)
            
        }
        pop()
        pop()
        }
    
        renderAxis() {
            push();
            translate(this.chartPosX,this.chartPosY)
            noFill()
            stroke(this.axisColour)
            strokeWeight(this.axisThickness)
            line(0,0,0,-this.chartHeight)
            line(0,0,this.chartWidth,0)
            pop()
        }
    
        renderLabels() {
        push();
        translate(this.chartPosX,this.chartPosY)
    
        push()
        translate(this.margin,0)
        for (let i = 0; i < this.data.length; i++) {
            let xPos = (this.barWidth + this.gap) * i;        
            push()
            fill(this.axisTextColour);
            textAlign(LEFT, CENTER)
            translate(xPos + (this.barWidth/2), 15)
            textSize(15)
            rotate(60)
            text (this.data[i][this.xValue], 0 , 0);
            pop()
        }
        pop()
        pop()
        }
    
        renderTicks() {
        push();
        translate(this.chartPosX,this.chartPosY);
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



// WORKING ON HOROZONATAL BARS

// renderBars() {
//     push();
//     translate(this.chartPosY,this.chartPosX)
//     push()
//     translate(this.margin,0)
//     rotate(90)
//     for (let i = 0; i < this.data.length; i++) {
//         let xPos = (this.barWidth + this.gap) * i;
//         fill(this.barColour)
//         noStroke()
//         rect(xPos,0,this.barWidth,-this.data[i][this.yValue]*this.scaler)
        
//     }
//     pop()
//     pop()
//     }

// renderBars() {
//     push();
//     translate(this.chartPosX,this.chartPosY -this.barWidth - this.gap)
//     rotate(90)
//     translate(-this.margin,0)
//     push()
    
//     for (let i = 0; i < this.data.length; i++) {
//         let xPos = (this.barWidth + this.gap) * -i;
//         fill(this.barColour)
//         noStroke()
//         rect(xPos,0,this.barWidth,-this.data[i][this.yValue]*this.scaler)
        
//     }

// }

// renderTicks() {
//     push();
//     translate(this.chartPosX,this.chartPosY);
//     noFill();
//     stroke(this.axisTickColour);
//     strokeWeight(this.axisTickThickness);
//     let tickIncrement = this.chartHeight/this.numTicks;
//     rotate(90)
//     for(let i = 0; i <= this.numTicks; i++) {
//         line(0, -tickIncrement*i, -this.tickLength, -tickIncrement*i);
//     }
//     pop();
//     }
// renderBars() {
//     push();
//     translate(this.chartPosX,this.chartPosY -this.barWidth - this.gap)
//     rotate(90)
//     translate(-this.margin,0)
//     push()
    
//     for (let i = 0; i < this.data.length; i++) {
//         let xPos = (this.barWidth + this.gap) * -i;
//         fill(this.barColour)
//         noStroke()
//         rect(xPos,0,this.barWidth,-this.data[i][this.yValue]*this.scaler)
        
//     }
    
//     pop()
//     pop()
//     }