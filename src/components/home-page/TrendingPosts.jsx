import Image from "next/image";
import Link from "next/link";

export default function TrendingPosts({ posts }) {
  const sortByVisitor = posts.sort(function(a, b) { return parseInt(b.visitor) - parseInt(a.visitor) })

  return (
    <div className="relative grid w-full grid-cols-1 gap-10 bg-trendingpost px-6 py-10 md:grid-cols-2 lg:grid-cols-3 lg:px-10 xl:px-16">
      <span className="absolute -top-11 left-0 rounded-t-lg bg-orangeLight px-8 py-3 text-sm font-bold uppercase text-white">
        Postingan Trending
      </span>
      {sortByVisitor.slice(0, 3).map(({ _id, title, imageUrl, date }) => {
        return (
          <Link key={_id} href={`/posts/${_id}`} className="group flex gap-8">
            <Image
              src={imageUrl}
              alt={title}
              width={128}
              height={128}
              priority
              sizes="100vw"
              style={{
                objectFit: "cover"
              }}
              className="rounded-lg"
            />
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm text-blueDate capitalize">{date}</p>
              <h2 className="font-bold capitalize line-clamp-2 group-hover:text-blue-600 lg:text-lg">
                {title}
              </h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
