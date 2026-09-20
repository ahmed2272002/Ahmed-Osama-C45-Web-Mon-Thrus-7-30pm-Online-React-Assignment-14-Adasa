import { useState } from "react"
import logo from "../../assets/favicon.png"
import { Link, NavLink } from "react-router"

function Navbar() {


    const [IsOpen, setIsOpen] = useState(false)

    function barList() {
        setIsOpen(!IsOpen)
    }


    return (
        <>
            <nav className={`${IsOpen ? "h-[350px] bg-[#0f0f0f]" : "h-[85px] bg-[#151616]"} transition-all duration-300 ease-in fixed top-0 right-0 left-0 z-[100] overflow-hidden`}>
                <div className="container">
                    <div className="main w-full grid grid-cols-2 md:grid-cols-3 px-1 py-4">
                        <Link to={"/"} className="right flex items-center gap-3">
                            <img src={logo} className="w-12" />
                            <div>
                                <p className=" text-white text-[1.25rem] font-bold">عدسة</p>
                                <span className="hidden sm:block text-[#B16109] text-[0.75rem]">عالم التصوير الفوتوعرافي</span>
                            </div>
                        </Link>


                        <div className="middle hidden md:flex justify-center items-center">
                            <ul className="flex justify-between items-center text-[#909ea1] md:w-[100%] lg:w-[80%] font-bold text-[0.8rem] border border-1 border-[#9c9e9e4c] rounded-full p-[7px] bg-[#161616]">
                                <NavLink to={"/"} className="p-2.5 px-4 rounded-full hover:text-white duration-300 [&.active]:bg-linear-to-r from-[#FF6600] to-[#F64C00] [&.active]:text-white"><li>الرئيسية</li></NavLink>
                                <NavLink to={"/blog"} className="p-2.5 px-4 rounded-full hover:text-white duration-300 [&.active]:bg-linear-to-r from-[#FF6600] to-[#F64C00] [&.active]:text-white"><li>المدونة</li></NavLink>
                                <NavLink to={"/about"} className="p-2.5 px-4 rounded-full hover:text-white duration-300 [&.active]:bg-linear-to-r from-[#FF6600] to-[#F64C00] [&.active]:text-white"><li>من نحن</li></NavLink>
                            </ul>
                        </div>


                        <div className="left flex justify-end  md:p-0">
                            <div onClick={barList} className="barList md:hidden group cursor-pointer rounded-[15px] border border-transparent hover:border-1 hover:border-[#909ea12e] px-[12px] py-[12px]  transition-all duration-300">
                                <div className={IsOpen ? "hidden" : "block"}>
                                    <i id="fa-bars" className="fa-solid fa-bars text-gray-400 group-hover:text-white duration-300 text-[1.15rem]"></i>
                                </div>

                                <div className={IsOpen ? "block" : "hidden"}>
                                    <i className="fa-solid fa-xmark text-gray-400 group-hover:text-white duration-300 text-[1.15rem]"></i>
                                </div>
                            </div>
                            <div className="hidden md:flex items-center gap-3">
                                <div className="cursor-pointer group border-transparent border-1 hover:border-[#909ea12e] duration-300 w-[45px] h-[45px] rounded-[10px] flex justify-center items-center">
                                    <i className="fa-solid fa-magnifying-glass text-[#909ea1] group-hover:text-[#FA6501] duration-300"></i>
                                </div>
                                <NavLink to={"/blog"} className="hover:-translate-y-1 transition-all duration-300 bg-orange-500 block py-3 rounded-3xl font-bold w-[130px] text-center text-white">ابدأ القراءة</NavLink>
                            </div>
                        </div>

                    </div>

                    <div className=" p-2 md:hidden">
                        <div className="border-1 border-[#909ea12e] rounded-2xl p-2 py-3 bg-[#161616]">
                            <ul className="text-[#909EA1] flex flex-col gap-3 text-[0.9rem] font-bold">
                                <NavLink to={"/"} className="hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 py-2.5 px-4 rounded-xl [&.active]:bg-[#2E1E14] [&.active]:text-[#FF4E10] [&.active]:border [&.active]:border-1 [&.active]:border-[#ff62007d]"><li>الرئيسية</li></NavLink>
                                <NavLink to={"/blog"} className="hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 py-2.5 px-4 rounded-xl [&.active]:bg-[#2E1E14] [&.active]:text-[#FF4E10] [&.active]:border [&.active]:border-1 [&.active]:border-[#ff62007d]"><li>المدونة</li></NavLink>
                                <NavLink to={"/about"} className="hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 py-2.5 px-4 rounded-xl [&.active]:bg-[#2E1E14] [&.active]:text-[#FF4E10] [&.active]:border [&.active]:border-1 [&.active]:border-[#ff62007d]"><li>من نحن</li></NavLink>
                                <NavLink to={"/blog"} className="hover:-translate-y-1 transition-all duration-300 bg-orange-500 text-center block py-4 rounded-3xl text-white"><li>ابدأ القراءة</li></NavLink>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar