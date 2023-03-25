import { Cairo } from "next/font/google";
import Head from "next/head";
import Navbar from "./Navbar";

const cairo = Cairo({ subsets: ["latin"] })

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title + " - Torche Blog Admin"}</title>
      </Head>
      <main className={cairo.className}>
        <Navbar title={title} />
        {children}
      </main>
    </>
  )
}
