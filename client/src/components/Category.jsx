import { useState } from 'react';
import Filter from '../pages/Filter/Filter'

export default function Category() {
  const [ openModal, setOpenModal ] = useState(false);


  return (
    <>
        <div className="flex justify-center p-2 gap-5 ">

<div className="text-xs cursor-pointer border transition duration-150 ease-in-out border-secondary rounded-xl py-1 px-5 hover:shadow-md hover:shadow-amber-500 text-center bg-white text-fourth hidden md:block font-semibold">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
</svg>
All
</div>
<div className="text-xs cursor-pointer border transition duration-150 ease-in-out border-secondary rounded-xl py-1 px-5 hover:shadow-md hover:shadow-amber-500 text-center bg-white text-fourth hidden md:block font-semibold">


<img className='w-6 mx-auto' src="/src/assets/shelter.png" alt="dormitory" />
Boarding Houses
</div>
<div className="text-xs cursor-pointer border transition duration-150 ease-in-out border-secondary rounded-xl py-1 px-5 hover:shadow-md hover:shadow-amber-500 text-center bg-white text-fourth hidden md:block font-semibold">
<img className='w-6 mx-auto' src="/src/assets/apartment.png" alt="apartment" />
Dormitory
</div>
<div className="text-xs cursor-pointer border transition duration-150 ease-in-out border-secondary rounded-xl py-1 px-5 hover:shadow-md hover:shadow-amber-500 text-center bg-white text-fourth hidden md:block font-semibold">
<img className='w-6 mx-auto' src='/src/assets/house.png' alt='pads' />
Pads
</div>
<div className="text-xs cursor-pointer border transition duration-150 ease-in-out border-secondary rounded-xl py-1 px-5 hover:shadow-md hover:shadow-amber-500 text-center bg-white text-fourth hidden md:block font-semibold">
<img className='w-6 mx-auto' src="/src/assets/residential.png" alt="apartment" />
Apartments
</div>

{/* Icon Filter and Text */}
<div className="hidden my-auto md:block cursor-pointer" onClick={()=> setOpenModal(true)}>{/* Hidden When small screen */}
<div className="flex text-center gap-1 border transition duration-150 ease-in-out border-secondary rounded-xl py-1 px-5 hover:shadow-md hover:shadow-amber-500 bg-white  font-semibold"> <div className=" text-fourth ">Filter</div>
<div className="text-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
</svg>
</div>
</div>
</div>
{/*End of Icon Filter and Text */}

<Filter open={openModal}
onClose={() => setOpenModal(false)} />

</div>
    </>
  )
}
