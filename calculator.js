const express = require("express");
const app = express();
const bodyparse = require("body-parser");
app.use(bodyparse.urlencoded({extended: true}));

app.get("/", function(req, res){
res.sendFile(__dirname+"/index.html");
});
app.post("/", function(req, res){
    var num1= Number(req.body.num1);
    var num2= Number(req.body.num2);
    var result=num1+num2;
    res.send("Your result is:"+result);
});

app.get("/bmicalc", function(req, res){
    res.sendFile(__dirname+"/bmicalc.html");
    });
app.post("/bmicalc", function(req, res)
{
    var height= parseFloat(req.body.height);
    var weight= parseFloat(req.body.weight);

    var bmi= weight/(height*height);
    res.send("hello:"+bmi);
});
app.listen(3000, function()
{
    console.log("You have connected to port 3000");
});