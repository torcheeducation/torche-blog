import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import NewPosts from '@/components/NewPosts'
import TrendingPosts from '@/components/TrendingPosts'
import Welcome from '@/components/Welcome'

export default function Home() {
  return (
    <Layout title="Beranda">
      <Hero />
      <TrendingPosts />
      <NewPosts>
        <Welcome />
      </NewPosts>
    </Layout>
  )
}
