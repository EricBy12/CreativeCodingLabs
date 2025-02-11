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

function preload(){
    data= loadTable('data/Combined.csv', 'csv', 'header')
}
 
function setup(){
    createCanvas(800,500);
    angleMode(DEGREES);
    noLoop();
    cleanData();
    charts.push(new BarChart({
        data:cleanedData,
        xValue: "Age_Group", 
        yValue:"Female",
        //  chartHeight : 100, 
        //  chartWidth: 200, 
        //  barWidth: 10, 
        //  margin: 5, 
        //  axisThickness: 1, 
        //  chartPosX:50, 
        //  chartPosY:150
    }
    ));


    // charts.push(new BarChart(cleanedData,"Age_Group", "Male", 150, 300, 1, 5, 1, 100, 400));
    // charts.push(new BarChart(cleanedData,"Age_Group", "Total", 200, 400, 20, 20, 3, 300, 250));

}
 
function draw() {
    background(75,136,162)
    charts.forEach(chart => {
        chart.renderBars();
        chart.renderAxis();
        chart.renderLabels();
        chart.renderTicks();
    }
    );
}

let friends = [];
friends.push(new Friend("Dave", 289));
friends.push(new Friend("Roger", 119));
console.log(friends)
 
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