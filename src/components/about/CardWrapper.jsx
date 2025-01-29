import React from 'react'
import Card from './Card'

export default function CardWrapper() {
  return (
    <div className='z-10 grid grid-cols-3 gap-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 absolute  inset-x-0 bottom-30  '>
      <Card />
      <Card />
      <Card />
    </div>
  )
}
