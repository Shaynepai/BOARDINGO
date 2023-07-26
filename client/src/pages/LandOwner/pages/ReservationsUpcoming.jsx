import { Link } from "react-router-dom";
import HostMenu from "../components/HostMenu";

export default function ReservationsUpcoming() {
  return (
   <>
     <div className="flex">
    <HostMenu />

   
     <div className="flex-1 mx-auto"> 
 
     <h1 className="mt-10 text-3xl ml-10">Reservations</h1>

        
<div className="flex gap-5 mt-5 ml-10">

<Link to="">
<div className="">Upcoming</div>
<div className="border mt-1 border-black"></div>
</Link>


<Link to="/Host/reservations-accepted">
<div>Accepted</div>
</Link>


<Link to="/Host/reservations-declined">
<div>Declined</div>
</Link>
</div>


<div className="border  mx-10 mt-3 rounded-xl">
   <div className="flex mt-5 gap-44 ml-72">
        <div>
       <h1>NAME</h1>
       </div>
       <div>
       <h1>ACCOMMODATION TYPE</h1>
       </div>
       <div>
       <h1>DATE REQUESTED</h1>
       </div>  
        
       </div>
    <div className="border grow mx-11"></div>

    {/* The Content */}

    <div className="flex mt-5 gap-52 ml-16 mb-5">
    <div>
       <h1>1</h1>
       </div>
        <div>
       <h1>Allan Smith</h1>
       </div>
       <div>
       <h1>Boarding House</h1>
       </div>
       <div>
       <h1>07/28/23</h1>
       </div>  


       <div  className="flex gap-3">
       <div>
       <button className="border p-1 -mt-1 rounded-md text-white bg-emerald-500 shadow-md  hover:shadow-green-500 duration-300 ease-in-out">Accept</button>
       </div>  
       <div>
       <button className="border p-1 -mt-1 rounded-md text-white bg-rose-500 shadow-md  hover:shadow-rose-500 duration-300 ease-in-out">Decline</button>
       </div>  
        
        </div>

       </div>
  {/*End of The Content */}

  <div className="border grow mx-11 mb-10"></div>

     </div>
</div>
   
     </div>
   </>
  )
}
