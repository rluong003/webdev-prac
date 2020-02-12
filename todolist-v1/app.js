const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + '/date.js');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

let items = ["Learn", "Projects", "Apply"];
let groceries = [];




app.get("/", function(req,res){
let day = date.getDate();

res.render("list", {listTitle: day , newListItems: items});

});


app.post("/", function(req,res){

    let item = req.body.newItem;
    if (req.body.list === 'Grocery'){
        groceries.push(item);
        res.redirect("/grocery");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
    
});

app.get("/grocery", function(req,res){
    res.render("list", {listTitle: "Grocery List", newListItems: groceries});
});


app.listen(3000, function(){
    console.log("server 3000");
});