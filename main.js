var quotes = [
    "Don't cry because it's over, smile because it happened.", "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "Be yourself, everyone else is already taken.", "Two things are infinite, the universe and human stupidity; and I'm not sure about the universe.", "So many books, so little time."];

var author = ["Dr Seuss", "Marilyn Monroe", "Oscar Wilde", "Albert Einstein", "Frank Zappa"];

var colours = ['blue', 'yellow', 'purple', 'green', 'cyan', 'white', 'red', 'brown', 'lime', 'magenta'];


function getQuote() {
    var returnQuote = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteBox').innerHTML = quotes[returnQuote];
    document.getElementById('displayAuthor').innerHTML = author[returnQuote];
    
}

function randomBoxColour() {
    var randomColor = Math.floor(Math.random() * colours.length);
    document.getElementById('changeColour').style.backgroundColor = colours[randomColor];
    document.getElementById('pageColour').style.backgroundColor = colours[randomColor];
}

function tweetQuote() {
    window.open("https://twitter.com/intent/tweet?text=" + document.getElementById('quoteBox').innerHTML + " - " + document.getElementById('displayAuthor').innerHTML);
}

function onLoad() {
    getQuote(); randomBoxColour();
}
window.onload = onLoad;