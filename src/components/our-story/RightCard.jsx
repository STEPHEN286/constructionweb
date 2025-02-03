
import about from '../../assets/img/about.jpg'
import MaterialCounters from './MaterialCounters'
export default function RightCard() {
  return (
    <div className=' w-full h-full flex flex-col  relative '>
       
      <img src={about} alt={about} className='z-10' />
   <p className='z-20 lg:hidden'>   <MaterialCounters /></p>
    </div>
  )
}
