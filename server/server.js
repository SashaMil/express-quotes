const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const RandomNumber = require('./randomNumber')


const port = 5000;
let quotes = [{quote: 'I LIKE IT', author: 'Mark Twain'}, {quote: 'Mo money mo problems', author: 'Charles Dickens'}];




app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port,() => {
  console.log('server up on:', port);
});

app.get('/quotes', (req, res) => {

  res.send(quotes);
});

app.get('/random', (req, res) => {
  let num = new RandomNumber().randomNumberGenerator(0, quotes.length);
  res.send('"' + quotes[num].quote + '"' + ' by ' + quotes[num].author);
})

app.post('/quotes', (req, res) => {

  quotes.push(req.body);

})
