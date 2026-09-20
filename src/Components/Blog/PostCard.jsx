import { Link } from "react-router"

function formatDate(date) {
  return new Date(date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })
}

function PostCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="laste rounded-3xl overflow-hidden group hover:-translate-y-1 duration-500 block"
    >
      <div className="laste-image relative">
        <img
          src={post.image}
          className="h-[200px] w-full object-cover group-hover:scale-110 duration-500"
          alt={post.title}
        />
        <span className="absolute top-4 right-4 text-white font-black text-[0.8rem] bg-[#101010] px-3 py-0.5 rounded-full">
          {post.category}
        </span>
      </div>

      <div className="laste-details p-4 py-6 bg-[#161616]">
        <div className="text-[#ffffff40] text-sm flex gap-3 items-center">
          <span><i className="fa-regular fa-clock me-1"></i> {post.readTime}</span>
          <i className="fa-solid fa-circle text-[0.2rem]"></i>
          <span>{formatDate(post.date)}</span>
        </div>

        <h2 className="text-white text-[1.1rem] font-black mt-4 group-hover:text-orange-500 duration-300">
          {post.title}
        </h2>
        <p className="text-[0.8rem] text-[#ffffff88] mt-4">{post.excerpt}</p>

        <hr className="text-[#ffffff1a] my-5" />

        <div className="User-link px-2 flex justify-between items-center">
          <div className="User flex items-center gap-3">
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

export default PostCard