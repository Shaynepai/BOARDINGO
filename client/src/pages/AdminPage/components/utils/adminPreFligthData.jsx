import { useCookies } from "react-cookie";

export function getAdminHeaders(){
    const [cookies] = useCookies(["secure_Token"]);
    const token = cookies.secure_Token;

    const adminHeaders = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      return adminHeaders;
}

export function getAdminToken(){
    const [cookies] = useCookies(["secure_Token"]);
    const token = cookies.secure_Token;

    return token;
}