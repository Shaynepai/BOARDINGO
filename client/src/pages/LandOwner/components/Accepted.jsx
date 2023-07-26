import ReserveMenu from "./ReserveMenu";

export default function Accepted() {
  return (
   <>
     <div className="">

    <ReserveMenu />
  

     <div className=" flex mt-5 gap-32 ml-16 ">
     
        <div>
       <h1>NAME</h1>
       </div>
       <div>
       <h1>ACCOMMODATION TYPE</h1>
       </div>
       <div>
       <h1>DATE REQUESTED</h1>
       </div>
       </div>
       <div className="border grow"></div>
     </div>
   </>
  )
}
