import Layout from "@/components/Layout"
import SearchHero from "@/components/search-page/SearchHero"
import SearchPosts from "@/components/search-page/SearchPosts"

export default function Search() {
  return (
    <Layout title="Hasil Penelusuran">
      <SearchHero />
      <SearchPosts />
    </Layout>
  )
}