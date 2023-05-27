import Education from "@/components/home-page/Education";
import Hero from "@/components/home-page/Hero";
import LifeStyle from "@/components/home-page/LifeStyle";
import News from "@/components/home-page/News";
import Welcome from "@/components/home-page/Welcome";
import Layout from "@/components/Layout";
import TrendingPosts from "@/components/home-page/TrendingPosts";
import NewPosts from "@/components/posts-page/NewPosts";
import Head from "next/head";

export default function Home({ posts }) {
  const month = [
    "januari",
    "februari",
    "maret",
    "april",
    "mei",
    "juni",
    "juli",
    "agustus",
    "september",
    "oktober",
    "november",
    "desember",
  ];

  const processData = () => {
    const result = [];

    posts.posts.forEach((d) => {
      const date = `${new Date(d.createdAt).getDate()} ${
        month[new Date(d.createdAt).getMonth()]
      } ${new Date(d.createdAt).getFullYear()}`;

      result.push({
        ...d,
        date,
      });
    });

    return result;
  };

  return (
    <>
      <Head>
        <meta property="og:image" content="/img/hero.webp" />
      </Head>
      <Layout title="Beranda">
        <Hero />
        <TrendingPosts posts={processData()} />
        <div className="w-full px-4 py-6 xl:px-14">
          <div className="mb-10 h-4 w-full bg-slate-200"></div>
          <NewPosts posts={processData()}>
            <Welcome />
          </NewPosts>
        </div>
        <Education posts={processData()} />
        <News posts={processData()} />
        <LifeStyle posts={processData()} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`);
    const posts = await res.json();

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
