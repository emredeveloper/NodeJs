var fs = require("fs");
var path = require("path");
var data = "Veri denemesi olacak";
fs.writeFile(__dirname + path.sep + "emre.txt",data, function(err)
{
    if(err)
    {
        console.error("Hata mesajı" + err.message);
    }
    else
    {
        console.log("Dosya yazma başarılı");
    }
});