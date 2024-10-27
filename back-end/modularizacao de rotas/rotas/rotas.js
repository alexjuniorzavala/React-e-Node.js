const express = require('express')
const rota = express.Router()

let cursosInfo=[
    {'curso':'node js', 'info':'Curso de Node'},
    {'curso':'react', 'info':'Curso de React'},
    {'curso':'arduino', 'info':'Curso de Arduino'},
    {'curso':'java', 'info':'Curso de Java'},
]

rota.get('/',(req,res)=>{
    res.json({ola:'Ola Seja bem vindo'})
})
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the back-end!' });
  });
rota.post('/:cursoid',(req,res)=>{
    const curso=req.params.cursoid
    const cursosinf=cursosInfo.find(i=>i.curso == curso)
    if(!cursosinf){
        res.status(404).json(
            {erro:'Curso nao encontrado',cursopesquisado:curso}
        )
    }else{
        res.status(200).json(cursosinf)
    }

})

module.exports = rota