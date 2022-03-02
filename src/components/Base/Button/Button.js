import React from 'react'

function Button({text}) {
  return (
    <button className='px-8 py-4 h-[50px] bg-white text-[#1A3143] hover:bg-slate-100 transition-colors font-sh-regular uppercase text-sm'>{text}</button>
  )
}

export default Button