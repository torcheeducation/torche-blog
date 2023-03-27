import { useState } from "react"
import { BsPlus } from "react-icons/bs"
import InputPost from "./InputPost"

export default function AddPost({ owner }) {
  const [isOpen, setIsOpen] = useState(false)

  const formCondition = (condition) => {
    setIsOpen(condition)
  }

  return (
    <div className="mt-10">
      <button onClick={() => setIsOpen(true)} className="w-full py-1 px-5 bg-white text-navbar border border-navbar flex gap-2 items-center justify-center rounded-lg hover:bg-navbar hover:text-white">
        <BsPlus className="text-2xl" />
        <span className="font-semibold text-lg">Tambah Postingan Baru</span>
      </button>
      <InputPost condition={isOpen} setCondition={formCondition} ownerId={owner.user._id} />
    </div>
  )
}