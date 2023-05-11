import Image from "next/image";
import Link from "next/link";
import { SlMenu } from "react-icons/sl";
import { CgClose } from "react-icons/cg";
import { ImSearch } from "react-icons/im";
import { IoIosCloseCircle } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal)

const Toast = MySwal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', MySwal.stopTimer)
    toast.addEventListener('mouseleave', MySwal.resumeTimer)
  }
})

export default function Navbar() {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const [search, setSearch] = useState("");
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const links = [
    {
      id: 1,
      href: "/",
      text: "Halaman Utama",
    },
    {
      id: 2,
      href: "/posts",
      text: "Postingan",
    },
    {
      id: 4,
      href: "/categories",
      text: "Kategori",
    },
    {
      id: 5,
      href: "https://torche.app/#about",
      text: "Tentang Kami",
    },
  ];

  const deleteSearch = () => {
    setSearch("");
    document.querySelector("input[name=searchMobile]").value = "";
    document.querySelector("input[name=searchDesktop]").value = "";
  };

  const searchPosts = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter" || e.key === "Enter") {
      if (e.target.value.length > 0) {
        router.push(`/search?target=${e.target.value}`);
      } else {
        Toast.fire({
          icon: "warning",
          title: "Form pencarian tidak boleh kosong!",
          position: "bottom-end"
        })
      }
    }
  };

  return (
    <div className={"sticky top-0 flex w-full justify-between bg-navbar px-4 z-30 transition-all duration-300 md:px-8 lg:items-center lg:px-5 xl:px-20" + (clientWindowHeight > 10 ? " py-4 bg-opacity-95 shadow-xl" : " py-5")}>
      <Link href="/">
        <Image
          src="/img/logo.png"
          alt="logo"
          width={128}
          height={72}
          priority
          className={"transition-all duration-300" + (clientWindowHeight > 10 ? " w-[90%]" : " w-full")}
        />
      </Link>
      <button
        className="mr-2 text-3xl text-white lg:hidden"
        onClick={() => setNavbar(true)}
        aria-label="Open Menu"
      >
        <SlMenu />
      </button>
      <div
        className={
          "fixed top-0 left-0 z-20 h-full w-full bg-black transition-all duration-300 lg:hidden" +
          (navbar ? " visible opacity-70" : " invisible opacity-0")
        }
      ></div>
      <div
        className={
          "fixed left-0 bottom-0 z-30 flex h-[70vh] w-full flex-col rounded-t-2xl bg-navbar p-5 transition-all duration-500 lg:relative lg:mb-0 lg:h-auto lg:w-auto lg:flex-row-reverse lg:justify-between lg:bg-transparent lg:p-0" +
          (navbar ? " mb-0" : " -mb-[50rem]")
        }
      >
        <button
          className="mb-8 self-end text-2xl text-white lg:hidden"
          onClick={() => setNavbar(false)}
          aria-label="Close Menu"
        >
          <CgClose />
        </button>
        <div className="mb-8 flex w-full items-center gap-4 rounded-3xl bg-white px-4 py-1 lg:hidden">
          <ImSearch className="-scale-x-100 font-bold text-searchIcon" />
          <input
            type="text"
            name="searchMobile"
            placeholder="Telusuri"
            className="w-full text-sm outline-none"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => searchPosts(e)}
          />
          <button
            className={search ? "opacity-1" : "opacity-0"}
            onClick={() => deleteSearch()}
            aria-label="Clear Search Input"
          >
            <IoIosCloseCircle className="text-lg opacity-40 hover:opacity-70" />
          </button>
        </div>
        <ul className="flex flex-col gap-8 text-lg text-white lg:flex-row lg:items-center lg:gap-16 lg:text-base">
          {links.map(({ id, href, text }) => {
            return (
              <li key={id} className="hover:opacity-80">
                <Link href={href}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hidden gap-4 rounded-3xl bg-white px-4 py-1 lg:flex lg:items-center">
        <ImSearch className="-scale-x-100 text-lg font-bold text-searchIcon" />
        <input
          type="text"
          name="searchDesktop"
          placeholder="Telusuri"
          className="w-full text-sm outline-none"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => searchPosts(e)}
        />
        <button
          className={search ? "opacity-1" : "opacity-0"}
          onClick={() => deleteSearch()}
          aria-label="Clear Search Input"
        >
          <IoIosCloseCircle className="text-lg opacity-40 hover:opacity-70" />
        </button>
      </div>
    </div>
  );
}
