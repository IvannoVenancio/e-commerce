const { createUser, findAllUsers } = require("../services/userService")

exports.view = async(req, res) =>{
    try {
        const users = await findAllUsers()
        res.render('home', {users})        
    } catch (error) {
        
    }
}
exports.create = async(req, res) =>{
    try {
        const data = req.body
        console.log("data::::", data)
        await createUser(data)
        res.redirect('/cadastro')
        
    } catch (error) {
        console.log("error:::", error)
    }
}