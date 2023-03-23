import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { useState } from "react"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()

  const loginSubmit = async (e) => {
    e.preventDefault()

    if (username && password) {
      await signIn("credentials", {
        redirect: false,
        username: username,
        password: password,
      }).then(({ ok, error }) => {
        if (ok) {
          router.push("/admin")
        } else if (error) {
          alert(error)
        }
      })
    } else {
      alert("Lengkapilah form Login terlebih dahulu!")
    }
  }

  return (
    <div className="w-full h-[88vh] flex justify-center items-center">
      <div className="p-8 w-full max-w-xl border rounded-lg shadow-lg">
        <h1 className="text-center font-bold text-xl">Login to Access Admin Page</h1>
        <form className="mt-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" required className="px-2 py-1 border border-slate-300 rounded-lg outline-none" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required className="px-2 py-1 border border-slate-300 rounded-lg outline-none" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="w-full mt-10 text-center">
            <button className="px-20 py-2 border border-navbar bg-navbar text-white rounded-lg uppercase font-bold tracking-widest hover:text-navbar hover:bg-white" type="submit" onClick={loginSubmit}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}