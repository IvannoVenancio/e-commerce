exports.home = async(req, res) => {    
    try {
        res.render("index")  
    }catch(err){
        console.log(err)
    }      
}
exports.cadastro = async(req, res) => {    
    try {
        res.render("cadastro",{layout:"ccadastro"})  
    }catch(err){
        console.log(err)
    }      
}
exports.Listproduto = async(req, res) => {    
    try {
        res.render("Listproduto")  
    }catch(err){
        console.log(err)
    }      
}
exports.carrinho = async(req, res) => {    
    try {
        res.render("carrinho",{layout:"cdmanin"})  
    }catch(err){
        console.log(err)
    }      
}
exports.login = async(req, res) => {    
    try {
        res.render("login",{layout:"cdmanin.handlebars"})  
    }catch(err){
        console.log(err)
    }      
}
exports.Pedidos = async(req, res) => {    
    try {
        res.render("Pedidos",{layout:"cdmanin.handlebars"})  
    }catch(err){
        console.log(err)
    }      
}
