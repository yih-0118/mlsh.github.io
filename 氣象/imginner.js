// imginner.js
const accordion2 = document.getElementById('collapseTwo');
const accordion3 = document.getElementById('collapseThree');
const accordion4 = document.getElementById('collapseFour');
const accordion5 = document.getElementById('collapseFive');
const accordion6 = document.getElementById('collapseSix');
const accordion7 = document.getElementById('collapseSeven');
const accordion8 = document.getElementById('collapseEight');
const accordion9 = document.getElementById('collapseNine');
const accordion10 = document.getElementById('collapseTen');
const accordion11 = document.getElementById('collapseEleven');
const accordion12 = document.getElementById('collapseTwelve');
const accordion13 = document.getElementById('collapseThirteen');
const accordion14 = document.getElementById('collapseFourteen');
const accordion15 = document.getElementById('collapseFifteen');
const accordion16 = document.getElementById('collapseSixteen');
const accordion17 = document.getElementById('collapseSeventeen');
const accordion18 = document.getElementById('collapseEighteen');
const accordion19 = document.getElementById('collapseNineteen');
const accordion20 = document.getElementById('collapseTwenty');


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
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Forecast/F-C0035-022.jpg',
    'https://cwaopendata.s3.ap-northeast-1.amazonaws.com/Earthquake/E-A0015-003.png'
];

// 監聽 #collapseTwo 的展開事件
accordion2.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0 && index === 0) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});

// 監聽 #collapseThree 的展開事件
accordion3.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0 && (index === 1 || index === 2)) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});

accordion4.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0 && (index === 3 || index === 4 || index === 5 || index === 6 || index === 7 || index === 8)) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});

accordion5.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0 && (index === 9 || index === 10 || index === 11)) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});

accordion6.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0 && (index === 12 || index === 13 || index === 14)) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});

accordion7.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0 && (index === 15 || index === 16 || index === 17)) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});

accordion8.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0 && (index === 18 || index === 19 || index === 20)) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});

accordion9.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0 && (index === 21 || index === 22 || index === 23)) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});

accordion10.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0 && (index === 24 || index === 25 || index === 26)) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});

accordion11.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0 && (index === 27 || index === 28 || index === 29)) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});

accordion12.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0 && (index === 30 || index === 31 || index === 32)) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});

accordion13.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0 && (index === 33)) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});

accordion14.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0 && (index === 34)) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});

accordion15.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0 && (index === 35 || index === 36 || index === 37 || index === 38 || index === 39 || index === 40 || index === 41)) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});

accordion16.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0 && (index === 42)) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});

accordion17.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0 && (index === 43 || index === 44 || index === 45 || index === 46 || index === 47 || index === 48 || index === 49 || index === 50)) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});

accordion18.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0 && (index === 51 || index === 52)) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});

accordion19.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0 && (index === 53 || index === 54 || index === 55)) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});

accordion20.addEventListener('shown.bs.collapse', () => {
    imageContainers.forEach((container, index) => {
        // 檢查圖片是否已經插入
        if (container.children.length === 0 && (index === 56)) {
            // 插入圖片
            const img = document.createElement('img');
            img.src = imageUrls[index];
            img.style.width = '300px';
            img.style.height = 'auto';
            container.appendChild(img);
        }
    });
});

