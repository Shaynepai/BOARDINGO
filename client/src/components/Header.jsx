
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { useCookies } from "react-cookie";
import SearchBar from './SearchBar';
import ChatIcon from './ChatIcon';
// import SearchBar from './SearchBar'
export default function Header() {
  const [cookies] = useCookies(["access_token"]);
  const accessToken = cookies.access_token;
  const userID = localStorage.getItem("userID");
  const loginID = localStorage.getItem("loginID");
  const role = localStorage.getItem("role");
  return (


    <div className=' w-full bg-headercolor'>
    <header className="flex justify-between mb-3 mx-10 gap-1 mt-2">
{/* Website LOGO */}


  
        <Link to={'/'} className="flex items-center w-auto gap-1 text-white">
          <img className='w-8 h-8 my-auto mx-auto' src="/src/assets/LOGO_H_WHITE.png" />
          <img className='w-96 h-5 mx-auto hidden md:block' src="\src\assets\B_White.png"/>
        </Link> 
     
{/*End of Website LOGO */}






{/* Search Bar */}

{/* <SearchBar /> */}

<SearchBar />

{/*End of Search Bar */}



{/* Profile Logo */}
<div className='flex justify-center gap-2 ml-1'>

{/* Chat Icon */}
<div className='m-auto'>
  <ChatIcon />
</div>

{/* Chat Icon */}



{/* Bell Icon */}



{accessToken && userID && loginID&&(
  <div className='cursor-pointer m-auto text-white '>



  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 ">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
  </svg>
  </div>
 )}
{/*End of Bell Icon */}


        <Link to={!accessToken || !userID && !loginID ?('/login') : null} className="flex items-center rounded-full m-auto  hover:shadow-md bg-white border-2 border-white ">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg> */}
          <div className=" bg-white text-gray-300 rounded-full border-1 overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 relative top-1">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
          </div>
        </Link>

{/* Name Of The User */}

{/* Name Of The User */}



        {/* Logout Button */}
        <div>
<Logout />
        </div>
         {/* End of Logout Button */}
        </div>
{/*End Of Profile Logo */}

      </header>
</div>






  )
}
