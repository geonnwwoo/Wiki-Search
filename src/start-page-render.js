// Move to Search Results Page

document.querySelector("#aa1").addEventListener('keypress', function(e) {
    if (e.key == 'Enter' && document.querySelector('#aa2').value.length != 0) {
        searched();
    }
});

function searched() {
    let searchVal = document.querySelector("#aa2").value;
    console.log(searchVal);
}