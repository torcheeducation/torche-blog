import Image from "next/image";
import Link from "next/link";

export default function Navbar({ title }) {

  return (
    <div className="flex w-full justify-between items-center bg-navbar py-5 px-4 md:px-8 lg:px-5 xl:px-20">
      <Link href="/admin">
        <Image
          src="/img/logo.png"
          alt="logo"
          width={128}
          height={72}
          priority
        />
      </Link>
      <h1 className="font-bold text-xl text-white capitalize">{"Halaman " + title}</h1>
    </div>
  )
}
