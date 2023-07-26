
export default function SearchBar() {
  return (
    <>
    
    <div className="container grow cursor-pointer flex justify-between rounded-full gap-1  hover:shadow-xl px-5 md:px-20 shadow-grey-300  2xl:mx-96 xl:mx-60  lg:mx-20 sm:mx-10 mx-auto" >
       {/* This is a Vertical line --> <div className=" border-l border-grey-300"></div>  */}
         
          {/* <input className='border-0 rounded-full   ' type="text" placeholder='Search' /> */}
        
          <label className="relative block grow mt-1 mb-1">
  <span className="sr-only">Search</span>
  {/* mini Magnifying Glass */}
  <span className="absolute  inset-y-0 right-0 flex items-center pl-2 mr-3 ">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-slate-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
  </span>
    {/*End of mini Magnifying Glass */}
  <input className="text-sm h-7 placeholder:font-semibold placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-seventh focus:ring-1 sm:text-sm" placeholder="Search..." type="text" name="search"/>
</label>


          {/* Light Gray Vertical Line */}
            {/* <div className=" my-3 border  bg-headercolor hidden md:block"></div> */}
          {/*!!-END OF Light Gray Vertical Line */}

          {/* Magnifying Glass Shape With border */}
          {/* <button className="bg-headercolor text-white rounded-full p-2 m-auto hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button> */}
          {/*End Of Magnifying Glass Shape qith border */}
        </div>

    </>
  )
}
