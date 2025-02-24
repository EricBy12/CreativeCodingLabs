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
let total = 100;
let donutData = [];
let chartColor;
let chartTextSize;
let xPos;
let barColorsArray = [];
let backgroundColor;

function preload() {
    data= loadTable('data/VGData.csv', 'csv', 'header');
}

function setup() {
    createCanvas(1500,1500);
    angleMode(DEGREES);
    noLoop();
    cleanData();
    GetDonutData();
    
    backgroundColor = color("#F8F8F8");
    barColorsArray.push("#4D9DE0", "#e15554", "#e1bc29", "#3bb273","#7768AE", "#ADFC92", "#21A0A0", "#B9B9B9", "#37323E", "#F7C59F", "#7F7CAF", "#645DD7");

    
}


function draw() {
    background(backgroundColor);
    drawBarChart();
    drawHorizontal();
    drawDonut();
    drawStacked();
    
    // //charts.push(new DonutChart({
    //             data:cleanedData,
    //             chartSize: 300,
    //         }));
    
//     charts.forEach(chart => {
// //chart.renderDonutChart();
//     });

    HorizontalCharts.push(new HorizontalChart({
        data:cleanedData,
        xValue:"Age_Group",
        yValue:"Male",
    }
    ));
    
    //  HorizontalCharts.forEach(horizontal => {
    //         horizontal.renderHorizontalBars();
    //         horizontal.renderHorizontalAxis();
    //         horizontal.renderHorizontalLabels();
    //         horizontal.renderHorizontalTicks();
    //  })

}

function GetDonutData() {
    donutData = cleanedData.map(row => row.Nintendo);
    total = 0;
    donutData.forEach(item => total += item);

}

function cleanData() {
    for (let i = 0; i < data.rows.length; i++) {
        cleanedData.push(data.rows[i].obj);
    }

    for (let i = 0; i < cleanedData.length; i++) {
        cleanedData[i].Nintendo = parseInt(cleanedData[i].Nintendo)
        cleanedData[i].genre = String(cleanedData[i].genre);
        // cleanedData[i].rank = parseInt(cleanedData[i].rank);
        // cleanedData[i].name = String(cleanedData[i].name);
        // cleanedData[i].platform = String(cleanedData[i].platform);
        // cleanedData[i].year = parseInt(cleanedData[i].year);
        // cleanedData[i].genre = String(cleanedData[i].genre);
        // cleanedData[i].publisher = String(cleanedData[i].publisher);
        // cleanedData[i].platform = String(cleanedData[i].platform);
        // cleanedData[i].na_sales = parseFloat(cleanedData[i].na_sales);
        // cleanedData[i].eu_sales = parseFloat(cleanedData[i].eu_sales);
        // cleanedData[i].jp_sales = parseFloat(cleanedData[i].jp_sales);
        // cleanedData[i].other_sales = parseFloat(cleanedData[i].other_sales);
        // cleanedData[i].global_sales = parseFloat(cleanedData[i].global_sales);
    }
}

// function cleanData(){
//     for(let i=0; i < data.rows.length; i++){
//         cleanedData.push(data.rows[i].obj)
//     }
//     for(let i=0; i < cleanedData.length; i++ ){
//         cleanedData[i].Female = parseInt(cleanedData[i].Female)
//         cleanedData[i].Male = parseInt(cleanedData[i].Male)
//         cleanedData[i].Total = parseInt(cleanedData[i].Total)
//     }
// }

function drawBarChart() {

    BarCharts.push(new BarChart({
        data:cleanedData,
        xValue:"genre",
        yValue:"Nintendo"
    }
    ));

    BarCharts.forEach(chart => {
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
    
     HorizontalCharts.forEach(horizontal => {
            horizontal.renderHorizontalBars();
            horizontal.renderHorizontalAxis();
            horizontal.renderHorizontalLabels();
            horizontal.renderHorizontalTicks();
     })


}

function drawDonut() {
    donutCharts.push(new DonutChart({
        data:donutData
    }
    ));
    
     donutCharts.forEach(donut => {
            donut.renderDonutChart();
     })

}

function drawStacked() {
    stackedCharts.push(new StackedChart({
        data:cleanedData,
        xValue:"genre",
        yValues:["Nintendo", "Capcom"],
        total: total
    }
    ));

    
    
     stackedCharts.forEach(stacked => {
            stacked.renderStackedBars();
            stacked.renderStackedAxis();
            stacked.renderStackedText();
            stacked.renderStackedTicks();
     })
    }