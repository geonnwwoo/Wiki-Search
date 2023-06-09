// Rendering Article

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

function replaceToLine(str) {
    return str.replace(/\n/g, "<br>");
}

ipc.on('toSearch: content article received', function(event, articleContent) {
    console.log(splitStringByHeaders(articleContent));
    splitArticleContent = splitStringByHeaders(articleContent);
    splitArticleContentLength = splitArticleContent.length;
    for (let i=0; i<splitArticleContentLength; i++) {
        if (splitArticleContent[i]["type"] == "normal") {
            const clone = textCard.content.cloneNode(true);
            const nodeTextContent = clone.querySelector(".content-text-content");
            nodeTextContent.innerHTML = replaceToLine(splitArticleContent[i]["content"]);
            textContainer.append(clone);
        }
        else if (splitArticleContent[i]["type"] == "header1") {
            const clone = headerCard.content.cloneNode(true);
            const nodeTextContent = clone.querySelector(".content-header-content");
            nodeTextContent.innerHTML = replaceToLine(splitArticleContent[i]["content"]);
            textContainer.append(clone);
        }
        else if (splitArticleContent[i]["type"] == "header2") {
            const clone = subheaderCard.content.cloneNode(true);
            const nodeTextContent = clone.querySelector(".content-subheader-content");
            nodeTextContent.innerHTML = replaceToLine(splitArticleContent[i]["content"]);
            textContainer.append(clone);
        }
        else if (splitArticleContent[i]["type"] == "header3") {
            const clone = subsubheaderCard.content.cloneNode(true);
            const nodeTextContent = clone.querySelector(".content-subsubheader-content");
            nodeTextContent.innerHTML = replaceToLine(splitArticleContent[i]["content"]);
            textContainer.append(clone);
        }
    }
});

ipc.on('toSearch: title received', function(event, articleTitle) {
    title.textContent = articleTitle;
});



// Rendering Frontend

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

readTextFile("../../colorscheme/colorscheme.txt", function(text1) {
    let colorscheme = text1;
    readTextFile("../../colorscheme/"+colorscheme, function(text2) {
        let colorschemeText = text2;
        gotColorScheme(colorschemeText);
    });
});

function gotColorScheme(cs) {
    let colorschemeCSS = JSON.parse(cs);
    let r = document.querySelector(':root');
    r.style.setProperty('--body-color', colorschemeCSS["SEARCH-body"]);
    r.style.setProperty('--menu-color', colorschemeCSS["ALL-menu-color"]);
    r.style.setProperty('--menu-text-color', colorschemeCSS["ALL-menu-text-color"]);
    r.style.setProperty('--menu-text-hover-color', colorschemeCSS["ALL-menu-text-hover-color"]);
    r.style.setProperty('--scrollbar-track', colorschemeCSS["ALL-menu-scrollbar-track"]);
    r.style.setProperty('--scrollbar-thumb', colorschemeCSS["ALL-scrollbar-thumb"]);
    r.style.setProperty('--header-text-color', colorschemeCSS["SEARCH-header-text-color"]);
    r.style.setProperty('--subheader-text-color', colorschemeCSS["SEARCH-subheader-text-color"]);
    r.style.setProperty('--subsubheader-text-color', colorschemeCSS["SEARCH-subsubheader-text-color"]);
    r.style.setProperty('--normal-text-color', colorschemeCSS["SEARCH-normal-text-color"]);
    r.style.setProperty('--title-text-color', colorschemeCSS["SEARCH-title-text-color"]);
}



// Redirects

function toHome() {
    ipc.send('toHome');
}

function toLiked() {
    ipc.send('toLiked');
}

function toLibrary() {
    ipc.send('toLibrary');
}