const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const Cliente = prisma.cliente // Variavél que armazena o nome do schema (Tabela)

const createCliente = async(data) =>{
    const result = await Cliente.create({data: {...data}}) // Inserção de dados
    return result
}

const findAllClientes = async() =>{
    const result = await Cliente.findMany() // Retorna todos os registo da tabela
    return result
}

module.exports = { createCliente, findAllClientes }