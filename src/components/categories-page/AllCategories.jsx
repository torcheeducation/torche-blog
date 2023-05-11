import { paginate } from "@/lib/paginate";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Pagination from "@/components/search-page/Pagination";
import Select from "react-select";

export default function AllCategories({ data }) {
  const [numPost] = useState(6);

  const categoriesParams = useSearchParams();
  const categoriesTarget = categoriesParams.get("target") || "";
  const categoriesType = categoriesParams.get("type") || "";

  const type = {
    education: "edukasi",
    news: "berita",
    lifestyle: "gaya hidup"
  }
  
  const categories = [
    { value: "", label: "Semua" },
    { value: "edukasi", label: "Edukasi" },
    { value: "berita", label: "Berita" },
    { value: "gaya hidup", label: "Gaya Hidup" },
  ];

  const defaultSelect = categories[categories.indexOf(categories.find((e) => e.value === type[categoriesType]))]
  const defaultValue = defaultSelect ? defaultSelect.value : ""

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(defaultValue);

  const categoryFilter = data.posts.filter((post) =>
    post.category.toLowerCase().includes(selectedCategory.toLowerCase())
  );
  const result = categoryFilter.filter((search) =>
    search.title.toLowerCase().includes(categoriesTarget.toLowerCase())
  );

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
        defaultValue={defaultSelect}
        className="mb-10 w-48 md:h-10 md:w-72 lg:mb-14"
      />
      {result.length > 0 ? (
        <>
          <div className="flex min-h-[30rem] flex-col gap-14">
            {paginatedPosts
              .slice(0, numPost)
              .map(({ _id, title, description, imageUrl }) => (
                <Link
                  key={_id}
                  href={`/posts/${_id}`}
                  className="group flex flex-col items-center gap-2 md:h-36 md:flex-row md:gap-0"
                >
                  <div className="">
                    <Image
                      src={imageUrl}
                      alt="articel"
                      width={553}
                      height={154}
                      sizes="30vw"
                      className="rounded-md md:w-[87%]"
                    />
                  </div>
                  <div className="w-full rounded-md  p-4 md:h-full md:w-full">
                    <h2 className="text-xl font-bold group-hover:text-blue-600">
                      {title}
                    </h2>
                    <div className="mt-4 text-sm text-slate-600 line-clamp-3" dangerouslySetInnerHTML={{ __html: description }}></div>
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
            <p className="font-rajdhaniMedium mt-2 text-slate-400 lg:text-xl">
              Hasil penelusuran tidak tersedia.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
