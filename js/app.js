/*
 * Match = When card Matches
 open show = when card is clicked
 */
let theCount = 3;
let probe = 0;
let starcounter = 0;
const openShow = document.getElementsByClassName('open show');
const lists = document.getElementById('decks');
const matches = document.getElementsByClassName('match');
const cards = document.getElementsByClassName('card');
const fafa = document.getElementsByClassName('fa fa');
const help = document.getElementsByClassName('stars');
const reload = document.getElementsByClassName('fa fa-repeat');
const ogArray = [].map.call(cards, function(el) {
  return el;
});

const truffle = shuffle(ogArray);

function reloader() {
  $('.restart').on('click', function() {
    location.reload();
  })
}

function removeList() {
  console.log('removeList running')
  $('.ul').innerHTML = '';
  addList();
}

function addList() {
  console.log('addlist running');
  for (let x = 0; x < truffle.length; x++) {
    lists.appendChild(truffle[x]);
  }
  counter();
}
reloader();
removeList();



const lose = document.createElement('span');
const clicklose = document.createElement('span');

function counter() {
  console.log('P is ' + probe);
  if (probe < 3) {
    probe++;
    editNumber();
    addclicks();
  } else {
    editNumber();
    lose.innerText += 'You lose!'
    clicklose.innerText += 'Click to play again!';
    contained.appendChild(lose);
    contained.appendChild(clicklose);
    $(lose).css('font-size', '44px');
    $(lose).on('click', function() {
      location.reload();

    })
  }
}



function addclicks() {
  console.log('Clicks Running');
  for (let z = 0; z < truffle.length; z++) {
    $(truffle[z]).on('click', function() {
      $(truffle[z]).addClass(' open show');
      if (openShow.length == 3) {
        match();

      }
    })
  }
}


function match() {
  console.log('Matches running...');
  const one = openShow[0].childNodes[1];
  const two = openShow[1].childNodes[1];
  const three = openShow[2].childNodes[1];
  if (one.className == two.className) {
    $(one).removeClass('card open show');
    $(one).addClass('card match');
    $(two).removeClass('card open show');
    $(two).addClass('card match');
    won();
  } else if (one.className == three.className) {
    $(one).removeClass('card open show');
    $(one).addClass('card match');
    $(three).removeClass('card open show');
    $(three).addClass('card match');
    won();
  } else if (two.className == three.className) {
    $(two).removeClass('card open show');
    $(two).addClass('card match');
    $(three).removeClass('card open show');
    $(three).addClass('card match');
    won();
  } else {
    for (let n = 0; n < truffle.length; n++) {
      $(truffle[n]).off('click');
    }
    setTimeout(function() {
      $(openShow).removeClass(' open show');
      removeStars();
      counter();
    }, 2000)
  }
}
const winner = document.createElement('span');
const contained = document.getElementById('container');
const clickhere = document.createElement('span');

function won() {
  for (let n = 0; n < truffle.length; n++) {
    $(truffle[n]).off('click');
  }
  winner.textContent += 'You Won!';
  clickhere.textContent += 'Click to Play Again!'
  $(winner).css('font-size', '44px');
  contained.appendChild(winner);
  contained.appendChild(clickhere);
  $(winner).on('click', function() {
    $(openShow).removeClass(' open show');
    $(matches).removeClass(' match');
    $(winner).off('click');
    location.reload();
  })
}

function removeStars() {
  for (let x = 0; x < 2; x++) {
    sun.removeChild(sun.childNodes[0]);
  }
}

function editNumber() {
  $(mover).text(theCount);
  theCount--;

}

function restart() {
  contained.removeChild(winner);
  contained.removeChild(clickhere);
  probe = 0;
  removeList();
}
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
