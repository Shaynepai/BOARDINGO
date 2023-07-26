import { Link } from "react-router-dom"



export default function CreateHosts() {
  return (
    <div className="border grow rounded-2xl text-center  ml-8 mr-8 mt-8 m-auto duration-500 ease-in-out shadow-inner hover:shadow-2xl hover:shadow-slate-300 ">

    <div className="text-center p-1 mx-5 my-5">
 
   <h1 className="text-sm mt-3">Create New Host</h1>
 
 {/* Button */}
 <Link to="/Admin/AdminCreatesHost">
 <div className="flex cursor-pointer justify-center bg-headercolor text-white rounded-full p-1.5 px-2 mx-1 mt-8 gap-1 shadow-md shadow-indigo-300/50">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
   <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
 </svg>
     <label className="cursor-pointer">Create</label>
 
     </div>
  {/* End of Button */}
</Link>

    </div>
 
     </div>
  )
}
