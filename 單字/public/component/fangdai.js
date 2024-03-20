function showSubcategories(category) {
    const subcategoriesSelect = document.getElementById('subcategories');
    subcategoriesSelect.innerHTML = ''; // Clear existing options

    if (category) {
        $('#subcategory-list').show();

        // Populate subcategories based on the selected category
        switch (category) {
            case 'ALL_PLUS_Mar':
                addSubcategory('CNN News', '../html/ALL_PLUS_Mar_CNN_News.html');
                addSubcategory('Unit 1', '../html/ALL_PLUS_Mar_Unit_1.html');
                addSubcategory('Unit 2', '../html/ALL_PLUS_Mar_Unit_2.html');
                addSubcategory('Unit 3', '../html/ALL_PLUS_Mar_Unit_3.html');
                addSubcategory('Unit 4', '../html/ALL_PLUS_Mar_Unit_4.html');
                addSubcategory('Unit 5', '../html/ALL_PLUS_Mar_Unit_5.html');
                addSubcategory('Unit 6', '../html/ALL_PLUS_Mar_Unit_6.html');
                addSubcategory('Unit 7', '../html/ALL_PLUS_Mar_Unit_7.html');
                addSubcategory('Unit 9', '../html/ALL_PLUS_Mar_Unit_9.html');
                addSubcategory('Unit 10', '../html/ALL_PLUS_Mar_Unit_10.html');
                addSubcategory('Unit 11', '../html/ALL_PLUS_Mar_Unit_11.html');
                addSubcategory('Unit 12', '../html/ALL_PLUS_Mar_Unit_12.html');
                addSubcategory('Unit 13', '../html/ALL_PLUS_Mar_Unit_13.html');
                addSubcategory('Unit 14', '../html/ALL_PLUS_Mar_Unit_14.html');
                addSubcategory('Unit 15', '../html/ALL_PLUS_Mar_Unit_15.html');
                break;

            case 'ALL_PLUS_Apr':
                addSubcategory('Unit 1', '../html/ALL_PLUS_Apr_Unit_1.html');
                addSubcategory('Unit 2', '../html/ALL_PLUS_Apr_Unit_2.html');
                addSubcategory('Unit 3', '../html/ALL_PLUS_Apr_Unit_3.html');
                addSubcategory('Unit 4', '../html/ALL_PLUS_Apr_Unit_4.html');
                addSubcategory('Unit 5', '../html/ALL_PLUS_Apr_Unit_5.html');
                addSubcategory('Unit 6', '../html/ALL_PLUS_Apr_Unit_6.html');
                addSubcategory('Unit 7', '../html/ALL_PLUS_Apr_Unit_7.html');
                addSubcategory('Unit 8', '../html/ALL_PLUS_Apr_Unit_8.html');
                addSubcategory('Unit 9', '../html/ALL_PLUS_Apr_Unit_9.html');
                addSubcategory('Unit 10', '../html/ALL_PLUS_Apr_Unit_10.html');
                addSubcategory('Unit 12', '../html/ALL_PLUS_Apr_Unit_12.html');
                addSubcategory('Unit 13', '../html/ALL_PLUS_Apr_Unit_13.html');
                addSubcategory('Unit 14', '../html/ALL_PLUS_Apr_Unit_14.html');
                break;

            case 'Book4':
                addSubcategory('Lesson 1', '../html/B4 L1.html');
                addSubcategory('Lesson 2', '../html/B4 L2.html');
                addSubcategory('Lesson 3', '../html/B4 L3.html');
                addSubcategory('Review 1', '../html/B4 review 1.html');
                addSubcategory('Lesson 4', '../html/B4 L4.html');
                addSubcategory('Lesson 5', '../html/B4 L5.html');
                addSubcategory('Lesson 6', '../html/B4 L6.html');
                addSubcategory('Review 2', '../html/B4 review 2.html');
                addSubcategory('Lesson 7', '../html/B4 L7.html');
                addSubcategory('Lesson 8', '../html/B4 L8.html');
                addSubcategory('Lesson 9', '../html/B4 L9.html');
                addSubcategory('Review 3', '../html/B4 review 3.html');
                break;
            case '單字書 Level 2':
                addSubcategory('Unit 1', './html/vocabulary(L2 Unit1).html');
                addSubcategory('Unit 2', './html/vocabulary(L2 Unit2).html');
                addSubcategory('Unit 3', './html/vocabulary(L2 Unit3).html');
                addSubcategory('Unit 4', './html/vocabulary(L2 Unit4).html');
                addSubcategory('Unit 5', './html/vocabulary(L2 Unit5).html');
                addSubcategory('Unit 6', './html/vocabulary(L2 Unit6).html');
                addSubcategory('Unit 7', './html/vocabulary(L2 Unit7).html');
                addSubcategory('Unit 8', './html/vocabulary(L2 Unit8).html');
                break;
            case '單字書 Level 3':
                addSubcategory('Unit 1', './html/vocabulary(L3 Unit1).html');
                addSubcategory('Unit 2', './html/vocabulary(L3 Unit2).html');
                addSubcategory('Unit 3', './html/vocabulary(L3 Unit3).html');
                addSubcategory('Unit 4', './html/vocabulary(L3 Unit4).html');
                addSubcategory('Unit 5', './html/vocabulary(L3 Unit5).html');
                addSubcategory('Unit 6', './html/vocabulary(L3 Unit6).html');
                addSubcategory('Unit 7', './html/vocabulary(L3 Unit7).html');
                addSubcategory('Unit 8', './html/vocabulary(L3 Unit8).html');
                addSubcategory('Unit 9', './html/vocabulary(L3 Unit9).html');
                addSubcategory('Unit 10', './html/vocabulary(L3 Unit10).html');
                addSubcategory('Unit 11', './html/vocabulary(L3 Unit11).html');
                addSubcategory('Unit 12', './html/vocabulary(L3 Unit12).html');
                addSubcategory('Unit 13', './html/vocabulary(L3 Unit13).html');
                addSubcategory('Unit 14', './html/vocabulary(L3 Unit14).html');
                addSubcategory('Unit 15', './html/vocabulary(L3 Unit15).html');
                addSubcategory('Unit 16', './html/vocabulary(L3 Unit16).html');
                addSubcategory('Unit 17', './html/vocabulary(L3 Unit17).html');
                addSubcategory('Unit 18', './html/vocabulary(L3 Unit18).html');
                addSubcategory('Unit 19', './html/vocabulary(L3 Unit19).html');
                addSubcategory('Unit 20', './html/vocabulary(L3 Unit20).html');
                addSubcategory('Unit 21', './html/vocabulary(L3 Unit21).html');
                break;
            case '單字書 Level 4':
                addSubcategory('Unit 1', './html/vocabulary(L4 Unit1).html');
                addSubcategory('Unit 2', './html/vocabulary(L4 Unit2).html');
                addSubcategory('Unit 3', './html/vocabulary(L4 Unit3).html');
                addSubcategory('Unit 4', './html/vocabulary(L4 Unit4).html');
                addSubcategory('Unit 5', './html/vocabulary(L4 Unit5).html');
                addSubcategory('Unit 6', './html/vocabulary(L4 Unit6).html');
                addSubcategory('Unit 7', './html/vocabulary(L4 Unit7).html');
                addSubcategory('Unit 8', './html/vocabulary(L4 Unit8).html');
                addSubcategory('Unit 9', './html/vocabulary(L4 Unit9).html');
                addSubcategory('Unit 10', './html/vocabulary(L4 Unit10).html');
                addSubcategory('Unit 11', './html/vocabulary(L4 Unit11).html');
                addSubcategory('Unit 12', './html/vocabulary(L4 Unit12).html');
                addSubcategory('Unit 13', './html/vocabulary(L4 Unit13).html');
                addSubcategory('Unit 14', './html/vocabulary(L4 Unit14).html');
                addSubcategory('Unit 15', './html/vocabulary(L4 Unit15).html');
                addSubcategory('Unit 16', './html/vocabulary(L4 Unit16).html');
                addSubcategory('Unit 17', './html/vocabulary(L4 Unit17).html');
                addSubcategory('Unit 18', './html/vocabulary(L4 Unit18).html');
                addSubcategory('Unit 19', './html/vocabulary(L4 Unit19).html');
                addSubcategory('Unit 20', './html/vocabulary(L4 Unit20).html');
                addSubcategory('Unit 21', './html/vocabulary(L4 Unit21).html');
                break;
            case 'link-test':
                addSubcategory('看英文選中文', './the_past_index/e2c.html');
                addSubcategory('看中文選英文', './the_past_index/c2e.html');
                break;
        }
    } else {
        $('#subcategory-list').hide();
    }

    // Store the selected category in localStorage
    localStorage.setItem('selectedCategory', category);
}

function addSubcategory(name, url) {
    const subcategoriesSelect = document.getElementById('subcategories');
    const option = document.createElement('option');
    option.value = url;
    option.text = name;
    subcategoriesSelect.appendChild(option);
}

$(document).ready(function () {
    $('#vocabularyForm').submit(function (event) {
        event.preventDefault(); // Prevent the form from submitting
        const selectedUrl = $('#subcategories').val();
        if (selectedUrl) {
            const jsonFileName = selectedUrl.split('/').pop(); // Get the JSON file name
            const htmlFileName = jsonFileName.replace('.html', '.html'); // Generate HTML file name
            if (jsonFileName.endsWith('.html')) {
                localStorage.setItem('selectedVocabularyUrl', selectedUrl);
                localStorage.setItem('selectedSubcategory', selectedUrl); // Store the selected subcategory in localStorage
                window.location.href = "html/" + htmlFileName; // Navigate to HTML with JSON file name
            } else {
                localStorage.setItem('selectedSubcategory', selectedUrl); // Store the selected subcategory in localStorage
                window.location.href = selectedUrl; // Navigate to the selected URL
            }
        }
    });
});