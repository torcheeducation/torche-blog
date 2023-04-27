import { BsFileEarmarkPostFill } from "react-icons/bs"
import { FiUser, FiUsers } from "react-icons/fi"

export default function AdminInfo({ posts, visitor }) {
  const totalVisitor = posts.map((post) => post.visitor).reduce((a, b) => a + b, 0)

  return (
    <div className="flex flex-col gap-4 items-center justify-center md:flex-row md:justify-around">
      <div className="w-full md:w-64 lg:w-72 h-20 flex rounded-lg shadow-lg">
        <div className="w-1/3 bg-green-500 grid place-items-center rounded-l-lg">
          <BsFileEarmarkPostFill className="text-4xl text-white" />
        </div>
        <div className="w-2/3 pl-5 flex flex-col justify-center">
          <h2 className="font-semibold text-lg">Jumlah Postingan</h2>
          <p className="text-slate-700">{posts.length} Postingan</p>
        </div>
      </div>
      <div className="w-full md:w-64 lg:w-72 h-20 flex rounded-lg shadow-lg">
        <div className="w-1/3 bg-blue-500 grid place-items-center rounded-l-lg">
          <FiUser className="text-4xl text-white" />
        </div>
        <div className="w-2/3 pl-5 flex flex-col justify-center">
          <h2 className="font-semibold text-lg">Pengunjung Hari Ini</h2>
          <p className="text-slate-700">{visitor ? visitor.count : 0} Pengunjung</p>
        </div>
      </div>
      <div className="w-full md:w-64 lg:w-72 h-20 flex rounded-lg shadow-lg">
        <div className="w-1/3 bg-emerald-500 grid place-items-center rounded-l-lg">
          <FiUsers className="text-4xl text-white" />
        </div>
        <div className="w-2/3 pl-5 flex flex-col justify-center">
          <h2 className="font-semibold text-lg">Total Pengunjung</h2>
          <p className="text-slate-700">{totalVisitor} Pengunjung</p>
        </div>
      </div>
    </div>
  )
}
