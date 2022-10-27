import React from 'react'

const Button = ({title,dropdown}) => {
  return (
    <div className=' px-3 py-1 max-h-14'>
    
        <a
        className="inline-block rounded border-2 border-[#1e81b0]
         px-12 py-3 text-sm font-medium text-[#1e81b0] hover:bg-[#1e81b0]
          hover:text-white focus:outline-none focus:ring active:bg-[#1e81b0]"
        href="/download">{title}</a>





      
    </div>
  )
}

export default Button
