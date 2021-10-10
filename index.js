var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1 * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);
var randomDice1 = "images/dice" + randomNumber1 + ".png";  // images/dice1.png to images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomDice1);


var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2 * 6) + 1;
randomNumber2 = Math.floor(randomNumber2);
var randomDice2 = "images/dice" + randomNumber2 + ".png";  // images/dice1.png to images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomDice2);


if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "🤩Player 1 Wins !! ";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins !!🤩";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}