import Education from "@/components/homepage/Education";
import Hero from "@/components/homepage/Hero";
import LifeStyle from "@/components/homepage/LifeStyle";
import News from "@/components/homepage/News";
import Welcome from "@/components/homepage/Welcome";
import Layout from "@/components/Layout";
import TrendingPosts from "@/components/homepage/TrendingPosts";
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
