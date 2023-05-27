import Head from "next/head";
import Navbar from "./Navbar";
import { Cairo } from "next/font/google";
import Footer from "./Footer";

const cairo = Cairo({ subsets: ["latin"] });

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <meta name="description" content="Torche Education adalah perusahaan startup teknologi pendidikan yang berbasis di Indonesia, dengan fokus pada teknik kimia, teknik bioproses, dan mata pelajaran teknik proses lainnya." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0B122A" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <title>{title + " - Torche Blog"}</title>
      </Head>
      <main className={cairo.className}>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
