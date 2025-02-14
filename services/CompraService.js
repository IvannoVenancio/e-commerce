const {PrismaClient} = require('@prisma/client')


const prisma = new PrismaClient()
const pagamento = prisma.payment // Variavél que armazena o nome do schema (Tabela)

const registrarCompra = async(data) =>{
    const result = await pagamento.create({data: {...data}}) // Inserção de dados
    return result
}


module.exports = { registrarCompra }