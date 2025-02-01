
import Card from './Card'

export default function CardWrapper() {
  return (
    <div className='z-10 grid  gap-2  max-w-7xl px-2 sm:px-6 lg:px-grid-cols-1  md:grid-cols-3 md:gap-10 mx-auto  md:absolute  inset-x-0 bottom-30  '>
      <Card />
      <Card />
      <Card />
    </div>
  )
}
