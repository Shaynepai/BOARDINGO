/* eslint-disable no-unused-vars */

import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import axios from "axios";
import { useCookies} from "react-cookie";
import { getOnStoredData} from "../components/utils/preFlightData";
import { getHeaders} from "../components/utils/headers";
import {getToken} from '../components/utils/preFlightData'

const instance = axios.create({
    baseURL: 'http://localhost:4040',
  });

export default function Logout() {
    const navigate = useNavigate();

    const headers = getHeaders();
    const accessToken = getToken();
    const OnStoredData = getOnStoredData();
    const [,,removeCookies] = useCookies(["access_token"]);

    // useEffect(() => {
    // const validateLoginId = window.localStorage.getItem('loginID');
    // const validateUserId = window.localStorage.getItem('userID');
    // console.log('Validate id',validateLoginId,'Login id', loginID);
    // console.log('Validate user id',validateUserId, 'user id', userID);
    // });

    const handleLogout = async () => {
    console.log(OnStoredData.userID,'\nloginID: ',OnStoredData.loginID,'\ntoken: ',accessToken,'\n')
    try {
        const response = await instance.post('/auth/logout',{
            OnStoredData,

        },
        {
            headers
        });
        localStorage.removeItem('userID');
        localStorage.removeItem('loginID');
        localStorage.removeItem('role');
        removeCookies("access_token");
        navigate('/login');
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
    }
    if(OnStoredData.userID && OnStoredData.loginID && accessToken){
        return (
            <>
            <div>
                <button className="rounded-full bg-white text-sm mt-3 p-1 -mr-4 shadow-lg duration-100 delay-200 ease-in-out hover:shadow-stone-500"onClick={handleLogout}>
                    Logout
                </button>
            </div>
            </>
          )
    }else{
        return null;
    }
}
