const data = [
    { url: "./html/vocabulary(L2 Unit1).html", category: "link-l2", label: "vocabulary(L2 Unit1)" },
    { url: "./html/vocabulary(L2 Unit2).html", category: "link-l2", label: "vocabulary(L2 Unit2)" },
    { url: "./html/vocabulary(L2 Unit3).html", category: "link-l2", label: "vocabulary(L2 Unit3)" },
    { url: "./html/vocabulary(L2 Unit4).html", category: "link-l2", label: "vocabulary(L2 Unit4)" },
    { url: "./html/vocabulary(L2 Unit5).html", category: "link-l2", label: "vocabulary(L2 Unit5)" },
    { url: "./html/vocabulary(L2 Unit6).html", category: "link-l2", label: "vocabulary(L2 Unit6)" },
    { url: "./html/vocabulary(L2 Unit7).html", category: "link-l2", label: "vocabulary(L2 Unit7)" },
    { url: "./html/vocabulary(L2 Unit8).html", category: "link-l2", label: "vocabulary(L2 Unit8)" }
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
