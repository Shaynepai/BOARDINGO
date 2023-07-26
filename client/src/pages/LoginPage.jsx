/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:4040',
});

export default function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Update local storage to indicate completion of registration process
    window.localStorage.setItem('registrationCompleted', '');
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [, setCookies] = useCookies(["access_token"])

async function handleLoginSubmit(ev) {
  ev.preventDefault();
  try{
    const response = await instance.post('/login', {email,password});
    console.log(response);
    setCookies("access_token", response.data.token);

    window.localStorage.setItem("userID", response.data.userID);
    window.localStorage.setItem("role",response.data.role);
    window.localStorage.setItem("loginID", response.data.loginID);

    console.log(response.data.path);
    navigate(response.data.path);
    alert(response.data.message);
    window.location.reload();
  }
  catch(err){
    alert(err.response.data.error);
  }
 
  
}

  return (
    <div>

    
    
      <hr />



      <div className=" mt-4 grow flex items-center justify-around text-seventh ">
        <div className="border rounded-xl mt-36 shadow-xl p-10 mb-64 ">
        <h1 className=" text-4xl text-center mb-5 text-seventh font-bold">Login</h1>
          <form className=" max-w-md mx-auto" onSubmit={handleLoginSubmit}>
            <input type="email"
              placeholder="Email"
              value={email}
              onChange={ev => setEmail(ev.target.value)}
              required
              
             className="focus:outline-0 rounded-full"
              />
              
            <input type="password"
              placeholder="password"
              value={password}
              onChange={ev => setPassword(ev.target.value)}
              required
              className="focus:outline-0 rounded-full"
              />
            <button className="primary font-bold">Login</button>
            <div className=" text-center py-2 text-gray-500 ">
              Don't have an account yet? <Link className=" underline text-seventh" to={'/register'}>Sign Up Now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
 