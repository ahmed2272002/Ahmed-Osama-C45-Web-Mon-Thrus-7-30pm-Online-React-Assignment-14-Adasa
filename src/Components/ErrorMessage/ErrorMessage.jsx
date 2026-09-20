import { Link } from "react-router"


function ErrorMessage() {
  return (
    <>
    <section className="pt-30  bg-[#0b0b0b] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] relative">
      <div className="container">
        <div className="body flex flex-col justify-center items-center">
          <h2 className="mb-10 text-9xl font-bold bg-linear-to-r from-[#FF8500] via-[#F1AC00] to-[#FF8500] bg-clip-text text-transparent">404</h2>

          <div className="bg-[#442608] p-[33px_30px] border border-[#ff800070] rounded-full flex justify-center items-center relative">
            <i class="fa-regular fa-face-frown text-[#FF6900] text-5xl"></i>
            <div className=" translateY-alert rotate-10 bg-orange-500 w-[20px] h-[20px] rounded-md absolute -top-2 -right-5"></div>
            <div className="fade-alert bg-yellow-500 w-[17px] h-[17px] rounded-full absolute -bottom-2 -left-5"></div>
          </div>

          <h3 className=" text-white font-bold text-2xl my-8">عفواً! الصفحة غير موجودة</h3>
          <p className="text-[#ffffff69] text-center text-xl">الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.</p>

          <div className=" flex flex-col gap-4 my-5 w-full sm:flex-row sm:justify-center">
            <Link to={"/"} className=" text-white bg-orange-500  text-center p-4 font-bold rounded-full text-md hover:-translate-y-1 duration-300 sm:px-10"><i class="fa-regular fa-house " ></i> الذهاب للرئيسية</Link>
            <Link to={"/blog"} className=" text-white border border-[#ffffff40]  text-center p-4 font-bold rounded-full text-md hover:bg-[#26170B] hover:border-[#ff80008c] duration-300 sm:px-10 hover:text-orange-500"><i class="fa-regular fa-newspaper"></i> تصفح المقالات</Link>
          </div>
        </div>

        <hr className=" text-[#ffffff20] w-[40%] mx-auto my-5" />

        <div className=" flex flex-col items-center justify-between">
          <p className=" text-[#ffffff50] mb-4">قد تجد هذه مفيدة:</p>
          <ul className=" flex gap-3">
            <Link to={"/"} className=" text-orange-500 hover:text-orange-400 duration-300 hover:underline"><li>الرئيسية</li></Link>
            <li className=" text-[#ffffff50]">.</li>
            <Link to={"/blog"} className=" text-orange-500 hover:text-orange-400 duration-300 hover:underline"><li>المدونة</li></Link>
            <li className=" text-[#ffffff50]">.</li>
            <Link to={"/about"} className=" text-orange-500 hover:text-orange-400 duration-300 hover:underline"><li>من نحن</li></Link>
            
          </ul>
        </div>
      </div>
      
    </section>

    </>
    
  )
}

export default ErrorMessage