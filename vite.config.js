import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://kevin13600.github.io',
      urls: [
        '/Uyttenbroeck_Kevin_12_Creez_et_publiez_votre_portfolio_de_developpeur_16102024/',
        '/Uyttenbroeck_Kevin_12_Creez_et_publiez_votre_portfolio_de_developpeur_16102024/#about',
        '/Uyttenbroeck_Kevin_12_Creez_et_publiez_votre_portfolio_de_developpeur_16102024/#skills',
        '/Uyttenbroeck_Kevin_12_Creez_et_publiez_votre_portfolio_de_developpeur_16102024/#works',
        '/Uyttenbroeck_Kevin_12_Creez_et_publiez_votre_portfolio_de_developpeur_16102024/#contact'
      ]
    })
  ],
  base: '/Uyttenbroeck_Kevin_12_Creez_et_publiez_votre_portfolio_de_developpeur_16102024/',
})