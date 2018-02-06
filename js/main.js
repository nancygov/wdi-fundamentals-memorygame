console.log("Up and running!");
//Array of cards
var cards = [
{
rank:"queen",
suit:"hearts",
cardImage:"images/queen-of-hearts.png"
},
{
rank:"queen",
suit:"diamonds",
cardImage:"images/queen-of-diamonds.png"
},
{
rank:"king",
suit:"hearts",
cardImage:"images/king-of-hearts.png"
},
{
rank:"king",
suit:"diamonds",
cardImage:"images/king-of-diamonds.png"
}
],
cardsInPlay = [],
cardId;

var checkForMatch = function() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
      // Code to be executed if condition1 and condition2 is true
    } else if (cardsInPlay[0] !== cardsInPlay[1]) {
      alert("Sorry, try again.");
    }
  }
};


var flipCard = function (card) {
  cardId = card.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  card.setAttribute('src', cards[cardId].cardImage);

  setTimeout(checkForMatch, 1000);
};

//function myFunction() {
  //  var reset = cardElement.setAttribute("images/back.png");

var createBoard = function (){
  var board = document.getElementById("game-board");

  for(var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');

    cardElement.setAttribute('data-id', i);

    cardElement.setAttribute('src', "images/back.png");

    cardElement.addEventListener('click', function(){
      flipCard(this);
    });

    board.appendChild(cardElement);
  }
};

createBoard();

//Reset button
 //<input type="reset" value="Reset" onClick="window.location.reload()">
