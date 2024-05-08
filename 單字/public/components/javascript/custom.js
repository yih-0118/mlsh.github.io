var timeout; // 儲存 setTimeout 的參考
var warningTriggered = false; // 是否已觸發警告
var countOfwarning = 0

function fetchDataAndUpdate() {
    // 如果已觸發警告，就不再執行 API 擷取的程式碼
    if (warningTriggered) {
        return;
    }

    // 第一個 API 呼叫
    var parameter = { url: 'https://docs.google.com/spreadsheets/d/1-A6xikqsLfYl4JOJWj5xS5LXBc8ib9qmHVo-MoO6pP4/edit?resourcekey#gid=1899178918', };
    $.get('https://script.google.com/macros/s/AKfycbwIpkjfKxANzyh89GC7KZoygqdj5YV6820YdpQz2sJN_GmPGVvrg2e6bb_t1sSWFH5aCA/exec', parameter, function (data) {
        var json1 = data;
        var currentNum = 1;
        var mostUsedChaptersContainer = document.getElementById("mostUsedChapters");
        mostUsedChaptersContainer.innerHTML = ''; // Clear previous data
        json1.forEach(function (chapterData) {
            var chapter = chapterData[0];
            var frequency = chapterData[1];
            if (chapter !== "") {
                var listItem = document.createElement("div");
                listItem.textContent = currentNum + ". " + chapter + " : " + frequency + " 次";
                mostUsedChaptersContainer.appendChild(listItem);
                currentNum = currentNum + 1;
            }
        });
    });

    // 第二個 API 呼叫
    var parameter1 = { url: 'https://docs.google.com/spreadsheets/d/1sZKQONx4Y_J3ZbCZOphn70rHj4nNdZuYtjA51XLY34s/edit?resourcekey#gid=1080034406', };
    $.get('https://script.google.com/macros/s/AKfycbwPvAfTgy4OGHRyz62F0Ug8s0rnZ9HYFfEhhZ2avdYckTcvDScB7jd1S8J07fDmyD-V/exec', parameter1, function (data2) {
        var json2 = data2;
        // console.log(json2);
        if (json2.length > 0) {
            const jsonData = json2; // 假設這是你從 JSON 得到的數據
            const visitCountElement = document.getElementById('visitCountNumber');
            // 將造訪人數填入到剛剛新增的元素中
            visitCountElement.textContent = `${jsonData[0]} 次`;
        }
    });

    function startTimer() {
        window.addEventListener('mousemove', resetTimer);
        window.addEventListener('keydown', resetTimer);
        window.addEventListener('click', resetTimer);
        window.addEventListener('scroll', resetTimer);
        // 手機端事件監聽
        window.addEventListener('touchstart', resetTimer);
        window.addEventListener('touchmove', resetTimer);
        window.addEventListener('touchend', resetTimer);


        timeout = setTimeout(function () {
            warningTriggered = true;
            alert(`你已經發呆超過60秒`);
            alert(`浪費我流量！`);
            alert(`接招吧！`);
            window.location.href = "https://music.youtube.com/watch?v=lYBUbBu4W08&feature=shared";//never gonna give you up
            resetTimer();
        }, 600000);
    }

    function resetTimer() {
        // 清除先前的計時器並重新啟動計時器
        clearTimeout(timeout);
        warningTriggered = false;
        startTimer();
    }

    // 初始啟動計時器
    startTimer();
}

// 每十秒執行一次
setInterval(fetchDataAndUpdate, 2500);

// 初始載入一次
fetchDataAndUpdate();
