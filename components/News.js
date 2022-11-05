import React from 'react'
import NewsCard from '../components/NewsCard'

const News = () => {
  return (
    <div>
      <div className='flex  flex-col md:items-center  mt-52 w-[100%]  border-t-4  bg-gray-100/60 rounded-lg   p-10   '>
                <div className='flex flex-col  lg:items-center  p-10  '>
                    <div className='w-72'>
                    <h4 className='text-4xl font-bold text-[#1e81b0] mb-5 relative z-10 '>NEWS & REPORTS</h4>
                    </div>
                    <div>
                    <h4 className='font-extralight text-xl md:text-3xl'>Expert reasearch in condensed form</h4>
                    </div>
                    
                  
                  </div> 
                    <div className='flex'>
                    <div className='border-2 border-gray-200 h-[800x] rounded-md shadow-xl'/>
                    <div className='sm:m-10 h-[800px] w-[300px] overflow-y-scroll   rounded-lg sm:border-l-2 sm:border-r-2 sm:flex  sm:h-[600px] sm:w-[700px] lg:w-[1000px] sm:overflow-x-scroll scrollbar-hide  ' >
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                    <NewsCard/>
                    </div> 
                    <div className='border-2 border-gray-200 h-[800x] rounded-md shadow-xl'/>
                    </div>
                  
                 
                  <div>
                  <a href="#_" className="px-5 m-10 py-2.5 relative rounded group w-52  text-white font-medium inline-block">
                    <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                    <span className="relative pl-1">Go to news Archives</span>
                  </a>
                  </div>
          </div>
    </div>
  )
}

export default News
