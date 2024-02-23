const data = [
    { url: "./html/vocabulary(L3 Unit1).html", category: "link-l3", label: "vocabulary(L3 Unit1)" },
    { url: "./html/vocabulary(L3 Unit2).html", category: "link-l3", label: "vocabulary(L3 Unit2)" },
    { url: "./html/vocabulary(L3 Unit3).html", category: "link-l3", label: "vocabulary(L3 Unit3)" },
    { url: "./html/vocabulary(L3 Unit4).html", category: "link-l3", label: "vocabulary(L3 Unit4)" },
    { url: "./html/vocabulary(L3 Unit5).html", category: "link-l3", label: "vocabulary(L3 Unit5)" },
    { url: "./html/vocabulary(L3 Unit6).html", category: "link-l3", label: "vocabulary(L3 Unit6)" },
    { url: "./html/vocabulary(L3 Unit7).html", category: "link-l3", label: "vocabulary(L3 Unit7)" },
    { url: "./html/vocabulary(L3 Unit8).html", category: "link-l3", label: "vocabulary(L3 Unit8)" },
    { url: "./html/vocabulary(L3 Unit9).html", category: "link-l3", label: "vocabulary(L3 Unit9)" },
    { url: "./html/vocabulary(L3 Unit10).html", category: "link-l3", label: "vocabulary(L3 Unit10)" },
    { url: "./html/vocabulary(L3 Unit11).html", category: "link-l3", label: "vocabulary(L3 Unit11)" },
    { url: "./html/vocabulary(L3 Unit12).html", category: "link-l3", label: "vocabulary(L3 Unit12)" },
    { url: "./html/vocabulary(L3 Unit13).html", category: "link-l3", label: "vocabulary(L3 Unit13)" },
    { url: "./html/vocabulary(L3 Unit14).html", category: "link-l3", label: "vocabulary(L3 Unit14)" },
    { url: "./html/vocabulary(L3 Unit15).html", category: "link-l3", label: "vocabulary(L3 Unit15)" },
    { url: "./html/vocabulary(L3 Unit16).html", category: "link-l3", label: "vocabulary(L3 Unit16)" },
    { url: "./html/vocabulary(L3 Unit17).html", category: "link-l3", label: "vocabulary(L3 Unit17)" },
    { url: "./html/vocabulary(L3 Unit18).html", category: "link-l3", label: "vocabulary(L3 Unit18)" },
    { url: "./html/vocabulary(L3 Unit19).html", category: "link-l3", label: "vocabulary(L3 Unit19)" },
    { url: "./html/vocabulary(L3 Unit20).html", category: "link-l3", label: "vocabulary(L3 Unit20)" },
    { url: "./html/vocabulary(L3 Unit21).html", category: "link-l3", label: "vocabulary(L3 Unit21)" }
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
