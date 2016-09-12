console.log('js is sourced');

var objectToSend = {
  whoseJoke: 'none',
  jokeQuestion: 'joke',
  punchLine: 'punchLine',
};

var jokeReturn = {};


//////////////DOCUMENT READY/ GET INFO ON CLICK/////////////////////////////////
$(document).ready(function(){
  console.log('JQuery is sourced');

  $('#submitJoke').on('click', function(){
    console.log('in submitJoke button');

    objectToSend.whoseJoke = $('#whoseJoke').val();
    objectToSend.jokeQuestion = $('#jokeQuestion').val();
    objectToSend.punchLine = $('#punchLine').val();
    console.log('joke(s) to send:', objectToSend);

    ajaxCall();
  });//end submitJoke on click
});//end doc ready

//////////////Display jokes////////////////////////////////////////////////////////
var displayJokes = function(){
  for (var i = 0; i < jokeReturn.length; i++) {
    var displayAll = $("<h4/>");

        displayAll.data('index', i );
        displayAll.html('Jokester: ' + jokeReturn[i].whoseJoke + '<br>' + 'Jokey-Joke: ' + jokeReturn[i].jokeQuestion + '<br>' + 'Punch Me: ' + jokeReturn[i].punchLine ); //add in innerHMTL
        $('#displayJokes').append(displayAll);

  }
};



//////////////AJAX Call////////////////////////////////////////////////////////
var ajaxCall = function(){
  $.ajax({
    type: 'POST',
    URL: '/jokePlace',
    data: objectToSend,
    success: function(data){
      jokeReturn = data;
      console.log('success from server:', jokeReturn);
      displayJokes();
    }
  });//end AJAX inside function
};//END AJAX call
