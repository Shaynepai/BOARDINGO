
const DropdownButton = () => {
  
  return (
    
      <div className="mb-5">
     
      <select className='border rounded-2xl text-xl py-2 px-1' name="AccomodationType">
        <option value="boardinghouse">Boarding House</option>
        <option value="dormitory">Dormitory</option>
        <option value="pads">Pads</option>
        <option value="apartments">Apartments</option>
      </select>
   
      </div>
  );
};

export default DropdownButton;
