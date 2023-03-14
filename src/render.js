// Move to Search Results Page

let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
let userCardTemplate = document.querySelector("[search-results-template]");
let userCardContainer = document.querySelector("[data-search-query-container]");

function getUrl(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

function checkEnter(e) {
    if (e.key == 'Enter' && document.querySelector('#aa2').value.length != 0) {
        searched();
    }
}
function checkEnterButton() {
    if (document.querySelector('#aa2').value.length != 0) {
        searched()
    }
}

document.querySelector('#aa3').addEventListener('click', checkEnterButton, false);
document.querySelector("#aa1").addEventListener('keypress', checkEnter, false);

function searched() {
    let searchVal = document.querySelector("#aa2").value;
    let url = searchUrl + searchVal;
    console.log(searchVal);
    document.querySelector("#aa1").removeEventListener('keypress', checkEnter);
    document.querySelector('#aa3').removeEventListener('click', checkEnterButton);
    gotData(JSON.parse(getUrl(url)));

    //location.href='search-page.html' ;
}

function gotData(data) {
    console.log(data);
    console.log(data[1].length);
    let dataLength = data[1].length;
    for (let i=0; i<dataLength; i++) {
        let card = userCardTemplate.content.cloneNode(true).children[0] ;
        let header = card.querySelector("[data-header]");
        let body = card.querySelector("[data-body]");
        header.textContent = data[1][i];
        body.textContent = data[3][i];
        userCardContainer.append(card);
    }
}
