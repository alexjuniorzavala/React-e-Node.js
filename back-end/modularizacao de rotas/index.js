const express = require('express')
const rotas = require('./rotas/rotas')
const path = require('path');
const cors = require('cors')
const porta = process.env.Port || 3001

const app = express()

app.use(cors());
// Serve os arquivos estáticos do React
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint simples para API

// Permitir CORS para todas as origens

// Ou você pode permitir CORS para uma origem específica
// app.use(cors({ origin: 'http://seusite.com' }));

app.use('/',rotas)

app.get('*', (req,res)=>{
    res.send('CFB Curso')
})

app.listen(porta, ()=>{console.log('Rodando')})