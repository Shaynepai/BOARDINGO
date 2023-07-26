import {Link} from 'react-router-dom'


export default function HostHeader() {
  return (
    <div className='h-16 bg-headercolor -mt-2  '>
    <header className="flex justify-between mb-3 mx-10 gap-1 mt-2">
{/* Website LOGO */}


    
        <Link to='/Host' className="flex items-center gap-1 mt-4 text-white">
          <img className='w-5 h-5 my-auto mx-auto' src="/src/assets/LOGO_H_WHITE.png" />
          <img className='h-3 hidden md:block' src="\src\assets\B_White.png"/>
        </Link> 
     
{/*End of Website LOGO */}






{/* Search Bar */}

{/* Header Name */}
<h1 className='text-white font-extrabold mt-3 text-xl'>Host</h1>
{/* Header Name */}

{/* Profile Logo */}
<div className='flex justify-center gap-2 ml-1 mt-1'>



{/* Bell Icon */}
 <div className='cursor-pointer mt-3 text-white '>
 <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
 </svg>
 </div>
{/*End of Bell Icon */}

        <Link to={'/login'} className="flex mt-2 items-center rounded-full m-auto  hover:shadow-md bg-white border-2 border-white ">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg> */}
          <div className=" bg-white text-gray-300 rounded-full border-1 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 relative top-1 ">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>



          </div>
        </Link>
        </div>
{/*End Of Profile Logo */}

      </header>
</div>

  )
}
