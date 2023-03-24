const electron = require("electron");
const ipc = electron.ipcRenderer;
const title = document.querySelector(".title");
const textContainer = document.querySelector(".content");
const headerCard = document.querySelector(".content-header");
const subheaderCard = document.querySelector(".content-subheader");
const subsubheaderCard = document.querySelector(".content-subsubheader");
const textCard = document.querySelector(".content-text");



function splitStringByHeaders(str) {
    const regex = /^(={2,4})(.+?)(={2,4})/gm;
    const matches = [...str.matchAll(regex)];
    const sections = [];
    let lastIndex = 0;
    matches.forEach(match => {
      const [fullMatch, headerType, headerText] = match;
      const headerLevel = headerType.length - 1;  
      const normalText = str.substring(lastIndex, match.index);
      if (normalText.length > 0) {
        sections.push({ type: "normal", content: normalText });
      }
        sections.push({ type: `header${headerLevel}`, content: headerText.trim() });
      lastIndex = match.index + fullMatch.length;
    });
    const remainingText = str.substring(lastIndex);
    if (remainingText.length > 0) {
      sections.push({ type: "normal", content: remainingText });
    }
    return sections;
}

ipc.on('start->search: content article received', function(event, articleContent) {
    console.log(splitStringByHeaders(articleContent));
    splitArticleContent = splitStringByHeaders(articleContent);
    splitArticleContentLength = splitArticleContent.length;
});

ipc.on('start->search: title received', function(event, articleTitle) {
    title.textContent = articleTitle;
});



// VISUAL (COLORSCHEMES)

function readTextFile(file, callback) {
    let rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("../colorscheme/colorscheme.txt", function(text1) {
    let colorscheme = text1;
    readTextFile("../colorscheme/"+colorscheme, function(text2) {
        let colorschemeText = text2;
        gotColorScheme(colorschemeText);
    });
});

function gotColorScheme(cs) {
    let colorschemeCSS = JSON.parse(cs);
    let r = document.querySelector(':root');
    r.style.setProperty('--body-color', colorschemeCSS["SEARCH-body"]);
}
