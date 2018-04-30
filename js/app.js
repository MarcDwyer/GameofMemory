/*
 * Match = When card Matches
 open show = when card is clicked
 */
const openShow = document.getElementsByClassName('open show');
const lists = document.getElementById('decks');
const cards = document.getElementsByClassName('card');
const fafa = document.getElementsByClassName('fa fa');
const everything = $('.open show .fa fa');
const ogArray = [].map.call(cards, function (el) {
  return el;
});
const truffle = shuffle(ogArray);
const cardList = document.getElementsByTagName('li');

function removeList() {
  for (let x = 0; x < 33; x++) {
    lists.removeChild(lists.childNodes[0]);
  }
}

function addList() {
  for (let x = 0; x < truffle.length; x++) {
  lists.appendChild(truffle[x]);
}
}
removeList();
addList();
addclicks();

function addclicks() {
for (let z = 0; z < truffle.length; z++) {
  $(truffle[z]).on('click', function() {
    $(truffle[z]).addClass(' open show');
    console.log('truffle clicks have been applied');
    noMatch();
  })
  }
}

function noMatch() {
  if (openShow.length == 3) {
    for (let n = 0; n < truffle.length; n++) {
      $(truffle[n]).off('click');
      }
      setTimeout(function(){
      $(openShow).removeClass(' open show');
      addclicks(); }, 3000)
    }
  }



function match() {
  if (openShow.length == 3) {
  const one = openShow[0].childNodes[1].className;
  const two = openShow[1].childNodes[1].className;
  const three = openShow[2].childNodes[1].className;
  console.log(one + two + three);
}
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
