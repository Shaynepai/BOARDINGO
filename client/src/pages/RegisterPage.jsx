import { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import ProfileUpload from "../components/ProfileUpload";
import CredentialUpload from "../components/CredentialUpload";
import axios from "axios";


const instance = axios.create({
  baseURL: 'http://localhost:4040',
});


export default function RegisterPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Update local storage to indicate completion of registration process
    window.localStorage.setItem('registrationCompleted', 'false');
  }, []);

 

  const [fileValue, setFileValue] = useState('');
  const[file1Value, setFile1Value] = useState();
  const[file2Value, setFile2Value] = useState();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  async function registerUser(ev) {
      ev.preventDefault("");

      if(password != confirmpassword){
        alert('password did not match')
      }else{
        try{
          const response = await instance.post("/register",{
            fileValue,
            firstname,
            lastname,
            email,
            password,
            file1Value,
            file2Value
          });
          alert(response.data.message);
          window.localStorage.setItem('registrationCompleted', 'true');
          // Pass email as a query parameter when navigating
          navigate('/Register-as', { state: { email } });    
        }
        catch(err){
          //console.log(error);
          alert(err.response.data.message);
        }       
      }
   
  }

  return (
  <div>
    <hr />


    <div className=" mt-4 grow flex items-center justify-around text-seventh">
      <div className="border rounded-xl shadow-xl p-10 mb-64">
        <h1 className=" text-4xl text-center mb-4 font-bold">Sign up</h1>

        <form className=" max-w-md mx-auto" onSubmit={registerUser}>
          <div className="text-center">
          
            <ProfileUpload onFileValueChange={setFileValue} required />
          </div>
              <input type="text" 
              placeholder="First Name"
              value={firstname}
              onChange={ev => setFirstname(ev.target.value)}
              required />

            <input type="text" 
            placeholder=" Last Name"
            value={lastname}
            onChange={ev => setLastname(ev.target.value)}
            required />

            <input type="email" 
            placeholder="Email" 
            value={email}
            onChange={ev => setEmail(ev.target.value)}
            required />
          
            <input type="password" 
            placeholder="password" 
            value={password}
            onChange={ev => setPassword(ev.target.value)}
            required />

            <input type="password" 
            placeholder="confirm password" 
            value={confirmpassword}
            onChange={ev => setConfirmpassword(ev.target.value)}
            required />

          <CredentialUpload onFileValueChange1={setFile1Value} onFileValueChange2={setFile2Value} required />

          {/* Link to the Resgister as a Tenant or a Land0Owner with the Discription */}
          <button className="primary font-bold">Sign up</button>
          

          <div className=" text-center py-2 text-gray-500">
            Already a member? <Link className=" underline text-seventh" to={'/login'}>Login</Link>
          </div>
        </form>
      </div>

  </div>




</div>
  )
}

