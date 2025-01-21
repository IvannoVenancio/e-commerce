exports.Listproduto = async(req, res) => {    
    try {
        const produtos = [{"name":"Daria"}] //await findAllProdutos()
        res.render("Listproduto",{layout:"mainlistprod", produtos})  
    }catch(err){
        console.log(err)
    }      
}