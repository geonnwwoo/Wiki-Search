// Move to Search Results Page

let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
let contentUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';
let userCardTemplate = document.querySelector("[search-results-template]");
let userCardContainer = document.querySelector("[data-search-query-container]");

function getUrl(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
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
    console.log(searchVal);
    gotData(JSON.parse(getUrl(url)));

    //location.href='search-page.html' ;
}

function gotData(data) {
    console.log(data[1].length);
    let dataLength = data[1].length;

    if (dataLength != 0) {
        document.querySelector(".search-bar-wrapper").removeEventListener('keypress', checkEnter);
        document.querySelector('.search-bar-enter').removeEventListener('click', checkEnterButton);
        for (let i=0; i<dataLength; i++) {
            let card = userCardTemplate.content.cloneNode(true).children[0] ;
            let header = card.querySelector("[data-header]");
            header.textContent = data[1][i];
            userCardContainer.append(card);
        }
    }

    for (let i=0; i<dataLength; i++) {
        let card = userCardTemplate.content.cloneNode(true).children[0] ;
        let header = card.querySelector("[data-header]");
        let body = card.querySelector("[data-body]");
        header.textContent = data[1][i];
        userCardContainer.append(card);
    }
}

