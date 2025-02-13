exports.Pedidos = async(req, res) => {    
    try {
        res.render("Pedidos",{layout:"ppedidos", Pedidos})  
    }catch(err){
        console.log(err)
    }   
}