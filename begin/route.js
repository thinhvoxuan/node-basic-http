function route(handler, pathname, request, response){
  if(typeof handler[pathname] === 'function'){
    handler[pathname](request, response)
  }else{
    response.writeHead(404, {'Content-Type': 'text/html'})
    response.write("404 Not found")
    response.end()
  }
}

exports.route = route;