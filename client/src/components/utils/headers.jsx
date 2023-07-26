import { useCookies } from "react-cookie";


export function getHeaders(){
  const [cookies,,] = useCookies(["access_token"]);
  const accessToken = cookies.access_token;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };
  return headers;
}