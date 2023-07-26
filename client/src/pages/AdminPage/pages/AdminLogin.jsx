/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import axios from "axios";
import {useCookies} from "react-cookie";
import {Link, useNavigate} from "react-router-dom";

const instance = axios.create({
  baseURL: 'http://localhost:4040',
});

export default function AdminLogin() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [AccountID, setAccountID] = useState('');
  const [, setCookies] = useCookies(["secure_Token"])

  async function handleSubmit(ev){
    ev.preventDefault();
    //console.log(userName, password)
   try {
    const response = await axios.post('/adminLogin', {
      userName,
      password,
      AccountID
    })
    .then((response)=>{
      console.log(response.data)
      window.alert(response.data.Message)
      navigate('/Admin')
      setCookies("secure_Token", response.data.secureToken)
    })

   } catch (error) {
    console.log(error)
   }
  }
  return (
    <>
      <div className=" mt-4 grow flex items-center justify-around text-seventh ">
        <div className=" mb-64 ">
        <h1 className=" text-4xl text-center mb-4 text-seventh font-bold">Admin Login</h1>
          <form className=" max-w-md mx-auto" >
          <h1>Admin Account ID 64b553fd2dfc167527ceae32</h1>
            <input type="text"
              value={AccountID}
              onChange={ev => setAccountID(ev.target.value)}
              required
          />
          
          <h1>Username superUser@admin.boardingGo</h1>
            <input type="text"
              value={userName}
              onChange={ev => setUserName(ev.target.value)}
              required
          />
          <h1>Password g!$dPr8T6#Bj5S@kM7fQ</h1>
            <input type="password"
              value={password}
              onChange={ev => setPassword(ev.target.value)}
              required
            />
            <button className="primary font-bold" onClick={handleSubmit}>Login</button>
          </form>
        </div>
      </div>
    </>
  )
}
