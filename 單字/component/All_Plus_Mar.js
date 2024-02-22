const data = [
    { url: "./html/ALL_PLUS_Mar_Unit_1.html", category: "link-magazine", label: "All Plus Mar Unit1" },
    { url: "./html/ALL_PLUS_Mar_Unit_2.html", category: "link-magazine", label: "All Plus Mar Unit2" },
    { url: "./html/ALL_PLUS_Mar_Unit_3.html", category: "link-magazine", label: "All Plus Mar Unit3" },
    { url: "./html/ALL_PLUS_Mar_Unit_4.html", category: "link-magazine", label: "All Plus Mar Unit4" },
    { url: "./html/ALL_PLUS_Mar_Unit_5.html", category: "link-magazine", label: "All Plus Mar Unit5" },
    { url: "./html/ALL_PLUS_Mar_Unit_6.html", category: "link-magazine", label: "All Plus Mar Unit6" },
    { url: "./html/ALL_PLUS_Mar_Unit_7.html", category: "link-magazine", label: "All Plus Mar Unit7" },
    { url: "./html/ALL_PLUS_Mar_Unit_9.html", category: "link-magazine", label: "All Plus Mar Unit9" },
    { url: "./html/ALL_PLUS_Mar_Unit_10.html", category: "link-magazine", label: "All Plus Mar Unit10" },
    { url: "./html/ALL_PLUS_Mar_Unit_11.html", category: "link-magazine", label: "All Plus Mar Unit11" },
    { url: "./html/ALL_PLUS_Mar_Unit_12.html", category: "link-magazine", label: "All Plus Mar Unit12" },
    { url: "./html/ALL_PLUS_Mar_Unit_13.html", category: "link-magazine", label: "All Plus Mar Unit13" },
    { url: "./html/ALL_PLUS_Mar_Unit_14.html", category: "link-magazine", label: "All Plus Mar Unit14" },
    { url: "./html/ALL_PLUS_Mar_Unit_15.html", category: "link-magazine", label: "All Plus Mar Unit15" },
    { url: "./html/ALL_PLUS_Mar_CNN_News.html", category: "link-magazine", label: "All Plus Mar CNN News" }

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
