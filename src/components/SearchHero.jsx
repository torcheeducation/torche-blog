import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { ImSearch } from "react-icons/im"
import { IoIosCloseCircle } from "react-icons/io"

export default function SearchHero() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchTarget = searchParams.get('target')

  const [search, setSearch] = useState('')

  useEffect(() => {
    const inputValueSet = () => {
      document.getElementById('result').scrollIntoView({
        behavior: 'smooth'
      })

      if (searchTarget) {
        setSearch(searchTarget)
      }
    }

    inputValueSet()
  }, [searchTarget])

  const deleteSearch = () => {
    setSearch('')
    document.querySelector('input[name=search]').value = ''
  }

  const searchPosts = (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter' || e.key === 'Enter') {
      if (e.target.value.length > 0) {
        router.push(`/search?target=${e.target.value}`)
      } else {
        router.push(`/search?target=`)
      }
    }
  }
  
  return (
    <div className="w-full h-[19rem] px-8 bg-gradientHero bg-cover grid place-items-center md:px-20 lg:px-36 lg:h-[89.6vh]">
      <div className="w-full">
        <div className="mb-6 lg:mb-10">
          <h1 className="font-bold text-3xl text-white tracking-wide md:text-4xl lg:text-5xl">Hasil Penelusuran</h1>
        </div>
        <div className="w-full mb-8 px-4 py-3 flex gap-4 items-center bg-white rounded-xl md:py-4">
          <ImSearch className="text-searchIcon font-bold -scale-x-100" />
          <input type="text" name="search" placeholder="Telusuri" value={search} className="w-full outline-none" onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => searchPosts(e)} />
          <button className={(search ? "opacity-1" : "opacity-0")} onClick={() => deleteSearch()} aria-label="Clear Search Input">
            <IoIosCloseCircle className="text-xl opacity-40 hover:opacity-70" />
          </button>
        </div>
      </div>
    </div>
  )
}