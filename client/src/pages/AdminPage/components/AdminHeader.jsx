import { Link } from 'react-router-dom'
import {getAdminToken} from "./utils/adminPreFligthData"


export default function AdminHeader() {
  const token = getAdminToken()
  return (



    <div className='h-full w-full bg-headercolor'>
    <header className="flex justify-between mb-3 mx-10 gap-1 mt-2">


{/* Website LOGO */}


    
<Link to={token ? '/Admin/usersList' :' /Admin'} className="flex items-center gap-1 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span className=" font-bold text-2xl text-white hidden md:block">Boardingo</span>
        
        </Link> 
     
{/*End of Website LOGO */}

{/* Admin Text */}

  <div className=" font-bold text-2xl text-white mt-1">Admin</div>
{/* End of Admin Text */}



{/* Search Bar */}

{/* <SearchBar /> */}



{/*End of Search Bar */}



{/* Profile Logo */}
<div className='flex justify-center gap-2 ml-1'>



{/* Bell Icon */}
 <div className='cursor-pointer mt-1.5 text-white '>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
 </svg>
 </div>
{/*End of Bell Icon */}

        
        </div>

    </header>
    </div>



  )
}
