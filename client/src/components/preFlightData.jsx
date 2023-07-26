import { useCookies } from "react-cookie";


export function getHeaders(){
  const [cookies] = useCookies(["access_token"]);
  const accessToken = cookies.access_token;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };
  return {headers, accessToken};
}

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