import Layout from "@/components/admin-page/Layout"
import { useRouter } from "next/router"
import { useState } from "react"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const key = "torcheblogadmin"

async function createUser(name, username, password) {
  const response = await fetch("api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ name, username, password }),
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
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passPage, setPassPage] = useState("")
  const [isCode, setIsCode] = useState(false)

  const router = useRouter()
  const MySwal = withReactContent(Swal)

  const handleVerify = (e) => {
    e.preventDefault()

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

    if (!passPage) {
      Toast.fire({
        icon: 'error',
        title: "Harap isi form terlebih dahulu!"
      })
    } 
    
    if (passPage === key) {
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

    try {
      const result = await createUser(name, username, password)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout title="Sign Up">
      {isCode ? (
        <form>
          <input type="text" id="name" placeholder="Masukkan Nama" required onChange={(e) => setName(e.target.value)} />
          <input type="text" id="username" placeholder="Masukkan Username" required onChange={(e) => setUsername(e.target.value)} />
          <input type="password" id="password" placeholder="Masukkan Password" required onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" onClick={handleSignup}>Sign Up</button>
        </form>
      ) : (
        <form>
          <input type="text" id="passPage" placeholder="Masukkan Password untuk Mengakses" required onChange={(e) => setPassPage(e.target.value)} />
          <button type="submit" onClick={handleVerify}>Verify Password</button>
        </form>
      )}
    </Layout>
  )
}