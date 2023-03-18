import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { IoIosCloseCircle } from "react-icons/io";

export default function SearchHero() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTarget = searchParams.get("target");

  const [search, setSearch] = useState("");

  useEffect(() => {
    const inputValueSet = () => {
      document.getElementById("result").scrollIntoView({
        behavior: "smooth",
      });

      if (searchTarget) {
        setSearch(searchTarget);
      }
    };

    inputValueSet();
  }, [searchTarget]);

  const deleteSearch = () => {
    setSearch("");
    document.querySelector("input[name=search]").value = "";
  };

  const searchPosts = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter" || e.key === "Enter") {
      if (e.target.value.length > 0) {
        router.push(`/search?target=${e.target.value}`);
      } else {
        router.push(`/search?target=`);
      }
    }
  };

  return (
    <div className="grid h-[19rem] w-full place-items-center bg-gradientHero bg-cover px-8 md:px-20 lg:h-[89.6vh] lg:px-36">
      <div className="w-full">
        <div className="mb-6 lg:mb-10">
          <h1 className="text-3xl font-bold tracking-wide text-white md:text-4xl lg:text-5xl">
            Hasil Penelusuran
          </h1>
        </div>
        <div className="mb-8 flex w-full items-center gap-4 rounded-xl bg-white px-4 py-3 md:py-4">
          <ImSearch className="-scale-x-100 font-bold text-searchIcon" />
          <input
            type="text"
            name="search"
            placeholder="Telusuri"
            value={search}
            className="w-full outline-none"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => searchPosts(e)}
          />
          <button
            className={search ? "opacity-1" : "opacity-0"}
            onClick={() => deleteSearch()}
            aria-label="Clear Search Input"
          >
            <IoIosCloseCircle className="text-xl opacity-40 hover:opacity-70" />
          </button>
        </div>
      </div>
    </div>
  );
}
