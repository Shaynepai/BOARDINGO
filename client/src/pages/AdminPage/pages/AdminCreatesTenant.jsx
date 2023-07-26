/* eslint-disable react/no-unescaped-entities */
import AdminCreateTenant from "../components/AdminCreateTenant";
import AdminMenu from "../components/AdminMenu";



export default function AdminCreatesTenant() {
  return (

    <div className="flex justify-between ">


       <div>
         <AdminMenu />
       </div>


       <div className="flex grow p-5 h-screen">
    
            {/* Contents */}


<div>
    <AdminCreateTenant />
</div>

      


       </div>
       
</div>





   
   
  
  )
}
