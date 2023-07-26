import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";



export const Card = () => {
  const [accommodations, setAccommodations] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/') 
        setAccommodations(response.data)
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    // Define a function to fetch the data
    fetchData()
  }, []);
  if (!accommodations) {
    return <div>Loading...</div>;
  }
  
  return (
    // body //
    //  Grid
    <div className="justify-center container mx-auto my-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4 mt-5 m-auto">
      {accommodations.map((item) => (
        <div key={item._id}>
          {/* Card */}
          <Link to={`accommodation/${item._id}`}>
          <div className="ease-out hover:shadow-md shadow-sm shadow-gray-400/50 rounded-xl cursor-pointer bg-secondary">
            <div className="p-3 flex flex-col">
              <div className="">
                


                  <img
                    className="object-cover w-full h-40 rounded-lg shadow-lg"
                    src={item.images[0]} // Display the first image from the array
                    alt=""
                  />
              </div>
              {/* Title */}
              <h5 className="text-lg md:text-lg font-medium mt-3 truncate w-50 text-black">
                {item?.Title}
              </h5>
              {/*End of Title */}

              {/* Pricing */}
              <p className="text-black text-md mt-3 truncate w-40 ">Php {item?.Price}</p>
              {/*End of Pricing */}

              {/* Description */}
              <p className="text-black text-md mt-3 truncate w-60 ">{item?.Description}</p>
              {/*End of Description */}
            </div>
          </div>
          </Link>
          {/*End of Card */}
        </div>
      ))}
    </div>
  );
};

export default Card;
