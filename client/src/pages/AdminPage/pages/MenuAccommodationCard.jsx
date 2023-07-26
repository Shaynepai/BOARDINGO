/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import AdminMenu from "../components/AdminMenu";
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function MenuAccommodation() {


  return (
    
    <div className="flex justify-between ">   
       
   
   
       <div>
         <AdminMenu />
       </div>
      

       <div className="flex grow p-5 h-screen">
<div className="w-96 grow text-center">
  <h1 className="text-sm">Tenants</h1>

{/* Search Panel */}
<div className="border rounded-2xl bg-slate-100 px-48 mt-5">
  <input type="text" placeholder="Search" className="text-xs"/>
 </div>
{/* End of Search Panel */}


{/* Panel Mode */}
<div className="flex mt-5 rounded-3xl p-1">
<div className="">
<Link to='/Admin/accommodationList'>
<button className="border text-white bg-headercolor rounded-l-lg border-black p-1 hover:p-2 hover:rounded-br-lg duration-500">Table</button>
</Link>
</div>


<div className="">
<Link to='/Admin/AdminAccommodationCard'>
<button className="border text-white bg-headercolor rounded-r-lg border-black p-1 hover:p-2 hover:rounded-bl-lg duration-500">Card</button>
</Link>
</div>
</div>
{/* Panel Mode */}



<div>
  <Card />
</div>

  </div>
</div>


{/* =================================================== */}
{/* <div className="border bg-slate-950 ">
</div> */}
{/* =================================================== */}


    <div className="">
   {/* Component Number 3 */}
    </div>



   
   
    </div>
  )
}
