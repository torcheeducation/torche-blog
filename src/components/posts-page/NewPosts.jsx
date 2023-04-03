import Image from "next/image";
import Link from "next/link";

export default function NewPosts({ children, data }) {
  const newestPost = [
    {
      id: 1,
      date: '10 November 2022',
      title: '10 Bahan Kimia Paling Berbahaya di Tempat Kerja',
      category: 'edukasi',
      image: '/img/postingan1.png',
    }
  ]

  const rightSidePosts = [
    {
      id: 2,
      date: '10 November 2022',
      title: '10 bahan kimia paling berbahaya dan paling aman',
      category: 'edukasi',
      image: '/img/postingan2.png',
    },
    {
      id: 3,
      date: '10 November 2022',
      title: '10 bahan kimia paling berbahaya dan paling aman',
      category: 'edukasi',
      image: '/img/postingan2.png',
    },
    {
      id: 4,
      date: '10 November 2022',
      title: '10 bahan kimia paling berbahaya dan paling aman',
      category: 'edukasi',
      image: '/img/postingan2.png',
    },
    {
      id: 5,
      date: '10 November 2022',
      title: '10 bahan kimia paling berbahaya dan paling aman',
      category: 'edukasi',
      image: '/img/postingan2.png',
    },
    {
      id: 6,
      date: '10 November 2022',
      title: '10 bahan kimia paling berbahaya dan paling aman',
      category: 'edukasi',
      image: '/img/postingan2.png',
    },
  ]

  const leftSidePosts = [
    {
      id: 7,
      date: '10 November 2022',
      title: '10 bahan kimia paling berbahaya dan paling aman',
      text: 'Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik.',
      category: 'edukasi',
      image: '/img/postingan2.png',
    },
    {
      id: 8,
      date: '10 November 2022',
      title: '10 bahan kimia paling berbahaya dan paling aman',
      text: 'Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik.',
      category: 'edukasi',
      image: '/img/postingan2.png',
    },
  ]

  return (
    <div>
      <h2 className="text-2xl text-slate-500 uppercase">Postingan Terbaru</h2>
      <div className="mt-6 h-full flex flex-col gap-10 lg:flex-row lg:gap-6">
        <div className="flex flex-col-reverse gap-10 lg:w-[70%] lg:flex-row lg:gap-6">
          <div className="flex flex-col gap-10 lg:justify-between lg:w-1/3">
            {leftSidePosts.map(({ id, date, title, text, image }) => {
              return (
                <Link key={id} href={`/posts/${id}`} className="group grid grid-cols-2 gap-4 lg:grid-cols-1">
                  <Image 
                    src={image}
                    alt={title}
                    width={250}
                    height={118}
                    sizes="100vw"
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
                      <p className="text-slate-600 line-clamp-2 lg:line-clamp-5 xl:line-clamp-4">{text}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="lg:w-2/3">
            {newestPost.map(({ id, date, title, image }) => {
              return (
                <div key={id}>
                  <Image
                    src={image}
                    alt={title}
                    width={700}
                    height={328}
                    priority
                    className="w-full h-full"
                  />
                  <div className="mt-6">
                    <p className="mb-4 text-sm capitalize text-blueDate">{date}</p>
                    <Link href={`/posts/${id}`} className="hover:text-blue-600">
                      <h3 className="mt-4 font-bold text-lg">{title}</h3>
                    </Link>
                  </div>
                  <div className="mt-6 text-slate-600 ">
                    <p>
                      Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. Bahan kimia berbahaya adalah segala jenis zat yang berpotensi menyebabkan kerusakan pada organisme hidup, termasuk manusia, dan lingkungan pada umumnya.
                    </p>
                    <p className="mt-4">
                      Berbagai negara dan yurisdiksi memiliki peraturan khusus dan klasifikasi bahan kimia berbahaya. Meskipun ini tidak berbeda secara signifikan, ada beberapa perbedaan kecil dan kasus khusus. Di Inggris, misalnya, bahan kimia berbahaya dikelompokkan ke dalam kategori berikut, yaitu peledak, mengoksidasi, mudah terbakar, beracun, berbahaya, korosif, mengiritasi, dan berbahaya bagi lingkungan. Zat yang dikendalikan juga diklasifikasikan sebagai berbahaya, meskipun dengan berbagai tingkat bahaya. Demikian pula, obat-obatan, seperti antibiotik, bisa berbahaya tanpa resep yang tepat.
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:w-[30%] lg:justify-between">
          {rightSidePosts.map(({ id, date, title, image }) => {
            return (
              <Link key={id} href={`/posts/${id}`} className="group flex flex-col gap-4 lg:flex-row">
                <Image 
                  src={image}
                  alt={title}
                  width={128}
                  height={128}
                  sizes="100vw"
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
