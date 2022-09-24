var utility = require("./helper_module");
var express = require("express");
var app = express();

//utility.sayHi();
//console.log(utility.adder(2, 3));

var PORT = 8080;
function start(){
    console.log("server working");
}

app.get("/", function(req,resP){
    resP.send("<p>Hello world</p>")
})

app.listen(PORT, start);