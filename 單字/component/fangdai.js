function showSubcategories(category) {
    const subcategoriesSelect = document.getElementById('subcategories');
    subcategoriesSelect.innerHTML = ''; // Clear existing options

    if (category) {
        $('#subcategory-list').show();

        // Populate subcategories based on the selected category
        switch (category) {
            case 'ALL_PLUS_Mar':
                addSubcategory('CNN News', './json/ALL_PLUS_Mar_CNN_News.json');
                addSubcategory('Unit 1', './json/ALL_PLUS_Mar_Unit_1.json');
                addSubcategory('Unit 2', './json/ALL_PLUS_Mar_Unit_2.json');
                addSubcategory('Unit 3', './json/ALL_PLUS_Mar_Unit_3.json');
                addSubcategory('Unit 4', './json/ALL_PLUS_Mar_Unit_4.json');
                addSubcategory('Unit 5', './json/ALL_PLUS_Mar_Unit_5.json');
                addSubcategory('Unit 6', './json/ALL_PLUS_Mar_Unit_6.json');
                addSubcategory('Unit 7', './json/ALL_PLUS_Mar_Unit_7.json');
                addSubcategory('Unit 8', './json/ALL_PLUS_Mar_Unit_8.json');
                addSubcategory('Unit 9', './json/ALL_PLUS_Mar_Unit_9.json');
                addSubcategory('Unit 10', './json/ALL_PLUS_Mar_Unit_10.json');
                addSubcategory('Unit 11', './json/ALL_PLUS_Mar_Unit_11.json');
                addSubcategory('Unit 12', './json/ALL_PLUS_Mar_Unit_12.json');
                addSubcategory('Unit 13', './json/ALL_PLUS_Mar_Unit_13.json');
                addSubcategory('Unit 14', './json/ALL_PLUS_Mar_Unit_14.json');
                addSubcategory('Unit 15', './json/ALL_PLUS_Mar_Unit_15.json');
                break;

            case 'Book4':
                addSubcategory('Lesson 1', './json/B4 L1.json');
                addSubcategory('Lesson 2', './json/B4 L2.json');
                addSubcategory('Lesson 3', './json/B4 L3.json');
                break;
            case '單字書 Level 2':
                addSubcategory('Unit 1', './html/vocabulary(L2 Unit1).json');
                addSubcategory('Unit 2', './html/vocabulary(L2 Unit2).json');
                addSubcategory('Unit 3', './html/vocabulary(L2 Unit3).json');
                addSubcategory('Unit 4', './html/vocabulary(L2 Unit4).json');
                addSubcategory('Unit 5', './html/vocabulary(L2 Unit5).json');
                addSubcategory('Unit 6', './html/vocabulary(L2 Unit6).json');
                addSubcategory('Unit 7', './html/vocabulary(L2 Unit7).json');
                addSubcategory('Unit 8', './html/vocabulary(L2 Unit8).json');
                break;
            case '單字書 Level 3':
                addSubcategory('Unit 1', './html/vocabulary(L3 Unit1).json');
                addSubcategory('Unit 2', './html/vocabulary(L3 Unit2).json');
                addSubcategory('Unit 3', './html/vocabulary(L3 Unit3).json');
                addSubcategory('Unit 4', './html/vocabulary(L3 Unit4).json');
                addSubcategory('Unit 5', './html/vocabulary(L3 Unit5).json');
                addSubcategory('Unit 6', './html/vocabulary(L3 Unit6).json');
                addSubcategory('Unit 7', './html/vocabulary(L3 Unit7).json');
                addSubcategory('Unit 8', './html/vocabulary(L3 Unit8).json');
                addSubcategory('Unit 9', './html/vocabulary(L3 Unit9).json');
                addSubcategory('Unit 10', './html/vocabulary(L3 Unit10).json');
                addSubcategory('Unit 11', './html/vocabulary(L3 Unit11).json');
                addSubcategory('Unit 12', './html/vocabulary(L3 Unit12).json');
                addSubcategory('Unit 13', './html/vocabulary(L3 Unit13).json');
                addSubcategory('Unit 14', './html/vocabulary(L3 Unit14).json');
                addSubcategory('Unit 15', './html/vocabulary(L3 Unit15).json');
                addSubcategory('Unit 16', './html/vocabulary(L3 Unit16).json');
                addSubcategory('Unit 17', './html/vocabulary(L3 Unit17).json');
                addSubcategory('Unit 18', './html/vocabulary(L3 Unit18).json');
                addSubcategory('Unit 19', './html/vocabulary(L3 Unit19).json');
                addSubcategory('Unit 20', './html/vocabulary(L3 Unit20).json');
                addSubcategory('Unit 21', './html/vocabulary(L3 Unit21).json');
                break;
            case '單字書 Level 4':
                addSubcategory('Unit 1', './html/vocabulary(L4 Unit1).json');
                addSubcategory('Unit 2', './html/vocabulary(L4 Unit2).json');
                addSubcategory('Unit 3', './html/vocabulary(L4 Unit3).json');
                addSubcategory('Unit 4', './html/vocabulary(L4 Unit4).json');
                addSubcategory('Unit 5', './html/vocabulary(L4 Unit5).json');
                addSubcategory('Unit 6', './html/vocabulary(L4 Unit6).json');
                addSubcategory('Unit 7', './html/vocabulary(L4 Unit7).json');
                addSubcategory('Unit 8', './html/vocabulary(L4 Unit8).json');
                addSubcategory('Unit 9', './html/vocabulary(L4 Unit9).json');
                addSubcategory('Unit 10', './html/vocabulary(L4 Unit10).json');
                addSubcategory('Unit 11', './html/vocabulary(L4 Unit11).json');
                addSubcategory('Unit 12', './html/vocabulary(L4 Unit12).json');
                addSubcategory('Unit 13', './html/vocabulary(L4 Unit13).json');
                addSubcategory('Unit 14', './html/vocabulary(L4 Unit14).json');
                addSubcategory('Unit 15', './html/vocabulary(L4 Unit15).json');
                addSubcategory('Unit 16', './html/vocabulary(L4 Unit16).json');
                addSubcategory('Unit 17', './html/vocabulary(L4 Unit17).json');
                addSubcategory('Unit 18', './html/vocabulary(L4 Unit18).json');
                addSubcategory('Unit 19', './html/vocabulary(L4 Unit19).json');
                addSubcategory('Unit 20', './html/vocabulary(L4 Unit20).json');
                addSubcategory('Unit 21', './html/vocabulary(L4 Unit21).json');
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
            const htmlFileName = jsonFileName.replace('.json', '.html'); // Generate HTML file name
            if (jsonFileName.endsWith('.json')) {
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