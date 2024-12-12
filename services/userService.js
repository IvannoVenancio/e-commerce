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

<<<<<<< .merge_file_Z69oTQ
module.exports = { createUser, findAllUsers }
=======
module.exports = { createUser, findAllUsers }
>>>>>>> .merge_file_kwaJT6
