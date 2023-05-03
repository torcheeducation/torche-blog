import AllCategories from "@/components/categories-page/AllCategories";
import Layout from "@/components/Layout";
import SearchHero from "@/components/search-page/SearchHero";

export default function categories({ data }) {
  return (
    <Layout title="Kategori Postingan">
      <SearchHero />
      <AllCategories data={data} />
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
