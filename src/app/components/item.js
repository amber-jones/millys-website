import React from 'react'

export default function ListItem({ title, description, price }) {
  return (
    <div className='flex md:gap-10 font-body pt-5 justify-between'>
      <div>
        <h5>{title}</h5>
        <p className='text-xs'> {description}</p>
      </div>
      <div>
        <p>{price}</p>
      </div>
    </div>
  )
}

