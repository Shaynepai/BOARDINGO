import AdminMenu from "../components/AdminMenu";
import CreateHosts from "../components/CreateHosts";
import CreateTenant from "../components/CreateTenant";
import VerifyStatus from "../../../components/VerifyStatus";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";
import ViewButton from "../components/ViewButton"
import { useState, useEffect } from 'react';
import axios from 'axios';




export default function MenuUsers() {

  const [users, setUsers] = useState([]);
  
  const fetchData = async () => {
    try {
      const response = await axios.get('/admin/getAllData') // Replace this with your actual backend route
      setUsers(response.data.users)
      console.log(response.data.users)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  useEffect(() => {
   
    // Define a function to fetch the data
    fetchData()
  }, []);
  {!users &&(
    <div>Loading...</div>
  )}

  return (
    <>
    <div className="flex justify-between ">



    <div className="max-h-full">
      <AdminMenu />
    </div>



<div className="flex grow p-5 h-screen">
<div className="w-96 grow text-center">
  <h1 className="text-sm">Users</h1>

{/* Search Panel */}
<div className="border rounded-2xl bg-slate-100 px-48 mt-5">
  <input type="text" placeholder="Search" className="text-xs"/>
 </div>
{/* End of Search Panel */}


<div className="flex justify-center mt-8">
<table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead className="bg-gray-50">
   
      <tr>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Role</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Status</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Password</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Action</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
{users.map((user)=>
  <tr key={user._id} className="hover:bg-gray-50 -z-0">
  <td scope="col" className=" flex gap-3 px-6 py-4 font-normal text-gray-900">
    <hr />
      <div className="relative h-10 w-10">
        <img
          className="h-full w-full rounded-full object-cover object-center"
            src={user.profilePic}
          alt=""/>
      </div>
      <div className="text-sm">
        <div className="font-medium text-gray-700">{user.FirstName} {user.LastName}</div>
        <div className="text-gray-400">{user.Email}</div>
        <div className="text-gray-400">id: {user._id}</div>
      </div>
  </td>
  <td scope="col" className="px-6 py-4 font-medium text-gray-900">
    <div>{user.tenant ? ("Tenant"):"Host"}</div>
  </td>
  <td scope="col" className="px-6 py-4 font-medium text-gray-900">
    <div>
      <VerifyStatus />
    </div>
  </td>
  <td scope="col" className="px-6 py-4 font-medium text-gray-900">
  <div className="truncate w-20 ">{user.password}</div>
  </td>
  <td scope="col" className="px-6 py-4 font-medium text-gray-900">
    <div className="flex justify-end gap-4">
      <div className="flex gap-1">
        
        <ViewButton id={user._id} />
        <EditButton id={user._id} />
        <DeleteButton id={user._id} />
      </div>
    </div>
  </td>
</tr>
)}
  </tbody>
  </table>

</div>


  </div>
</div>



<div className="border bg-slate-950 ">
</div>



    <div className="">
    <CreateHosts />
    <CreateTenant />
    </div>



    </div>
    <style>
      {/* ... your existing JSX ... */}
      <style>
        {`
          .scale-custom {
            transform: scale(5); /* 5 times the original size, as 500px is 5 times 100px */
            /* Adjust the transition duration as needed */
          }
        `}
      </style>
    </style>
    </>
    
    
  )
}


/*


<table className="table-fixed border-separate border-spacing-x-5 text-sm border border-slate-500">
  <thead className="">
    <tr className="">
    <th className="border border-slate-600 "><div className="my-1 mx-5">Role</div> </th>
      <th className="border border-slate-600 ">Id</th>
      <th className="border border-slate-600 ">First_Name</th>
      <th className="border border-slate-600 ">Last_Name</th>
      <th className="border border-slate-600 ">Email</th>
      <th className="border border-slate-600 ">Status</th>
      <th className="border border-slate-600 ">Action</th>
    </tr>
  </thead>

<tbody>
    { users.map((user)=>
        <tr key={user._id} className="my-2" >
    
        <td><div>{user.tenant ? ("Tenant"):"Host"}</div></td>
        <td><div className="truncate w-16">{user._id}</div></td>
        <td>{user.FirstName}</td>
        <td>{user.LastName}</td>
        <td>{user.Email}</td>
        <td >
        <div>
          <VerifyStatus />
        </div>
        </td>
          <td>
            <div className="flex gap-1">
            
            <ViewButton id={user._id} />
            <EditButton id={user._id} />
            <DeleteButton id={user._id} />
          </div>
        </td>
      </tr>
      )}
  </tbody>
</table>


   <tr key={user._id} className="hover:bg-gray-50">
        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
          <div className="relative h-10 w-10">
            <img
              className="h-full w-full rounded-full object-cover object-center"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""/>
          </div>
          <div className="text-sm">
            <div className="font-medium text-gray-700">{user.FirstName} {user.LastName}</div>
            <div className="text-gray-400">{user.Email}</div>
            <div className="text-gray-400">id: {user._id}</div>
          </div>
        </th>
        
        <td className="px-6 py-4">
            <div>
            <VerifyStatus />
            </div>
        </td>
        <td className="px-6 py-4">Product Designer</td>
        <td className="px-6 py-4">
          <div className="flex gap-2">
            <span
              className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
              Develop
            </span>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex justify-end gap-4">
          <div className="flex gap-1">
            
            <ViewButton id={user._id} />
            <EditButton id={user._id} />
            <DeleteButton id={user._id} />
          </div>
          </div>
        </td>
      </tr>

*/ 