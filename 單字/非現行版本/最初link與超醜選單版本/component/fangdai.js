function showSubcategories(category) {
    const subcategoriesSelect = document.getElementById('subcategories');
    subcategoriesSelect.innerHTML = ''; // Clear existing options

    if (category) {
        $('#subcategory-list').show();

        // Populate subcategories based on the selected category
        switch (category) {
            case 'ALL_PLUS_Mar':
                addSubcategory('CNN News', './html/json/ALL_PLUS_Mar_CNN_News.json');
                addSubcategory('Unit 1', './html/json/ALL_PLUS_Mar_Unit_1.json');
                addSubcategory('Unit 2', './html/json/ALL_PLUS_Mar_Unit_2.json');
                addSubcategory('Unit 3', './html/json/ALL_PLUS_Mar_Unit_3.json');
                addSubcategory('Unit 4', './html/json/ALL_PLUS_Mar_Unit_4.json');
                addSubcategory('Unit 5', './html/json/ALL_PLUS_Mar_Unit_5.json');
                addSubcategory('Unit 6', './html/json/ALL_PLUS_Mar_Unit_6.json');
                addSubcategory('Unit 7', './html/json/ALL_PLUS_Mar_Unit_7.json');
                addSubcategory('Unit 9', './html/json/ALL_PLUS_Mar_Unit_9.json');
                addSubcategory('Unit 10', './html/json/ALL_PLUS_Mar_Unit_10.json');
                addSubcategory('Unit 11', './html/json/ALL_PLUS_Mar_Unit_11.json');
                addSubcategory('Unit 12', './html/json/ALL_PLUS_Mar_Unit_12.json');
                addSubcategory('Unit 13', './html/json/ALL_PLUS_Mar_Unit_13.json');
                addSubcategory('Unit 14', './html/json/ALL_PLUS_Mar_Unit_14.json');
                addSubcategory('Unit 15', './html/json/ALL_PLUS_Mar_Unit_15.json');
                break;

            case 'ALL_PLUS_Apr':
                addSubcategory('Unit 1', './html/json/ALL_PLUS_Apr_Unit_1.json');
                addSubcategory('Unit 2', './html/json/ALL_PLUS_Apr_Unit_2.json');
                addSubcategory('Unit 3', './html/json/ALL_PLUS_Apr_Unit_3.json');
                addSubcategory('Unit 4', './html/json/ALL_PLUS_Apr_Unit_4.json');
                addSubcategory('Unit 5', './html/json/ALL_PLUS_Apr_Unit_5.json');
                addSubcategory('Unit 6', './html/json/ALL_PLUS_Apr_Unit_6.json');
                addSubcategory('Unit 7', './html/json/ALL_PLUS_Apr_Unit_7.json');
                addSubcategory('Unit 8', './html/json/ALL_PLUS_Apr_Unit_8.json');
                addSubcategory('Unit 9', './html/json/ALL_PLUS_Apr_Unit_9.json');
                addSubcategory('Unit 10', './html/json/ALL_PLUS_Apr_Unit_10.json');
                addSubcategory('Unit 12', './html/json/ALL_PLUS_Apr_Unit_12.json');
                addSubcategory('Unit 13', './html/json/ALL_PLUS_Apr_Unit_13.json');
                addSubcategory('Unit 14', './html/json/ALL_PLUS_Apr_Unit_14.json');
                break;

            case 'Book4':
                addSubcategory('Lesson 1', './html/json/B4 L1.json');
                addSubcategory('Lesson 2', './html/json/B4 L2.json');
                addSubcategory('Lesson 3', './html/json/B4 L3.json');
                addSubcategory('Review 1', './html/json/B4 review 1.json');
                addSubcategory('Lesson 4', './html/json/B4 L4.json');
                addSubcategory('Lesson 5', './html/json/B4 L5.json');
                addSubcategory('Lesson 6', './html/json/B4 L6.json');
                addSubcategory('Review 2', './html/json/B4 review 2.json');
                addSubcategory('Lesson 7', './html/json/B4 L7.json');
                addSubcategory('Lesson 8', './html/json/B4 L8.json');
                addSubcategory('Lesson 9', './html/json/B4 L9.json');
                addSubcategory('Review 3', './html/json/B4 review 3.json');
                break;
            case '單字書 Level 2':
                addSubcategory('Unit 1', './html/json/vocabulary(L2 Unit1).json');
                addSubcategory('Unit 2', './html/json/vocabulary(L2 Unit2).json');
                addSubcategory('Unit 3', './html/json/vocabulary(L2 Unit3).json');
                addSubcategory('Unit 4', './html/json/vocabulary(L2 Unit4).json');
                addSubcategory('Unit 5', './html/json/vocabulary(L2 Unit5).json');
                addSubcategory('Unit 6', './html/json/vocabulary(L2 Unit6).json');
                addSubcategory('Unit 7', './html/json/vocabulary(L2 Unit7).json');
                addSubcategory('Unit 8', './html/json/vocabulary(L2 Unit8).json');
                break;
            case '單字書 Level 3':
                addSubcategory('Unit 1', './html/json/vocabulary(L3 Unit1).json');
                addSubcategory('Unit 2', './html/json/vocabulary(L3 Unit2).json');
                addSubcategory('Unit 3', './html/json/vocabulary(L3 Unit3).json');
                addSubcategory('Unit 4', './html/json/vocabulary(L3 Unit4).json');
                addSubcategory('Unit 5', './html/json/vocabulary(L3 Unit5).json');
                addSubcategory('Unit 6', './html/json/vocabulary(L3 Unit6).json');
                addSubcategory('Unit 7', './html/json/vocabulary(L3 Unit7).json');
                addSubcategory('Unit 8', './html/json/vocabulary(L3 Unit8).json');
                addSubcategory('Unit 9', './html/json/vocabulary(L3 Unit9).json');
                addSubcategory('Unit 10', './html/json/vocabulary(L3 Unit10).json');
                addSubcategory('Unit 11', './html/json/vocabulary(L3 Unit11).json');
                addSubcategory('Unit 12', './html/json/vocabulary(L3 Unit12).json');
                addSubcategory('Unit 13', './html/json/vocabulary(L3 Unit13).json');
                addSubcategory('Unit 14', './html/json/vocabulary(L3 Unit14).json');
                addSubcategory('Unit 15', './html/json/vocabulary(L3 Unit15).json');
                addSubcategory('Unit 16', './html/json/vocabulary(L3 Unit16).json');
                addSubcategory('Unit 17', './html/json/vocabulary(L3 Unit17).json');
                addSubcategory('Unit 18', './html/json/vocabulary(L3 Unit18).json');
                addSubcategory('Unit 19', './html/json/vocabulary(L3 Unit19).json');
                addSubcategory('Unit 20', './html/json/vocabulary(L3 Unit20).json');
                addSubcategory('Unit 21', './html/json/vocabulary(L3 Unit21).json');
                break;
            case '單字書 Level 4':
                addSubcategory('Unit 1', './html/json/vocabulary(L4 Unit1).json');
                addSubcategory('Unit 2', './html/json/vocabulary(L4 Unit2).json');
                addSubcategory('Unit 3', './html/json/vocabulary(L4 Unit3).json');
                addSubcategory('Unit 4', './html/json/vocabulary(L4 Unit4).json');
                addSubcategory('Unit 5', './html/json/vocabulary(L4 Unit5).json');
                addSubcategory('Unit 6', './html/json/vocabulary(L4 Unit6).json');
                addSubcategory('Unit 7', './html/json/vocabulary(L4 Unit7).json');
                addSubcategory('Unit 8', './html/json/vocabulary(L4 Unit8).json');
                addSubcategory('Unit 9', './html/json/vocabulary(L4 Unit9).json');
                addSubcategory('Unit 10', './html/json/vocabulary(L4 Unit10).json');
                addSubcategory('Unit 11', './html/json/vocabulary(L4 Unit11).json');
                addSubcategory('Unit 12', './html/json/vocabulary(L4 Unit12).json');
                addSubcategory('Unit 13', './html/json/vocabulary(L4 Unit13).json');
                addSubcategory('Unit 14', './html/json/vocabulary(L4 Unit14).json');
                addSubcategory('Unit 15', './html/json/vocabulary(L4 Unit15).json');
                addSubcategory('Unit 16', './html/json/vocabulary(L4 Unit16).json');
                addSubcategory('Unit 17', './html/json/vocabulary(L4 Unit17).json');
                addSubcategory('Unit 18', './html/json/vocabulary(L4 Unit18).json');
                addSubcategory('Unit 19', './html/json/vocabulary(L4 Unit19).json');
                addSubcategory('Unit 20', './html/json/vocabulary(L4 Unit20).json');
                addSubcategory('Unit 21', './html/json/vocabulary(L4 Unit21).json');
                break;
            case 'link-test':
                addSubcategory('看英文選中文', './html/e2c.html');
                addSubcategory('看中文選英文', './html/c2e.html');
                break;
        }
    } else {
        $('#subcategory-list').hide();
    }

    // Store the selected category in localStorage
    localStorage.setItem('selectedCategory', category);
}

function addSubcategory(name, jsonUrl) {
    const subcategoriesSelect = document.getElementById('subcategories');
    const option = document.createElement('option');
    option.value = jsonUrl; // 將 JSON 文件路徑設為 value
    option.text = name;
    subcategoriesSelect.appendChild(option);
}

$(document).ready(function () {
    $('#vocabularyForm').submit(function (event) {
        event.preventDefault(); // 防止表單提交導致頁面重新加載
        const selectedUrl = $('#subcategories').val();
        if (selectedUrl) {
            if (selectedUrl.endsWith('.html')) {
                window.location.href = selectedUrl; // 直接導航到選擇的 HTML 文件
            } else {
                const jsonFileName = selectedUrl.split('/').pop(); // 獲取 JSON 文件名
                localStorage.setItem('selectedVocabularyUrl', selectedUrl); // 儲存選擇的 JSON 文件路徑
                localStorage.setItem('selectedSubcategory', selectedUrl); // 儲存選擇的子類別路徑
                window.location.href = "card.html"; // 導航到 card.html 頁面
            }
        }
    });
});