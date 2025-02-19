class StackedChart {
    constructor(obj) {
        this.data = obj.data
        this.chartHeight = obj.chartHeight;
        this.chartWidth = obj.chartWidth;
        this.xValue = obj.xValue;
        this.yValue = obj.yValue;
        this.barWidth = obj.barWidth;
        this.margin = obj.margin;
        this.axisThickness = obj.axisThickness;
        this.axisTickThickness = obj.axisTickThickness;
        this.chartPosX = obj.chartPosX;
        this.chartPosY = obj.chartPosY;
        

        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2))/(this.data.length-1);
        this.scaler= this.chartHeight / (max(cleanedData.map(row => row[this.yValue])));

        this.axisColour= color(211,212,217);
        this.axisTickColour= color(187,10,33);
        this.barColour = color (187,10,33);
        this.axisTextColour = color( 13,19,33);
        this.numTicks = 10;
        this.tickLength = 3;
    }

    renderChart() {
        for (let i = 0; i < cleanedData.length; i++) {
            
        }
    }
}