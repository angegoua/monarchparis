/** @type {import('next').NextConfig} */
const nextConfig = {
  // Désactiver la génération statique pour les routes qui accèdent à la base de données
  experimental: {
    // Permettre aux pages de contrôler leur propre comportement de rendu
    // via les exports `dynamic`, `fetchCache`, etc.
    serverComponentsExternalPackages: ['@prisma/client', 'prisma'],
  },
  // Ignorer les erreurs de type ESLint pendant le build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ignorer les erreurs de type TypeScript pendant le build
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
