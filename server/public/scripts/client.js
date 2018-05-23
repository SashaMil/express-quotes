console.log('js');

$(document).ready(readyNow);

function readyNow() {
  getQuotes();
  $('#addQuote').on('click', addQuotes);
  $('#refreshButton').on('click', getQuotes);
}

function getQuotes() {
  $.ajax({
    method: 'GET',
    url: '/quotes'
  }).then(function(response) {
    console.log('back from server with ', response);
    displayGuests(response);
  });
}

function addQuotes() {
  let objectToSend = {
    quote: $('#quoteIn').val(),
    author:$('#authorIn').val()
  };
  $.ajax({
    method: 'POST',
    url: '/quotes',
    data: objectToSend
  }).then(function(response) {
    console.log('back from server with', repsonse);
  });
}

function displayGuests(quotes) {
  console.log('in displayGuests');
  let el = $('#quotes');
  console.log(quotes);
  el.empty();
  for (let x = 0; x < quotes.length; x++) {
    el.append('<li>' + '"' + quotes[x].quote + '"' + ' by ' + quotes[x].author + '</li>');
  }
}
