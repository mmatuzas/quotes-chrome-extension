"use strict";

var q1 = "";
var q2 = "";
function doIt() { 
 $.ajax({
    headers: {
      "X-Mashape-Key": "xxx", "Content-Type": "application/x-www-form-urlencoded", "Accept": "application/json"
   },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies', 
    type: 'GET', 
    dataType: 'json',
    success: function(data) {
      q1 = data.quote;
      q2 = data.author;
      $("#quoteText").text(q1)
      $("#quoteAuthor").text(q2)
    },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    
    }
});
}
$(document).ready(function(){
  window.onload = doIt();
  $("#newQuote").on("click", doIt);
  $('#tweet').on("click", function() {
      window.open('http://twitter.com/home/?status=' + q1 + ' -' + q2);
    });
  });
  

