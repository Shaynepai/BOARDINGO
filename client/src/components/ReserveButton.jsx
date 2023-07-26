/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import { Link } from "react-router-dom";
import { getOnStoredData} from "../components/utils/preFlightData";
//import { getHeaders} from "../components/utils/headers";
import {getToken} from '../components/utils/preFlightData'
import { Axios } from "axios";

// eslint-disable-next-line react/prop-types
export default function ReserveButton({id}) {
    
    //const headers = getHeaders();
    const accessToken = getToken();
    const OnStoredData = getOnStoredData();

    function handleProcessReserve(){
        console.log(`Accommodation ID: ${id},user ID: ${OnStoredData.userID}`);
        // eslint-disable-next-line no-empty
        try {
            
        } catch (error) {
            
        }
    }
    if(OnStoredData.userID && OnStoredData.loginID && accessToken){
        return (
            <>
            <div className="flex p-1 bg-primary active:bg-amber-600 px-20 rounded-2xl mx-1 mt-3" onClick={handleProcessReserve}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                    </svg>
                </div>
                <button className="text-white bg-transparent" >Make a reservation</button>
            </div>
            </>
          )
    }else{
        return(
            <>
             <div>
                <Link to={'/login'}><h1>Login now to make reservation!</h1></Link>
             </div>
            </>
        );
        
    }
}

/*

 const[headers, setHeaders] = useState([])
    const[accessToken, setAccessToken] = useState('')
    const[OnStoredData , setOnStoredData] = useState({})
    useEffect(() => {
        const headersData = getHeaders();
        setHeaders(headersData);
    
        const accessTokenData = getToken();
        // Assuming you have a 'setAccessToken' state update function
        setAccessToken(accessTokenData);
    
        const StoredData = getOnStoredData();
        // Assuming you have a 'setOnStoredData' state update function
        setOnStoredData(StoredData);
    }, [getHeaders(), getToken( )]); 

*/ 
