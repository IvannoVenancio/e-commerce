exports.home = async(req, res) => {    
    try {
        res.render("index")  
    }catch(err){
        console.log(err)
    }      
}
exports.cadastro = async(req, res) => {    
    try {
        res.render("cadastro")  
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
        res.render("carrinho",{layout:"cdmanin.handlebars"})  
    }catch(err){
        console.log(err)
    }      
}
exports.login = async(req, res) => {    
    try {
        res.render("login")  
    }catch(err){
        console.log(err)
    }      
}
exports.Pedidos = async(req, res) => {    
    try {
        res.render("Pedidos")  
    }catch(err){
        console.log(err)
    }      
}
exports.Pedidos = async(req, res) => {    
    try {
        res.render("Pedidos")  
    }catch(err){
        console.log(err)
    } 
     
}
exports.Pagamento = async(req, res) => {    
    try {
        res.render("Pagamento")  
    }catch(err){
        console.log(err)
    } 
}