import Layout from "@/components/Layout";
import AllCategories from "@/components/categories-page/AllCategories";
import SearchHero from "@/components/search-page/SearchHero";
import SearchPosts from "@/components/search-page/SearchPosts";
import ScrollToTopButton from "@/utils/ScrollToTopButton";

export default function Search({ data }) {
  return (
    <Layout title="Hasil Penelusuran">
      <SearchHero />
      <SearchPosts data={data} />
      <ScrollToTopButton />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
