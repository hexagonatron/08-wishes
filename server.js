const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 3000;

const connection = mysql.createConnection({
  host: "",

  // Your port; if not 3306
  port: 0000,

  // Your username
  user: "",

  // Your password
  password: "",  //PUT YOUR OWN
  database: "",
});

//Handlebars config
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Middlewear
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connection.connect((err) => {
  if (err) {
    console.log(err.stack);
  }
  console.log("connected as id " + connection.threadId);
});

//Start express
app.listen(PORT, (err) => {
    if(err) throw err

    console.log(`Server running on ${PORT}`);
});

//Root get route
app.get('/', (req, res) => {

    connection.query("SELECT * FROM wishes;", function(err, data){
        if (err) throw (err);
    // console.log(data);
    res.render('index', {wishes: data});
    });
});


//Post route
app.post("/", function (req, res) {

    // console.log(req.body);
    //{ title: 'test', author: 'ben', wish: 'This is a wish!!!!' }


    /*
     var query = connection.query(
    "INSERT INTO products SET ?",
    {
      flavor: "Rocky Road",
      price: 3.0,
      quantity: 50
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " product inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      updateProduct();
    }
    */


    console.log(req.body);

    connection.query("INSERT INTO wishes SET ?", req.body, function (err, result) {
        if (err) throw err;
        // console.log(result);
        res.redirect("/");
    })

})

app.post("/delete/:id", (req, res) => {

    connection.query("DELETE FROM wishes WHERE id =?", req.params.id, function (err, result) {
        if (err) throw err;
        // console.log(result);
        res.redirect("/");
    })

})

app.post("/edit/:id", (req, res) => {

    connection.query("UPDATE FROM wishes WHERE id =?", req.params.id, function (err, result) {
        if (err) throw err;
        // console.log(result);
        res.redirect("/");
    })

})
