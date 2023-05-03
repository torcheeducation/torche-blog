import Link from "next/link";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function News({ posts }) {
  const dataPost = posts.filter((p) => p.category === "berita")

  return (
    <div className=" mt-11 px-4 md:px-14">
      <div className="section-title relative">
        <h2 className="  left-0 top-0 inline-block text-2xl uppercase text-slate-500">
          BERITA
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
      {dataPost.length < 1 && (
        <div className="mt-20 text-center text-lg text-slate-600">Belum Ada Postingan</div>
      )}
      <div className=" mt-8 grid md:grid-cols-12  md:gap-7 lg:gap-11">
        {dataPost.slice(0, 1).map(
          ({ _id, date, title, description, imageUrl }) => {
            return (
              <aside key={_id} className="group col-span-4 mb-7 w-full md:col-span-5 md:mb-0 lg:col-span-4">
                <Link href={`/posts/${_id}`} className="  bg-slate-50">
                  <figure>
                    <Image
                      src={imageUrl}
                      alt={title}
                      width={240}
                      height={118}
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                      }}
                      className="w-full h-[21rem] rounded-t-lg"
                    />
                  </figure>
                  <div className="bg-slate-100 p-1 rounded-b-lg">
                    <div className="justify-center">
                      <p className="pt-4 pl-3 text-sm text-[#FFAE5F] capitalize">{date}</p>
                      <h2 className="my-4 px-3 font-bold capitalize line-clamp-2 group-hover:text-blue-600 lg:text-lg">
                        {title}
                      </h2>
                    </div>
                    <div className="px-3 pb-3 md:mb-3 lg:mb-0">
                      <div className="text-sm leading-6 text-slate-600 line-clamp-3 md:line-clamp-3" dangerouslySetInnerHTML={{ __html: description }}></div>
                    </div>
                  </div>
                </Link>
              </aside>
            );
          }
        )}

        <div className="grid col-span-4 gap-7 md:col-span-7 md:gap-7 lg:col-span-8 lg:gap-11 lg:grid-rows-3">
          {dataPost.slice(1, 4).map(({ _id, title, description }) => {
            return (
              <article key={_id} className="rounded-t-lg border-t-[16px] border-[#FFAE5F] md:rounded-l-lg md:border-t-[0px] md:border-l-[50px] md:max-h-32 lg:max-h-36">
                <div className="group bg-slate-100 px-4 py-4 rounded-b-lg md:rounded-b-none md:rounded-r-lg">
                  <Link href={`/posts/${_id}`}>
                    <div className="font-bold capitalize line-clamp-1 group-hover:text-blue-600 lg:text-lg">
                      <h2>{title}</h2>
                    </div>
                    <div className="pt-3 text-sm leading-6 text-slate-600 line-clamp-3 sm:leading-5 lg:leading-6 lg:line-clamp-3" dangerouslySetInnerHTML={{ __html: description }}></div>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="mt-10 h-4 w-full bg-slate-200"></div>
    </div>
  );
}
