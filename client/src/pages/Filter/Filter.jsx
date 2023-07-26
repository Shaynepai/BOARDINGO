/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */



const Filter = ({ open, onClose }) => {


  if (!open) return null;

  return (
    <div onClick={onClose} className='flex absolute bg-transparent bg-slate-400 justify-center'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=''
      >

{/* Modal */}
        <div className='mt-9 shadow-2xl p-1 bg-white border rounded-xl max-w-4xl '>

{/* Filter and Close Part */}
        <div className="flex justify-between">

{/* ----------Hidden Object-------------- */}
<div className="invisible">
  <h1>Hidd</h1>
</div>
{/*End Of ----------Hidden Object-------------- */}


        <div>
        <h1 className=" text-3xl font-semibold">Filters</h1>




          </div>
{/* Close Icon */}
          <div>

            <img className="flex w-10 cursor-pointer rounded-full m-1" src="/src/assets/cancel.png" alt="cancel" onClick={onClose}  />
         
          </div>
{/*End of Close Icon */}
</div>
{/*End of Filter and Close Part */}


<hr />   {/* Long Horizontal Line */}

          <div className='content'>

{/* Price range*/}
<div> <div className="invisible"><h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quis culpa quasi deleniti </h1></div>
            <h1 className="text-xl font-semibold">Price range</h1>

            <div className="my-3 flex justify-around ">
           
            <div className="flex max-w-md">
                <input  className="text-center border mr-20" placeholder="Price Range"/>
                
            </div>
        </div>
</div>
{/*End of Price range */}

<hr />   {/* Long Horizontal Line */}

{/* Type of place */}
<div>
  <h1 className="text-xl font-semibold">Type of place</h1>
</div>
   {/*End of Type of place */}      

   <hr />   {/* Long Horizontal Line */}

   {/* Rooms and beds */}
     <div>
<h1 className="text-xl font-semibold">
Rooms and beds
</h1>
     </div>
  {/*End of Rooms and beds */}

  <hr />   {/* Long Horizontal Line */}

{/* Property type */}
<div>
  <h1 className="text-xl font-semibold">
  Property type
  </h1>
</div>
{/*End od Property type */}

<hr />   {/* Long Horizontal Line */}

{/* Amenities */}
<div>
<h1 className="text-xl font-semibold">Amenities</h1>
</div>
{/* End of Amenities */}

<hr />   {/* Long Horizontal Line */}

{/* Booking options */}
<div>
  <h1 className="text-xl font-semibold">Booking options</h1>
</div>
{/* End of Booking options */}
            
          </div>



          {/* <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'>YES</span>, Done!
            </button>
            <button className='btnOutline'>
              <span className='bold'>NO</span>, thanks!
            </button>
          </div> */}





        </div>
      </div>
    </div>
  );
};

export default Filter;
