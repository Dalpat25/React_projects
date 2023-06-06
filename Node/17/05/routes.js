const fs = require("fs")

const requestHandler = (req,res) =>{
    const url = req.url
    const body = []
    req.on('data',(chunk)=>{
        body.push(chunk)
    })
    req.on('end',()=>{
        if(url === '/message'){
            const parseBody = Buffer.concat(body).toString()
            const message = parseBody.split('=')[1]
            fs.writeFileSync("message.txt",message)
            res.write("File has been generated")
            return res.end()
        }
    }) 
    
    res.setHeader("contect-type",'text/html')
    res.write("<html>")
        res.write("<head><title>Node training</title></head>")
        res.write("<body>")
            res.write("<form action = '/message' method='POST'>")
                res.write("<input type = 'text' placeholder='enter something' name = 'message'/>")
                res.write("<button type = 'submit'>Send</button>")
            res.write("</form>")
        res.write("</body>")
    res.write('</html>')
    res.end()
    return res
    // return res.end()
}

module.exports = requestHandler