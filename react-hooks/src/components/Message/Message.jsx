import React from 'react'

export const Message = ({style, msg, eventHandle}) => {
  return (
    <li className={style}>{msg}<button onClick={eventHandle} className='text-red-600 font-bold cursor-pointer hover:text-orange-400'>X</button></li>
  )
}