import AllCategories from "@/components/categories-page/AllCategories";
import Layout from "@/components/Layout";
import SearchHero from "@/components/search-page/SearchHero";
import ScrollToTopButton from "@/utils/ScrollToTopButton";

export default function categories({ data }) {
  return (
    <Layout title="Kategori Postingan">
      <SearchHero />
      <AllCategories data={data} />
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
