// console.log ("Sanity check");

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

var cards = ["queen", "queen", "king", "king"]

var cardsInPlay = [];

//board
var cardsDOM = document.getElementById("game-board")

function createCards() {
	for (var i = 0; i < cards.length; i++){

	// cardElement
	var newDiv = document.createElement("div");

	newDiv.className = 'card';

	newDiv.setAttribute('data-card', cards[i]);

	newDiv.addEventListener('click', isTwoCards);

	// cardsDOM.appendChild(newDiv);
	cardsDOM.appendChild(newDiv);
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));

	console.log(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png'>"; // king
	} else {
		this.innerHTML = "<img src='queen.png'>"; //queen
	}

	if (cardsInPlay.length === 2) {

		isMatch(cardsInPlay);

		cardsInPlay = [];
	}
}

function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match");
	} else {
		alert("Sorry, Try again");
	}
	document.querySelectorAll('.card').innerHTML = ' ';

}


createCards();