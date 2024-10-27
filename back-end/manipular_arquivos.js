let fs = require('fs')
let http = require('http')
const porta = process.env.PORT

const server=http.createServer((req, res)=>{
    fs.readFile('site.html', (err,arquivo)=>{
        res.writeHead(200, {'content-type':'text/html'})
        res.write(arquivo)
        return res.end()
    }

    )

})

server.listen(porta || 3000, ()=>{console.log("Servidor Rodando")})