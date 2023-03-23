import '@/styles/globals.css'
import { useEffect } from 'react'
import { Workbox } from 'workbox-window'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    if (!('serviceWorker' in navigator) || process.env.NODE_ENV !== 'production') {
      console.warn('Progressive Web App support is disabled')
      return
    }

    const wb = new Workbox('sw.js', { scope: '/' })
    wb.register()
  }, [])

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
