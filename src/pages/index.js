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
      <div className="w-full px-4 py-6 xl:px-14">
        <div className="w-full mb-10 h-4 bg-slate-200"></div>
        <NewPosts>
          <Welcome />
        </NewPosts>
      </div>
    </Layout>
  )
}
