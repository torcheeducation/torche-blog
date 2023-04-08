import { useState } from "react"
import { CgClose } from "react-icons/cg"
import Select from "react-select"
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import Image from "next/image";
import { useRouter } from "next/router";
import { ThreeDots } from "react-loading-icons";
import { uploadPostImageToS3 } from "@/utils/s3/uploadFile";

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

async function createPost(title, shortText, description, category, imageUrl, ownerId, estimatedReading, visitor = 0) {
  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({ title, shortText, description, category, imageUrl, ownerId, estimatedReading, visitor }),
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
  const [preview, setPreview] = useState("")
  const [title, setTitle] = useState("")
  const [shortText, setShortText] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [image, setImage] = useState(null)
  const router = useRouter()

  const options = [
    { value: "edukasi", label: "Edukasi" },
    { value: "berita", label: "Berita" },
    { value: "gaya hidup", label: "Gaya Hidup" },
  ]

  const handleClose = () => {
    setCondition(false)
    setTitle("")
    setDescription("")
    setCategory("")
    setPreview("")
    setImage(null)
  }

  const handleSelectChange = (selected) => {
    setCategory(selected.value)
  }

  const handleImagePreview = async (e) => {
    const target = e.target.files[0]
    const reader = new FileReader();
    reader.onload = function(e) {
      const data = e.target.result;
      setImage({
        name: target.name,
        data: new Uint8Array(data),
        type: target.type,
        size: target.size
      });
    };
    reader.readAsArrayBuffer(target);

    const preview = URL.createObjectURL(target)
    setPreview(preview)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (!title && !shortText && !description && !category && !image) {
      setIsLoading(false)
      Toast.fire({
        icon: "warning",
        title: "Lengkapilah form terlebih dahulu"
      })
      return
    }

    if (image.name.match(/\.(jpg|jpeg|png|webp)$/) == null) {
      setIsLoading(false)
      Toast.fire({
        icon: "warning",
        title: "Format gambar yang diperbolehkan adalah jpg, jpeg, png, dan webp"
      })
      return
    }

    if (image.size > 2097152) {
      setIsLoading(false)
      Toast.fire({
        icon: "warning",
        title: "Ukuran gambar terlalu besar!"
      })
      return
    }

    const readingTime = () => {
      const words = description.trim().split(/\s+/).length
      const time = Math.ceil(words / 225)
      return time
    }
    const estimatedReading = readingTime()

    try {
      const url = await uploadPostImageToS3(image)
      if (!url) {
        throw new Error("URL tidak ditemukan")
      }

      const result = await createPost(title, shortText, description, category, url, ownerId, estimatedReading)
      
      if (result.status === "success") {
        setCondition(false)
        setPreview("")
        setTitle("")
        setDescription("")
        setCategory("")
        setIsLoading(false)
        setImage(null)
        MySwal.fire({
          icon: "success",
          title: "Success!",
          text: "Menambahkan Postingan Berhasil"
        }).then((result) => {
          if (result.isConfirmed) {
            router.reload()
          }
        })
      } else {
        setIsLoading(false)
        Toast.fire({
          icon: "error",
          title: "Gagal menambahkan Postingan"
        })
      }
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      Toast.fire({
        icon: "error",
        title: "Terjadi Kesalahan!",
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
                <button className="p-2 border rounded-lg hover:bg-red-500 hover:text-white hover:border-red-500" onClick={handleClose}>
                  <CgClose className="text-2xl" />
                </button>
              </div>
              <div className="p-4">
                <h2 className="font-bold text-2xl text-center tracking-wider">Form Tambah Postingan Baru</h2>
                <form className="mt-10 flex flex-col gap-4">
                  <div className="w-full flex flex-col gap-2">
                    <label className="font-semibold">Gambar Postingan <span className="text-slate-400 italic">( Ukuran Maksimal 2MB )</span></label>
                    <div className="flex justify-between items-center p-4 bg-slate-100 rounded-lg">
                      <input type="file" required onChange={handleImagePreview} />
                    </div>
                    {preview && (
                      <Image
                        src={preview}
                        alt="Preview Image"
                        width={1000}
                        height={700}
                        priority
                        className="w-full rounded-lg"
                      />
                    )}
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label className="font-semibold">Judul Postingan</label>
                    <input type="text" name="title" placeholder="Masukkan Judul Postingan" className="w-full py-1 px-2 border rounded-lg placeholder:italic" required onChange={(e) => setTitle(e.target.value)} />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label className="font-semibold">Deskripsi Singkat Postingan</label>
                    <input type="text" name="shortText" placeholder="Masukkan Deskripsi Singkat Postingan" className="w-full py-1 px-2 border rounded-lg placeholder:italic" required onChange={(e) => setShortText(e.target.value)} />
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
                      placeholder="Pilih kategori yang sesuai"
                    />
                  </div>
                  <div className="mt-10 flex justify-center">
                    {isLoading && (
                      <div className="flex gap-3 items-center">
                        <span className="font-bold uppercase tracking-widest">Loading</span>
                        <ThreeDots fill="#000000" width="30px" />
                      </div>
                    )}
                  </div>
                  <div className="mb-4 w-full text-center">
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