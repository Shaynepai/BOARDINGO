import VerifyStatus from "../../../components/VerifyStatus";
import AdminMenu from "../components/AdminMenu";
import CreateTenant from "../components/CreateTenant";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MenuTenants() {

  const [tenants, setTenants] = useState([])
  const fetchData = async () => {
    try {
      const response = await axios.get('/admin/getAllData') // Replace this with your actual backend route
      setTenants(response.data.tenants)
      console.log(response.data.tenants)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
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
  <h1 className="text-sm">Tenants</h1>

{/* Search Panel */}
<div className="border rounded-2xl bg-slate-100 px-48 mt-5">
  <input type="text" placeholder="Search" className="text-xs"/>
 </div>
{/* End of Search Panel */}


<div className="flex justify-center mt-8">
  <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">ID</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">user Reference ID</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">current accommodation ID</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
      {tenants.map((tenant)=>
    <tr key={tenant._id} className="my-2" >
      <td scope="col" className="px-6 py-4 font-medium text-gray-900">{tenant._id}</td>
      <td scope="col" className="px-6 py-4 font-medium text-gray-900">{tenant.user}</td>
      <td scope="col" className="px-6 py-4 font-medium text-gray-900">{tenant.currentAccommodation ?(tenant.currentAccommodation): "- - currently NOT - -"}</td>
    </tr>)}
  </tbody>
  </table>
</div>



  </div>
</div>


{/* =================================================== */}
<div className="border bg-slate-950 ">
</div>
{/* =================================================== */}


    <div className="">
    <CreateTenant />
    
    </div>



   
   
    </div>
  )
}



// <th className="border border-slate-600 ">Email</th>
// <th className="border border-slate-600 ">Status</th>
// <th className="border border-slate-600 ">Action</th>
{/* <td >
      <div>
        <VerifyStatus />
        </div>
      </td>
      <td><div className="flex gap-1">
          <div className="border cursor-pointer">View</div>
          <div className="border cursor-pointer">Edit</div>
          <div className="border cursor-pointer">Delete</div>
        </div>
      </td> 
    
    
<div className="flex justify-center mt-8">
  <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">ID</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">user Reference ID</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">current accommodation ID</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
{{tenants.map((tenant)=>
    <tr key={tenant._id} className="my-2" >
      <td><div>Tenant</div></td>
      <td>{tenant._id}</td>
      <td>{tenant.user}</td>
      <td>{tenant.currentAccommodation ?(tenant.currentAccommodation): "- - currently NOT - -"}</td>
    </tr>)}
  </tbody>
  </table>
</div>


    
    
    
    
    
    
    */}