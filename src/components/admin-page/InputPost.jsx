import { useState } from "react"
import { CgClose } from "react-icons/cg"
import Select from "react-select"
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";
import { useS3Upload } from "next-s3-upload";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const MySwal = withReactContent(Swal)

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading...</p>
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: '3' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

async function createPost(title, description, category, imageUrl, ownerId) {
  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({ title, description, category, imageUrl, ownerId }),
    headers: {
      "Content-Type": "application/json"
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!")
  }

  return data
}

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

export default function InputPost({ condition, setCondition, ownerId }) {
  const [imageUrl, setImageUrl] = useState("")
  const [file, setFile] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")

  const { uploadToS3 } = useS3Upload()

  const options = [
    { value: "edukasi", label: "Edukasi" },
    { value: "berita", label: "Berita" },
    { value: "gaya hidup", label: "Gaya Hidup" },
  ]

  const handleSelectChange = (selected) => {
    setCategory(selected.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let { url } = await uploadToS3(file)
    setImageUrl(url)

    try {
      const result = await createPost(title, description, category, imageUrl, ownerId)
      
      if (result) {
        setCondition(false)
        Toast.fire({
          icon: "success",
          title: "Menambahkan Postingan Berhasil"
        })
      } else {
        Toast.fire({
          icon: "error",
          title: "Gagal menambahkan Postingan"
        })
      }
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: error,
      })
    }
  }

  return (
    <>
      {condition && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>
          <div className="fixed top-0 left-0 w-full h-full grid place-items-center z-20">
            <div className="mx-auto w-[80vw] h-[80vh] bg-white rounded-lg overflow-auto">
              <div className="py-3 px-4 flex gap-3 justify-end items-center bg-gray-100 rounded-t-lg">
                <button className="p-2 border rounded-lg hover:bg-red-500 hover:text-white hover:border-red-500" onClick={() => setCondition(false)}>
                  <CgClose className="text-2xl" />
                </button>
              </div>
              <div className="p-4">
                <h2 className="font-bold text-2xl text-center tracking-wider">Form Tambah Postingan Baru</h2>
                <form className="mt-10 flex flex-col gap-4">
                  <div className="w-full flex flex-col gap-2 p-4 bg-slate-100 rounded-lg">
                    <label className="font-semibold">Gambar Postingan</label>
                    <input type="file" required onChange={(e) => setFile(e.target.files[0])} />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label className="font-semibold">Judul Postingan</label>
                    <input type="text" name="title" placeholder="Masukkan Judul Postingan" className="w-full py-1 px-2 border rounded-lg placeholder:italic" required onChange={(e) => setTitle(e.target.value)} />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label className="font-semibold">Isi Postingan</label>
                    <QuillNoSSRWrapper theme="snow" modules={modules} formats={formats} onChange={setDescription} />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label className="font-semibold">Kategori Postingan</label>
                    <Select
                      onChange={handleSelectChange}
                      options={options}
                    />
                  </div>
                  <div className="mt-10 w-full text-center">
                    <button type="submit" className="py-1 px-10 font-semibold text-lg bg-navbar text-white border border-navbar rounded-lg hover:bg-white hover:text-navbar" onClick={handleSubmit}>Tambah Postingan</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}