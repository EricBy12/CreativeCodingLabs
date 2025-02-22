let data;
let cleanedData = [];
let charts = [];
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
let total;
let donutData = [];
let chartColor;
let chartTextSize;
let xPos;

function preload() {
    data= loadTable('data/ExampleSet.csv', 'csv', 'header');
}

function setup() {
    createCanvas(1500,1500);
    angleMode(DEGREES);
    noLoop();
    cleanData();
    GetDonutData();

    
}


function draw() {
    background(0,100,100);
    renderBarChart();
    renderDonut();
    
}

function GetDonutData() {
    donutData = cleanedData.map(row => row.rank);
    total = 0;
    donutData.forEach(item => total += item);

}

// function cleanData() {
//     for (let i = 0; i < data.rows.length; i++) {
//         cleanedData.push(data.rows[i].obj);
//     }

//     for (let i = 0; i < cleanedData.length; i++) {
//         cleanedData[i].rank = parseInt(cleanedData[i].rank);
//         cleanedData[i].name = String(cleanedData[i].name);
//         cleanedData[i].platform = String(cleanedData[i].platform);
//         cleanedData[i].year = parseInt(cleanedData[i].year);
//         cleanedData[i].genre = String(cleanedData[i].genre);
//         cleanedData[i].publisher = String(cleanedData[i].publisher);
//         cleanedData[i].platform = String(cleanedData[i].platform);
//         cleanedData[i].na_sales = parseFloat(cleanedData[i].na_sales);
//         cleanedData[i].eu_sales = parseFloat(cleanedData[i].eu_sales);
//         cleanedData[i].jp_sales = parseFloat(cleanedData[i].jp_sales);
//         cleanedData[i].other_sales = parseFloat(cleanedData[i].other_sales);
//         cleanedData[i].global_sales = parseFloat(cleanedData[i].global_sales);
//     }
// }

function cleanData(){
    for(let i=0; i < data.rows.length; i++){
        cleanedData.push(data.rows[i].obj)
    }
    for(let i=0; i < cleanedData.length; i++ ){
        cleanedData[i].Female = parseInt(cleanedData[i].Female)
        cleanedData[i].Male = parseInt(cleanedData[i].Male)
        cleanedData[i].Total = parseInt(cleanedData[i].Total)
    }
}

function renderBarChart() {

    charts.push(new BarChart({
        data:cleanedData,
        xValue:"Age_Group",
        yValue:"Male"
    }
    ));

    charts.forEach(chart => {
        chart.renderBarChartBars();
        chart.renderBarChartAxis();
        chart.renderBarChartLabels();
        chart.renderBarChartTicks();
    });
}
// function renderDonut() {

//     charts.push(new DonutChart({
//         data:donutData,
//         chartSize: 300,
//     }
//     ));

//     charts.forEach(chart => {chart.renderDonutChart()}); //renders donut chart
// }

// function renderStackedChart() {

//     charts.push(new BarChart({
//         data:cleanedData,
//         xValue:"Male",
//         yValue:"Age_Group"
//     }
//     ));

//     charts.forEach(chart => {
//         chart.renderStackedBars();
//         chart.renderStackedAxis();
//         chart.renderStackedLabels();
//         //chart.renderBarChartTicks();
//     });
// }

function renderHorizontalChart() {

    charts.push(new BarChart({
        data:cleanedData,
        xValue:"Age_Group",
        yValue:"Male"
    }
    ));

    charts.forEach(chart => {
        chart.renderHorizontalBars();
        chart.renderHorizontalAxis();
        chart.renderHorizontalLabels();
        chart.renderHorizontalTicks();
    });
}