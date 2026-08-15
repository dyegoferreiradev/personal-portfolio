// O site é publicado em https://www.cin.ufpe.br/~dfs10/ (subpasta), então
// todo asset (_next/, imagens, etc.) precisa desse prefixo para não dar 404
// nesse endereço. O prefixo só é aplicado no build de produção
// ("npm run build") — o "npm run dev" continua funcionando normal na raiz
// do localhost, sem precisar de nenhuma configuração extra.
const basePath = process.env.NODE_ENV === 'production' ? '/~dfs10' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera arquivos HTML/CSS/JS estáticos (pasta "out") para hospedagem
  // em servidores Apache/IIS que não rodam Node.js — como o webserver da faculdade.
  output: 'export',
  // Cria pasta/index.html para cada rota em vez de pagina.html,
  // o que funciona melhor em servidores Apache tradicionais.
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
  // Observação: headers() de segurança não funcionam em export estático.
  // Configure-os via arquivo .htaccess no servidor Apache (veja instruções no chat).
}

export default nextConfig
