const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const mongoose = require("mongoose");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/todoDB', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});


var itemSchema = {
    name: String,
};

const listSchema = {
    name: String,
    items: [itemSchema]
};

const List = mongoose.model("List", listSchema);
const Item = mongoose.model("Item", itemSchema);

app.get("/", function(req,res){

    Item.find({}, function(error, itemsfound){
        res.render("list", {listTitle: "Today" , newListItems: itemsfound});
    });

});

app.post("/", function(req,res){

    const itemName = req.body.newItem;
    const listName = req.body.list;
    const newItem = new Item({
        name: itemName
    });
    if (listName === "Today"){
        
        newItem.save();
        res.redirect("/");
    }
    else{
        List.findOne({name: listName}, function(err, foundList){
            foundList.items.push(newItem);
            foundList.save();
            res.redirect("/" + listName);
        });
    }
   
    
});

app.post("/delete", function(req,res){

    const itemID = req.body.checkbox;
    let listName = req.body.listTitle;

    if (listName === "Today"){
        Item.deleteOne({ _id: itemID }, function (err) {
            if (err) {
                return handleError(err);
            }
            else{
                res.redirect("/");
            }
        });
    }
   
    else{
        List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: itemID}}}, function(err,foundList){
            if(!err){
                res.redirect("/" + listName);
            } 
        });
    }
});


app.get("/:newListName", function(req,res){
    let newListTitle = _.capitalize(req.params.newListName);
    List.findOne({name:newListTitle}, function(err, foundList){

        if(!err){
            if(!foundList){
                let temp = [];
                const list = new List({
                    name: newListTitle,
                    items: temp
                });

                list.save();
                res.redirect("/" + newListTitle);

            }else{
                res.render("list", {listTitle: foundList.name , newListItems: foundList.items})
            }
        }
        else{
            console.log(err);
            
        }
        
    });
    
});

app.listen(3000, function(){
    console.log("server 3000");
});