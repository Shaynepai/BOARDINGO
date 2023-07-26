
import "./App.css";
import { stockData } from "./data";
import Img from "./assets/image11111.jpg"

export const Stocks = () => {
  return (

// body // 
//* Grid 
   <div className=" justify-center container mx-auto my-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 m-auto">



      {stockData.map((data, key) => {
        return (
          <>
         
          <div className="" key={key.id}>
          {/* Card */}
          <div className=" ease-out hover:shadow-md shadow-sm shadow-gray-400/50 rounded-xl cursor-pointer  bg-secondary" >
          <div className="p-3 flex flex-col">
          
          <div className=" ">
          <img className="object-cover rounded-lg shadow-lg" src={Img} alt="" />
          </div>
{/* Title */}
          <h5 className="text-lg md:text-lg font-medium mt-3 truntruncate text-black">{data?.bh_name}</h5>
{/*End of Title */}

{/* Pricing */}
          <p className="text-black text-md mt-3 truntruncate ">{data.bh_price}</p>
{/*End of Pricing */}
          </div>

       </div>
 {/*End of Card */}   
 
          </div>

          </>   
        );
      })}

    </div>

  );
};

//////////// Data Type separator///////////

    // {data.bh_name +
    // " , " +
    // data.pictures +
    // " ," +
    // data.bh_price}

    //////////////////////////////
//////////

