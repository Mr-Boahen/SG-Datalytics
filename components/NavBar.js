import React, { useState } from 'react'
import Image from 'next/image'
import SG_Datalytics from '../images/statista-logo-vector.png'
import {Bars3Icon,XCircleIcon} from '../node_modules/@heroicons/react/24/outline'
import Button from '../components/Button'
const NavBar = () => {
    const [showMenu,setShowMenu]=useState({
        show:true,
    })
    console.log(showMenu.show)
     const toggleIcon=()=>{
    
        setShowMenu('')
        

     }
     const hideMenu=()=>{
            setShowMenu({
                show:true
            })
     }
  return (
    <div className=' flex shadow-lg sticky justify-between items-center lg:justify- top-2 pl-2'>
      <div className='relative h-20 w-32 ml-10  '>
      <Image src={SG_Datalytics} layout='fill' objectFit='contain' />
      </div>
      
      <div className='flex' >
        <Button  title='Prices' dropdown={true} />
        <Button  title='Reports' dropdown={true} />
        <Button  title='Outlooks' dropdown={true} />
        <Button  title='Services' dropdown={true} />
    
        <Button title='Database' dropdown={false} />
        <Button title='Infographics' dropdown={false} />
      </div>
      <div>
      <div>
       {showMenu.show?(
          <Bars3Icon onClick={toggleIcon} className='h-8 lg:hidden '  />
       ):( <section className="fixed inset-y-0 right-0 z-50 flex">
       <div className="w-screen max-w-sm">
         <div className="flex h-full flex-col divide-y divide-gray-200 bg-gray-50">
           <div className="overflow-y-scroll">
             <header className="flex h-16 items-center justify-between pl-6">
               <span clasNames="text-sm font-medium uppercase tracking-widest">
                 Menu
               </span>
     
               <button
                 aria-label="Close menu"
                 className="h-16 w-16 border-l border-gray-200"
                 type="button"
               >
                <XCircleIcon onClick={hideMenu}  className='text-gray-600 h-8'/>
               </button>
             </header>
     
             <nav
               className="flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200 text-sm font-medium text-gray-500"
             >
               <a href="" className="px-6 py-3"> Home </a>
               <a href="" className="px-6 py-3"> About </a>
               <a href="" className="flex items-center justify-between px-6 py-3">
                 Products
                
                  
               </a>
               <a href="" className="flex items-center justify-between px-6 py-3">
                 Collections
                
               </a>
               <a href="" className="px-6 py-3"> Services </a>
               <a href="" className="px-6 py-3"> History </a>
               <a href="" className="px-6 py-3"> Contact </a>
               <a href="" className="flex items-center justify-between px-6 py-3">
                 Support
                
               </a>
               <a href="" className="flex items-center px-6 py-3">
                
                 Account
               </a>
               <a href="" className="flex items-center px-6 py-3">
                
                 Careers
               </a>
               <a href="" className="px-6 py-3"> FAQs </a>
               <a href="" className="px-6 py-3"> Privacy Policy </a>
               <a href="" className="px-6 py-3"> Terms Conditions </a>
             </nav>
           </div>
         </div>
       </div>
     </section>
     
           )}
    </div>

      </div>
    </div>
  )
}

export default NavBar

