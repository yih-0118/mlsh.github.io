var parameter = {
    url: 'https://docs.google.com/spreadsheets/d/1-A6xikqsLfYl4JOJWj5xS5LXBc8ib9qmHVo-MoO6pP4/edit?resourcekey#gid=1899178918',
};

$.get('https://script.google.com/macros/s/AKfycbxxjv4ha8Xxqh86rW3qD13oiZzWzCCn9XcAS_imqbBIBasKfh5760qmnJb5Ko5lUkhNzA/exec', parameter, function (data) {
    var json1 = data;
    console.log(json1)

    var mostUsedChaptersList = document.getElementById("mostUsedChapters");

    json1.forEach(function (chapterData) {
        var chapter = chapterData[0][0];
        if (chapter !== "") {
            var listItem = document.createElement("li");
            listItem.textContent = chapter;
            mostUsedChaptersList.appendChild(listItem);
        }
    });
});