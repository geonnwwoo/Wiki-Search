// Move to Search Results Page

function checkEnter(e) {
    if (e.key == 'Enter' && document.querySelector('#aa2').value.length != 0) {
        searched();
    }
}

document.querySelector("#aa1").addEventListener('keypress', checkEnter, false);

function searched() {
    let searchVal = document.querySelector("#aa2").value;
    console.log(searchVal);
    document.querySelector("#aa1").removeEventListener('keypress', checkEnter);
}