
import LeftContainer from './LeftContainer'
import image from "../../assets/img/projectsB.png";
import Carousel from './Carousel';
export default function ProjectSection() {
  return (
    <div className='w-full h-fit  md:h-[450px] grid grid-cols-1 md:grid-cols-7   '>
    <div  className="bg-[#333] md:col-span-3  relative px-5 md:px-20 "> 
         <LeftContainer />
    <img src={image} alt="image" className="absolute h-50 left-0 bottom-0" />
         </div>
      <div className="bg-gray-800 md:col-span-4">
<Carousel />
      </div>
    </div>
  )
}
