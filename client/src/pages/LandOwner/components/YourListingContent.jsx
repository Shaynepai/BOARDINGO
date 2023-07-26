import { Link } from "react-router-dom"



export default function YourListingContent() {

  return (
     
<>
<div className="h-screen flex-1 p-7">
              <div className="flex gap-3">
        <h1 className=" text-2xl font-bold ">Your listing</h1>
        
              {/* Content */}
              
<div className="flex-1 p-3  bg-gray-300/50 rounded-2xl"  >
<div>
<h1 className="text-3xl">Your listings</h1>
</div>
<div className="">
  <input type="text" placeholder="Search list..."/>
</div>

</div>


{/*End of Content */}





</div>
{/* Listing Views */}

<div className="flex p-2 mt-3 gap-1 bg-gray-300/50 rounded-2xl justify-between">

{/* Image */}
<div className="h-36 border hidden md:block">
<Link to="/">
<img className="rounded-xl object-cover duration-500 h-36 w-40 hover:w-44 hover:shadow-xl hover:shadow-emerald-300/50" src="/src/assets/image11111.jpg" alt="" />
</Link>
</div>
{/* Image */}

{/* Details */}
<div className="flex-auto border ">
  <h1 className="text-3xl font-semibold mt-3 pb-1">Title</h1>
  <h1 className="text-2xl font-semibold mt-1">Price</h1>
  <h1 className="text-md text-gray-500 font-thin mt-3">Listed on mm/dd/yy</h1>

</div>
{/* End of Details */}

{/* Actions */}
<div className="flex gap-0.5 border  justify-between">

<Link to="/">
<button className="rounded-l-lg w-20 hover:w-24  duration-500 ease-in-out h-full bg-gradient-to-r from-blue-400 to-green-500  hover:from-green-500 hover:to-blue-400 text-white text-xl hover:text-2xl" >View</button>
</Link>
<Link to="/">
<button className="rounded-sm w-20 hover:w-24  duration-500 ease-in-out h-full bg-gradient-to-r from-green-500 to-blue-400 hover:from-blue-400 hover:to-green-500 text-white text-xl hover:text-2xl" >Edit</button>
</Link>
<button className="rounded-r-lg w-20 hover:w-24  duration-500 ease-in-out bg-red-400 hover:bg-red-500 text-white text-xl hover:text-2xl" >Delete</button>

</div>
{/* End of Actions */}

</div>

{/*End Of Listing Views */}

 </div>

</>
  )
}
