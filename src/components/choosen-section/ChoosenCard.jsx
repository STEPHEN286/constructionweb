

export default function ChoosenCard({icon, title, description}) {
  return (
    <div className="relative flex justify-between gap-2    bg-white  border-gray-200 border-1 w-full    ">
     
      <div className="flex items-start space-x-3   h-full p-3 md:px-4 py-7  ">
          <span className=" rounded-md material-symbols-outlined bg-amber-500 text-[#333] h-fit p-3  transition z-10">
            {icon}
          </span>
        <div className=" ">
          <h4 className="font-semibold text-sm">{title}</h4>
          <p className="text-gray-400 text-[12px] leading-5 ">
            {description}
          </p>

          <a href="#" className="text-xs">Read More</a>
        </div>
      </div>
      
       <div className=""> <p className="px-3 py-2 md:px-4.5 md:py-4.5 bg-[#f1f1f1] text-[12px] border-gray-200 border-1 text-center ">01</p></div>
      
      <span className="w-0.5 bottom-0 absolute left-9 h-[90px] bg-amber-400 mt-3"></span>
    </div>
  );
}
