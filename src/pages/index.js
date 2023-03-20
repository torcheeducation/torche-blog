import Education from "@/components/home-page/Education";
import Hero from "@/components/home-page/Hero";
import LifeStyle from "@/components/home-page/LifeStyle";
import News from "@/components/home-page/News";
import Welcome from "@/components/home-page/Welcome";
import Layout from "@/components/Layout";
import TrendingPosts from "@/components/home-page/TrendingPosts";
import NewPosts from "@/components/posts-page/NewPosts";

export default function Home() {
  return (
    <Layout title="Beranda">
      <Hero />
      <TrendingPosts />
      <div className="w-full px-4 py-6 xl:px-14">
        <div className="mb-10 h-4 w-full bg-slate-200"></div>
        <NewPosts>
          <Welcome />
        </NewPosts>
      </div>
      <Education />
      <News />
      <LifeStyle />
    </Layout>
  );
}
