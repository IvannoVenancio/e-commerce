const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const User = prisma.user;

const createUser = async (data) => {
    const result = await User.create({ data: { ...data } });
    return result;
}

const findAllUsers = async () => {
    const result = await User.findMany();
    return result;
}

async function findbyemail(email) {
    const result = await User.findUnique({
        where: { email }
    });
    return result;
}

// Apenas exporte uma vez
module.exports = { createUser, findAllUsers, findbyemail };
