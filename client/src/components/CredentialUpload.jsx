
import { useState } from "react";


function CredentialUpload({ onFileValueChange1, onFileValueChange2 }) {

  const [file1, setFile1 ] = useState();
  const[file1Value, setFile1Value] = useState();
  const [ file2, setFile2 ] = useState();
  const[file2Value, setFile2Value] = useState();

   async function handleChange(ev) {
        console.log(ev.target.files);
        const file = ev.target.files[0];
        const base64 = await toBase64(file);
        setFile1(URL.createObjectURL(ev.target.files[0]));
        setFile1Value(base64);
        onFileValueChange1(base64);
        //console.log(base64);
    }
    
    async function handleChange2(ev) {
        console.log(ev.target.files);
        const file = ev.target.files[0];
        const base64 = await toBase64(file);
        setFile2(URL.createObjectURL(ev.target.files[0]));
        setFile2Value(base64);
        onFileValueChange2(base64);
        //console.log(base64);
    }



  return (

    <>
       <div className=" mt-4 grow items-center justify-around text-seventh ">
    <div className="mb-5 ">
     <h1 className=" text-4xl text-center mb-4 text-seventh font-bold">Credential</h1>
    <div className='max-w-md mx-auto'>
      

      
      <h1 className='text-center font-semibold'>Any Valid ID or Student ID(For Student)</h1>



      <br /> {/* Separator */}


      {/* <div>Example: Example Image of Capturing the Front and the Back Of Valid ID</div> */}
      <br />
      <h1>Front Image</h1>
      <h1 className="text-gray-400">Example:</h1>
      <div className="flex gap-3">
        <img className="w-28 h-20" src="/src/assets/FRONTID.png" alt="front_ID" />
        <h1 className="my-auto">Or</h1>
        <img className="-mt-5 h-28"  src="/src/assets/frontIID.png" alt="FRONT_ID" />
      </div>
      <div className='flex border rounded-2xl h-52 justify-center'>
      <img src={file1}  className='flex border-0 rounded-2xl object-cover ' id='frontimage'></img>
      </div>
      <label onChange={handleChange} className="mt-1 h-10 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
          <input type="file" multiple className="hidden" id='frontID' />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
          </svg>
          Upload Front of ID
        </label>



        <h1 className='mt-5'>Back Image</h1>
        <h1 className="text-gray-400">Example:</h1>
        <div className="flex gap-1">
    
        <div className="flex gap-3">
        <img className="w-28 h-20" src="/src/assets/BACKID.png" alt="front_ID" />
        <h1 className="my-auto">Or</h1>
        <img className="-mt-5 h-28"  src="/src/assets/backIID.png" alt="FRONT_ID" />
      </div>
      </div>
        <div className='flex border rounded-2xl h-52 justify-center'>
      <img src={file2} className="flex border-0 rounded-2xl object-cover" id='backimage'></img>
</div>
<label onChange={handleChange2} className="mt-1 h-10 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
          <input type="file" multiple className="hidden" id='backID' />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
          </svg>
          Upload Back of ID
        </label>
        
       

      </div>


    </div>
    </div>
    </>
  )
}

export default CredentialUpload

function toBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    }
    fileReader.onerror = (error) => {
      reject(error);
    }
    
  });
}
