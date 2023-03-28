import Layout from "@/components/admin-page/Layout"
import { useS3Upload } from "next-s3-upload"
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

export default function SignUp() {
  const [file, setFile] = useState("")
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passPage, setPassPage] = useState("")
  const [isCode, setIsCode] = useState(false)
  const [image, setImage] = useState("")
  const router = useRouter()

  const MySwal = withReactContent(Swal)
  const { uploadToS3 } = useS3Upload()

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

  const handleSignup = async (e) => {
    e.preventDefault()

    if (name && username && password && file) {
      try {
        const { url } = await uploadToS3(file)
  
        const result = await createUser(name, username, password, url)
        console.log(result)
        router.reload()
      } catch (error) {
        console.log(error)
      }
    } else {
      Toast.fire({
        icon: "warning",
        title: "Lengkapilah form terlebih dahulu!"
      })
    }
  }

  const handleImagePreview = (e) => {
    const target = e.target.files[0]
    setFile(target)

    const preview = URL.createObjectURL(target)
    setImage(preview)
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
                    src={image ? image : "/img/blank.webp"}
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