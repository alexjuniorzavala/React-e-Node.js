const http = require('http')
const host = '127.0.0.1'
const porta = 3000

const servidor =  http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type':'text/html'
    })
    if(req.url == '/'){
        res.write('<h1>Seja bem vindo</h1>')
    }else if(req.url == '/canal'){
        res.write('<h1>CFB Cursos</h1>')
    }if(req.url == '/curso'){
        res.write('<h1>Curso de Node Js</h1>')
    }
    res.end()
})
servidor.listen(porta,()=>{console.log('Servidor rodando')})