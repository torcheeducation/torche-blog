import Image from 'next/image';
import Link from 'next/link';
import { SlMenu } from 'react-icons/sl';
import { CgClose } from 'react-icons/cg';
import { ImSearch } from 'react-icons/im';
import { IoIosCloseCircle } from 'react-icons/io';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter()
  const [navbar, setNavbar] = useState(false)
  const [search, setSearch] = useState('')

  const links = [
    {
      id: 1,
      href: '/',
      text: 'Halaman Utama',
    },
    {
      id: 2,
      href: '/posts',
      text: 'Postingan',
    },
    {
      id: 4,
      href: '/categories',
      text: 'Kategori',
    },
    {
      id: 5,
      href: '/about',
      text: 'Tentang Kami',
    },
  ]

  const deleteSearch = () => {
    setSearch('')
    document.querySelector('input[name=searchMobile]').value = ''
    document.querySelector('input[name=searchDesktop]').value = ''
  }

  const searchPosts = (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter' || e.key === 'Enter') {
      if (e.target.value.length > 0) {
        router.push(`/search?target=${e.target.value}`)
      } else {
        alert('Form pencarian tidak boleh kosong!')
      }
    }
  }

  return (
    <div className="w-full px-4 bg-navbar flex justify-between md:px-8 lg:px-5 lg:items-center xl:px-20">
      <Link href="/">
        <Image 
          src="/images/logo.png"
          alt="logo"
          width={128}
          height={72}
          priority
        />
      </Link>
      <button className="text-white text-3xl mr-2 lg:hidden" onClick={() => setNavbar(true)} aria-label="Open Menu">
        <SlMenu />
      </button>
      <div className={"absolute top-0 left-0 w-full h-full bg-black transition-all duration-300 z-20 lg:hidden" + (navbar ? " opacity-70 visible" : " opacity-0 invisible")}></div>
      <div className={"w-full h-[70vh] p-5 fixed left-0 bottom-0 bg-navbar flex flex-col rounded-t-2xl transition-all duration-500 z-30 lg:relative lg:p-0 lg:bg-transparent lg:flex-row-reverse lg:justify-between lg:w-auto lg:h-auto lg:mb-0" + (navbar ? " mb-0" : " -mb-[50rem]")}>
        <button className="mb-8 text-white text-2xl self-end lg:hidden" onClick={() => setNavbar(false)} aria-label="Close Menu">
          <CgClose />
        </button>
        <div className="w-full mb-8 px-4 py-1 flex gap-4 items-center bg-white rounded-3xl lg:hidden">
          <ImSearch className="text-searchIcon font-bold -scale-x-100" />
          <input type="text" name="searchMobile" placeholder="Telusuri" className="w-full text-sm outline-none" onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => searchPosts(e)} />
          <button className={(search ? "opacity-1" : "opacity-0")} onClick={() => deleteSearch()} aria-label="Clear Search Input">
            <IoIosCloseCircle className="text-lg opacity-40 hover:opacity-70" />
          </button>
        </div>
        <ul className="flex flex-col gap-8 text-white text-lg lg:flex-row lg:gap-16 lg:text-base lg:items-center">
          {links.map(({ id, href, text }) => {
            return (
              <li key={id} className="hover:opacity-80">
                <Link href={href}>{text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="hidden px-4 py-1 gap-4 bg-white rounded-3xl lg:flex lg:items-center">
        <ImSearch className="text-searchIcon font-bold text-lg -scale-x-100" />
        <input type="text" name="searchDesktop" placeholder="Telusuri" className="w-full text-sm outline-none" onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => searchPosts(e)} />
        <button className={(search ? "opacity-1" : "opacity-0")} onClick={() => deleteSearch()} aria-label="Clear Search Input">
          <IoIosCloseCircle className="text-lg opacity-40 hover:opacity-70" />
        </button>
      </div>
    </div>
  )
}