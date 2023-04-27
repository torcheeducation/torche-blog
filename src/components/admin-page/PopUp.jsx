import { CgClose, CgPen } from "react-icons/cg";
import "react-quill/dist/quill.snow.css";
import Image from "next/image";
import { RxDotFilled } from "react-icons/rx";
import { useEffect, useState } from "react";
import EditPost from "./editPost";

async function getUser(id) {
  const res = await fetch("/api/auth/signup")
  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong!")
  }

  const user = data.user.filter((d) => d._id === id)

  return user[0]
}

export default function AdminAllPost({ target, PopUp, setPopUp }) {
  const [ownerPost, setOwnerPost] = useState(null)
  const [isEdit, setIsEdit] = useState(false)

  const handleClose = () => {
    setPopUp(false);
  };

  const handleEditPost = () => {
    setIsEdit(true)
  }

  useEffect(() => {
    const owner = async () => {
      if (target) {
        const user = await getUser(target.ownerId)
        setOwnerPost(user)
      }
    }

    owner()
  }, [target])

  return (
    <>
      {PopUp && (
        <>
          <div className="fixed top-0 left-0 z-10 h-full w-full bg-black opacity-70"></div>
          <div className="fixed top-0 left-0 z-20 grid h-full w-full place-items-center">
            <div className="mx-auto h-[90vh] w-[90vw] overflow-auto rounded-lg bg-white">
              <div className="py-3 px-4 flex gap-3 justify-end items-center bg-gray-100 rounded-t-lg">
                <button
                  className="rounded-lg border p-2 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                  onClick={handleEditPost}
                >
                  <CgPen className="text-2xl" />
                </button>
                <button
                  className="rounded-lg border p-2 hover:border-red-500 hover:bg-red-500 hover:text-white"
                  onClick={handleClose}
                >
                  <CgClose className="text-2xl" />
                </button>
              </div>
              <div className="mt-10 px-9" key={target._id}>
                <div className="flex gap-1 ">
                  <h6 className="text-sm font-semibold text-[#9284F1] capitalize">
                    {target.category}
                  </h6>
                  <RxDotFilled className="mt-[2px]" />
                  <p className="text-sm text-[#A7A7A7]">{target.estimatedReading} menit baca</p>
                </div>
                <div className="mt-4 ">
                  <h1 className="font-['Rajdhani'] text-[43px] font-bold  ">
                    {target.title}
                  </h1>
                  <p className="font-['Cairo Light'] text-[#727272]">
                    {target.shortText}
                  </p>
                </div>
                <div className="mt-9 flex">
                  <Image
                    src={ownerPost ? ownerPost.imageUrl : "/img/blank.webp"}
                    alt="writer"
                    width={70}
                    height={70}
                    className="rounded-full"
                  />
                  <div className="m-2 ml-6">
                    <p className="text-base text-[#727272] capitalize">
                      {ownerPost ? ownerPost.name : "anonymous"}
                    </p>
                    <p className="text-base text-[#A7A7A7] capitalize">{target.date}</p>
                  </div>
                </div>
                <div className="my-10">
                  <Image
                    src={target.imageUrl}
                    alt="writer"
                    width={500}
                    height={500}
                    className="h-full w-full rounded-lg"
                  />
                  <div className="my-10" dangerouslySetInnerHTML={{ __html: target.description }}></div>
                </div>
              </div>
            </div>
          </div>
          <EditPost post={target} isEdit={isEdit} setIsEdit={setIsEdit} />
        </>
      )}
    </>
  );
}
