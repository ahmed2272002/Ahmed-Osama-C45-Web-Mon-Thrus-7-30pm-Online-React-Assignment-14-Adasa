import { Link, useOutletContext, useSearchParams } from 'react-router'
import { useState, useEffect } from "react"
import PostCard from "./PostCard"
import PostCardList from "./PostCardList"
import Pagination from "./Pagination"

const POSTS_PER_PAGE = 6

function Blog() {
  const { posts, categories } = useOutletContext()
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState("grid")
  const [currentPage, setCurrentPage] = useState(1)

  // التصنيف بيتقرا من الـ URL نفسه بدل ما يبدأ دايمًا "all"
  const activeCategory = searchParams.get("category") || "all"

  function handleCategoryChange(categoryName) {
    if (categoryName === "all") {
      setSearchParams({})
    } else {
      setSearchParams({ category: categoryName })
    }
  }

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory
    const matchesSearch =
      post.title.includes(searchTerm) || post.excerpt.includes(searchTerm)
    return matchesCategory && matchesSearch
  })

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, activeCategory])

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  function handlePageChange(page) {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <main className='pt-40 pb-20 bg-[#0b0b0b] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] relative'>
        <div className='h-[200px] w-[200px] bg-[#ff7b004b] absolute top-40 left-[50%] -translate-x-[50%] blur-[100px]'></div>

        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <p className="flex items-center text-orange-400 gap-2 bg-[#361F0B] border border-1 border-[#ff6f005f] p-2 px-5 rounded-full text-[0.85rem]">
              <span className="fade-alert block h-[6px] w-[6px] bg-orange-400 rounded-full"></span>
              <i className="fa-regular fa-newspaper text-orange-400"></i>
              مدونتنا
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mt-6">استكشف <span className="text-amber-400">مقالاتنا</span></h1>
            <p className='text-[#ffffff80] text-xl text-center mt-5'>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
          </div>
        </div>
      </main>

      <section className='py-3 bg-black border-b border-[#ffffff20] relative'>
        <div className="container">
          <div className='nav-categories p-3 sticky top-40 z-40 bg-black/40'>
            <div className='categories-body md:flex md:items-center md:justify-between md:gap-4'>

              <div className='search relative md:w-[40%] lg:w-[30%]'>
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  type="text"
                  placeholder='ابحث في المقالات...'
                  className='p-3 rounded-xl bg-[#161616] text-white w-full border border-[#ffffff1b] placeholder:text-[gray] outline-0 focus:border-[#ff88007e] duration-300 px-8'
                />
                <i className="fa-solid fa-magnifying-glass absolute top-[50%] -translate-y-[50%] left-5 text-[gray]"></i>
              </div>

              <ul className="flex flex-wrap gap-2 mt-5 justify-center lg:mt-0">
                <li>
                  <button
                    onClick={() => handleCategoryChange("all")}
                    className={`px-4 py-2 rounded-xl text-[0.8rem] font-bold duration-300 cursor-pointer ${
                      activeCategory === "all"
                        ? "bg-orange-500 text-white"
                        : "bg-[#161616] text-[#ffffff80] border border-[#ffffff1b] hover:text-orange-500"
                    }`}
                  >
                    جميع المقالات
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.name}>
                    <button
                      onClick={() => handleCategoryChange(cat.name)}
                      className={`px-4 py-2 rounded-xl text-[0.8rem] font-bold duration-300 cursor-pointer ${
                        activeCategory === cat.name
                          ? "bg-orange-500 text-white"
                          : "bg-[#161616] text-[#ffffff80] border border-[#ffffff1b] hover:border-[#ff6f006e]"
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-24 bg-black">
        <div className="container">

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 bg-[#161616] border border-[#ffffff1b] p-1 rounded-xl">
              <button
                onClick={() => setViewMode("grid")}
                className={`w-10 h-10 flex justify-center items-center rounded-xl duration-300 ${
                  viewMode === "grid" ? "bg-orange-500 text-white" : "text-[#ffffff80] hover:text-orange-500"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`w-10 h-10 flex justify-center items-center rounded-xl duration-300 ${
                  viewMode === "list" ? "bg-orange-500 text-white" : "text-[#ffffff80] hover:text-orange-500"
                }`}
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>

            <p className="text-[#ffffff60] text-sm">
              عرض <span className="text-white font-bold">{filteredPosts.length}</span> مقالة
            </p>
          </div>

          {paginatedPosts.length > 0 ? (
            <div className={viewMode === "grid" ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3" : "flex flex-col gap-6"}>
              {paginatedPosts.map(post =>
                viewMode === "grid"
                  ? <PostCard key={post.id} post={post} />
                  : <PostCardList key={post.id} post={post} />
              )}
            </div>
          ) : (
            <p className="text-[#ffffff60] text-center py-20">لا توجد نتائج مطابقة لبحثك</p>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

        </div>
      </section>
    </>
  )
}

export default Blog