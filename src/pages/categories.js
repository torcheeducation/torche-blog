import AllCategories from "@/components/categories-page/AllCategories";
import Layout from "@/components/Layout";
import SearchHero from "@/components/search-page/SearchHero";

export default function Search() {
  return (
    <Layout title="Kategori Postingan">
      <SearchHero />
      <AllCategories />
    </Layout>
  );
}
