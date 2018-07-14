var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image: "https://i.pinimg.com/originals/32/3a/3d/323a3db7fc327654733cd17ce6e79e54.jpg"},
        {name: "Granite Hill", image: "https://www.edizionianordest.com/wp-content/uploads/2017/08/x-1.png"},
        {name: "Mountain Goat's Rest", image: "https://static.starsinsider.com/1920/na_5ae755461e7f7.jpg"}
];

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.post("/campgrounds", function(req, res) {
   // get data from form and add to campgrounds array
   // redirect back to the campgrounds page
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image};
   
   campgrounds.push(newCampground);
   
   res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp Server Starting...");
});