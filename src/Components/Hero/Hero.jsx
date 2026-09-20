
import { Link, useOutletContext } from "react-router"


function Hero() {



  const { posts } = useOutletContext()

  function formatDate(date) {
    return new Date(date).toLocaleDateString("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }



  return (
    <>
      <main className=' py-40 bg-[#0b0b0b] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] relative'>
        <div className=' h-[150px] w-[150px] bg-[#ff510026] absolute top-40 left-40 blur-3xl'></div>
        <div className=' h-[150px] w-[150px] bg-[#ff510026] absolute bottom-10 right-30 blur-3xl'></div>

        <div className="container lg:flex lg:justify-center">

          <div className="flex flex-col justify-center items-center lg:w-[70%] xl:w-[50%]">
            <p className="flex items-center gap-2 text-white bg-[#23150B] border border-1 border-[#ff6f005f] p-2 px-5 rounded-full text-[0.85rem]">
              <span className="fade-alert block h-[6px] w-[6px] bg-orange-400 rounded-full"></span>
              <div className="relative">
                <span className="scale-alert block h-2 w-2 bg-[#ffa60058] rounded-full "></span>
                <span className="block h-2 w-2 bg-[#FF6900] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></span>
              </div>
              مرحباً بك في عدسة
            </p>

            <h1 className=" my-5 text-5xl leading-17 text-center text-white font-black sm:text-[3rem] md:text-[4rem]">اكتشف <span className="text-[#FA9A1D]">فن</span> <br className="hidden sm:block" /> التصوير الفوتوغرافي</h1>
            <h2 className="text-[#A1A1A1] text-center text-[1.3rem] md:text-[1.6rem] xl:text-[1.5rem] 2xl:text-[1.8rem]">انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</h2>

            <div className="my-8 text-center w-full flex flex-col gap-3 sm:flex-row sm:justify-center sm:items-center">
              <Link to={"/blog"} className=" text-white text-[0.9rem] p-4 sm:px-9 flex justify-center items-center gap-2 bg-orange-500 rounded-full font-bold">استكشف المقالات <i className="fa-solid fa-arrow-left-long text-[0.9rem]"></i></Link>
              <Link to={"/about"} className=" text-white text-[0.9rem] p-4 sm:px-9 flex justify-center items-center gap-2 font-bold border border-[#ffffff44] rounded-full"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> اعرف المزيد</Link>
            </div>

            <div className="my-5 gap-4 grid grid-cols-2 md:grid-cols-4 w-full">
              <div className=" bg-[#151414] py-4 text-center rounded-3xl border border-1 border-[#ffffff1d] hover:scale-[1.05] duration-300">
                <i class="fa-solid fa-newspaper text-orange-500 text-2xl"></i>
                <p className=" text-[#FA981D] font-black text-2xl">+50</p>
                <span className="text-[#ffffff52] text-[0.9rem]">مقالة</span>
              </div>
              <div className=" bg-[#151414] py-4 text-center rounded-3xl border border-1 border-[#ffffff1d] hover:scale-[1.05] duration-300">
                <i class="fa-solid fa-users text-orange-500 text-2xl"></i>
                <p className=" text-[#FA981D] font-black text-2xl">+10ألف</p>
                <span className="text-[#ffffff52] text-[0.9rem]">قارئ</span>
              </div>
              <div className=" bg-[#151414] py-4 text-center rounded-3xl border border-1 border-[#ffffff1d] hover:scale-[1.05] duration-300">
                <i class="fa-solid fa-folder-open text-orange-500 text-2xl"></i>
                <p className=" text-[#FA981D] font-black text-2xl">4</p>
                <span className="text-[#ffffff52] text-[0.9rem]">تصنيفات</span>
              </div>
              <div className=" bg-[#151414] py-4 text-center rounded-3xl border border-1 border-[#ffffff1d] hover:scale-[1.05] duration-300">
                <i class="fa-solid fa-pen-nib text-orange-500 text-2xl"></i>
                <p className=" text-[#FA981D] font-black text-2xl">6</p>
                <span className="text-[#ffffff52] text-[0.9rem]">كاتب</span>
              </div>
            </div>
          </div>


        </div>
      </main>

      <section className=' pt-32 pb-16 bg-[#0A0A0A] relative'>
        <div className=' h-[150px] w-[150px] bg-[#ff510026] absolute top-40 right-10 blur-3xl'></div>
        <div className=' h-[150px] w-[150px] bg-[#ff510026] absolute bottom-10 right-10 blur-3xl'></div>

        <div className="container">
          <p className="flex items-center gap-2 text-orange-500 font-bold bg-[#23150B] border border-1 border-[#ff6f005f] p-2 px-5 rounded-full text-[0.85rem] w-fit">
            <span className="fade-alert block h-[6px] w-[6px] bg-orange-400 rounded-full"></span>
            <div className="relative">
              <span className="scale-alert block h-2 w-2 bg-[#ffa60058] rounded-full "></span>
              <span className="block h-2 w-2 bg-[#FF6900] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></span>
            </div>
            مميز
          </p>

          <h2 className=" text-white mt-6 mb-4 text-[2.4rem] font-extrabold">مقالات مختارة</h2>

          <div className=" md:flex md:justify-between md:items-center">
            <p className="text-[#A1A1A1] text-[1.1rem] mb-4">محتوى منتقى لبدء رحلة تعلمك</p>
            <Link to={"/blog"} className=" text-white bg-orange-500 rounded-xl p-3  px-6 font-bold flex w-fit items-center">عرض الكل <i class="fa-solid fa-angle-left"></i></Link>
          </div>

          <div className=" my-6 space-y-7">
            {posts.slice(0, 3).map((post, index) => (
              <Link to={`/blog/${post.slug}`} key={post.id} className="body-post rounded-3xl overflow-hidden border group hover:border-[#ff6f0056] duration-300 cursor-pointer md:flex">
                <div className="img-post relative overflow-hidden h-[300px] md:h-[350px] md:w-[40%] shrink-0">
                  <img src={post.image} className="duration-500 ease-in-out group-hover:scale-110 w-full h-full  object-cover" alt="" />
                  <div className="absolute top-5 right-5">
                    <span className="bg-linear-to-r from-[#FF6F00] to-[#F2AD00] py-2 p-4 rounded-2xl text-[0.7rem] text-white font-bold"><i class="fa-solid fa-star me-1"></i> مميز</span>
                  </div>
                </div>
                <div className="details-post p-5 px-6 md:p-7 bg-[#161616] w-full">
                  <div className=" flex gap-3 items-center">
                    <span className=" text-orange-500 text-bold bg-[#2E1E14] border border-[#ff6a005f] text-[0.7rem] px-3 py-1 rounded-full">{post.category}</span>
                    <p className="text-[#737373] text-[0.8rem]"><i class="fa-regular fa-clock me-1"></i>{post.readTime}</p>
                  </div>
                  <div className="flex flex-col justify-between md:h-full md:pb-8">
                    <div>
                      <h2 className="mt-3 text-[1.7rem] leading-9 mb-4 text-white font-bold group-hover:text-orange-500 duration-300 ease-in-out md:text-3xl 2xl:">{post.title}</h2>
                      <p className="text-[#737373] text-[1.2rem] mb-5 md:text-[1rem] md:mb-10">{post.excerpt}</p>
                    </div>
                    <div className=" flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="avatar relative">
                          <div className="p-[2px] bg-[#262626] rounded-full"><img src={post.author.avatar} className="w-[50px] rounded-full" alt="" /></div>
                          <div className="absolute bottom-0 left-0 p-[2px] bg-[#262626] rounded-full"><span className=" block w-[12px] h-[13px] rounded-full bg-amber-600"></span></div>
                        </div>
                        <div>
                          <h5 className="text-white font-black text-[0.8rem]">{post.author.name}</h5>
                          <p className=" text-[#434343] text-[0.8rem]">{formatDate(post.date)}</p>
                        </div>
                      </div>
                      <p className=" text-orange-600 font-black text-[0.9rem] group-hover:translate-x-1 duration-300">اقرا المقال <i class="fa-solid fa-arrow-left-long ms-1 group-hover:-translate-x-1 duration-300"></i></p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>


      <section className="pt-28 pb-16 bg-[#111111]">
        <div className="container">
          <div className=" flex flex-col items-center justify-center ">
            <p className="flex items-center gap-2 text-orange-500 font-bold bg-[#281B11] border border-1 border-[#ff6f005f] p-2 px-5 rounded-full text-[0.85rem] w-fit">
              <span className="fade-alert block h-[6px] w-[6px] bg-orange-400 rounded-full"></span>
              <div className="relative">
                <span className="scale-alert block h-2 w-2 bg-[#ffa60058] rounded-full "></span>
                <span className="block h-2 w-2 bg-[#FF6900] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></span>
              </div>
              التصنيفات
            </p>

            <h2 className=" text-white mt-8 text-4xl text-center font-bold">استكشف حسب الموضوع</h2>

            <p className=" text-[#515151] mt-5 text-[1.2rem] text-center">اعثر على محتوى مصمم حسب اهتماماتك</p>

            <div className=" categories my-10 grid grid-cols-2 md:grid-cols-4 w-full gap-5">
              <Link to="/blog?category=إضاءة" className="cate p-5 rounded-3xl bg-[#161616] border border-[#75757550] group hover:-translate-y-2 duration-400 cursor-pointer hover:bg-linear-to-br from-[#FF6C00] to-[#F1AD00] relative">
                <span className="opacity-0 group-hover:opacity-100 flex justify-center items-center duration-300 w-[30px] h-[30px] bg-[#ffffff39] rounded-full absolute top-15 left-13"><i className="fa-solid fa-angle-left text-white"></i></span>
                <div className="cate-icon w-fit p-3 py-4 mb-4 border border-[#ff770042] flex justify-center items-center bg-[#281B11] rounded-2xl group-hover:bg-[#ffffff4c] duration-400">
                  <i className="fa-solid fa-sun text-orange-500 text-xl group-hover:text-white duration-400"></i>
                </div>
                <h4 className=" text-white text-xl font-black mb-1">إضاءة</h4>
                <p className=" text-[#ffffff40]">3 مقالة</p>
              </Link>
              <Link to="/blog?category=بورتريه" className="cate p-5 rounded-3xl bg-[#161616] border border-[#75757550] group hover:-translate-y-2 duration-400 cursor-pointer hover:bg-linear-to-br from-[#F64D00] to-[#FF8500] relative">
                <span className="opacity-0 group-hover:opacity-100 flex justify-center items-center duration-300 w-[30px] h-[30px] bg-[#ffffff39] rounded-full absolute top-15 left-13"><i className="fa-solid fa-angle-left text-white"></i></span>
                <div className="cate-icon w-fit p-3 py-4 mb-4 border border-[#ff770042] flex justify-center items-center bg-[#281B11] rounded-2xl group-hover:bg-[#ffffff4c] duration-400">
                  <i className="fa-solid fa-user text-orange-500 text-xl group-hover:text-white duration-400"></i>
                </div>
                <h4 className=" text-white text-xl font-black mb-1">بورتريه</h4>
                <p className=" text-[#ffffff40]">3 مقالة</p>
              </Link>

              <Link to="/blog?category=مناظر طبيعية" className="cate p-5 rounded-3xl bg-[#161616] border border-[#75757550] group hover:-translate-y-2 duration-400 cursor-pointer hover:bg-linear-to-br from-[#FF6D00] to-[#F1AD00] relative">
                <span className="opacity-0 group-hover:opacity-100 flex justify-center items-center duration-300 w-[30px] h-[30px] bg-[#ffffff39] rounded-full absolute top-15 left-13"><i className="fa-solid fa-angle-left text-white"></i></span>
                <div className="cate-icon w-fit p-3 py-4 mb-4 border border-[#ff770042] flex justify-center items-center bg-[#281B11] rounded-2xl group-hover:bg-[#ffffff4c] duration-400">
                  <i className="fa-solid fa-mountain-sun text-orange-500 text-xl group-hover:text-white duration-400"></i>
                </div>
                <h4 className=" text-white text-xl font-black mb-1">مناظر طبيعية</h4>
                <p className=" text-[#ffffff40]">2 مقالة</p>
              </Link>

              <Link to="/blog?category=تقنيات" className="cate p-5 rounded-3xl bg-[#161616] border border-[#75757550] group hover:-translate-y-2 duration-400 cursor-pointer hover:bg-linear-to-br from-[#F76C01] to-[#F2AD00] relative">
                <span className="opacity-0 group-hover:opacity-100 flex justify-center items-center duration-300 w-[30px] h-[30px] bg-[#ffffff39] rounded-full absolute top-15 left-13"><i className="fa-solid fa-angle-left text-white"></i></span>
                <div className="cate-icon w-fit p-3 py-4 mb-4 border border-[#ff770042] flex justify-center items-center bg-[#281B11] rounded-2xl group-hover:bg-[#ffffff4c] duration-400">
                  <i className="fa-solid fa-sliders text-orange-500 text-xl group-hover:text-white duration-400"></i>
                </div>
                <h4 className=" text-white text-xl font-black mb-1">تقنيات</h4>
                <p className=" text-[#ffffff40]">5 مقالة</p>
              </Link>

              <Link to="/blog?category=معدات" className="cate p-5 rounded-3xl bg-[#161616] border border-[#75757550] group hover:-translate-y-2 duration-400 cursor-pointer hover:bg-linear-to-br from-[#FF6D00] to-[#F1AD00] relative">
                <span className="opacity-0 group-hover:opacity-100 flex justify-center items-center duration-300 w-[30px] h-[30px] bg-[#ffffff39] rounded-full absolute top-15 left-13"><i className="fa-solid fa-angle-left text-white"></i></span>
                <div className="cate-icon w-fit p-3 py-4 mb-4 border border-[#ff770042] flex justify-center items-center bg-[#281B11] rounded-2xl group-hover:bg-[#ffffff4c] duration-400">
                  <i className="fa-solid fa-sun text-orange-500 text-xl group-hover:text-white duration-400"></i>
                </div>
                <h4 className=" text-white text-xl font-black mb-1">معدات</h4>
                <p className=" text-[#ffffff40]">3 مقالة</p>
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section className="pt-28 pb-16 bg-[#0A0A0A] relative">
        <div className=' h-[150px] w-[150px] bg-[#ff510026] absolute top-50 left-10 blur-3xl'></div>
        <div className=' h-[150px] w-[150px] bg-[#ff510026] absolute bottom-20 left-10 blur-3xl'></div>

        <div className="container">
          <p className="flex items-center gap-2 text-orange-500 font-bold bg-[#23150B] border border-1 border-[#ff6f005f] p-2 px-5 rounded-full text-[0.85rem] w-fit">
            <span className="fade-alert block h-[6px] w-[6px] bg-orange-400 rounded-full"></span>
            <div className="relative">
              <span className="scale-alert block h-2 w-2 bg-[#ffa60058] rounded-full "></span>
              <span className="block h-2 w-2 bg-[#FF6900] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></span>
            </div>
            الأحدث
          </p>

          <h2 className=" text-white text-4xl font-black my-5">أحدث المقالات</h2>

          <div className=" flex flex-col gap-3 md:flex-row md:justify-between">
            <p className=" text-[#ffffff8d] text-[1.1rem]">محتوى جديد طازج من المطبعة</p>
            <Link to={"/blog"} className=" text-orange-500 font-black hover:text-orange-400 duration-300  z-10 group">عرض جميع المقالات <i class="fa-solid fa-arrow-left-long ms-2 group-hover:-translate-x-1 duration-300"></i></Link>
          </div>

          <div className="lastes my-10 md:grid md:grid-cols-2 lg:grid-cols-3  gap-4">
            {posts.slice(3, 6).map((post) => (
              <Link to={`/blog/${post.slug}`} className="laste cursor-pointer rounded-3xl overflow-hidden group hover:-translate-y-1 duration-500">
                <div className=" laste-image relative">
                  <img src={post.image} className="h-[200px] w-full object-cover group-hover:scale-110 duration-500" alt="" />
                  <span className="absolute top-4 right-4 text-white font-black text-[0.8rem] bg-[#101010] px-3 py-0.5 rounded-full">{post.category}</span>
                </div>
                <div className="laste-details p-4 py-6 bg-[#161616]">
                  <div className="text-[#ffffff40] text-sm flex gap-3 items-center">
                    <span><i class="fa-regular fa-clock me-1"></i> {post.readTime}</span>
                    <i class="fa-solid fa-circle text-[0.2rem]"></i>
                    <span>{formatDate(post.date)}</span>
                  </div>

                  <h2 className=" text-white text-[1.1rem] font-black mt-4 group-hover:text-orange-500 duration-300">{post.title}</h2>
                  <p className="text-[0.8rem] text-[#ffffff88] mt-4">{post.excerpt}</p>
                  <hr className=" text-[#ffffff1a] my-5" />

                  <div className="User-link px-2 flex justify-between items-center">
                    <div className="User flex items-center gap-3">
                      <img src={post.author.avatar} className="w-[40px] object-cover rounded-full" alt="" />
                      <div>
                        <h4 className="text-white font-black text-[0.8rem] mb-1">{post.author.name}</h4>
                        <p className="text-[#ffffff88] text-[0.7rem]">{post.author.role}</p>
                      </div>
                    </div>
                    <span className="text-orange-500 text-[0.8rem] bg-[#22150B] rounded-full px-[8px] py-[10px] flex justify-center items-center border border-[#ff73003b] group-hover:text-white group-hover:bg-[#FF6900] duration-300"><i class="fa-solid fa-chevron-left"></i></span>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>


      <section className="pt-28 pb-16 bg-[#0A0A0A] relative border-t">
        <div className=' h-[150px] w-[50%] bg-[#ff510033] absolute top-10 left-[50%] translate-x-[-50%] blur-3xl'></div>

        <div className="container lg:px-20 xl:px-55">
          <div className="bg-[#161616] p-10 lg:px-20 lg:py-15 rounded-2xl z-10 relative">
            <div className="bg-orange-500 px-[17px] py-[20px] m-auto w-fit rounded-2xl flex justify-center items-center">
              <i class="fa-regular fa-envelope text-white text-2xl"></i>
            </div>
            <h2 className="text-white text-3xl my-4  text-center font-bold sm:text-4xl">اشترك في <span className=" text-orange-300">نشرتنا</span> <span className=" text-orange-400">الإخبارية</span></h2>
            <p className=" text-[#ffffff68] text-center text-md sm:text-xl ">احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>
            <div className="my-8 flex flex-col gap-3 sm:flex-row">
              <input className=" sm:w-[73%]  p-4 rounded-xl bg-black focus:border-orange-500 outline-0 duration-300  text-[#ffffffb4] border border-[#ffffff4e]" type="email" placeholder="ادخل البريد الاإلكتروني" />
              <button className=" sm:w-[25%]  bg-orange-500 hover:bg-orange-600 duration-300 cursor-pointer text-white text-md font-black p-3 rounded-2xl">اشترك الآن</button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-center">
              <div className="avatars flex gap-0.5">
                {
                  posts.slice(0, 3).map((post) => (<img src={post.author.avatar} className="w-7 rounded-full" alt="" />))
                }
              </div>
              <p className=" text-[#ffffff5b] text-[0.95rem]">انضم لـ <span className=" text-white">+10,000</span> مصور</p>
              <span className=" text-[#ffffff5b] text-[1rem] hidden sm:block">.</span>
              <span className="text-[#ffffff5b]">بدون ازعاج</span>
              <span className=" text-[#ffffff5b] text-[1rem] hidden sm:block">.</span>
              <span className="text-[#ffffff5b]">إلغاء الاشتراك في أي وقت</span>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Hero