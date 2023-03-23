import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  return (
    <div className="flex w-full justify-between bg-navbar px-4 md:px-8 lg:items-center lg:px-5 xl:px-20">
      <Link href="/admin">
        <Image
          src="/img/logo.png"
          alt="logo"
          width={128}
          height={72}
          priority
        />
      </Link>
      {/* {session && (
        <div>
          <h1>Selamat Datang, {}</h1>
        </div>
      )} */}
    </div>
  )
}
