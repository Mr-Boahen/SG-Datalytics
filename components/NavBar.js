import React, { useState } from 'react'
import Image from 'next/image'
import SG_Datalytics from '../images/Statista_logo.svg.png'
import {Bars3Icon,XCircleIcon} from '../node_modules/@heroicons/react/24/outline'
import Button from '../components/Button'
const NavBar = () => {
    const [showMenu,setShowMenu]=useState({
        show:true,
    })
    console.log(showMenu.show)
     const toggleMenu=()=>{
    
        setShowMenu('')
        

     }
     const hideMenu=()=>{
            setShowMenu({
                show:true
            })
     }
  return (
    <div className=' flex shadow-lg  justify-between items-center   pl-2 bg-gray-200/80'>
      <div className='relative h-20 w-32  '>
      <Image src={SG_Datalytics} layout='fill' objectFit='contain' />
      </div>
      
      <div className=' hidden absolute right-2    xl:inline-flex px-3 py-1 max-h-14' >
        <Button  title='Prices' dropdown={false} />
        <Button  title='Reports' dropdown={false} />
        <Button  title='Outlooks' dropdown={false} />
        <Button  title='Services' dropdown={false} />
    
        <Button title='Database' dropdown={true} />
        <Button title='Infographics' dropdown={true} />
      </div>
      
        <div>
          {showMenu.show?(
              <div className='xl:hidden p-1 m-2 border-2 border-gray-500 rounded-lg hover:scale-110 transition transform duration-200 ease-out'>
                <Bars3Icon onClick={toggleMenu} className='h-8 text-[#15688f]  '  />
              </div>
          ):( <section className="fixed inset-y-0 right-0 z-50 flex lg:hidden ">
                  <div className="w-screen max-w-sm">
                    <div className="flex h-60 flex-col divide-y rounded-xl shadow-lg divide-gray-200 bg-[#9cb9c7]/90">
                      <div className="overflow-y-scroll scrollbar scrollbar-thumb-[#15688f] scrollbar-track-gray-300">
                      <header className="flex h-16 items-center justify-between pl-6">
                        <span clasNames="text-sm font-medium uppercase tracking-widest">
                          Menu
                        </span>
              
                        <button
                          aria-label="Close menu"
                          className="h-16 w-16 "
                          type="button"
                        >
                          <XCircleIcon   onClick={hideMenu}  className='text-gray-600 h-8 hover:scale-105 transition transform duration-200 ease-out'/>
                        </button>
                      </header>
              
                      <nav className="flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200 text-sm font-medium text-black">
                        <a href="" className="px-6 py-3">Prices  </a>
                        <a href="" className="flex items-center justify-between px-6 py-3">Report</a>
                        <a href="" className="flex items-center justify-between px-6 py-3">Database</a>
                        <a href="" className="px-6 py-3"> Infographics </a>
                        <a href="" className="px-6 py-3"> Services </a>
                        <a href="" className="px-6 py-3"> Contact </a>
                        <a href="" className="flex items-center justify-between px-6 py-3">Outlooks </a>
                       
                      </nav>
                    </div>
                  </div>
                </div>
              </section>
     
           )}
      

      </div>
    </div>
  )
}

export default NavBar

