const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const User = prisma.user

const createUser = async(data) =>{
    const result = await User.create({data: {...data}})
    return result
}

const findAllUsers = async() =>{
    const result = await User.findMany()    
    return result
}

<<<<<<< HEAD
<<<<<<< HEAD
module.exports = { createUser, findAllUsers }
=======
module.exports = { createUser, findAllUsers }
>>>>>>> 62b21158499c6e118495eb26a31555d407b1eb48
=======

module.exports = { createUser, findAllUsers }
module.exports = { createUser, findAllUsers }

>>>>>>> c15a3b850c0c274575f4c2de77cafec49f78ee47
