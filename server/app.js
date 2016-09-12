var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
var portDecision = process.env.PORT || 3000;
var countButtonClicks = 0;


app.listen(portDecision, function(){
  console.log('server is connected on 3000');
});

//base url
app.get('/', function(req, res){
  console.log('base URL hit');
  res.sendFile(path.resolve('public/index.html'));
}); //end base url


//set up path
app.post('/',urlencodedParser, function(req, res){
  console.log('jokePlace hit', req.body);
  jokes.push(req.body);
  console.log('all jokes:', jokes);
  res.send(jokes);
});

app.use(express.static('public'));


////////////////////////Jokes library/////////////////////////////////////////////////
jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dev",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs"
  }
];
