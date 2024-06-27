//google charts
function drawChart() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Crime', 'rate'],
        ['Theft', 1549.5],
        ['Assault', 250.2],
        ['Vehicle-Theft', 219.9],
        ['Robbery', 81.6],
        ['Rape', 42.6],
        ['Murder', 5]
    ]);

    var options = {
        title: 'crime per 100,000 people',
        legend: { position: 'none' }
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.BarChart(document.getElementById('crimes2019'));
    chart.draw(data, options);

    // Define the chart to be drawn.
    var data2 = google.visualization.arrayToDataTable([
        ['year', 'rate'],
        ['1999', 523],
        ['2000', 506.5],
        ['2001', 504.5],
        ['2002', 494.4],
        ['2003', 475.8],
        ['2004', 463.2],
        ['2005', 469],
        ['2006', 479.3],
        ['2007', 471.8],
        ['2008', 458.6],
        ['2009', 431.9],
        ['2010', 404.5],
        ['2011', 387.1],
        ['2012', 387.8],
        ['2013', 369.1],
        ['2014', 361.6],
        ['2015', 373.7],
        ['2016', 386.6],
        ['2017', 383.8],
        ['2018', 370.4],
        ['2019', 366.7]
    ]);

    var options2 = {
        title: '1999 - 2019 Reported violent crime rate per 100,000 people',
        curveType: 'function',
        hAxis: {
            title: 'Year'
        },
        vAxis: {
            title: 'violent crime rate per 100,000 people'
        },
        legend: { position: 'none' },
        series: {
            0: { color: '#e2431e' }
        }
    };

    // Instantiate and draw the chart.
    var chart2 = new google.visualization.LineChart(document.getElementById('crimes1999_2019'));
    chart2.draw(data2, options2);
}
google.charts.setOnLoadCallback(drawChart);