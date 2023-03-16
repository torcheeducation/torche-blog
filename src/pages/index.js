import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import LifeStyle from "@/components/LifeStyle";
import NewPosts from "@/components/NewPosts";
import News from "@/components/News";
import TrendingPosts from "@/components/TrendingPosts";
import Welcome from "@/components/Welcome";
import Footer from "@/components/Footer";

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
