import Image from "next/image";
import Link from "next/link";

export default function NewPosts({ children, posts }) {
  return (
    <div>
      <h2 className="text-2xl text-slate-500 uppercase">Postingan Terbaru</h2>
      <div className="mt-6 h-full flex flex-col gap-10 lg:flex-row lg:gap-6">
        <div className="flex flex-col-reverse gap-10 lg:w-[70%] lg:flex-row lg:gap-6">
          <div className="flex flex-col gap-10 lg:justify-between lg:w-1/3">
            {posts.slice(-3 , -1).reverse().map(({ _id, title, description, imageUrl, date }) => {
              return (
                <Link key={_id} href={`/posts/${_id}`} className="group grid grid-cols-2 gap-4 lg:grid-cols-1">
                  <Image 
                    src={imageUrl}
                    alt={title}
                    width={250}
                    height={118}
                    sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                    style={{
                      objectFit: 'cover'
                    }}
                    className="w-full h-full rounded-md"
                  />
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-col justify-center">
                      <p className="mb-5 capitalize text-blueDate">{date}</p>
                      <h2 className="font-bold capitalize line-clamp-2 text-lg group-hover:text-blue-600">{title}</h2>
                    </div>
                    <div className="mt-6">
                      <div className="text-slate-600 line-clamp-2 lg:line-clamp-5 xl:line-clamp-4" dangerouslySetInnerHTML={{ __html: description }}></div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="lg:w-2/3">
            {posts.slice(-1).map(({ _id, title, description, imageUrl, date }) => {
              return (
                <div key={_id}>
                  <Image
                    src={imageUrl}
                    alt={title}
                    width={700}
                    height={328}
                    priority
                    className="w-full h-full rounded-lg"
                  />
                  <div className="mt-6">
                    <p className="mb-4 capitalize text-blueDate">{date}</p>
                    <Link href={`/posts/${_id}`} className="hover:text-blue-600">
                      <h3 className="mt-4 font-bold text-lg lg:text-xl">{title}</h3>
                    </Link>
                  </div>
                  <div className="mt-6 text-slate-600" dangerouslySetInnerHTML={{ __html: description }}></div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:w-[30%] lg:justify-between">
          {posts.slice(-8, -3).reverse().map(({ _id, title, imageUrl, date }) => {
            return (
              <Link key={_id} href={`/posts/${_id}`} className="group flex flex-col gap-4 lg:flex-row">
                <Image 
                  src={imageUrl}
                  alt={title}
                  width={128}
                  height={128}
                  sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                  style={{
                    objectFit: 'cover',
                  }}
                  className="w-full h-40 rounded-md lg:w-32 lg:h-32"
                />
                <div className="flex flex-col justify-center">
                  <p className="mb-4 text-sm capitalize text-blueDate">{date}</p>
                  <h2 className="font-bold capitalize line-clamp-1 md:line-clamp-2 group-hover:text-blue-600">{title}</h2>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      {children}
      <div className="w-full mt-20 h-4 bg-slate-200"></div>
    </div>
  )
}
