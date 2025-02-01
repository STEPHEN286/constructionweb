
import Card from './Card'

export default function CardWrapper() {
  return (
    <div className='z-10 grid py-10 md:py-0  gap-10  max-w-7xl px-8  lg:px-grid-cols-1  md:grid-cols-3 md:gap-10 mx-auto  md:absolute  inset-x-0 bottom-30  '>
      <Card />
      <Card />
      <Card />
    </div>
  )
}
