(async ()=>{
    const db = require('./db')
    /*
    const nome = "Gevirlsan"
    const idade = 39
    await db.inserirCliente({nom:nome, ida:idade})
    */
  // const id = 3
   //const novoNome="Brastorgilsan"
   //const novaIdade=20
   //await db.atualizarCliente(id,{nom:novoNome, ida:novaIdade})
   //console.log("Client atualizado")
   
   id=2
   await db.deletarCliente(id)
   console.log("Cliente deletadoo")

   console.log('Obter todos os clientes')
   const clientes = await db.todosClientes()
   console.log(clientes)
   

})()        