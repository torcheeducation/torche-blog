import { paginate } from "@/lib/paginate";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Pagination from "@/components/search-page/Pagination";
import Select from "react-select";

export default function AllCategories() {
  const categoriesParams = useSearchParams();
  const categoriesTarget = categoriesParams.get("target") || "";

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    { value: "", label: "Semua" },
    { value: "edukasi", label: "Edukasi" },
    { value: "berita", label: "Berita" },
    { value: "gaya hidup", label: "Gaya Hidup" },
  ];

  const CategoriesResult = [
    {
      id: 1,
      title: "10 Bahan Kimia Paling Berbahaya di Tempat Kerja",
      description:
        "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ",
      img: "/img/postingan4.png",
      category: "edukasi",
    },
    {
      id: 2,
      title: "10 Bahan Kimia Paling Berbahaya di Tempat Kerja",
      description:
        "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ",
      img: "/img/postingan4.png",
      category: "gaya hidup",
    },
    {
      id: 3,
      title: "10 Bahan Kimia Paling Berbahaya di Tempat Kerja",
      description:
        "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ",
      img: "/img/postingan4.png",
      category: "edukasi",
    },
    {
      id: 4,
      title: "10 Bahan Kimia Paling Berbahaya di Tempat Kerja",
      description:
        "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ",
      img: "/img/postingan4.png",
      category: "gaya hidup",
    },
    {
      id: 5,
      title: "10 Bahan Kimia Paling Berbahaya di Tempat Kerja",
      description:
        "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ",
      img: "/img/postingan4.png",
      category: "edukasi",
    },
    {
      id: 6,
      title: "10 Bahan Percobaan Paling Berbahaya di Tempat Kerja",
      description:
        "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ",
      img: "/img/postingan4.png",
      category: "berita",
    },
    {
      id: 7,
      title: "10 Bahan Percobaan Paling Berbahaya di Tempat Kerja",
      description:
        "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ",
      img: "/img/postingan4.png",
      category: "edukasi",
    },
    {
      id: 8,
      title: "10 Bahan Percobaan Paling Berbahaya di Tempat Kerja",
      description:
        "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ",
      img: "/img/postingan4.png",
      category: "berita",
    },
    {
      id: 9,
      title: "10 Bahan Percobaan Paling Berbahaya di Tempat Kerja",
      description:
        "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ",
      img: "/img/postingan4.png",
      category: "edukasi",
    },
    {
      id: 10,
      title: "10 Bahan Percobaan Paling Berbahaya di Tempat Kerja",
      description:
        "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ",
      img: "/img/postingan4.png",
      category: "edukasi",
    },
    {
      id: 11,
      title: "10 Bahan Percobaan Paling Aman di Tempat Kerja",
      description:
        "Sementara banyak bahan kimia di tempat kerja mungkin tampak tidak berbahaya, beberapa di antaranya dapat menimbulkan bahaya yang signifikan. Mengetahui mana yang berbahaya dan bagaimana menangani bahan kimia berbahaya dengan benar dapat membantu mencegah cedera dan efek merugikan yang kronis. Di sini kita melihat 10 bahan kimia paling berbahaya di tempat kerja, yaitu arsenik, timbal, benzena, kromium, toluena, kadmium, zinc, merkuri, pestisida, dan limbah elektronik. ",
      img: "/img/postingan4.png",
      category: "edukasi",
    },
  ];

  const categoryFilter = CategoriesResult.filter((post) => post.category.toLowerCase().includes(selectedCategory.toLowerCase()))
  const result = categoryFilter.filter((search) => search.title.toLowerCase().includes(categoriesTarget.toLowerCase()))

  const pageSize = 5;
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(result, currentPage, pageSize);

  const handleChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory.value);
  };

  return (
    <div
      id="result"
      className="px-6 py-10 md:px-20 md:py-14 lg:min-h-screen lg:px-40 lg:py-14"
    >
      <Select
        onChange={handleChange}
        options={categories}
        placeholder="Select Option"
        className="mb-10 w-48 md:h-10 md:w-72 lg:mb-14"
      />
      {result.length > 0 ? (
        <>
          <div className="flex min-h-[30rem] flex-col gap-14">
            {paginatedPosts.map(({ id, title, description, img }) => (
              <Link
                key={id}
                href={`/posts/${id}`}
                className="group flex flex-col items-center gap-2 md:h-36 md:flex-row md:gap-0"
              >
                <div className="">
                  <Image
                    src={img}
                    alt="articel"
                    width={553}
                    height={154}
                    sizes="100vw"
                    className=" rounded-md md:w-[87%]"
                  />
                </div>
                <div className="w-full rounded-md  p-4 md:h-full md:w-full">
                  <h2 className="text-xl font-bold group-hover:text-blue-600">
                    {title}
                  </h2>
                  <p className="mt-4 text-sm text-slate-600 line-clamp-3">
                    {description}
                  </p>
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
        <div className="mx-auto mt-10 flex w-full flex-col gap-20 md:flex-row md:items-center md:justify-center lg:w-[80%]">
          <Image
            src="/img/notfound.png"
            alt="not found"
            width={433}
            height={364}
            sizes="100vw"
            className="h-full w-full md:w-1/2"
          />
          <div className="md:w-1/2">
            <h2 className="font-rajdhaniBold text-4xl text-blue-300 lg:text-5xl">
              Oops!
            </h2>
            <p className="mt-2 font-rajdhaniMedium text-slate-400 lg:text-xl">
              Hasil penelusuran tidak tersedia.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
