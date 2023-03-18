import Image from "next/image";
import Link from "next/link";

export default function TrendingPosts() {
  const trendingPosts = [
    {
      id: 1,
      date: '10 November 2022',
      title: '10 bahan kimia paling berbahaya dan paling aman',
      image: '/images/trendingpost.png',
    },
    {
      id: 2,
      date: '10 November 2022',
      title: '10 bahan kimia paling berbahaya dan paling aman',
      image: '/images/trendingpost.png',
    },
    {
      id: 3,
      date: '10 November 2022',
      title: '10 bahan kimia paling berbahaya dan paling aman',
      image: '/images/trendingpost.png',
    },
  ];

  return (
    <div className="relative grid w-full grid-cols-1 gap-10 bg-trendingpost px-6 py-10 md:grid-cols-2 lg:grid-cols-3 lg:px-10 xl:px-16">
      <span className="absolute -top-11 left-0 rounded-t-lg bg-orangeLight px-8 py-3 text-sm font-bold uppercase text-white">
        Postingan Trending
      </span>
      {trendingPosts.map(({ id, date, title, image }) => {
        return (
          <Link key={id} href={`/posts/${id}`} className="group flex gap-8">
            <Image src={image} alt={title} width={128} height={128} priority />
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm text-blueDate">{date}</p>
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
