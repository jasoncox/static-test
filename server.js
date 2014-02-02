var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs")
    port = 8000;
 
http.createServer(function(request, response) {
 
  var uri = "/"
  var filename = path.join(process.cwd(), uri);
  
  path.exists(filename, function(exists) {
 
    filename += 'index.xhtml';

    console.log(filename)
 
    fs.readFile(filename, "binary", function(err, file) {
      if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }
 
      response.writeHead(200);
      response.write(file, "binary");
      response.end();
    });
  });
}).listen(parseInt(port, 10));
 
console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");