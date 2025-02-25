let data;
let cleanedData = [];
let BarCharts = [];
let HorizontalCharts = [];
let donutCharts = [];
let stackedCharts = [];
let femaleScores;
let ageGroups;
let chartHeight=300;
let chartWidth=500;
let barWidth=20;
let margin=15;
let gap;
let scaler;
let axisThickness = 1;
let chartPosX = 100;
let chartPosY = 400;
let axisColour;
let barColour;
let axisTextColour;
let total = 500;
let donutData = [];
let chartColor;
let chartTextSize;
let xPos;
let barColorsArray = [];
let backgroundColor;
let donutPercentages = [];

function preload() {
    data= loadTable('data/VGData.csv', 'csv', 'header');
    font = loadFont('Nunito/static/Nunito-Black.ttf')
}

function setup() {
    createCanvas(1500,1500);
    angleMode(DEGREES);
    noLoop();
    cleanData();
    GetDonutData();
    
    backgroundColor = color("#F8F8F8");
    barColorsArray.push("#4D9DE0", "#e15554", "#e1bc29", "#3bb273","#7768AE", "#ADFC92", "#21A0A0", "#B9B9B9", "#37323E", "#F7C59F", "#7F7CAF", "#645DD7");
    //barColorsArray.push("#7400B8", "#6930C3", "#5E60CE", "#5390D9","#4EA8DE", "#48BFE3", "#56CFE1", "#64DFDF", "#72EFDD", "#80FFDB", "#ADFFE8", "#C2FFEE");
    //barColorsArray.push("#0E1DB0", "#0E2CB0", "#0E3BB0", "#0E4AB0","#0F59B1", "#0F67B1", "#0F76B1", "#0F85B1", "#0F94B1", "#1F94A1", "#2F8590", "#3F7680");

    
}


function draw() {
    background(backgroundColor);
    drawBarChart();
    drawHorizontal();
    drawDonut();
    drawStacked();
}

function GetDonutData() {
    donutData = cleanedData.map(row => row.Nintendo);
    donutTotal = 0;
    donutData.forEach(item => donutTotal += item);
}

function cleanData() {
    for (let i = 0; i < data.rows.length; i++) {
        cleanedData.push(data.rows[i].obj);
    }

    for (let i = 0; i < cleanedData.length; i++) {
        
        cleanedData[i].genre = String(cleanedData[i].genre);
        cleanedData[i].Nintendo = parseInt(cleanedData[i].Nintendo)
        cleanedData[i].Electronic_Arts = parseInt(cleanedData[i].Electronic_Arts)
        cleanedData[i].Sony_Computer_Entertainment = parseInt(cleanedData[i].Sony_Computer_Entertainment)
        cleanedData[i].Ubisoft = parseInt(cleanedData[i].Ubisoft)
        cleanedData[i].Capcom = parseInt(cleanedData[i].Capcom)
    }
}

function drawBarChart() {

    BarCharts.push(new BarChart({
        data:cleanedData,
        xValue:"genre",
        yValue:"Nintendo"
    }
    ));

    BarCharts.forEach(chart => {
        chart.renderBarChartTitle();
        chart.renderBarChartBars();
        chart.renderBarChartAxis();
        chart.renderBarChartLabels();
        chart.renderBarChartTicks();
    });
}

function drawHorizontal() {
    HorizontalCharts.push(new HorizontalChart({
        data:cleanedData,
        xValue:"genre",
        yValue:"Nintendo",
    }
    ));
    HorizontalCharts.push(new HorizontalChart({
        data:cleanedData,
        xPos:1100,
        xValue:"genre",
        yValue:"Electronic_Arts",
    }
    ));
    
    
   
    
     HorizontalCharts.forEach(horizontal => {
        horizontal.renderHorizontalTitle();
            horizontal.renderHorizontalBars();
            horizontal.renderHorizontalAxis();
            horizontal.renderHorizontalLabels();
            horizontal.renderHorizontalTicks();
     })


}

function drawDonut() {
    donutCharts.push(new DonutChart({
        data:cleanedData,
        titles: "genre",
        donutValues: "Nintendo"
    }
    ));
    
     donutCharts.forEach(donut => {
            donut.renderDonutChart();
            donut.renderDonutKey();
     })

}

function drawStacked() {
    stackedCharts.push(new StackedChart({
        data:cleanedData,
        xValue:"genre",
        yValues:["Nintendo", "Ubisoft"],
        total: total
    }
    ));

    
    
     stackedCharts.forEach(stacked => {
        stacked.renderStackedTitle();
            stacked.renderStackedBars();
            stacked.renderStackedAxis();
            stacked.renderStackedText();
            stacked.renderStackedTicks();
     })
    }