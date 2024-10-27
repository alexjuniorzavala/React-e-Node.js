const { debug } = require('console')
const http = require('http')
const url = require('url')
const host = '127.0.0.1'
const porta = 3000

const servidor =  http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type':'text/html'
    })
    const p=url.parse(req.url, true).query
    res.write('</br>'+p.nome)
    res.write('</br>'+p.curso)
    res.write(debug)

    res.end()
})
servidor.listen(porta,()=>{console.log('Servidor rodando')})