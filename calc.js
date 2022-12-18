const express = require("express");
const bodyParser = require("body-parser")

// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
	extended:true
}));

app.get("/", function(req, res) {
res.sendFile(__dirname + "/hesapmakinesi.html");
});



app.post("/", function(req, res) {
var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
	
var result = num1 + num2 ;
	
res.send("Addition : " + result);
}); 

app.get("/carpma",function(req,res)
{
    res.sendFile(__dirname + "/hesap2.html");
});

app.post("/carpma",function(req,res,)
{
    var num3 = Number(req.body.num1);
    var num4 = Number(req.body.num2);
    var bolme = num3 * num4;
    res.send("Çarpma sonucu : " + bolme);
});
app.listen(3000, function(){
console.log("server is running on port 3000");
})
