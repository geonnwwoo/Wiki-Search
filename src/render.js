console.log('test');

function setup() {
  userInput = select('#search');
  userInput.changed(goWiki);

  function goWiki() {
    let term = userInput.value;
    console.log(term);
  }
}