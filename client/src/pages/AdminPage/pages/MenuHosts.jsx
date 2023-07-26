 import VerifyStatus from "../../../components/VerifyStatus";
import AdminMenu from "../components/AdminMenu";
import CreateHosts from "../components/CreateHosts";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MenuHosts() {

  const[hosts, setHosts] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/admin/getAllData') // Replace this with your actual backend route
        setHosts(response.data.hosts)
        console.log(response.data.hosts)
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    // Define a function to fetch the data
    fetchData()
  }, []);

  return (

    <div className="flex h-full justify-between ">
       <div>
         <AdminMenu />
       </div>
       <div className="flex grow p-5 h-screen">
        <div className="w-96 grow text-center">
          <h1 className="text-sm">Host</h1>
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
                  <th scope="col" className="px-6 py-4 font-medium text-gray-900">Numbers of Accommodations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {hosts.map((host)=>
                  <tr key={host._id} className="my-2" >              
                    <td scope="col" className="px-6 py-4 font-medium text-gray-900">{host._id}</td>
                    <td scope="col" className="px-6 py-4 font-medium text-gray-900">{host.user}</td>
                    <td scope="col" className="px-6 py-4 font-medium text-gray-900">{host.accommodations.length}</td>
                  </tr>
                )}
            </tbody>
            </table>
          </div>
        </div>
      </div>
        {/* =================================================== */}
       <div className="border bg-slate-950 ">
      </div>
        {/* =================================================== */}
      <div>
        <CreateHosts />
      </div>
    </div>
  )
}


/*

<div className="flex justify-center mt-8">
  <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">ID</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">user Reference ID</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Numbers of Accommodations</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
      {hosts.map((host)=>
        <tr key={host._id} className="my-2" >              
          <td><div>Host</div></td>
          <td>{host._id}</td>
          <td>{host.user}</td>
          <td>{host.accommodations.length}</td>
        </tr>
      )}
  </tbody>
  </table>
</div>

*/ 