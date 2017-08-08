var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    title: 'Article One | Kalai Balamurugan',
    heading: 'Article One',
    date: 'August 8, 2017',
    content: `
            <p>
              Hurray!!! This is Kalai's first article!!! Hurray!!! This is Kalai's first article!!! Hurray!!! This is Kalai's first article!!!
            </p>
            <p>
              Hurray!!! This is Kalai's first article!!! Hurray!!! This is Kalai's first article!!! Hurray!!! This is Kalai's first article!!
            </p>
            <p>
              Hurray!!! This is Kalai's first article!!! Hurray!!! This is Kalai's first article!!! Hurray!!! This is Kalai's first article!!!
            </p>`
};

function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
var htmlTemplate=`
<html>
  <head>
    <title> ${title}</title>
    <link href="/ui/style.css" rel="stylesheet" />
  </head>
  <body>
    <div class="container">  
        <div>
          <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
         ${heading}
         </h3>
         <div>
         ${date}
         </div>
         <div>
            ${content}
         </div>
    </div>
  </body>
</html>
`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req,res) {
 res.send(createTemplate(articleOne));
});


app.get('/article-two', function(req,res) {
 res.send(path.join(__dirname, 'ui', 'article-two.html'));
});


app.get('/article-three', function(req,res) {
 res.send(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
