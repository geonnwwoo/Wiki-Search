const electron = require("electron");
const ipc = electron.ipcRenderer;
const title = document.querySelector(".title");
const body = document.querySelector(".content");

ipc.on('start->search: content article received', function(event, articleContent) {
    body.textContent = articleContent;
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

readTextFile("colorscheme/colorscheme.txt", function(text1) {
    let colorscheme = text1;
    readTextFile("colorscheme/"+colorscheme, function(text2) {
        let colorschemeText = text2;
        gotColorScheme(colorschemeText);
    });
});

function gotColorScheme(cs) {
    let colorschemeCSS = JSON.parse(cs);
    let r = document.querySelector(':root');
    r.style.setProperty('--body-color', colorschemeCSS["SEARCH-body"]);
}
