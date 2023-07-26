import ViewAccommodation from '../components/ViewAccommodations'
import AdminMenu from "../components/AdminMenu"
export default function AdminViewAccommodation() {
  return (
    <div className="flex justify-between ">


    <div>
      <AdminMenu />
    </div>


    <div className="flex grow p-5 h-screen">
 
         {/* Contents */}


<div>
    
</div>

        <ViewAccommodation />

  </div>
    
</div>
  )
}
