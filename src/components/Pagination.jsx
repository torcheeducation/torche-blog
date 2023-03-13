import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export default function Pagination({ items, currentPage, pageSize, onPageChange }) {
  const pagesCount = Math.ceil(items / pageSize)

  if (pagesCount === 1) {
    onPageChange(1)
    return null
  }
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)

  const sibling = 2;
  const number = [];
  for (let i = 1; i <= pages.length; i++) {
    if (i >= currentPage - sibling && i <= currentPage + sibling) {
      number.push(i);
    }
  }

  return (
    <div className="w-full pt-20 flex justify-center items-center">
      <ul className="flex gap-3 items-center">
        <li>
          <button className="mr-1 p-1 rounded-full font-bold bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:bg-slate-300" disabled={currentPage === 1 ? true : false} onClick={() => onPageChange(currentPage - 1)}>
            <BiChevronLeft className="text-xl" />
          </button>
        </li>
        {currentPage > 3 && (
          <li key={1}>
            <button className="px-4 py-2 rounded-full font-bold bg-slate-200 text-black hover:bg-slate-100" onClick={() => onPageChange(1)}>1</button>
          </li>
        )}
        {currentPage > 4 && (
          <li key={'dot1'} className="mx-1">
            ...
          </li>
        )}
        {number.map((page) => (
          <li key={page}>
            <button className={"px-4 py-2 rounded-full font-bold" + (page === currentPage ? " bg-searchIcon text-white" : " bg-slate-200 text-black hover:bg-slate-100")} onClick={() => onPageChange(page)}>{page}</button>
          </li>
        ))}
        {pages.length > 3 && currentPage < pages.length - 3 && (
          <li key={'dot2'} className="mx-1">
            ...
          </li>
        )}
        {pages.length > 3 && currentPage < pages.length - 2 && (
          <li key={pages.length}>
            <button className="px-4 py-2 rounded-full font-bold bg-slate-200 text-black hover:bg-slate-100" onClick={() => onPageChange(pages.length)}>{pages.length}</button>
        </li>
        )}
        <li>
          <button className="mr-1 p-1 rounded-full font-bold bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:bg-slate-300" disabled={currentPage === pages.length ? true : false} onClick={() => onPageChange(currentPage + 1)}>
            <BiChevronRight className="text-xl" />
          </button>
        </li>
      </ul>
    </div>
  )
}