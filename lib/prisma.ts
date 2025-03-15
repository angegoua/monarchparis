import { PrismaClient } from '@prisma/client'

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient }

// Vérifier si nous sommes en phase de build sur Vercel
const isBuildPhase =
  process.env.VERCEL_ENV === 'production' && process.env.NEXT_PHASE === 'build'

// Créer un client Prisma avec des options de connexion adaptées
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query', 'error', 'warn'],
    errorFormat: 'pretty',
  })

// Garder une seule instance de Prisma Client en développement
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
