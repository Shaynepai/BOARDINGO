import { useState, useEffect } from 'react';
import { getOnStoredData } from "./preFlightData";
import {getHeaders} from'./headers';
import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:4040',
});

async function valid() {
  const headers = getHeaders();
  const OnStoredData = getOnStoredData();

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Call the authentication API to validate the user's credentials using Axios
    const fetchData = async () => {
      try {
        const response = await instance.get('/auth/authStateTrue', {
          headers, // Pass headers as part of the request
          params: OnStoredData // Pass OnStoredData as query parameters
        })
        .then((result)=>{
            if(result){
                console.log(result)
                setIsValid(true);
            }else{
                setIsValid(false)
            }
        })
      } catch (error) {
        //console.error('Error occurred during authentication:', error);
        setIsValid(false);
      }
    };

    fetchData();
  }, [headers, OnStoredData]); // Add dependencies to ensure useEffect is triggered when headers or OnStoredData changes

  return isValid;
}

export default valid;

/*

const headers = getHeaders();
    const OnStoredData = getOnStoredData();
  
    try {
      // Call the authentication API to validate the user's credentials using Axios
      const response = await instance.get('/auth/authStateTrue', {
        headers, // Pass headers as part of the request
        params: OnStoredData // Pass OnStoredData as query parameters
      });
      if (response.status === 200) {
        return true; // User is authenticated
      } else {
        return false; // User is not authenticated
      }
    } catch (error) {
      return false; // Error occurred during authentication
    }


*/
