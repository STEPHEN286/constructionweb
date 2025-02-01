import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

export default function MaterialCounters() {
  return (
    <div className="h-15 w-full bg-gray-800 grid overflow-hidden  grid-cols-3 z-20 ">
      <div className="h-full  w-full  col-span-2">
        <div className="grid grid-cols-4 h-full">
          <div className=" col-span-1 h-full w-full"></div>
          <div className=" relative col-span-2  text-white h-full flex flex-col justify-center items-center  w-full
          before:absolute before:left-0 beofore:-translate-y-1/2 before:h-1/2 before:w-[1px] before:bg-gray-400
          after:absolute after:right-0  after:h-1/2 after:w-[1px] after:bg-gray-400">
            <p>56</p>
            <p>Excavators</p>
          </div>
          <div className="  col-span-1 h-full w-full"></div>
        </div>
      </div>
      <div className="relative h-15 flex justify-center items-center space-x-5 bg-gray-700 col-span-1 
before:absolute before:left-0 before:h-1/3 before:w-[2px] before:bg-amber-400 ">
  <button className="h-full flex items-center justify-center">
    <ArrowLongLeftIcon className=" w-6 text-amber-300" />
  </button>
  <button className="flex items-center justify-center">
    <ArrowLongRightIcon className=" w-6 text-amber-300" />
  </button>
</div>
</div>
  );
}
