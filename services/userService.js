const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const User = prisma.user

const createUser = async(data) =>{
    // const hashedPassword =await bcrypt.hash(data.password,10); , password:hashedPassword
    const result = await User.create({data: {...data}})
    return result
}

const findAllUsers = async() =>{
    const result = await User.findMany()    
    return result
}

const findUserByEmail = async(email) =>{
    const user = await prisma.user.findUnique({
        where:{email},
    })    
    return user;
}

module.exports = { createUser, findAllUsers, findUserByEmail }
module.exports = { createUser, findAllUsers, findUserByEmail}

