/* eslint-disable react/no-unescaped-entities */
import VerifyStatus from "../../../components/VerifyStatus";
import AdminMenu from "../components/AdminMenu";
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function MenuAccommodation() {

  const[accommodations, setAccommodations] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/admin/getAllData') // Replace this with your actual backend route
        setAccommodations(response.data.accommodations);
        console.log(response.data.accommodations)
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    // Define a function to fetch the data
    fetchData()
  }, []);

  return (
    
    <div className="flex justify-between ">   
       
   
   
       <div>
         <AdminMenu />
       </div>
      

       <div className="flex grow p-5 h-screen">
<div className="w-96 grow text-center">
  <h1 className="text-sm">Accommodation</h1>

{/* Search Panel */}
<div className="border rounded-2xl bg-slate-100 px-48 mt-5">
  <input type="text" placeholder="Search" className="text-xs"/>
 </div>
{/* End of Search Panel */}

{/* Panel Mode */}
<div className="flex mt-5 rounded-3xl p-1">
<div className="">
<Link to="/Admin/accommodationList">
<button className="border text-white bg-headercolor rounded-l-lg border-black p-1 hover:p-2 hover:rounded-br-lg duration-500">Table</button>
</Link></div>

<div className="">
<Link to="/Admin/AdminAccommodationCard">
<button className="border text-white bg-headercolor rounded-r-lg border-black p-1 hover:p-2 hover:rounded-bl-lg duration-500">Card</button>
</Link>
</div>
</div>
{/* Panel Mode */}


<div className="flex justify-center mt-3">

<table className="table-fixed border-separate border-spacing-x-5 text-sm border border-slate-500">
  <thead className="">
    <tr className="">
    <th className="border border-slate-600 "><div className="my-1 mx-5">Category</div> </th>
    <th className="border border-slate-600 ">Id</th>
      <th className="border border-slate-600 ">Title</th>
      <th className="border border-slate-600 ">Price</th>
      <th className="border border-slate-600 ">Host Reference ID</th>
      <th className="border border-slate-600 ">Tenants Count</th>
      <th className="border border-slate-600 ">Status</th>
      <th className="border border-slate-600 ">Action</th>
    </tr>
  </thead>

<tbody>
  {accommodations.map((accommodation)=>
    <tr key={accommodation._id} className="my-2" >
   
      <td><div>{accommodation.category? accommodation.category : '---'}</div></td>
      <td>{accommodation._id}</td>
      <td>{accommodation.Title}</td>
      <td>{accommodation.Price}</td>
      <td>{accommodation.owner}</td>
      <td>{accommodation.tenants.length}</td>
      <td >
        <div>
            <VerifyStatus />
        </div>
      </td>
      <td><div className="flex gap-1">
          <Link to={`/admin/accommodation/view/${accommodation._id}`}>
            <div className="border cursor-pointer">View</div>
          </Link>
          <div className="border cursor-pointer">Edit</div>
          <div className="border cursor-pointer">Delete</div>
        </div>
      </td>
    </tr>
    )}
  </tbody>
</table>

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
