import { PrismaClient } from '@prisma/client';

/**
 * @type {PrismaClient}
 */
let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default async function search (req, res) {
    if (req.method === 'GET') {
        const customer = await prisma.Customer.findMany();
        return res.json(customer);
    }
}