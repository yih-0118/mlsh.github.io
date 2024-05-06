var parameter = { url: 'https://docs.google.com/spreadsheets/d/1-A6xikqsLfYl4JOJWj5xS5LXBc8ib9qmHVo-MoO6pP4/edit?resourcekey#gid=1899178918', };
$.get('https://script.google.com/macros/s/AKfycbwIpkjfKxANzyh89GC7KZoygqdj5YV6820YdpQz2sJN_GmPGVvrg2e6bb_t1sSWFH5aCA/exec', parameter, function (data) {
    var json1 = data;
    var currentNum = 1;
    var mostUsedChaptersContainer = document.getElementById("mostUsedChapters");
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



var parameter1 = { url: 'https://docs.google.com/spreadsheets/d/1sZKQONx4Y_J3ZbCZOphn70rHj4nNdZuYtjA51XLY34s/edit?resourcekey#gid=1080034406', };
$.get('https://script.google.com/macros/s/AKfycbwPvAfTgy4OGHRyz62F0Ug8s0rnZ9HYFfEhhZ2avdYckTcvDScB7jd1S8J07fDmyD-V/exec', parameter1, function (data2) {
    var json2 = data2;
    var currentNum1 = 1;
    console.log(json2);
    json2.forEach(function (chapterData2) {
        var chapter = chapterData2[0];
        if (chapter !== "") {
            // 在此處接收 JSON 回傳值並顯示在網頁上
            const jsonData = json2; // 假設這是你從 JSON 得到的數據
            const visitCountElement = document.getElementById('visitCountNumber');

            // 將造訪人數填入到剛剛新增的元素中
            visitCountElement.textContent = `${jsonData[0]} 次`;

        }
    });
});


