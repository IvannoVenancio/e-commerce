const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const User = prisma.user

const createUser = async(data) =>{
    const hashedPassword= await bcrypt.hasd(data.password,10);
    const result = await User.create({data: {...data, password:hashedPassword}})
    return result
}

const findAllUsers = async() =>{
    const result = await User.findMany()    
    return result
}



module.exports = { createUser, findAllUsers }
module.exports = { createUser, findAllUsers }

