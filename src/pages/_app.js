import '@/styles/globals.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const registerSW = async () => {
      if (!('serviceWorker' in navigator)) {
        console.log('Browser tidak mendukung Service Worker')
        return
      }
  
      try {
        await navigator.serviceWorker.register('/sw.js')
        console.log('Service Worker registered')
      } catch (error) {
        console.log('Failed to register Service Worker', error)
      }
    }
    
    window.addEventListener('load', () => {
      registerSW()
    })
  }, [])

  return <Component {...pageProps} />
}
