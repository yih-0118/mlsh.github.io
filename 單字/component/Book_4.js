const data = [
    { url: "./html/B4 L1.html", category: "link-b4", label: "Book 4 Lesson 1" },
    { url: "./html/B4 L2.html", category: "link-b4", label: "Book 4 Lesson 2" },
    { url: "./html/B4 L3.html", category: "link-b4", label: "Book 4 Lesson 3" },
    // { url: "./html/B4 review 1.html", category: "link-b4", label: "Book 4 review 1" }
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

