import Layout from "@/components/admin-page/Layout"
import { useEffect, useState } from "react"

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

export default function SignUpTest() {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isCode, setIsCode] = useState(false)

  useEffect(() => {
    if (!isCode) {
      let code = prompt("Masukkan password untuk mengakses halaman ini (Masukkan 2 kali) :")
      if (code === key) {
        setIsCode(true)
      } else {
        alert("Password yang Anda masukkan salah!")
      }
      }
  }, [isCode])

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
        <></>
      )}
    </Layout>
  )
}