let data;

//arrays for charts
let cleanedData = [];
let BarCharts = [];
let HorizontalCharts = [];
let donutCharts = [];
let stackedCharts = [];
let stackedChartsAVG = [];

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
let total;
let donutData = [];
let chartColor;
let chartTextSize;
let xPos;
let barColorsArray = [];
let backgroundColor;
let donutPercentages = [];
let averages;

function preload() {
    data = loadTable('data/VGData.csv', 'csv', 'header'); //Loads dataset
    font = loadFont('Nunito/static/Nunito-Black.ttf') // Loads Font
}

function setup() {
    createCanvas(2500,2500);
    angleMode(DEGREES);
    noLoop();
    cleanData(); // Runs the cleanData function
    GetDonutData(); // Runs the  GetDonutData function
    textFont(font); // Calls the imported font
    
    backgroundColor = color("#F8F8F8");// Background Colour
    // Colours arrays
    barColorsArray.push("#4D9DE0", "#e15554", "#e1bc29", "#3bb273","#7768AE", "#ADFC92", "#21A0A0", "#B9B9B9", "#37323E", "#F7C59F", "#7F7CAF", "#645DD7");
    //barColorsArray.push("#7400B8", "#6930C3", "#5E60CE", "#5390D9","#4EA8DE", "#48BFE3", "#56CFE1", "#64DFDF", "#72EFDD", "#80FFDB", "#ADFFE8", "#C2FFEE");
    //barColorsArray.push("#0E1DB0", "#0E2CB0", "#0E3BB0", "#0E4AB0","#0F59B1", "#0F67B1", "#0F76B1", "#0F85B1", "#0F94B1", "#1F94A1", "#2F8590", "#3F7680");

    
}


function draw() {
    background(backgroundColor);//Colours the background

    //Calls the draw chart funcions
    drawBarChart();
    drawHorizontal();
    drawDonut();
    drawStacked();
    //drawStackedAVG();
}

function GetDonutData() {//gets all of the values for Nintendo and adds them to get the total for the chart
    donutData = cleanedData.map(row => row.Nintendo);
    donutTotal = 0;
    donutData.forEach(item => donutTotal += item);
}

function cleanData() {// Parces all of the columns to either a string or int
    for (let i = 0; i < data.rows.length; i++) {
        cleanedData.push(data.rows[i].obj);
    }

    for (let i = 0; i < cleanedData.length; i++) {
        
        cleanedData[i].genre = String(cleanedData[i].genre);
        cleanedData[i].Nintendo = parseInt(cleanedData[i].Nintendo);
        cleanedData[i].Electronic_Arts = parseInt(cleanedData[i].Electronic_Arts);
        cleanedData[i].Sony_Computer_Entertainment = parseInt(cleanedData[i].Sony_Computer_Entertainment);
        cleanedData[i].Ubisoft = parseInt(cleanedData[i].Ubisoft);
        cleanedData[i].Capcom = parseInt(cleanedData[i].Capcom);
        cleanedData[i].Total = parseInt(cleanedData[i].Total);
    }
}

function drawBarChart() {

    BarCharts.push(new BarChart({ //Pushes BarChart to array
        data:cleanedData,
        xValue:"genre",
        yValue:"Capcom",
        chartTitle: "Genres of Capcom Games"
    }
    ));

    BarCharts.forEach(chart => { //runs all of the render functions from the class
        chart.renderBarChartTitle();
        chart.renderBarChartBars();
        chart.renderBarChartAxis();
        chart.renderBarChartLabels();
        chart.renderBarChartTicks();
    });
}

function drawHorizontal() {
    HorizontalCharts.push(new HorizontalChart({//Pushes Horizontal Chart to array
        data:cleanedData,
        xValue:"genre",
        yValue:"Ubisoft",
        chartTitle: "Genres of Ubisoft Games"
    }
    ));
    HorizontalCharts.push(new HorizontalChart({
        data:cleanedData,
        xPos:1100,
        xValue:"genre",
        yValue:"Electronic_Arts",
        chartTitle: "Genres of EA Games"
    }
    ));
    
    
   
    
     HorizontalCharts.forEach(horizontal => {//runs all of the render functions from the class
        horizontal.renderHorizontalTitle();
            horizontal.renderHorizontalBars();
            horizontal.renderHorizontalAxis();
            horizontal.renderHorizontalLabels();
            horizontal.renderHorizontalTicks();
     })


}

function drawDonut() {
    donutCharts.push(new DonutChart({ //Pushes DonutChart to array
        data:cleanedData,
        titles: "genre",
        donutValues: "Nintendo",
        chartTitle: "Genres of \n Nintendo releases"
    }
    ));
    
     donutCharts.forEach(donut => {//runs all of the render functions from the class
            donut.renderDonutChart();
            donut.renderDonutKey();
     })

}

function drawStacked() {
    stackedCharts.push(new StackedChart({ // pushes Stacked Chart to array
        data:cleanedData,
        xValue:"genre",
        yValues:["Nintendo", "Ubisoft", "Sony_Computer_Entertainment", "Capcom"],
        total: "Total",
        chartTitle: "Genre Releases of all publishers"
    }
    ));

    
    
     stackedCharts.forEach(stacked => {//runs all of the render functions from the class
        stacked.renderStackedTitle();
            stacked.renderStackedBars();
            stacked.renderStackedAxis();
            stacked.renderStackedText();
            stacked.renderStackedTicks();
            stacked.renderStackedLegend();
     })
    }

    // function drawStackedAVG() {
    //     stackedChartsAVG.push(new StackedChartAVG({
    //         data:cleanedData,
    //         xValue:"genre",
    //         yValues:["Nintendo", "Electronic_Arts", "Ubisoft"],
    //         total: "Total",
    //         chartTitle: "Genre Releases of MOST publishers"
    //     }
    //     ));
    //      stackedChartsAVG.forEach(stackedAVG => {
    //             stackedAVG.renderStackedAVGTitle();
    //             stackedAVG.renderStackedAVGBars();
    //             stackedAVG.renderStackedAVGLines();
    //             stackedAVG.renderStackedAVGAxis();
    //             stackedAVG.renderStackedAVGText();
    //             stackedAVG.renderStackedAVGTicks();
    //             stackedAVG.renderStackedAVGLegend();
    //      })
    //     }