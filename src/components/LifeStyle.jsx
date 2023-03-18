import Link from "next/link";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

export default function LifeStyle() {
  const [numLifeStyleLeft] = useState(1);
  const [numLifeStylee] = useState(3);

  const LifeStyle = [
    {
      id: 1,
      date: "10 November 2022",
      title:
        "10 Bahan Kimia Paling Berbahaya dan Paling Aman di Tempat Kerja Lengkap Dengan Penjelasannya",
      description:
        "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ",
      image: "/image/postingan4.png",
    },
    {
      id: 2,
      date: "10 November 2022",
      title:
        "10 Bahan Kimia Paling Berbahaya dan Paling Aman di Tempat Kerja Lengkap Dengan Penjelasannya",
      description:
        "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ",
      image: "/image/postingan4.png",
    },
    {
      id: 3,
      date: "10 November 2022",
      title:
        "10 Bahan Kimia Paling Berbahaya dan Paling Aman di Tempat Kerja Lengkap Dengan Penjelasannya",
      description:
        "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ",
      image: "/image/postingan4.png",
    },
  ];

  return (
    <div className=" mt-11 px-4 md:px-14">
      <div className="section-title relative">
        <h2 className="  left-0 top-0 inline-block text-2xl uppercase text-slate-500">
          GAYA HIDUP
        </h2>
        <Link
          key={URL}
          href={`https://torche.app/`}
          className="absolute top-0 right-6 inline-block text-lg font-bold text-blue-600"
        >
          <h4>Lihat Lainnya</h4>
        </Link>
        <AiOutlineArrowRight className="absolute top-1.5 right-1 inline-block h-4 w-4 font-bold text-blue-600" />
      </div>
      <div className=" mt-8 grid md:grid-cols-12  md:gap-7 lg:gap-11">
        {LifeStyle.slice(0, numLifeStyleLeft).map(
          ({ id, date, title, description, image }) => {
            return (
              <aside className="group col-span-4 mb-7 w-full md:col-span-5 md:mb-0 lg:col-span-4">
                <Link key={id} href={`/posts/${id}`} className="  bg-slate-50">
                  <figure>
                    <Image
                      src={image}
                      alt={title}
                      width={240}
                      height={118}
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                      className="w-full rounded-t-lg"
                    />
                  </figure>
                  <div className="bg-slate-100 p-1">
                    <div className="justify-center">
                      <p className="pt-4 pl-3 text-sm text-[#51C1CB]">{date}</p>
                      <h2 className="my-4 px-3 font-bold capitalize line-clamp-2 group-hover:text-blue-600 lg:text-lg">
                        {title}
                      </h2>
                    </div>
                    <div className="px-3 pb-3 md:mb-3 lg:mb-0">
                      <p className="text-sm leading-6 text-slate-600 line-clamp-3 md:line-clamp-3">
                        {description}
                      </p>
                    </div>
                  </div>
                </Link>
              </aside>
            );
          }
        )}

        <div className="grid gap-7 md:col-span-7 md:gap-7 lg:col-span-8 lg:gap-11">
          {LifeStyle.slice(0, numLifeStylee).map(
            ({ id, title, description }) => {
              return (
                <article className="rounded-t-lg border-t-[16px] border-[#51C1CB] md:rounded-l-lg md:border-t-[0px] md:border-l-[50px]">
                  <div className="group bg-slate-100 px-4 py-4">
                    <Link key={id} href={`/posts/${id}`}>
                      <div className="font-bold capitalize line-clamp-1 group-hover:text-blue-600 lg:text-lg">
                        <h2>{title}</h2>
                      </div>
                      <div className="pt-3 text-sm leading-6 text-slate-600 line-clamp-3 sm:leading-5 lg:leading-6 lg:line-clamp-3">
                        <p>{description}</p>
                      </div>
                    </Link>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
