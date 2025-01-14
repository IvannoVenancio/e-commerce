exports.home = async(req, res) => {    
    try {
        res.render("home")  
    }catch(err){
        console.log(err)
    }      
}
const { findAllClientes, createCliente } = require("../services/ClienteService")


//Função para renderizar a página principal
exports.view = async(req, res) =>{
    try {
        const clientes = await findAllClientes()
        res.render('home', {clientes})        
    } catch (error) {
        
    }
}
//Função para criar um cliente
exports.create = async(req, res) =>{
    try {
        const data = req.body // Pega os dados do formulário
        const photo = req.file.filename // Pega o nome do ficheiro
        await createCliente({...data, idade:Number(data.idade), photo}) 
        res.redirect('/')        
    } catch (error) {
        console.log(error)
    }
}