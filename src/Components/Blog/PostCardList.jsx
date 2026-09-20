import { Link } from "react-router"

function formatDate(date) {
  return new Date(date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })
}

function PostCardList({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="rounded-3xl overflow-hidden border border-[#ffffff1b] group hover:border-[#ff6f0056] duration-300 flex flex-col sm:flex-row"
    >
      <div className="relative overflow-hidden h-[220px] sm:h-auto sm:w-[35%] lg:w-[30%] shrink-0">
        <img
          src={post.image}
          className="duration-500 ease-in-out group-hover:scale-110 w-full h-full object-cover"
          alt={post.title}
        />
        <span className="absolute top-4 right-4 text-white font-black text-[0.8rem] bg-[#101010] px-3 py-0.5 rounded-full">
          {post.category}
        </span>
      </div>

      <div className="p-5 sm:p-7 bg-[#161616] w-full flex flex-col justify-center">
        <div className="text-[#ffffff40] text-sm flex gap-3 items-center">
          <span><i className="fa-regular fa-clock me-1"></i> {post.readTime}</span>
          <i className="fa-solid fa-circle text-[0.2rem]"></i>
          <span>{formatDate(post.date)}</span>
        </div>

        <h2 className="text-white text-[1.3rem] font-black mt-3 group-hover:text-orange-500 duration-300">
          {post.title}
        </h2>
        <p className="text-[0.9rem] text-[#ffffff88] mt-3">{post.excerpt}</p>

        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-3">
            <img src={post.author.avatar} className="w-[40px] object-cover rounded-full" alt={post.author.name} />
            <div>
              <h4 className="text-white font-black text-[0.8rem] mb-1">{post.author.name}</h4>
              <p className="text-[#ffffff88] text-[0.7rem]">{post.author.role}</p>
            </div>
          </div>
          <span className="text-orange-500 text-[0.8rem] bg-[#22150B] rounded-full px-[8px] py-[10px] flex justify-center items-center border border-[#ff73003b] group-hover:text-white group-hover:bg-[#FF6900] duration-300">
            <i className="fa-solid fa-chevron-left"></i>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default PostCardList