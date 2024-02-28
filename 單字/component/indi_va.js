const data = [
    // { url: "./html/開學考雜誌.html", category: "link-magazine", label: "ALL+ 1/15~1/31" },
    { url: "./All_Plus_Mar.html", category: "link-magazine", label: "All Plus March" },
    { url: "./Book_4.html", category: "link-b4", label: "Book 4" },
    // { url: "./html/B4 L1.html", category: "link-b4", label: "Book 4 Lesson 1" },
    // { url: "./html/B4 L2.html", category: "link-b4", label: "Book 4 Lesson 2" },
    // { url: "./html/B4 L3.html", category: "link-b4", label: "Book 4 Lesson 3" },
    // { url: "./html/B4 review 1.html", category: "link-b4", label: "Book 4 review 1" },
    { url: "./Vocabulary_Level_2.html", category: "link-l2", label: "Vocabulary Level 2" },
    // { url: "./html/vocabulary(L2 Unit1).html", category: "link-l2", label: "vocabulary(L2 Unit1)" },
    // { url: "./html/vocabulary(L2 Unit2).html", category: "link-l2", label: "vocabulary(L2 Unit2)" },
    // { url: "./html/vocabulary(L2 Unit3).html", category: "link-l2", label: "vocabulary(L2 Unit3)" },
    // { url: "./html/vocabulary(L2 Unit4).html", category: "link-l2", label: "vocabulary(L2 Unit4)" },
    // { url: "./html/vocabulary(L2 Unit5).html", category: "link-l2", label: "vocabulary(L2 Unit5)" },
    // { url: "./html/vocabulary(L2 Unit6).html", category: "link-l2", label: "vocabulary(L2 Unit6)" },
    // { url: "./html/vocabulary(L2 Unit7).html", category: "link-l2", label: "vocabulary(L2 Unit7)" },
    // { url: "./html/vocabulary(L2 Unit8).html", category: "link-l2", label: "vocabulary(L2 Unit8)" },
    { url: "./Vocabulary_Level_3.html", category: "link-l3", label: "Vocabulary Level 3" },
    // { url: "./html/vocabulary(L3 Unit1).html", category: "link-l3", label: "vocabulary(L3 Unit1)" },
    // { url: "./html/vocabulary(L3 Unit2).html", category: "link-l3", label: "vocabulary(L3 Unit2)" },
    // { url: "./html/vocabulary(L3 Unit3).html", category: "link-l3", label: "vocabulary(L3 Unit3)" },
    // { url: "./html/vocabulary(L3 Unit4).html", category: "link-l3", label: "vocabulary(L3 Unit4)" },
    // { url: "./html/vocabulary(L3 Unit5).html", category: "link-l3", label: "vocabulary(L3 Unit5)" },
    // { url: "./html/vocabulary(L3 Unit6).html", category: "link-l3", label: "vocabulary(L3 Unit6)" },
    // { url: "./html/vocabulary(L3 Unit7).html", category: "link-l3", label: "vocabulary(L3 Unit7)" },
    // { url: "./html/vocabulary(L3 Unit8).html", category: "link-l3", label: "vocabulary(L3 Unit8)" },
    // { url: "./html/vocabulary(L3 Unit9).html", category: "link-l3", label: "vocabulary(L3 Unit9)" },
    // { url: "./html/vocabulary(L3 Unit10).html", category: "link-l3", label: "vocabulary(L3 Unit10)" },
    // { url: "./html/vocabulary(L3 Unit11).html", category: "link-l3", label: "vocabulary(L3 Unit11)" },
    // { url: "./html/vocabulary(L3 Unit12).html", category: "link-l3", label: "vocabulary(L3 Unit12)" },
    // { url: "./html/vocabulary(L3 Unit13).html", category: "link-l3", label: "vocabulary(L3 Unit13)" },
    // { url: "./html/vocabulary(L3 Unit14).html", category: "link-l3", label: "vocabulary(L3 Unit14)" },
    // { url: "./html/vocabulary(L3 Unit15).html", category: "link-l3", label: "vocabulary(L3 Unit15)" },
    // { url: "./html/vocabulary(L3 Unit16).html", category: "link-l3", label: "vocabulary(L3 Unit16)" },
    // { url: "./html/vocabulary(L3 Unit17).html", category: "link-l3", label: "vocabulary(L3 Unit17)" },
    // { url: "./html/vocabulary(L3 Unit18).html", category: "link-l3", label: "vocabulary(L3 Unit18)" },
    // { url: "./html/vocabulary(L3 Unit19).html", category: "link-l3", label: "vocabulary(L3 Unit19)" },
    // { url: "./html/vocabulary(L3 Unit20).html", category: "link-l3", label: "vocabulary(L3 Unit20)" },
    // { url: "./html/vocabulary(L3 Unit21).html", category: "link-l3", label: "vocabulary(L3 Unit21)" },
    { url: "./Vocabulary_Level_4.html", category: "link-l4", label: "Vocabulary Level 4" },
    { url: "./e2c.html", category: "link-test", label: "看英文選中文" },
    { url: "./c2e.html", category: "link-test", label: "看中文選英文" }
    // { url: "./html/vocabulary(L4 Unit1).html", category: "link-l4", label: "vocabulary(L4 Unit1)" },
    // { url: "./html/vocabulary(L4 Unit2).html", category: "link-l4", label: "vocabulary(L4 Unit2)" },
    // { url: "./html/vocabulary(L4 Unit3).html", category: "link-l4", label: "vocabulary(L4 Unit3)" },
    // { url: "./html/vocabulary(L4 Unit4).html", category: "link-l4", label: "vocabulary(L4 Unit4)" },
    // { url: "./html/vocabulary(L4 Unit5).html", category: "link-l4", label: "vocabulary(L4 Unit5)" },
    // { url: "./html/vocabulary(L4 Unit6).html", category: "link-l4", label: "vocabulary(L4 Unit6)" },
    // { url: "./html/vocabulary(L4 Unit7).html", category: "link-l4", label: "vocabulary(L4 Unit7)" },
    // { url: "./html/vocabulary(L4 Unit8).html", category: "link-l4", label: "vocabulary(L4 Unit8)" },
    // { url: "./html/vocabulary(L4 Unit9).html", category: "link-l4", label: "vocabulary(L4 Unit9)" },
    // { url: "./html/vocabulary(L4 Unit10).html", category: "link-l4", label: "vocabulary(L4 Unit10)" },
    // { url: "./html/vocabulary(L4 Unit11).html", category: "link-l4", label: "vocabulary(L4 Unit11)" },
    // { url: "./html/vocabulary(L4 Unit12).html", category: "link-l4", label: "vocabulary(L4 Unit12)" },
    // { url: "./html/vocabulary(L4 Unit13).html", category: "link-l4", label: "vocabulary(L4 Unit13)" },
    // { url: "./html/vocabulary(L4 Unit14).html", category: "link-l4", label: "vocabulary(L4 Unit14)" },
    // { url: "./html/vocabulary(L4 Unit15).html", category: "link-l4", label: "vocabulary(L4 Unit15)" },
    // { url: "./html/vocabulary(L4 Unit16).html", category: "link-l4", label: "vocabulary(L4 Unit16)" },
    // { url: "./html/vocabulary(L4 Unit17).html", category: "link-l4", label: "vocabulary(L4 Unit17)" },
    // { url: "./html/vocabulary(L4 Unit18).html", category: "link-l4", label: "vocabulary(L4 Unit18)" },
    // { url: "./html/vocabulary(L4 Unit19).html", category: "link-l4", label: "vocabulary(L4 Unit19)" },
    // { url: "./html/vocabulary(L4 Unit20).html", category: "link-l4", label: "vocabulary(L4 Unit20)" },
    // { url: "./html/vocabulary(L4 Unit21).html", category: "link-l4", label: "vocabulary(L4 Unit21)" }
];

function generateLinks() {
    const linksContainer = document.getElementById('dynamicLinks');
    linksContainer.innerHTML = '';

    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add(item.category);
        const link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.label;
        listItem.appendChild(link);
        linksContainer.appendChild(listItem);
    });
}

window.onload = generateLinks;
