var stream = require("stream");
var Stream = new stream();

var fs = require("fs");
var path = require("path");
dosya_konumu = __dirname + path.sep + "emre.txt";
var readstream = fs.createReadStream(dosya_konumu);
var okunan_veri = "";
readstream.setEncoding("utf-8");
readstream.on('data',function(chunk)
{
    okunan_veri += chunk;
});

readstream.on('end',function(chunk)
{
    console.log(okunan_veri);
});