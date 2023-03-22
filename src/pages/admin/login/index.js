import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { getSession, signIn } from "next-auth/react"

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [logged, setLogged] = useState(false)
  const [loading, setLoading] = useState(true);

  const router = useRouter()

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        setLogged(true)
        router.replace('/admin');
      } else {
        setLoading(false);
      }
    });
  }, [router])

  if (loading) {
    return <p>Loading...</p>;
  } 

  const handleSubmit = async (e) => {
    e.preventDefault()

    const status = await signIn('credentials', {
      redirect: false,
      username: username,
      password: password,
    })
    console.log(status)

    router.push("/admin")
  }

  if (logged) {
    return <></>
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}
