import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AllPosts() {
  const [numPost, setNumPost] = useState(9);

  const posts = [
    {
      id: 1,
      date: "10 November 2022",
      title: "10 bahan kimia paling berbahaya dan paling aman",
      text: "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik.",
      category: "edukasi",
      image: "/img/postingan3.png",
    },
    {
      id: 2,
      date: "10 November 2022",
      title: "10 bahan kimia paling berbahaya dan paling aman",
      text: "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik.",
      category: "edukasi",
      image: "/img/postingan3.png",
    },
    {
      id: 3,
      date: "10 November 2022",
      title: "10 bahan kimia paling berbahaya dan paling aman",
      text: "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik.",
      category: "edukasi",
      image: "/img/postingan3.png",
    },
    {
      id: 4,
      date: "10 November 2022",
      title: "10 bahan kimia paling berbahaya dan paling aman",
      text: "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik.",
      category: "edukasi",
      image: "/img/postingan3.png",
    },
    {
      id: 5,
      date: "10 November 2022",
      title: "10 bahan kimia paling berbahaya dan paling aman",
      text: "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik.",
      category: "edukasi",
      image: "/img/postingan3.png",
    },
    {
      id: 6,
      date: "10 November 2022",
      title: "10 bahan kimia paling berbahaya dan paling aman",
      text: "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik.",
      category: "edukasi",
      image: "/img/postingan3.png",
    },
    {
      id: 7,
      date: "10 November 2022",
      title: "10 bahan kimia paling berbahaya dan paling aman",
      text: "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik.",
      category: "edukasi",
      image: "/img/postingan3.png",
    },
    {
      id: 8,
      date: "10 November 2022",
      title: "10 bahan kimia paling berbahaya dan paling aman",
      text: "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik.",
      category: "edukasi",
      image: "/img/postingan3.png",
    },
    {
      id: 9,
      date: "10 November 2022",
      title: "10 bahan kimia paling berbahaya dan paling aman",
      text: "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik.",
      category: "edukasi",
      image: "/img/postingan3.png",
    },
    {
      id: 10,
      date: "10 November 2022",
      title: "10 bahan kimia paling berbahaya dan paling aman",
      text: "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik.",
      category: "edukasi",
      image: "/img/postingan3.png",
    },
  ];

  return (
    <div className="my-10">
      <h2 className="text-2xl uppercase text-slate-500">Semua Postingan</h2>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.slice(0, numPost).map(({ id, date, title, text, image }) => (
          <Link
            key={id}
            href={`/posts/${id}`}
            className="group grid grid-cols-1 gap-4"
          >
            <Image
              src={image}
              alt={title}
              width={250}
              height={118}
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
              className="h-48 w-full rounded-md"
            />
            <div>
              <div className="flex flex-col justify-center">
                <p className="mb-3 capitalize text-blueDate">{date}</p>
                <h2 className="text-lg font-bold capitalize line-clamp-3 group-hover:text-blue-600">
                  {title}
                </h2>
              </div>
              <div className="mt-2">
                <p className="text-slate-600 line-clamp-4">{text}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {posts.slice(0, numPost).length !== posts.length && (
        <div className="mt-20 text-center">
          <button
            className="rounded-3xl bg-searchIcon py-3 px-6 font-bold text-white shadow-lg shadow-indigo-500/40"
            onClick={() => setNumPost((prevNumPost) => prevNumPost + 3)}
          >
            Muat Lebih Banyak
          </button>
        </div>
      )}
    </div>
  );
}
