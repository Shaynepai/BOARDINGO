
import AdminMenu from "../components/AdminMenu";
import AdminEditForm from "../components/AdminEditForm";

export default function AdminEditUser() {   

  return (
    <div className="flex justify-between ">


    <div>
      <AdminMenu />
    </div>


    <div className="flex grow p-5 h-screen">
 
         {/* Contents */}


<div>
  <AdminEditForm />
</div>

   


    </div>
    
</div>
  )
}
