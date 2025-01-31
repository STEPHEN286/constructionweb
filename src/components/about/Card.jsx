import { TbToolsOff } from "react-icons/tb";


export default function Card() {
  return (
    <div className=" shadow relative  md:px-15 bg-white  max-md:w--[400px] w-full  h-fit pb-10 ">
        <div className="absolute h-13 w-16 flex justify-center items-center bg-gray-300 inset-y-0 right-0">
            <p>01</p>
        </div>
        <div className="space-y-4 mt-10 w-full"> 
        <div className="w-10 h-fit flex flex-col items-center  justify-center ">
            <span><TbToolsOff className="text-4xl text-amber-400" /></span>
            <span className="w-full h-1 bg-amber-400 mt-3">
            </span>
        </div>
        <h4 className="font-bold">Interior Renovation</h4>
        <p className="text-gray-400 text-[12px] leading-5  md:w-64 ">Elevate your space with our expert interior renovation services. From design to execution, we
        ensure every detail is tailored to your needs.</p>
        <span className="h-0.5 w-full  bg-gray-200 flex justify-end mb-2">
           <span className=" bg-amber-400 h-full w-[60px] ">

           </span>
        </span>
        </div>
    </div>
  )
}
