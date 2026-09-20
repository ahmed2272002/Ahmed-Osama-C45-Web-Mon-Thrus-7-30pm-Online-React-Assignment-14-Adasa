
import { Link } from 'react-router'

function Footer() {
  return (
    <>
      <footer className=' pt-15 pb-5 border-t border-[#ffffff23] relative bg-black'>
        <div className=' h-[150px] w-[50%] bg-[#ff510033] absolute top-10 left-[50%] translate-x-[-50%] blur-3xl'></div>
        <div className="container">
          <div className='footer grid md:grid-cols-2 lg:grid-cols-4 gap-15'>
            <div className='first'>
              <div className='logo flex gap-4 items-center'>
                <span className=' bg-orange-500  shadow-[0_5px_20px] shadow-[#ff730072]  flex justify-center items-center w-fit px-[18px] py-[11px] rounded-xl text-[1.1rem] text-white font-black'>ع</span>
                <p className=' text-white text-xl font-black'>عدسة</p>
              </div>
              <p className=' text-[#ffffff62] my-4 text-[0.9rem]'>مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.</p>
              <ul className=' flex items-center gap-4 relative z-50 text-[#ffffff5d] text-[1.1rem]'>
                <a href='https://twitter.com/adasah' target='_blank' className=' bg-[#161616] p-2 px-2.5 relative z-10 rounded-xl hover:bg-orange-500 hover:text-white duration-300 hover:scale-110'><li><i class="fa-brands fa-x-twitter"></i></li></a>
                <a href='https://github.com/adasah' target='_blank' className=' bg-[#161616] p-2 px-2.5 relative z-10 rounded-xl hover:bg-orange-500 hover:text-white duration-300 hover:scale-110'><li><i class="fa-brands fa-github"></i></li></a>
                <a href='https://www.linkedin.com/company/unavailable/' target='_blank' className=' bg-[#161616] p-2 px-2.5 relative z-10 rounded-xl hover:bg-orange-500 hover:text-white duration-300 hover:scale-110'><li><i class="fa-brands fa-linkedin"></i></li></a>
                <a href='https://www.youtube.com/@adasah' target='_blank' className=' bg-[#161616] p-2 px-2.5 relative z-10 rounded-xl hover:bg-orange-500 hover:text-white duration-300 hover:scale-110'><li><i class="fa-brands fa-youtube"></i></li></a>
              </ul>
            </div>

            <div className='second flex flex-col gap-5'>
              <div className='title flex gap-4 items-center'>
                <span className='block w-[40px] h-[2px] rounded-2xl bg-linear-to-r from-[#ff7300] to-[yellow]'></span>
                <p className=' text-white font-bold text-md'>استكشف</p>
              </div>
              <ul className=' flex flex-col  relative z-50 gap-4'>
                <Link to={"/"} className=' text-[#ffffff60] hover:text-orange-500 duration-300 group hover:-translate-x-3'><li> <i class="fa-solid fa-angle-left opacity-0 group-hover:opacity-100 duration-300 translate-x-5 group-hover:-translate-x-0"></i> الرئيسية</li></Link>
                <Link to={"/blog"} className=' text-[#ffffff60] hover:text-orange-500 duration-300 group hover:-translate-x-3'><li> <i class="fa-solid fa-angle-left opacity-0 group-hover:opacity-100 duration-300 translate-x-5 group-hover:-translate-x-0"></i> المدونة</li></Link>
                <Link to={"/about"} className=' text-[#ffffff60] hover:text-orange-500 duration-300 group hover:-translate-x-3'><li> <i class="fa-solid fa-angle-left opacity-0 group-hover:opacity-100 duration-300 translate-x-5 group-hover:-translate-x-0"></i> من نحن</li></Link>
              </ul>
            </div>

            <div className='third flex flex-col gap-5'>
              <div className='title flex gap-4 items-center'>
                <span className='block w-[40px] h-[2px] rounded-2xl bg-linear-to-r from-[#ff7300] to-[yellow]'></span>
                <p className=' text-white font-bold text-md'>التصنيفات</p>
              </div>
              <ul className=' flex flex-col relative z-50 gap-4'>
                <Link to="/blog?category=إضاءة" className=' text-[#ffffff60] hover:text-orange-500 duration-300 group hover:-translate-x-3'><li> <i className="fa-solid fa-angle-left opacity-0 group-hover:opacity-100 duration-300 translate-x-5 group-hover:-translate-x-0"></i> إضاءة</li></Link>
                <Link to="/blog?category=بورتريه" className=' text-[#ffffff60] hover:text-orange-500 duration-300 group hover:-translate-x-3'><li> <i className="fa-solid fa-angle-left opacity-0 group-hover:opacity-100 duration-300 translate-x-5 group-hover:-translate-x-0"></i> بورتريه</li></Link>
                <Link to="/blog?category=مناظر طبيعية" className=' text-[#ffffff60] hover:text-orange-500 duration-300 group hover:-translate-x-3'><li> <i className="fa-solid fa-angle-left opacity-0 group-hover:opacity-100 duration-300 translate-x-5 group-hover:-translate-x-0"></i> مناظر طبيعية</li></Link>
                <Link to="/blog?category=تقنيات" className=' text-[#ffffff60] hover:text-orange-500 duration-300 group hover:-translate-x-3'><li> <i className="fa-solid fa-angle-left opacity-0 group-hover:opacity-100 duration-300 translate-x-5 group-hover:-translate-x-0"></i> تقنيات</li></Link>
              </ul>
            </div>

            <div className='fourth flex flex-col gap-5'>
              <div className='title flex gap-4 items-center'>
                <span className='block w-[40px] h-[2px] rounded-2xl bg-linear-to-r from-[#ff7300] to-[yellow]'></span>
                <p className=' text-white font-bold text-md'>ابقى على اطلاع</p>
              </div>
              <span className=' text-[#ffffff60]'>اشترك للحصول على أحدث المقالات والتحديثات.</span>
              <div className=' space-y-4'>
                <input type="email" placeholder='أدخل بريدك الإلكتروني' className=' w-full bg-[#161616] p-3 text-[#ffffff60] border border-[#ffffff20] outline-0 rounded-xl focus:border-orange-400 duration-300' />
                <button className=' text-white font-bold bg-orange-500 w-full rounded-full cursor-pointer py-3 hover:-translate-y-1 duration-300'>اشترك</button>
              </div>
            </div>
          </div>

          <div className='border-t border-[#ffffff60] mt-15 pt-7 space-y-5 md:flex md:justify-between'>
            <p class="text-sm text-neutral-600 sm:text-center">© 2026 عدسة. صنع بكل <i class="fa-solid fa-heart text-orange-500"></i> جميع الحقوق محفوظة.</p>
            <div class="flex gap-6 justify-center">
              <Link to={""} class="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300">سياسة الخصوصية</Link>
              <Link to={""} class="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300" >شروط الخدمة</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer