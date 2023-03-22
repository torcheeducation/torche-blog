import { useState } from "react"

export default function SignUp() {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !username || !password) {
      alert('Harap form diisi!')
      return
    }

    const res = await fetch('/api/auth/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, username, password })
    })

    const data = await res.json()
    console.log(data)
  }

  return (
    <form>
      <input type="text" name="nama" placeholder="Masukkan Nama" onChange={(e) => setName(e.target.value)} />
      <input type="text" name="username" placeholder="Masukkan Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" name="password" placeholder="Masukkan password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>Signup</button>
    </form>
  )
}