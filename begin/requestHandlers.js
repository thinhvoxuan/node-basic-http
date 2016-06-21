exports.start = function(request, response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write('<h1>start url</h1>')
}

exports.show = function(request, response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write('<h1>show url</h1>')
}