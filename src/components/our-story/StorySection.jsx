import LeftCard from "./LeftCard";
import MaterialCounters from "./MaterialCounters";
import RightCard from "./RightCard";


export default function StorySection() {
  return (
    <div className='mx-auto mb-10 max-w-7xl  py-4 px-5 sm:px-6 lg:px-8 grid gap-6 lg:gap-56  lg:grid-cols-2 relative overflow-hidden'>
      <LeftCard />
      <RightCard />
       <div className='absolute h-full hidden lg:block  w-52  bg-amber-300  py-20 right-85'>
              </div>
       <div className='absolute  h-10  w-62  bg-amber-400 inset-y-110 md:inset-y-10 right-0 z-20'>
            <p className='text-white text-2xl font-bold text-center  leading-snug'>Ted-Nomex</p>
              </div>

                <p className='z-20 absolute hidden lg:block right-40 inset-y-78 w-[500px]'>   <MaterialCounters /></p>
              
    </div>
  )
}
