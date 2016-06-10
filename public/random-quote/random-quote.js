function newQuote() {
  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/', // The URL to the API. You can get this in the API page of the API you intend to consume
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {

      $(".quote").html(data.quote);
      $(".author").html(data.author);
      var tweetLink = buildTweetLink(data);
      $(".tweet").attr("href", tweetLink)
      
    },
    error: function(err) {
      alert("rafa");
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "YgysjrbvVumsh4ikjJD8nyi7Liesp1WAVswjsn84qpSw3v1swu"); // Enter here your Mashape key
    }
  });
}


var buildTweetLink = function(data) {
  
  var tweet = "\"" + data.quote + "\" " + data.author; 
  var link = "https://twitter.com/intent/tweet?text=" + encodeURI(tweet);
  return link;
}

$(document).ready(function() {
    // Only change code below this line.
    $("#newQuote").on("click", newQuote);
    newQuote();
    // Only change code above this line.
});