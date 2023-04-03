import useWindowDimensions from "@/lib/useWindowDimensions";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AllPosts({ posts }) {
  const [numPost, setNumPost] = useState(9);

  const { width } = useWindowDimensions()
  
  useEffect(() => {
    if (width >= 1280) {
      setNumPost(12)
    }
  }, [width])

  const HandleLoadMore = (e) => {
    e.preventDefault()

    if (width >= 1280) {
      setNumPost((prevNumPost) => prevNumPost + 4)
    } else {
      setNumPost((prevNumPost) => prevNumPost + 3)
    }
  }

  return (
    <div className="my-10">
      <h2 className="text-2xl uppercase text-slate-500">Semua Postingan</h2>
      {posts.length < 1 && ( <p className="mt-10 font-semibold text-lg">Belum Ada Postingan</p> )}
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3 xl:grid-cols-4">
        {posts.slice(0, numPost).map(({ _id, title, description, imageUrl, date }) => (
          <Link
            key={_id}
            href={`/posts/${_id}`}
            className="group flex flex-col gap-4"
          >
            <Image
              src={imageUrl}
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
                <div className="text-slate-600 line-clamp-4" dangerouslySetInnerHTML={{ __html: description }}></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {posts.slice(0, numPost).length !== posts.length && (
        <div className="mt-20 text-center">
          <button
            className="rounded-3xl bg-searchIcon py-3 px-6 font-bold text-white shadow-lg shadow-indigo-500/40"
            onClick={HandleLoadMore}
          >
            Muat Lebih Banyak
          </button>
        </div>
      )}
    </div>
  );
}
