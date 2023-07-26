import { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";

import ProfileUpload from "../../../components/ProfileUpload";
import CredentialUpload from "../../../components/CredentialUpload";


export default function AdminEditForm() {

    const navigate = useNavigate();

    const [fileValue, setFileValue] = useState('');
    const[file1Value, setFile1Value] = useState();
    const[file2Value, setFile2Value] = useState();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

  return (
    <div className=" mt-5 grow flex items-center justify-around text-seventh">
    <div className="">
        

      <h1 className=" text-xl text-center mb-5 font-bold">Edit User Data</h1>
      <hr />
      <form>
        <div className="flex gap-5 mt-1">
         
          
          <div className="">
          <div className="">
            <div className="text-center">
              <ProfileUpload onFileValueChange={setFileValue} required />
              <CredentialUpload onFileValueChange1={setFile1Value} onFileValueChange2={setFile2Value} required />
            </div>
          </div>
        </div>
        <div className="w-96 ">
            <h1>First Name</h1>
              <input type="text" 
              placeholder="First Name"
              value={firstname}
              onChange={ev => setFirstname(ev.target.value)}
              required />
            <h1>Last Name</h1>
              <input type="text" 
              placeholder=" Last Name"
              value={lastname}
              onChange={ev => setLastname(ev.target.value)}
              required />
            <h1>Email</h1>
            <input type="email" 
              placeholder="Email" 
              value={email}
              onChange={ev => setEmail(ev.target.value)}
              required />
            <h1>Password</h1>
              <input type="password" 
              placeholder="password" 
              value={password}
              onChange={ev => setPassword(ev.target.value)}
              required />
            <h1>Confirm Password</h1>
              <input type="password" 
              placeholder="confirm password" 
              value={confirmpassword}
              onChange={ev => setConfirmpassword(ev.target.value)}
              required />
             <button className="rounded-3xl p-3  mt-10 ml-10 active:bg-purple-700 text-white bg-headercolor font-bold hover:shadow-xl duration-300 ease-in-out">Update</button>
          </div>
      </div>  
    </form>
  </div>
</div>

  )
}
