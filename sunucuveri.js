var http = require("http");
var fs = require("fs");
var qs = require("querystring"); // node:querystring modülü, URL sorgu dizelerini ayrıştırmak ve biçimlendirmek için yardımcı programlar sağlar.

var server = http.createServer(function(req,res)
{
    if(req.method== 'GET' && req.url== '/') // http methoduna erişip get olursa ve tarayıcı / ile bitiyorsa htmli aktarmış olduk
    {
        displayform(res);
    }
    else if (req.method == 'POST')
    {
        body = '';
        req.on('data',function(chunk)
        {
            body+=chunk;
        });
    };
    req.on('end',function()
    {
        var data = qs.parse(body);
        res.writeHead(200);
        res.end(JSON.stringify(data));
    });
});

function displayform(res)
{
    fs.readFile("form.html", function(err,data)
    {
        res.writeHead(200, {'Content-Type': 'text/html',
                            'Content-Lenght': 'data.lenght'
    });
    res.write(data);
    res.end();
    });
}
server.listen(3000);

console.log("Sunucu 3000 nolu partda başlatıldı");