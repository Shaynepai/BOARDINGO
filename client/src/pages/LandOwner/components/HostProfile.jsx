import { Link } from "react-router-dom";

export default function HostProfile() {
  return (
    <div className=" max-w-screen-md min-w-min h-screen  p-5 hidden md:block">
      <div className="border rounded-lg  p-5 bg-gray-300/50">
        <div className="mb-3 font-medium">
          <h1>Host Profile</h1>
        </div>



{/* Division of Host-Profile and Hostname */}
<div className="flex gap-1.5 items-center ">

{/* Profile Logo */}
    <div className="border-2 rounded-full border-slate-800 w-14">
   <img src="/src/assets/profile1.png" className="rounded-full" alt="" />

    </div>
{/*End of Profile Logo */}

{/* Host Name */}
    <h1 className=" w-44 truncate ">D Kristlers asdfasdf asdfasdf  asdfasdfasdfasdfsda</h1>
{/*End of Host Name */}

</div>
{/*End of Division of Host-Profile and Hostname */}

<div className="">
    
    
    <Link to="/Host/newAccommodation">
    <button className="flex bg-orange-400/90 hover:bg-orange-500 duration-500 text-white p-1 mt-3 h-8  rounded-xl min-w-full justify-center gap-1">
    
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


    Create new listings
    </button>
    </Link>
</div>






      </div>
    </div>
  );
}
