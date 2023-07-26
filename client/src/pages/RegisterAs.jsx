import { useLocation, useNavigate } from "react-router-dom";
import Register_LandOwner from "./registeras/Register_Host";
import Register_Tenant from "./registeras/Register_Tenant";
import { useEffect } from "react";

export default function RegisterAs() {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const registrationCompleted = window.localStorage.getItem('registrationCompleted');
    // If registration is not completed, redirect to the register page
    if (registrationCompleted === "false"||!registrationCompleted) {
      navigate('/register');
    }
    
  }, [navigate]);
  
  const email = location.state?.email||""; // Retrieve email from location state
  //console.log(email);
  return (
    <>
      <div className="flex grid-cols-3 gap-3 mt-20 text-text font-bold">
        <div className="-mt-20 p-32">
          <Register_Tenant email={email} />
        </div>

        {/* Horizontal Line */}
        <div className=" -ml-0.5 w-0.5  bg-gray-300"></div>
        {/*End of Horizontal Line */}

        <div className="-mt-20 p-32">
          <Register_LandOwner email={email}/>
        </div>
      </div>
    </>
  );
}
