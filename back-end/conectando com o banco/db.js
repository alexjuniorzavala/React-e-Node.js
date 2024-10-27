const conectar = async ()=>{
    if(global.conexao && global.conexao.state != 'disconected')
        return global.conexao
    const mysql=require('mysql2/promise')
    const con=mysql.createConnection("mysql://root:@localhost:3306/client_node")
    console.log("conectou ao banco")
    global.conexao = con
    console.log(global.conexao.state)

    return con
}

const todosClientes= async()=>{
    const con = await conectar()
    const [linhas] = await con.query("SELECT * FROM dados")
    return await linhas
}

const inserirCliente = async(clientes)=>{
    const con = await conectar()
    const sql = "INSERT INTO dados (nome,idade) VALUES (?,?);"
    const valores = [clientes.nom, clientes.ida]
    await con.query(sql,valores)
}

const atualizarCliente = async(id,clientes)=>{
    const con = await conectar()
    const sql = "UPDATE dados SET nome=?, idade=? WHERE id=?"
    const valores = [clientes.nom, clientes.ida, id]
    await con.query(sql,valores)
}

const deletarCliente = async(id)=>{
    const con = await conectar()
    const sql = "DELETE FROM dados WHERE id=?"
    const valores = id
    await con.query(sql,valores)
}

module.exports = {todosClientes,inserirCliente,atualizarCliente,deletarCliente}