import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import TrendingPost from '@/components/TrendingPost'

export default function Home() {
  return (
    <Layout title="Beranda">
      <Hero />
      <TrendingPost />
    </Layout>
  )
}
