$(function() {
  $('#submit').on('click', function(event) {
    var queryTerm = $('#searchTerm').val();
    event.preventDefault();
    // get field value
    url = buildUrl(queryTerm);
    $.ajax({
      type: 'GET', url: url, dataType: 'jsonp',
    })
    .error(function(xhr, status, err) {
      console.error(url + err.toString());
    })
    .success(function(query){
      $('#searchTerm').val('');
      $('#article-list').empty();
      appendToList(query.query.search);
    });
  });
  
  function appendToList(queryResults) {
    var list =[];
    var title, snippet, content;
    for (var i in queryResults) {
      result = queryResults[i];
      title = result.title;
      snippet = result.snippet;
      content = '<h3><a href="http://en.wikipedia.org/wiki/' 
                 + encodeURI(title) 
                 + '">' + title 
                 + '</a></h3>'
                 + "<p>"
                 + snippet
                 + "...</p>";
      list.push($('<li>', { html: content }));
    }
    $('#article-list').append(list)
  };
  
  function buildUrl(term) {
    var endpoint= "https://en.wikipedia.org/w/api.php";
    var url = endpoint + "?action=query&format=json&maxlag=&list=search&utf8=1&srsearch=" + term;
    return url;
  };

});
