import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { useState } from "react"
import { ThreeDots } from "react-loading-icons"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  const MySwal = withReactContent(Swal)

  const loginSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

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

    if (username && password) {
      await signIn("credentials", {
        redirect: false,
        username: username,
        password: password,
      }).then(({ ok, error }) => {
        if (ok) {
          setIsLoading(false)
          router.push("/admin")
        } else if (error) {
          setIsLoading(false)
          Toast.fire({
            icon: 'error',
            title: error
          })
        }
      })
    } else {
      setIsLoading(false)
      Toast.fire({
        icon: "warning",
        title: "Lengkapilah form terlebih dahulu!"
      })
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
          <div className="mt-4 flex justify-center">
            {isLoading && (
              <div className="flex gap-3 items-center">
                <span className="font-bold uppercase tracking-widest">Loading</span>
                <ThreeDots fill="#000000" width="30px" />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}