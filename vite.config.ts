
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {VitePWA} from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),VitePWA({

    workbox:{
      sourcemap:true,
      clientsClaim:true,
      skipWaiting:true
    },
    includeAssets:['favicon.ico','robots.txt'],
    registerType:'autoUpdate',
    manifest:{
      name:'QuranApp',
      short_name:'Quran',
      description:'Final Projects For Faravin',
      theme_color:'#7ad7e7',
      icons:[
        {
          src:'pwa-192x192.png',
          sizes:'192x192',
          type:'image/png'
        }, {
          src:'pwa-512x512.png',
          sizes:'512x512',
          type:'image/png'
        }, {
          src:'pwa-310x310.png',
          sizes:'512x512',
          type:'image/png',
          purpose:'any maskable'
        }
      ]
    }

  })],
  server:{
    host:true,
    fs:{
      allow:['..']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
  
})