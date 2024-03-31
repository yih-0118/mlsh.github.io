const data = [
    { url: "./html/vocabulary(L4 Unit1).html", category: "link-l4", label: "vocabulary(L4 Unit1)" },
    { url: "./html/vocabulary(L4 Unit2).html", category: "link-l4", label: "vocabulary(L4 Unit2)" },
    { url: "./html/vocabulary(L4 Unit3).html", category: "link-l4", label: "vocabulary(L4 Unit3)" },
    { url: "./html/vocabulary(L4 Unit4).html", category: "link-l4", label: "vocabulary(L4 Unit4)" },
    { url: "./html/vocabulary(L4 Unit5).html", category: "link-l4", label: "vocabulary(L4 Unit5)" },
    { url: "./html/vocabulary(L4 Unit6).html", category: "link-l4", label: "vocabulary(L4 Unit6)" },
    { url: "./html/vocabulary(L4 Unit7).html", category: "link-l4", label: "vocabulary(L4 Unit7)" },
    { url: "./html/vocabulary(L4 Unit8).html", category: "link-l4", label: "vocabulary(L4 Unit8)" },
    { url: "./html/vocabulary(L4 Unit9).html", category: "link-l4", label: "vocabulary(L4 Unit9)" },
    { url: "./html/vocabulary(L4 Unit10).html", category: "link-l4", label: "vocabulary(L4 Unit10)" },
    { url: "./html/vocabulary(L4 Unit11).html", category: "link-l4", label: "vocabulary(L4 Unit11)" },
    { url: "./html/vocabulary(L4 Unit12).html", category: "link-l4", label: "vocabulary(L4 Unit12)" },
    { url: "./html/vocabulary(L4 Unit13).html", category: "link-l4", label: "vocabulary(L4 Unit13)" },
    { url: "./html/vocabulary(L4 Unit14).html", category: "link-l4", label: "vocabulary(L4 Unit14)" },
    { url: "./html/vocabulary(L4 Unit15).html", category: "link-l4", label: "vocabulary(L4 Unit15)" },
    { url: "./html/vocabulary(L4 Unit16).html", category: "link-l4", label: "vocabulary(L4 Unit16)" },
    { url: "./html/vocabulary(L4 Unit17).html", category: "link-l4", label: "vocabulary(L4 Unit17)" },
    { url: "./html/vocabulary(L4 Unit18).html", category: "link-l4", label: "vocabulary(L4 Unit18)" },
    { url: "./html/vocabulary(L4 Unit19).html", category: "link-l4", label: "vocabulary(L4 Unit19)" },
    { url: "./html/vocabulary(L4 Unit20).html", category: "link-l4", label: "vocabulary(L4 Unit20)" },
    { url: "./html/vocabulary(L4 Unit21).html", category: "link-l4", label: "vocabulary(L4 Unit21)" }
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
