import Image from "next/image";
import { Rings } from "react-loading-icons";

export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-navbar flex justify-center items-center">
      <div>
        <Image
          src={"/img/logo.png"}
          alt="logo"
          width={127}
          height={72}
          priority
        />
        <div className="mt-4 flex gap-1 justify-center items-center">
          <h2 className="font-bold font-rajdhani text-2xl tracking-widest text-white">Loading</h2>
          <Rings width="50px" />
        </div>
      </div>
    </div>
  )
}
