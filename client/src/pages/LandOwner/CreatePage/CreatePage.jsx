
// import { Link } from "react-router-dom";



export default function CreatePage() {

 
  return (
    <div>
    
    <div className=" mt-4 grow flex items-center justify-around">
      <div className=" mb-64">
        <h1 className=" text-4xl text-center mb-4 grid">Create Page</h1>

        <form className="max-w-md mx-auto" >
         
            <input type="text"
            placeholder="House/Boarding House/Apartment/Pod Name"
                 />

          <input type="text" 
          placeholder="Details" 
          
               />
        
          <label className="flex justify-right">Put Images</label>
          <input type="file" 
          placeholder="Pictures" 
           
            
             />
          <button className="primary mt-5">Create Page</button>
          
        </form>
      </div>
</div>
    </div>
  )
}
