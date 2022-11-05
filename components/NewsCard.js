
import {ArrowLongRightIcon} from '../node_modules/@heroicons/react/24/solid'


import React from 'react'

const NewsCard = () => {
  return (
    <div className='pt-10 '>
        <div href="" className="shadow-xl border-2 border-slate-400 ml-10 md:mx-0 hover:scale-125 flex flex-col justify-between rounded-lg bg-white p-8  h-[300px] w-52 sm:h-[500px] sm:w-[300px] hover:shadow-lg sm:hover:scale-105 transition-all transform duration-200 ease-out ">
              <div>
                <h3 className="text-lg font-bold text-indigo-600">100+</h3>
                <div className="mt-4 border-t-2 border-indigo-100 pt-2">
                  <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                    New employees
                  </p>
                </div>
              </div>
              <div className="mt-16 inline-flex items-center text-indigo-600">
                <p className="text-lg font-medium">How we did it</p>
                 <ArrowLongRightIcon className='pl-5 h-6'/>
              </div>
        </div>
        
        
    </div>
  )
}

export default NewsCard
