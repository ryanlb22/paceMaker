var express = require('express');
var router = express.Router();

// globals
var username ="";

var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "ryanlb22",
  password: "",
  database: "c9"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    console.log(result[0].username);
    
    username = result[0].username;
    console.log(username);
    //console.log(result.id);
  });
});


/* Get Features Page */
router.get('/', function(req,res,next){
    res.render('features',{title: 'Recipe Search'});
});

module.exports = router;