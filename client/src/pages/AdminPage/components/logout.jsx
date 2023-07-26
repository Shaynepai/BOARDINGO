import {getAdminHeaders} from "./utils/adminPreFligthData"
import { useNavigate } from 'react-router-dom'
import {useCookies} from "react-cookie";
import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:4040',
  });


export default function Logout() {
    const headers = getAdminHeaders();
    const [,,removeCookies ] = useCookies(["secure_Token"])
    const navigate = useNavigate();
    async function handleLogout(ev){
        ev.preventDefault()
        try {
            removeCookies("secure_Token");
            navigate('/login/Admin')
            console.log(headers) 
            await axios.post('/admin/auth/logout',{},{
                headers,
            })

        } catch (error) {
            console.log(error)
        }    
    }
   
    
     return (
            <>
        <div>
            <button className=" bg-white text-sm mt-3 p-1 -mr-4 shadow-lg duration-100 delay-200 ease-in-out hover:shadow-stone-500 " onClick={handleLogout}>
                Logout           
            </button>
        </div>
            </>
          )
   
}
/**
 * 
 *  <svg width="20px" height="20" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)" stroke="#000000" stroke-width="0.672">
                    <g id="SVGRepo_bgCarrier" stroke-width="0">
                    </g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                    </g>
                    <g id="SVGRepo_iconCarrier">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" fill="#0F1729">
                        </path>
                    </g>
                </svg>  
 * <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="48"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h299v60H180v600h299v60H180Zm486-185-43-43 102-102H360v-60h363L621-612l43-43 176 176-174 174Z"/></svg>   
                
 * 
 */