$(document).ready(function() {
  var quote = [
  {
  "text": "If you want to see the true measure of a man, watch how he treats his inferiors, not his equals.",
  "author": "J.K. Rowling"
}, {
  "text": "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all, in which case you have failed by default.",
  "author": "J.K. Rowling"
}, {
  "text": "I think you have a moral responsibility when you've been given far more than you need, to do wise things with it and give intelligently.",
  "author": "J.K. Rowling"
}, {
  "text": "Turnip for what!",
  "author": "Michelle Obama"
}, {
  "text": "It's outta here!",
  "author": "Gary Cohen"
}, {
  "text": "Times and conditions change so rapidly that we must keep our aim constantly focused on the future.",
  "author": "Walt Disney"
}, {
  "text": "It's kind of fun to do the impossible.",
  "author": "Walt Disney"
}, {
  "text": "All our dreams can come true, if we have the courage to pursue them.",
  "author": "Walt Disney"
}, {
  "text": "The way to get started is to quit talking and begin doing.",
  "author": "Walt Disney"
}];



  var theRandomQuote = function randomQuote(arr) {
    var randomNumber = Math.floor(Math.random() * (quote.length));
    $("#quote .quote-text").html('<i class="fa fa-quote-left"></i>' + quote[randomNumber].text + '<i class="fa fa-quote-right"></i>');
    $(".quote-author").html('- ' + quote[randomNumber].author);
    document.getElementById('tweet').setAttribute("href", "https://twitter.com/intent/tweet?hashtags=fccquotemachine&text=" + encodeURI(quote[randomNumber].text) + encodeURI(' ') + encodeURI(quote[randomNumber].author));
  }
  
  theRandomQuote();
  
  $(".new-quote").on("click", function() {
    theRandomQuote();
  });

});
