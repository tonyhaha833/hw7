// 折線圖：台灣三城市月均溫
Highcharts.chart('container', {
    title: {
        text: '台灣三城市氣溫趨勢',
        align: 'center'
    },
    subtitle: {
        text: '數據來源: 台灣氣象局',
        align: 'center'
    },
    xAxis: {
        categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
        title: {
            text: '溫度 (°C)'
        }
    },
    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom'
    },
    series: [
        {
            name: '台北',
            data: [16, 17, 19, 22, 26, 28, 30, 30, 28, 24, 20, 17],
            color: 'red'
        },
        {
            name: '台中',
            data: [17, 18, 20, 23, 26, 28, 29, 29, 27, 24, 21, 18],
            color: 'blue'
        },
        {
            name: '高雄',
            data: [19, 20, 22, 25, 28, 30, 31, 31, 29, 27, 24, 21],
            color: 'green'
        }
    ]
});

// 圓餅圖：台灣三城市年均降雨量
Highcharts.chart('piechart-container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: '台灣三城市年均降雨量比例',
        align: 'center'
    },
    subtitle: {
        text: '數據來源: 台灣氣象局',
        align: 'center'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: '降雨量',
        colorByPoint: true,
        data: [
            { name: '台北', y: 2400, color: 'red' },
            { name: '台中', y: 1700, color: 'blue' },
            { name: '高雄', y: 2100, color: 'green' }
        ]
    }]
});
