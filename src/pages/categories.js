import AllCategories from "@/components/AllCategories";
import Layout from "@/components/Layout";
import SearchHero from "@/components/SearchHero";
import SearchPosts from "@/components/SearchPosts";

export default function Search() {
  return (
    <Layout title="Hasil Penelusuran">
      <SearchHero />
      <AllCategories />
    </Layout>
  );
}
