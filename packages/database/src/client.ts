import { PrismaClient } from '../generated/prisma'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['warn', 'error'],
    datasources: {
      db: {
        url: process.env.DATABASE_URL || 'file:../../../prisma/dev.db',
      },
    },
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// async function main() {
//   // ... you will write your Prisma Client queries here
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
