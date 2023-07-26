
import ViewUser from "../components/ViewUser";
import AdminMenu from "../components/AdminMenu";

export default function AdminEditUser() {   

  return (
    <div className="flex justify-between ">


    <div>
      <AdminMenu />
    </div>


    <div className="flex grow p-5 h-screen">
 
         {/* Contents */}


<div>
    <ViewUser />
</div>

   

  </div>
    
</div>
  )
}
