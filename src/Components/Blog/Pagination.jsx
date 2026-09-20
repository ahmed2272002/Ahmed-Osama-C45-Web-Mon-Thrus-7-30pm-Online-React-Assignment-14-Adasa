function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      <div className="flex items-center gap-2">

        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-10 h-10 flex justify-center items-center rounded-xl bg-[#161616] border border-[#ffffff1b] text-[#ffffff80] hover:text-orange-500 hover:border-[#ff6f0057] duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        {pages.map(page => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 flex justify-center items-center rounded-xl text-sm font-bold duration-300 ${
              page === currentPage
                ? "bg-orange-500 text-white"
                : "bg-[#161616] text-[#ffffff80] border border-[#ffffff1b] hover:text-white hover:border-[#ff6f0057]"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-10 h-10 flex justify-center items-center rounded-xl bg-[#161616] border border-[#ffffff1b] text-[#ffffff80] hover:text-orange-500 hover:border-[#ff6f0057] duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

      </div>

      <p className="text-[#ffffff50] text-sm">صفحة {currentPage} من {totalPages}</p>
    </div>
  )
}

export default Pagination