import { useCookies } from "react-cookie";


  
export function getOnStoredData(){
  const userID = localStorage.getItem("userID");
  const loginID = localStorage.getItem("loginID");
  const role = localStorage.getItem("role");

  const onStoredData = {
    userID,
    loginID,
    role
  }
  return onStoredData;
}

export function getToken(){
  const [cookies] = useCookies(["access_token"]);
  const accessToken = cookies.access_token;
  return accessToken
}