import { useState } from "react";
import AdminAllPost from "./PopUp";
import Image from "next/image";

export default function PostAdmin({ posts, owner }) {
  const [isOpen, setIsOpen] = useState(false);
  const [numPost, setNumPost] = useState(8);
  const [targetPost, setTargetPost] = useState(null)

  const formPopUp = (PopUp) => {
    setIsOpen(PopUp);
  }

  const handlePopUp = (post) => {
    setTargetPost(post)
    setIsOpen(true)
  }

  return (
    <div className="mt-10">
      <h2 className="text-2xl uppercase text-slate-500">Semua Postingan Oleh {owner.name}</h2>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.filter((p) => p.ownerId === owner.user._id).slice(-numPost).reverse().map((post) => (
          <div key={post._id}
            onClick={() => handlePopUp(post)}
            className="group flex flex-col justify-start gap-4 cursor-pointer"
          >
            <Image
              src={post.imageUrl}
              alt={post.title}
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
                <p className="mb-3 capitalize text-blueDate">{post.date}</p>
                <h2 className="text-lg font-bold capitalize line-clamp-3 group-hover:text-blue-600">
                  {post.title}
                </h2>
              </div>
              <div className="mt-2">
                <div className="text-slate-600 line-clamp-4" dangerouslySetInnerHTML={{ __html: post.description }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {posts.filter((p) => p.ownerId === owner.user._id).slice(-numPost).length !== posts.filter((p) => p.ownerId === owner.user._id).length && (
        <div className="mt-20 text-center">
          <button
            className="rounded-3xl bg-searchIcon py-3 px-6 font-bold text-white shadow-lg shadow-indigo-500/40"
            onClick={() => setNumPost((prevNumPost) => prevNumPost + 3)}
          >
            Muat Lebih Banyak
          </button>
        </div>
      )}
      <AdminAllPost target={targetPost} PopUp={isOpen} setPopUp={formPopUp} />
    </div>
  );
}
