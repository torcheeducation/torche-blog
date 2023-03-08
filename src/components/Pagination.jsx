export default function Pagination({ items, currentPage, pageSize, onPageChange }) {
  const pagesCount = Math.ceil(items / pageSize)

  if (pagesCount === 1) return null
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)

  return (
    <div className="w-full mt-32 flex justify-center items-center">
      <ul className="flex gap-3">
        {pages.map((page) => (
          <li key={page}>
            <button className={"px-4 py-2 rounded-full font-bold" + (page === currentPage ? " bg-searchIcon text-white" : " bg-slate-200 text-black hover:bg-slate-100")} onClick={() => onPageChange(page)}>{page}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}