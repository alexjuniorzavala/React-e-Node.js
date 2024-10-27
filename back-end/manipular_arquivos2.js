let fs = require('fs')
let http = require('http')
const porta = process.env.PORT

const server=http.createServer((req, res)=>{
    fs.appendFile('site.html', '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta ="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><h1> Curso CFB cursos</h1></body></html>', (err)=>{
        if(err) throw err
        console.log('Arquivo Criado')
        res.end()
    })})
 /*   fs.appendFile('teste.txt', 'Curo de node js', (err)=>{
        if(err) throw err
        console.log('Arquivo Criado')
        res.end()
    })})*/

server.listen(porta || 3000, ()=>{console.log("Servidor Rodando")})