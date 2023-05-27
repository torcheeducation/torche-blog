import Layout from "@/components/admin-page/Layout"
import { uploadUserImageToS3 } from "@/utils/s3/uploadFile"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

async function createUser(name, username, password, imageUrl) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ name, username, password, imageUrl }),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!")
  }

  return data
}

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

export default function SignUp() {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passPage, setPassPage] = useState("")
  const [isCode, setIsCode] = useState(false)
  const [preview, setPreview] = useState("")
  const [image, setImage] = useState("")
  const router = useRouter()

  const handleVerify = (e) => {
    e.preventDefault()

    if (!passPage) {
      Toast.fire({
        icon: 'error',
        title: "Harap isi form terlebih dahulu!"
      })
    } 
    
    if (passPage === process.env.NEXT_PUBLIC_KEY) {
      setIsCode(true)
      document.querySelector("#passPage").value = ""
      Toast.fire({
        icon: "success",
        title: "Password Benar!"
      })
    } else {
      Toast.fire({
        icon: "error",
        title: "Gagal Akses. Password Yang Anda Masukkan Salah!"
      })
    }
  }

  const handleImagePreview = (e) => {
    const target = e.target.files[0]
    const reader = new FileReader();
    reader.onload = function(e) {
      const data = e.target.result;
      setImage({
        name: target.name,
        data: new Uint8Array(data),
        type: target.type,
        size: target.size,
      });
    };
    reader.readAsArrayBuffer(target);

    const preview = URL.createObjectURL(target)
    setPreview(preview)
  }

  const handleSignup = async (e) => {
    e.preventDefault()

    if (!name && !username && !password && !image) {
      Toast.fire({
        icon: "warning",
        title: "Lengkapilah form terlebih dahulu!"
      })
      return
    }

    if (image.name.match(/\.(jpg|jpeg|png|webp)$/) == null) {
      Toast.fire({
        icon: "warning",
        title: "Format gambar yang diperbolehkan adalah jpg, jpeg, png, dan webp"
      })
      return
    }

    if (image.size > 2097152) {
      Toast.fire({
        icon: "warning",
        title: "Ukuran gambar terlalu besar!"
      })
      return
    }

    try {
      const url = await uploadUserImageToS3(image)
      if (!url) {
        throw new Error("URL Tidak ditemukan")
      }

      const result = await createUser(name, username, password, url)
      console.log(result)
      router.reload()
    } catch (error) {
      console.log(error)
      Toast.fire({
        icon: "warning",
        title: "Terdapat Kesalahan!"
      })
    }
  }

  return (
    <Layout title="Sign Up">
      <div className="w-full h-[88vh] flex justify-center items-center">
        <div className="max-w-xl p-6 rounded-lg shadow-md">
          {isCode ? (
            <>
              <h2 className="font-semibold text-xl text-center">Form Pendaftaran Akun Admin Baru</h2>
              <form className="mt-6 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <input type="file" id="profile" onChange={handleImagePreview} />
                  <Image
                    src={preview ? preview : "/img/blank.webp"}
                    alt="profile"
                    width={200}
                    height={200}
                    priority
                    style={{
                      objectFit: "cover"
                    }}
                    className="w-20 h-20 rounded-full"
                  />
                </div>
                <input type="text" id="name" placeholder="Masukkan Nama" required className="py-1 px-3 border rounded-lg placeholder:italic" onChange={(e) => setName(e.target.value)} />
                <input type="text" id="username" placeholder="Masukkan Username" required className="py-1 px-3 border rounded-lg placeholder:italic" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" id="password" placeholder="Masukkan Password" required className="py-1 px-3 border rounded-lg placeholder:italic" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="mt-5 py-1 px-5 font-semibold border border-navbar text-white bg-navbar rounded-lg hover:bg-white hover:text-navbar" onClick={handleSignup}>Sign Up</button>
              </form>
            </>
          ) : (
            <>
              <h2 className="font-semibold text-xl text-center">Masukkan Password Untuk Mengakses Page Ini</h2>
              <form className="mt-6 flex flex-col gap-6">
                <input type="text" id="passPage" placeholder="Masukkan Password" required className="py-1 px-3 border rounded-lg placeholder:italic" onChange={(e) => setPassPage(e.target.value)} />
                <button type="submit" className="py-1 px-5 font-semibold border border-navbar text-white bg-navbar rounded-lg hover:bg-white hover:text-navbar" onClick={handleVerify}>Verify Password</button>
              </form>
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}