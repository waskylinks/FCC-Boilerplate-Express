// require('dotenv').config()

let express = require('express');
let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//middleware to serve static assets(css,images)
//app.use('/public', express.static(__dirname + '/public'))

//let absolutePath = __dirname + '/views/index.html'

// 🔹 Root-level middleware (must come before routes)
/*
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});
*/
 /*
app.get('/json', (req, res) => {
  let message = process.env.MESSAGE_STYLE === 'uppercase'
    ? "HELLO JSON"
    : "Hello json";
    res.json({ "message": message });
  });
  */
/*
  app.get('/now',(req, res, next) => {
    req.time = new Date().toString();
    next();
  }, (req, res) => {
    res.json({time: req.time});
  })
    */

  /*
  app.get('/:word/echo', (req, res) => {
    res.json({echo: req.params.word});
  });
  */

  app.get('/name', (req, res) => {
    const first = req.query.first;
    const last = req.query.last;
    res.json({ name: `${first} ${last}` })
  });


 module.exports = app;
