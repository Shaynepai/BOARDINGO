import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Card() {

  const[accommodations, setAccommodations] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get('/admin/getAllData') // Replace this with your actual backend route
      setAccommodations(response.data.accommodations)
      console.log(response.data.accommodations)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Define a function to fetch the data
    fetchData()
  }, []);

  return (
    <>
    <div className=" justify-center container mx-auto my-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 m-auto">
    

    {/* Return With The Data Key */}
    
              <div className="">
              {/* Card */}
          {accommodations.map((accommodation)=>
            <div key={accommodation._id} className=" ease-in-out duration-150 hover:shadow-md shadow-sm shadow-gray-400/50 rounded-xl cursor-pointer  bg-secondary" >
            <div className="p-3 flex flex-col">
    
              <div className="">
              <img className="object-cover rounded-lg shadow-md hover:shadow-xl duration-300" src={accommodation.images[0]} alt="Photo" />
              </div>
    {/* Title */}
              <h5 className="text-lg md:text-lg font-medium mt-3 truntruncate text-black">{accommodation.Title}</h5>
    {/*End of Title */}
    
    {/* Pricing */}
              <p className="text-black text-md mt-3 truntruncate ">{accommodation.Price}</p>
    {/*End of Pricing */}
              </div>
    
           </div>
          )}
     {/*End of Card */}
    
              </div>
    
         
          
          
    
        </div>
         </>
  )
}
