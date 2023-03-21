import { paginate } from "@/lib/paginate"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import Pagination from "./Pagination"

export default function SearchPosts() {
  const searchParams = useSearchParams()
  const searchTarget = searchParams.get('target') || ''

  const [currentPage, setCurrentPage] = useState(1)

  const searchResult = [
    {
      id: 1,
      title: '10 Bahan Kimia Paling Berbahaya di Tempat Kerja',
      description: 'Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ',
      image: '/img/postingan1.png',
      category: 'edukasi',
    },
    {
      id: 2,
      title: '10 Bahan Kimia Paling Berbahaya di Tempat Kerja',
      description: 'Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ',
      image: '/img/postingan1.png',
      category: 'edukasi',
    },
    {
      id: 3,
      title: '10 Bahan Kimia Paling Berbahaya di Tempat Kerja',
      description: 'Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ',
      image: '/img/postingan1.png',
      category: 'edukasi',
    },
    {
      id: 4,
      title: '10 Bahan Kimia Paling Berbahaya di Tempat Kerja',
      description: 'Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ',
      image: '/img/postingan1.png',
      category: 'edukasi',
    },
    {
      id: 5,
      title: '10 Bahan Kimia Paling Berbahaya di Tempat Kerja',
      description: 'Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ',
      image: '/img/postingan1.png',
      category: 'edukasi',
    },
    {
      id: 6,
      title: '10 Bahan Percobaan Paling Berbahaya di Tempat Kerja',
      description: 'Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ',
      image: '/img/postingan1.png',
      category: 'edukasi',
    },
    {
      id: 7,
      title: '10 Bahan Percobaan Paling Berbahaya di Tempat Kerja',
      description: 'Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ',
      image: '/img/postingan1.png',
      category: 'edukasi',
    },
    {
      id: 8,
      title: '10 Bahan Percobaan Paling Berbahaya di Tempat Kerja',
      description: 'Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ',
      image: '/img/postingan1.png',
      category: 'edukasi',
    },
    {
      id: 9,
      title: '10 Bahan Percobaan Paling Berbahaya di Tempat Kerja',
      description: 'Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ',
      image: '/img/postingan1.png',
      category: 'edukasi',
    },
    {
      id: 10,
      title: '10 Bahan Percobaan Paling Berbahaya di Tempat Kerja',
      description: 'Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ',
      image: '/img/postingan1.png',
      category: 'edukasi',
    },
    {
      id: 11,
      title: '10 Bahan Percobaan Paling Aman di Tempat Kerja',
      description: 'Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ',
      image: '/img/postingan1.png',
      category: 'edukasi',
    },
  ]

  const result = searchResult.filter((search) => search.title.toLowerCase().includes(searchTarget.toLowerCase()))
  const pageSize = 5
  const onPageChange = (page) => {
    setCurrentPage(page)
  }

  const paginatedPosts = paginate(result, currentPage, pageSize)

  return(
    <div id="result" className="px-6 py-10 md:p-24 lg:min-h-screen">
      {result.length > 0 ? (
        <>
          <div className="min-h-[30rem] flex flex-col gap-10">
            {paginatedPosts.map(({ id, title, description }) => (
                <Link key={id} href={`/posts/${id}`} className="group flex flex-col items-center gap-2 md:h-36 md:flex-row md:gap-4">
                  <div className={`w-full h-4 rounded-md bg-postColor md:w-16 md:h-full`}></div>
                  <div className="w-full bg-trendingpost p-4 rounded-md md:h-full md:w-full">
                    <h2 className="font-bold text-xl group-hover:text-blue-600">{title}</h2>
                    <p className="mt-4 text-sm text-slate-600 line-clamp-3">{description}</p>
                  </div>
                </Link>
              ))}
          </div>
          <Pagination
            items={result.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        </>
      ) : (
        <div className="w-full mx-auto mt-10 flex flex-col gap-20 lg:w-[80%] md:flex-row md:justify-center md:items-center">
          <Image
            src="/img/notfound.png"
            alt="not found"
            width={433}
            height={364}
            sizes="100vw"
            className="w-full h-full md:w-1/2"
          />
          <div className="md:w-1/2">
            <h2 className="font-rajdhaniBold text-4xl text-blue-300 lg:text-5xl">Oops!</h2>
            <p className="mt-2 font-rajdhaniMedium text-slate-400 lg:text-xl">Hasil penelusuran tidak tersedia.</p>
          </div>
        </div>
      )}
    </div>
  )
}