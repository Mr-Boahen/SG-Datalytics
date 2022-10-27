import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import NewsCard from '../components/NewsCard'
import Button from '../components/Button'
import ServicesCard from '../components/ServicesCard'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>SG DATALYTICS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>
        {/* Navigation bar */}
        <div className='sticky top-0 z-50 '>
        <NavBar/>
      </div>
      {/* Banner and Search Bar */}
      <section >
        
         
      <div className="flex  items-start md:items-center relative z-20 rounded-t-2xl  flex-col h-[500px] bg-gradient-to-t  bg-[#044b6d]/90  lg:items-center lg:justify-center">
          <div className='p-10 w-[100%]  lg:w-[1100px] lg:flex-col lg:items-center '>
          <h4 className='text-5xl sm:text-6xl text-white lg:ml-20 font-thin p-10 '>Empowering People With Data</h4>
          <p className=' text-sm ml-10 font-semibold md:text-lg text-gray-100 lg:ml-72 mt-5'>Insights and facts across 170 industries and 150 countries</p>
          <svg  className='absolute top-0 left-0 z-1' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#E8EAED" fillOpacity={0.1} d="M38.6,-45.1C54.5,-32.7,75,-24.8,81.7,-10.8C88.5,3.1,81.6,23.1,68.9,34.7C56.2,46.3,37.7,49.6,22.2,50.9C6.7,52.2,-5.9,51.5,-23.1,50.7C-40.3,50,-62.2,49.3,-75.3,38C-88.5,26.6,-92.9,4.7,-86.2,-12C-79.4,-28.8,-61.5,-40.4,-45.3,-52.7C-29.1,-65,-14.5,-78,-1.6,-76.2C11.4,-74.3,22.7,-57.5,38.6,-45.1Z" transform="translate(100 100)" />
          </svg>
          </div>
          <div className='flex items-center ml-20 border-2 relative z-20 bg-gray-100 border-gray-300 rounded-lg lg:mt-5 p-2   w-[50%]'>
            
            <input className='flex-grow h-10 w-[50%] font-thin  outline-none bg-gray-100' type='text' placeholder='Find Statistics, forecasts and Studies' />
            <MagnifyingGlassIcon className='h-6 text-gray-500'/>

          </div>
         
      </div> 
      </section>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1d5d7b" d="M0,0L0,192L36.9,192L36.9,0L73.8,0L73.8,288L110.8,288L110.8,0L147.7,0L147.7,320L184.6,320L184.6,128L221.5,128L221.5,32L258.5,32L258.5,288L295.4,288L295.4,256L332.3,256L332.3,128L369.2,128L369.2,32L406.2,32L406.2,64L443.1,64L443.1,256L480,256L480,224L516.9,224L516.9,96L553.8,96L553.8,256L590.8,256L590.8,256L627.7,256L627.7,32L664.6,32L664.6,32L701.5,32L701.5,64L738.5,64L738.5,32L775.4,32L775.4,64L812.3,64L812.3,160L849.2,160L849.2,64L886.2,64L886.2,64L923.1,64L923.1,192L960,192L960,128L996.9,128L996.9,256L1033.8,256L1033.8,160L1070.8,160L1070.8,320L1107.7,320L1107.7,160L1144.6,160L1144.6,160L1181.5,160L1181.5,0L1218.5,0L1218.5,192L1255.4,192L1255.4,192L1292.3,192L1292.3,32L1329.2,32L1329.2,96L1366.2,96L1366.2,224L1403.1,224L1403.1,160L1440,160L1440,0L1403.1,0L1403.1,0L1366.2,0L1366.2,0L1329.2,0L1329.2,0L1292.3,0L1292.3,0L1255.4,0L1255.4,0L1218.5,0L1218.5,0L1181.5,0L1181.5,0L1144.6,0L1144.6,0L1107.7,0L1107.7,0L1070.8,0L1070.8,0L1033.8,0L1033.8,0L996.9,0L996.9,0L960,0L960,0L923.1,0L923.1,0L886.2,0L886.2,0L849.2,0L849.2,0L812.3,0L812.3,0L775.4,0L775.4,0L738.5,0L738.5,0L701.5,0L701.5,0L664.6,0L664.6,0L627.7,0L627.7,0L590.8,0L590.8,0L553.8,0L553.8,0L516.9,0L516.9,0L480,0L480,0L443.1,0L443.1,0L406.2,0L406.2,0L369.2,0L369.2,0L332.3,0L332.3,0L295.4,0L295.4,0L258.5,0L258.5,0L221.5,0L221.5,0L184.6,0L184.6,0L147.7,0L147.7,0L110.8,0L110.8,0L73.8,0L73.8,0L36.9,0L36.9,0L0,0L0,0Z"></path></svg>
      </div>
            {/* News and reports */}
          
            <svg className='absolute  top-[600px]  ' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#e8eaed" fillOpacity={0.3} d="M32.2,-57.2C43.5,-49.3,55.5,-44.2,63.2,-35.1C70.9,-26,74.3,-13,76.7,1.4C79,15.7,80.3,31.4,72.7,40.6C65,49.8,48.4,52.5,34.8,58.9C21.2,65.3,10.6,75.4,-2.1,79.1C-14.9,82.8,-29.8,80.1,-39.9,71.7C-50,63.2,-55.4,49.2,-63.6,36.3C-71.7,23.4,-82.5,11.7,-81.5,0.6C-80.5,-10.5,-67.6,-21.1,-58.6,-32.4C-49.6,-43.7,-44.4,-55.9,-35.3,-65C-26.2,-74.1,-13.1,-80.1,-1.3,-77.8C10.5,-75.5,21,-65,32.2,-57.2Z" transform="translate(100 100)" />
            </svg>
       <section >
          <div className='flex  flex-col md:items-center  mt-52 w-[100%]  border-t-4  bg-gray-100/60 rounded-lg   p-10   '>
                <div className='flex flex-col  lg:items-center  p-10  '>
                    <div className='w-52'>
                    <h4 className='text-2xl font-bold text-[#044b6d] mb-5 relative z-10 '>NEWS & REPORTS</h4>
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
           
       </section>
      

       <section className='flex flex-col items-center mt-52'>
              <div className='w-52'>
                    <h4 className='text-2xl font-bold text-[#044b6d] mb-5 '>OUR SERVICES</h4>
                    </div>
                    <div>
                    <h4 className='font-extralight text-xl md:text-3xl'>Save Time & Money with SG Datalytics</h4>
                </div>
                <div className='md:flex'>
                    <div className='m-5'><ServicesCard/></div>
                    <div className='m-5'><ServicesCard/></div>
                    <div className='m-5'><ServicesCard/></div>
                 
                </div>
       </section>
         
            
          
      
      
      

    
    </div>
    </div>
  )
}

export default Home
