const data = [
    { url: "./html/開學考雜誌.html", category: "link-magazine", label: "ALL PLUS 1/15~1/31" },
    { url: "./All_Plus_Mar.html", category: "link-magazine", label: "All Plus March" },
    { url: "./Book_4.html", category: "link-b4", label: "Book 4" },
    { url: "./Vocabulary_Level_2.html", category: "link-l2", label: "Vocabulary Level 2" },
    { url: "./Vocabulary_Level_3.html", category: "link-l3", label: "Vocabulary Level 3" },
    { url: "./Vocabulary_Level_4.html", category: "link-l4", label: "Vocabulary Level 4" },
    { url: "./e2c.html", category: "link-test", label: "看英文選中文" },
    { url: "./c2e.html", category: "link-test", label: "看中文選英文" }
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
        link.style.display = 'inline-block'; 
        link.style.width = '100%';
        listItem.appendChild(link);
        linksContainer.appendChild(listItem);
    });
}

window.onload = generateLinks;
