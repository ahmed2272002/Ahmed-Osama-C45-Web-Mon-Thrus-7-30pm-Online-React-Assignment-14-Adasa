import { Link, useParams, useOutletContext } from "react-router"
import ErrorMessage from "../ErrorMessage/ErrorMessage"


function Details() {


    const { slug } = useParams()
    const { posts } = useOutletContext()
    const post = posts.find(p => p.slug === slug)

    if (!post) return <ErrorMessage />

    const relatedPosts = posts
        .filter(p => p.category === post.category && p.slug !== post.slug)
        .slice(0, 3)



    function formatDate(date, showYear = true) {
        return new Date(date).toLocaleDateString("ar-EG", {
            day: "numeric",
            month: "long",
            ...(showYear && { year: "numeric" })
        });
    }


    return (
        <>
            <section className=" py-30" style={{ backgroundImage: `linear-gradient(to top,rgba(0, 0, 0, 1), rgba(0,0,0, 0.1)) ,url(${post.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="container">

                    <div className="body px-3">
                        <div className=" bg-black/60 backdrop-blur-sm p-2 px-4 text-[0.8rem] rounded-full flex items-center font-bold space-x-2 w-fit">
                            <Link to={"/"} className="text-[#ffffff80] hover:text-white duration-300"><i class="fa-solid fa-house"></i></Link>
                            <i class="fa-solid fa-angle-left text-[#ffffff60]"></i>
                            <Link to={"/blog"} className="text-[#ffffff80] hover:text-white duration-300"><span>المدونة</span></Link>
                            <i class="fa-solid fa-angle-left text-[#ffffff60]"></i>
                            <span className=" text-orange-400">{post.category}</span>
                        </div>


                        <div className="basic-info mt-15 sm:mt-30">
                            <div className="sm:flex sm:gap-4 sm:items-center">
                                <h3 className=" text-white bg-orange-500 font-bold px-4 py-2 text-[0.9rem] rounded-full w-fit">{post.category}</h3>
                                <p className="space-x-3 mt-3 text-[#ffffff90] text-[0.9rem]"><span><i class="fa-regular fa-calendar me-1"></i>{formatDate(post.date)}</span> <span><i class="fa-regular fa-clock me-1"></i>{post.readTime}</span></p>

                            </div>
                            <h2 className=" text-white text-[2.2rem] md:text-[3.3rem] md:leading-16 lg:leading-20 lg:text-[3.7rem] xl:text-[4.5rem] xl:w-[80%] xl:text-[4.5rem] 2xl:w-[75%] leading-10 mt-4 font-bold">{post.title}</h2>
                            <div className="bg-black/50 backdrop-blur-sm p-4 rounded-2xl border border-[#ffffff60] mt-7 w-fit flex gap-3 items-center">
                                <div className="p-0.5 rounded-full overflow-hidden bg-amber-800">
                                    <img src={post.author.avatar} className="w-[60px] rounded-full object-cover" alt="" />
                                </div>
                                <div className="">
                                    <p className=" text-white font-bold">{post.author.name}</p>
                                    <span className=" text-[#ffffff80] text-sm">{post.author.role}</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <section className="pt-10 pb-20 bg-black" >
                <div className="container">

                    <div className="body flex flex-col gap-8 lg:flex-row">
                        <div className="left lg:order-2 lg:w-[30%]">
                            <div className=" lg:sticky lg:top-25 space-y-6">
                                <div className="bg-[#111111] border border-[#ffffff20] p-4 rounded-xl">
                                    <div className="title flex gap-3 items-center">
                                        <div className="bg-[#29190F] border border-[#ff660085] p-[8px_10px] rounded-xl"><i class="fa-solid fa-list text-orange-600"></i></div>
                                        <span className=" text-white text-md font-black">محتويات المقال</span>
                                    </div>
                                    <ul className="mt-6 space-y-4">

                                        {post.content
                                            .split("\n")
                                            .filter(line => line.startsWith("## "))
                                            .map((line, index) => (
                                                <a href={`#section-${index + 1}`} key={index} className="text-[#ffffff60] text-sm">
                                                    <li className="hover:bg-[#1d1510] group py-4 px-3 rounded-xl hover:text-orange-500 duration-300">
                                                        <span className="me-4 p-2.5 py-1 rounded-md bg-[#1A1A1A] group-hover:bg-[#341D0E] group-hover:text-orange-500">
                                                            {index + 1}
                                                        </span>

                                                        {line.replace("## ", "")}
                                                    </li>
                                                </a>
                                            ))
                                        }


                                    </ul>
                                </div>

                                <div className=" bg-[#111111] border border-[#ffffff20] p-5 rounded-xl flex justify-center gap-4">
                                    <div className="bg-black flex flex-col items-center justify-center gap-2 p-5 rounded-xl">
                                        <i class="fa-regular fa-clock text-orange-500 text-xl"></i>
                                        <p className=" text-white font-bold text-center">{post.readTime}</p>
                                        <span className=" text-[#ffffff60] text-center text-[0.8rem]">وقت القراءة</span>
                                    </div>

                                    <div className="bg-black flex flex-col items-center  p-5 rounded-xl">
                                        <i class="fa-regular fa-calendar text-orange-500 text-xl"></i>
                                        <p className=" text-white font-bold text-center">{formatDate(post.date, false)}</p>
                                        <span className=" text-[#ffffff60] text-center text-[0.8rem]">تاريخ النشر</span>
                                    </div>
                                </div>

                                <div className="bg-[#1F1309] border border-[#ff6f004f] p-5 rounded-xl flex flex-col items-center justify-center gap-3">
                                    <div className="bg-[#4C2407] p-4 py-4.5 flex justify-center items-center rounded-2xl"><i class="fa-solid fa-envelope text-orange-500 text-xl"></i></div>
                                    <p className="text-white font-bold">لا تفوّت جديدنا</p>
                                    <span className=" text-[#ffffff80] text-sm">اشترك للحصول على أحدث المقالات</span>
                                    <Link to={"/blog"} className=" text-white bg-orange-500 w-full rounded-2xl p-3 text-center font-bold">تصفح المزيد</Link>
                                </div>
                            </div>
                        </div>

                        <div className="right lg:order-1 lg:w-[65%]">
                            <div className=" p-4 bg-[#221409] rounded-xl border border-[#ff660050]">
                                <p className=" text-white text-[1.15rem] ">"{post.excerpt}"</p>
                            </div>

                            <h3 className=" text-[#ffffffc2] my-10 text-[1.2rem]">
                                {post.content.split("\n")[0]}
                            </h3>

                            <div>
                                <div className="first">
                                    {post.content.split("\n## ").slice(1).map((section, index) => {

                                        const lines = section.split("\n");
                                        const title = lines[0];
                                        const text = lines.filter(line => line.trim() !== "").slice(1).join(" ");

                                        return (
                                            <div id={`section-${index + 1}`} key={index} className="mb-10 scroll-mt-[100px]">

                                                <div className="flex items-center gap-3">
                                                    <div className="bg-[#231309] flex justify-center items-center p-[7px_5px] border border-[#ff770057] rounded-xl">
                                                        <i className="fa-solid fa-camera text-orange-500 text-2xl"></i>
                                                    </div>

                                                    <h2 className="text-white font-bold text-[1.6rem]">
                                                        {title}
                                                    </h2>
                                                </div>

                                                <p className="text-[#ffffffbd] mt-5 text-[1.2rem]">
                                                    {text}
                                                </p>

                                            </div>
                                        );
                                    })
                                    }
                                </div>
                            </div>

                            <div className=" p-6 rounded-2xl border border-[#ffffff20] bg-[#111111] mb-5">
                                <div className=" flex items-center gap-4">
                                    <div className=" flex justify-center items-center p-2 py-2.5 rounded-xl bg-[#29190F] border border-[#ff6f0062]"><i class="fa-solid fa-tags text-orange-500 text-md"></i></div>
                                    <h3 className="text-white font-bold text-md">الوسوم</h3>
                                </div>
                                <ul className=" mt-4 flex gap-2 items-center flex-wrap">
                                    {post.tags.map((tag,) =>
                                        <Link className="p-2 px-4 border border-[#ffffff20] bg-[#1A1A1A] text-[#ffffff80] rounded-full hover:border-[#ff6f0057] hover:text-orange-500 duration-200">#{tag}</Link>)}
                                </ul>
                            </div>

                            <div className=" p-6 rounded-2xl border border-[#ffffff20] bg-[#111111] mb-5 flex gap-4 flex-col sm:flex-row sm:justify-between sm:items-center">
                                <div className=" flex items-center gap-4">
                                    <div className=" flex justify-center items-center p-2 py-2.5 rounded-xl bg-[#29190F] border border-[#ff6f0062]"><i class="fa-solid fa-share-nodes text-md text-orange-500"></i></div>
                                    <h3 className="text-white font-bold text-md">شارك المقال</h3>
                                </div>
                                <ul className=" flex gap-2 items-center">
                                    <a href="" className="p-2.5 px-3 border border-[#ffffff20] bg-[#1A1A1A] text-[#ffffff80] rounded-xl hover:text-white hover:bg-[#1DA1F2] duration-300"><i class=" fa-brands fa-x-twitter"></i></a>
                                    <a href="" className="p-2.5 px-3 border border-[#ffffff20] bg-[#1A1A1A] text-[#ffffff80] rounded-xl hover:text-white hover:bg-[#0077B5] duration-300"><i class=" fa-brands fa-linkedin-in"></i></a>
                                    <a href="" className="p-2.5 px-3 border border-[#ffffff20] bg-[#1A1A1A] text-[#ffffff80] rounded-xl hover:text-white hover:bg-[#25D366] duration-300"><i class=" fa-brands fa-whatsapp"></i></a>
                                    <a href="" className="p-2.5 px-3 border border-[#ffffff20] bg-[#1A1A1A] text-[#ffffff80] rounded-xl hover:text-white hover:bg-[#FF6900] duration-300"><i class=" fa-solid fa-link"></i></a>
                                </ul>

                            </div>

                            <div className=" p-6 rounded-2xl border border-[#ffffff20] bg-[#111111]  flex flex-col gap-5 justify-center items-center sm:flex-row sm:items-start sm:justify-start">
                                <div className="avatar p-1 rounded-2xl bg-[#442510] w-fit">
                                    <img src={post.author.avatar} className="w-[90px]  rounded-2xl object-cover" alt="" />
                                </div>
                                <div className=" space-y-1">
                                    <h5 className=" text-[0.7rem] text-center text-orange-500 font-bold sm:text-right">كاتب المقال</h5>
                                    <p className=" text-white text-center font-bold text-[1.1rem] sm:text-right">{post.author.name}</p>
                                    <p className=" text-center text-[#ffffff60] text-center text-[0.9rem] sm:text-right">{post.author.role}</p>
                                    <div className=" flex justify-center items-center mt-4 sm: justify-start">
                                        <p className=" text-center text-[#ffffff80] text-[0.9rem] w-[90%] sm:text-right">مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-black">
                <div className="container border-t border-[#ffffff20] pt-20">

                    <div className=" flex items-center justify-between">
                        <div className=" flex items-center gap-4">
                            <div className="logo flex justify-center items-center p-3 rounded-2xl border border-[#ff6f005b] bg-[#231309]"><i class="fa-solid fa-images text-orange-500 text-2xl"></i></div>
                            <div>
                                <h2 className="text-white font-bold text-2xl">مقالات قد تعجبك</h2>
                                <p className=" text-[0.8rem] text-[#ffffff70]">استكشف المزيد من المحتوى المميز</p>
                            </div>
                        </div>
                        <Link to={"/blog"} className="hidden sm:block text-orange-500 group hover:text-orange-400 duration-300">عرض الكل <i class="fa-solid fa-arrow-left ms-1 group-hover:-translate-x-1 duration-300"></i></Link>
                    </div>


                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {relatedPosts.map(item => (
                            <Link
                                to={`/blog/${item.slug}`}
                                key={item.id}
                                className="post group rounded-2xl overflow-hidden bg-[#111111] border border-[#ffffff20] hover:border-[#ff6f0057] duration-300"
                            >
                                <div className="img relative overflow-hidden h-[180px]">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 duration-500"
                                    />
                                    <span className="absolute top-3 right-3 text-white text-[0.75rem] font-bold bg-orange-500 backdrop-blur-sm px-3 py-1 rounded-full">
                                        {item.category}
                                    </span>
                                </div>

                                <div className="p-4 space-y-3">
                                    <h3 className="text-white font-bold text-[1.05rem] group-hover:text-orange-500 duration-300">
                                        {item.title}
                                    </h3>
                                    
                                    <div className=" flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <img src={item.author.avatar} className="w-7 rounded-full object-cover" alt="" />
                                            <span className=" text-[#ffffff70] text-[0.8rem]">{item.author.name}</span>
                                        </div>
                                        <p className="text-[#ffffff70] text-[0.8rem]">{item.readTime}</p>
                                    </div>
                                    
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Details