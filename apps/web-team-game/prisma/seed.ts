import { PrismaClient, Prisma } from '../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
})

const QNAsData: Prisma.QNACreateInput[] = [
  {
    question: '54 + 65 = ?',
    answer: '119',
    answerVariants: ['118', '120', '121', '119'],
  },
  {
    question: '12 * 13 = ?',
    answer: '156',
    answerVariants: ['154', '155', '156', '157'],
  },
  {
    question: '20 - 8 = ?',
    answer: '12',
    answerVariants: ['10', '11', '12', '13'],
  },
  {
    question: '100 / 4 = ?',
    answer: '25',
    answerVariants: ['20', '22', '25', '30'],
  },
  {
    question: '15 + 27 = ?',
    answer: '42',
    answerVariants: ['40', '41', '42', '43'],
  },
]

export async function main() {
  for (const data of QNAsData) {
    await prisma.qNA.create({ data })
  }
}

main()
