let chart;

function createChart(data) {
    const ctx = document.getElementById('chartCanvas').getContext('2d');

    if (chart) {
        chart.destroy(); // 銷毀先前的圖表實例
    }

    const chartData = {
        labels: ['10分',
        '1小時',
        '3小時',
        '6小時',
        '12小時',
        '1天',
        '2天',
        '3天'], // x 軸標籤
        datasets: [
            {
                label: '累積雨量', // 數據集標籤
                data: [], // 數據集值
                borderColor: 'rgba(255, 99, 132, 1)', // 線條顏色
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // 填充顏色
                fill: true // 是否填充區域
            }
        ]
    };

    // 構建圖表數據
    const keys = [
        '過去10分鐘累積雨量',
        '過去1小時累積雨量',
        '過去3小時累積雨量',
        '過去6小時累積雨量',
        '過去12小時累積雨量',
        '過去24小時累積雨量',
        '過去2天累積雨量',
        '過去3天累積雨量'
    ];


    for (const key of keys) {
        if (data.hasOwnProperty(key)) {
            //chartData.labels.push(key);
            chartData.datasets[0].data.push(data[key]);
        }
    }

    chart = new Chart(ctx, {
        type: 'line', // 圖表類型
        data: chartData,
        options: {
            responsive: true, // 響應式設計
            scales: {
                y: {
                    beginAtZero: true // y 軸從 0 開始
                }
            }
        }
    });
}

// 監聽 weather 變化,更新圖表
app.$watch('weather', function(weather) {
    if (weather) {
        createChart(weather);
    }
});
