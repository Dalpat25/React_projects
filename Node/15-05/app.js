const http = require('http')
const fs = require('fs')

function request_listner(request, response){
    const url = request.url
    fs.writeFileSync('info.txt',"The request has been received")
    prepareResponse(response, url)
    // process.exit()
}

function prepareResponse(response, url){
    if(url === '/login'){
        response.setHeader('content-type','text/html')
    response.write("<html>")
        response.write("<head><title>Node Discussion</title></head>")
        response.write("<body><h2>Hello, welcome to login page</h2></body>")
    response.write("</html>")
    response.end()
    return response
    }
    if(url === '/logout'){
        response.setHeader('content-type','text/html')
    response.write("<html>")
        response.write("<head><title>Node Discussion</title></head>")
        response.write("<body><h2>Hello, welcome to logout page</h2></body>")
    response.write("</html>")
    response.end()
    return response
    }
    response.setHeader('content-type','text/html')
    response.write("<html>")
        response.write("<head><title>Node Discussion</title></head>")
        response.write("<body><h2>Hello, welcome to default page</h2></body>")
    response.write("</html>")
    response.end()
    return response
}

const server = http.createServer(request_listner)

server.listen(8000)