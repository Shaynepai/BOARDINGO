import HostProfile from '../components/HostProfile';
import HostMenu from '../components/HostMenu';
import OverviewContent from '../components/OverviewContent';

export default function HostOverview() {
  return (
    <>
    <div>
    <hr />
   <div className="flex">
   <div>
    <HostMenu />
   </div>

     {/* Long Vertical */}
     <div className="border bg-headercolor hidden md:block"></div>
     {/*End of Long Vertical */}



     {/* -----------------PAGES-------------------------  */}
     <div className="h-screen flex-1 p-7 ">
     <OverviewContent />
     </div>



{/* Host Profile */}
<HostProfile />

{/* Host Profile */}

   </div>
   </div>
   </>
  )
}
