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



function preload() {
    data= loadTable('data/video_games_sales.csv', 'csv', 'header')
}
charts.push(new BarChart(cleanedData,"Age_Group", "Male", 150, 300, 1, 5, 1, 100, 400));

function setup() {
    createCanvas(500,500);
    angleMode(DEGREES);
    noLoop();
    cleanData();

    let pieChartData = cleanedData.map(row => row.platform);
    total = 0;
    pieChartData.forEach(item => total += item); 
}


function draw() {
    background(0,100,100)
    charts.forEach(chart => {
        chart.renderBars();
        chart.renderAxis();
        chart.renderLabels();
        chart.renderTicks();
    })
}



function cleanData() {
    for (let i = 0; i < data.rows.length; i++) {
        cleanedData.push(data.rows[i].obj)
    }

    for (let i = 0; i < cleanedData.length; i++) {
        cleanedData[i].rank = parseInt(cleanedData[i].rank);
        cleanedData[i].name = String(cleanedData[i].name);
        cleanedData[i].platform = String(cleanedData[i].platform);
        cleanedData[i].year = parseInt(cleanedData[i].year);
        cleanedData[i].genre = String(cleanedData[i].genre);
        cleanedData[i].publisher = String(cleanedData[i].publisher);
        cleanedData[i].platform = String(cleanedData[i].platform);
        cleanedData[i].na_sales = parseFloat(cleanedData[i].na_sales);
        cleanedData[i].eu_sales = parseFloat(cleanedData[i].eu_sales);
        cleanedData[i].jp_sales = parseFloat(cleanedData[i].jp_sales);
        cleanedData[i].other_sales = parseFloat(cleanedData[i].other_sales);
        cleanedData[i].global_sales = parseFloat(cleanedData[i].global_sales);
    }
}