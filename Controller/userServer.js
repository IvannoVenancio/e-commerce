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
        await createUser(data)
        res.redirect('/')
        
    } catch (error) {
        console.log("error:::", error)
    }
}