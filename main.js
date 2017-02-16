// console.log ("Sanity check");

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// // if (cardThree === cardFour){
// // 	alert("You found a match");
// // } else {
// // 	alert("Sorry, Try again");
// // }

var cards = document.getElementById("game-board")

function createCards() {
	for (var i = 0; i < 4; i++){
	var newDiv = document.createElement("div");
	newDiv.className = 'card';
	cards.appendChild(newDiv);
	}
}
createCards();