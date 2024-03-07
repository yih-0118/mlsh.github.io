const accordion = document.getElementById('collapseTwo');
const imageContainers = document.querySelectorAll('.image-container');

// 圖片 URL 陣列
const imageUrls = [
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-A0038-001.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-A0040-001.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-A0040-002.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-A0058-001.png',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-A0058-002.png',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-A0058-003.png',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-A0058-004.png',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-A0058-005.png',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-A0058-006.png',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-A0084-001.png',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-A0084-002.png',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-A0084-003.png',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-B0028-001.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-B0028-002.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-B0028-003.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-B0029-001.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-B0029-002.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-B0029-003.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-B0030-001.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-B0030-002.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-B0030-003.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-B0031-001.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-B0031-002.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-B0031-003.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-C0042-001.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-B0032-002.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-C0042-002.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-C0042-003.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-B0032-003.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-C0042-004.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-C0042-005.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-B0032-004.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-C0042-006.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-B0033-001.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Observation/O-B0057-002.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-A0022-001.png',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-A0022-002.png',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-A0022-003.png',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-A0022-004.png',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-A0022-005.png',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-A0022-006.png',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-A0022-007.png',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-C0035-001.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-C0035-006.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-C0035-007.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-C0035-008.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-C0035-009.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-C0035-010.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-C0035-011.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-C0035-012.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-C0035-013.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-C0035-015.png',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-C0035-017.png',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-C0035-020.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-C0035-021.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-C0035-022.jpg'
];

// 監聽 #collapseTwo 的展開事件
accordion.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});
