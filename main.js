var quotes = [
    "Don't cry because it's over, smile because it happened.", "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "Be yourself; everyone else is already taken.", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "So many books, so little time."];

var author = ["Dr Seuss", "Marilyn Monroe", "Oscar Wilde", "Albert Einstein", "Frank Zappa"];

var colors = [blue, yellow, purple, green, cyan, white, red]

function getQuote() {
    var returnQuote = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteBox').innerHTML = quotes[returnQuote];
    document.getElementById('displayAuthor').innerHTML = author[returnQuote];
}

function changeColor() {
    var returnColor = Math.floor(Math.random() * colors.length);
    document.getElementById('changeColor').innerHTML = colors[returnColor];
}

