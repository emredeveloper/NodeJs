

var http = require("http");
var fs = require("fs");
function hata404(response)
{
    response.writeHead(404,{'Content-Type': 'text/plain'});
    response.write('Hata 404: Kaynak Bulunamadi');
    response.end();
}

var sunucu = http.createServer(function(request,response)
{
    if(request.method== 'GET' && request.url== '/') // http methoduna erişip get olursa ve tarayıcı / ile bitiyorsa htmli aktarmış olduk
    {
        response.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream('./ornek.html').pipe(response);
    }
    else
    {
        hata404(response);
    }
});
sunucu.listen(3000);

console.log("Sunucu 300 nolu partda başlatıldı");

// http://127.0.0.1:3000
