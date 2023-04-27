import Layout from "@/components/Layout"
import SearchHero from "@/components/search-page/SearchHero"
import SearchPosts from "@/components/search-page/SearchPosts"

export default function Search({ data }) {
  return (
    <Layout title="Hasil Penelusuran">
      <SearchHero />
      <SearchPosts data={data} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`)
  const data = await res.json()

  return {
    props: {
      data,
    }
  }
}
