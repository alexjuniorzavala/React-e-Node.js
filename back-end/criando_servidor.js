const http = require('http');

http.createServer((request, resposta)=>{
    resposta.writeHead(200, {
        'content-type':'text/plain'
    })
    resposta.write('CFB Curso\nCurso de node js')
    resposta.end()
}).listen(1337)