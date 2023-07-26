import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {getOnStoredData} from "../../../components/utils/preFlightData";
import {getHeaders} from "../../../components/utils/headers";
import DropdownButton from "../../../components/DropdownButton";
import Amenities from "./Amenities";

const instance = axios.create({
  baseURL: 'http://localhost:4040',
}); 

export default function CreateList() {

  const navigate = useNavigate();
  const headers = getHeaders();
  const OnStoredData = getOnStoredData();

  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState('');
  const [selectedFilesGallery, setSelectedFilesGallery] = useState([]);
  const [selectedFilesDocuments, setSelectedFilesDocuments] = useState([]);
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [amenities, setAmenities] = useState('');
  const [address, setAddress] = useState('');
  const [rules, setRules] = useState('')
  const long = 8.1773372;
  const lat = 124.1249216;
 

  const Data = {
    title,
    selectedFilesGallery,
    selectedFilesDocuments,
    price,
    description,
    rules,
    address,
    amenities
  }
  
  
  const Menus = [
    { title: "Home", src: "Chart_fill" , link: "/Host/newAccommodation"  },
    { title: "Your Listing ", src: "Folder", link: "/Host/hostyourlisting"},
    { title: "Inbox", src: "Chat" , link: "/Host/HostInbox" },
    { title: "Log out", src: "Exit", gap: true },
  ];

  const handleFileChangeOnGallery = (event) => {
    event.preventDefault();
    
    const files = Array.from(event.target.files);
  
    const filePromises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    });
  
    Promise.all(filePromises)
      .then((base64DataArray) => {
        setSelectedFilesGallery(base64DataArray);
        console.log(base64DataArray);
      })
      .catch((error) => {
        console.error('Error converting files to Base64:', error);
      });
  };

  const handleFileChangeOnLegalDocuments = (event) => {
    event.preventDefault();
    
    const files = Array.from(event.target.files);
  
    const filePromises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    });
  
    Promise.all(filePromises)
      .then((base64DataArray) => {
        setSelectedFilesDocuments(base64DataArray);
        console.log(base64DataArray);
      })
      .catch((error) => {
        console.error('Error converting files to Base64:', error);
      });
  };


  async function handleSubmit(ev){
    ev.preventDefault();
    console.log(OnStoredData,'/n',Data,'\n', headers);
    const response = await instance.post('/auth/newAccommodation',{OnStoredData,Data},{headers})
      .then((response)=>{
        if(response){
          navigate('/Host')
        }
      })
  }
  


  return (
     <>
     <div>
     <hr />
    <div className="flex">
    <div className="hidden md:block">
      <div
        className={` ${
          open ? "w-52" : "w-20 "
        } bg-gray-100 h-full p-5  pt-8 relative duration-300`}
      >
        <img
          src="/src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-seventh
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
           onClick={() => setOpen(!open)}
            src="/src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-fourth origin-left font-bold text-2xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Menu
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:duration-300 hover:delay-150 hover:bg-gray-300 text-fourth font-bold text-sm items-center gap-x-4
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >

            <Link to={Menu.link} className="flex gap-3">

              <img src={`/src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}

              </span>
              </Link>
            </li>

          ))}
        </ul>
      </div>

      </div>

      {/* Long Vertical */}
      <div className="border bg-headercolor hidden md:block"></div>
      {/*End of Long Vertical */}




      {/* -----------------PAGES-------------------------  */}
      <div className="border rounded-3xl shadow-xl p-8 mx-auto max-w-5xl my-3 grow items-center justify-around w-28">
{/* Page Name */}
      <h1 className="text-3xl text-center font-semibold"> Create your listing</h1>
{/*End of Page Name */}


<div className="max-w-3xl mx-auto">
    <form onSubmit={handleSubmit}>

      <h1 className="mt-8 text-2xl font-semibold">Title</h1>

        <input type="text"
          placeholder="Ex. Title: My Beloved Place"
          value={title}
          onChange={ev => setTitle(ev.target.value)}
        />
           <h1 className="mt-8 text-2xl font-semibold">Rental Type</h1>
              <DropdownButton />
      
      {/* Gallery for accommodations*/}
      <h1 className="mt-1 text-2xl font-semibold">Upload a Gallery of your place</h1>

      <div className="border h-32">
        <div className="flex">
          {selectedFilesGallery.map((file, index) => (
            <div  key={index}>
              <img className="h-20 w-20"  src={file} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center border mt-3 rounded-xl ">
        <label className="flex p-3 justify-center w-screen cursor-pointer" >
          <input hidden  type="file" multiple onChange={handleFileChangeOnGallery}/>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
      </svg>

        </div>
        Upload Photo</label>
      </div>
      {/* end of Gallery */}

      <h1 className="mt-1 text-2xl font-semibold">Upload an image of your legal documents</h1>
      <p>
        to farther your credibility as a host pls upload your legal documents such as 
        business permit, Building permit, and etc.
      </p>

      <div className="border h-32">
        <div className="flex">
          {selectedFilesDocuments.map((file, index) => (
            <div  key={index}>
              <img className="h-20 w-20"  src={file} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center border mt-3 rounded-xl ">
        <label className="flex p-3 justify-center w-screen cursor-pointer" >
          <input hidden  type="file" multiple onChange={handleFileChangeOnLegalDocuments}/>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
      </svg>

        </div>
        Upload Photo</label>
      </div>

      <div>
        <h1>Map</h1>
        <iframe width="100%" className="rounded-2xl" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=8.1773372,124.1249216&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
      </div>
      <h1 className="mt-3 text-2xl font-bold">Price Range</h1>

        <input type="text"
          placeholder="Ex. Php 1000"
          value={price}
          onChange={ev=> setPrice(ev.target.value)}
        />

      <h1 className="mt-3 text-2xl font-bold">Address</h1>

      <input type="text"
        value={address}
        onChange={ev=> setAddress(ev.target.value)}
      />

      <h1 className="my-5 text-xl font-bold">Description</h1>
              <div className="mx-auto">
        <textarea className="border" cols="80" rows="10" 
          placeholder="Ex. The Room Size"
          value = {description}
          onChange={ev => setDescription(ev.target.value)}
          >
        </textarea>
        </div>

        <h1 className="my-5 text-xl font-bold">Set your House rules here</h1>
        <div className="mx-auto">
          <textarea className="border" cols="80" rows="10" 
            placeholder=""
            value = {rules}
            onChange={ev => setRules(ev.target.value)}
            >
          </textarea>
          </div>
       
      <h1 className="my-5 text-xl font-bold">Amenities or what are your place can offer</h1>
   <div className="mx-auto">
       
       <Amenities />

</div>
      <button className="text-white mt-3 text-xl font-semibold h-11 w-full rounded-xl p-1 bg-gradient-to-r from-cyan-500 to-emerald-500">Save</button>
    </form>
  </div>


 </div>
{/*End of -----------------PAGES-------------------------  */}







    </div>
    </div>
    </>
  )
}

