// WIKIPEDIA API

const electron = require("electron");
const ipc = electron.ipcRenderer;
let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
let contentUrl = 'https://en.wikipedia.org/w/api.php?action=query&explaintext=1&format=json&formatversion=2&origin=*&prop=extracts&titles=';
let userCardTemplate = document.querySelector("[search-results-template]");
let userCardContainer = document.querySelector("[data-search-query-container]");
let dataTitles = "";

function getUrl(yourUrl){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

function checkEnter(e) {
    if (e.key == 'Enter' && document.querySelector('.search-bar-input').value.length != 0) {
        searched();
    }
}
function checkEnterButton() {
    if (document.querySelector('#aa2').value.length != 0) {
        searched()
    }
}

document.querySelector('.search-bar-enter').addEventListener('click', checkEnterButton, false);
document.querySelector(".search-bar-wrapper").addEventListener('keypress', checkEnter, false);

function searched() {
    let searchVal = document.querySelector(".search-bar-input").value;
    let url = searchUrl + searchVal;
    dataTitles = JSON.parse(getUrl(url));
    gotData(dataTitles);
}

function gotData(dataf) {
    let dataLength = dataf[1].length;

    if (dataLength != 0) {
        document.querySelector(".search-bar-wrapper").removeEventListener('keypress', checkEnter);
        document.querySelector('.search-bar-enter').removeEventListener('click', checkEnterButton);
        for (let i=0; i<dataLength; i++) {
            let card = userCardTemplate.content.cloneNode(true).children[0] ;
            let header = card.querySelector("[data-header]");
            header.textContent = dataTitles[1][i];
            card.id = i;
            userCardContainer.append(card);
        }
    }
}

function redirectToSearchPage(pagenumber) {
    let redirectTitle = dataTitles[1][pagenumber];
    title = (contentUrl) + (redirectTitle.replace(" ", "_"));
    let articleData = JSON.parse(getUrl(title));
    let pageContent = articleData.query.pages["0"].extract;
    ipc.send('start->search', pageContent, dataTitles[1][pagenumber]);
}


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
    r.style.setProperty('--body-color', colorschemeCSS["body"]);
    r.style.setProperty('--search-bar-input-color', colorschemeCSS["START-search-bar-input"]);
    r.style.setProperty('--search-bar-enter-color', colorschemeCSS["START-search-bar-enter"]);
    r.style.setProperty('--search-bar-enter-hover-color', colorschemeCSS["START-search-bar-enter-hover"]);
    r.style.setProperty('--search-result-hover-color', colorschemeCSS["START-search-result-hover"]);
    r.style.setProperty('--menu-color', colorschemeCSS["ALL-menu-color"]);
}

