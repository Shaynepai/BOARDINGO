import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'
import Layout from './components/Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
// import Webname from '../public/Webname';
import axios from 'axios';

import {getOnStoredData, getToken} from "./components/utils/preFlightData";
import {getAdminToken} from "./pages/AdminPage/components/utils/adminPreFligthData";
import valid from './components/utils/validate'


import RegisterAs from './pages/RegisterAs';
import Register_Tenant from './pages/registeras/Register_Tenant';
import Register_LandOwner from './pages/registeras/Register_Host';
import PlacesPage from './pages/PlacesPage';
import FormPlacePage from './pages/FormPlacePage';
import Filter from './pages/Filter/Filter' //Filter Button
import ChatTenantWindow from './components/ChatTenantWindow';
// import Credential from './components/CredentialUpload' //Credentials Upload
//Route Land Owner Component
//End of Route Land Owner Component
import AdminLayout from './pages/AdminPage/AdminLayout';
import MenuUsers from './pages/AdminPage/pages/MenuUsers';
import MenuHosts from './pages/AdminPage/pages/MenuHosts';
import MenuTenants from './pages/AdminPage/pages/MenuTenants';
import NotFound from './NotFound';
import Unauthorize from './Unauthorize';
import HostLayout from './pages/LandOwner/components/HostLayout';
import MenuAccommodation from './pages/AdminPage/pages/MenuAccommodation';
import MenuAccommodationCard from './pages/AdminPage/pages/MenuAccommodationCard';
import AdminLogin from './pages/AdminPage/pages/AdminLogin';
import AdminCreatesHost from './pages/AdminPage/pages/AdminCreatesHost';
import AdminCreatesTenant from './pages/AdminPage/pages/AdminCreatesTenant';
import HostOverview from './pages/LandOwner/pages/HostOverview';
import Hostyourlisting from './pages/LandOwner/pages/Hostyourlisting';
import HostInbox from './pages/LandOwner/pages/HostInbox';
import CreateYourListingsContent from './pages/LandOwner/components/CreateYourListingsContent';
import AdminEditUser from './pages/AdminPage/pages/AdminEditUser';
import AdminView from './pages/AdminPage/pages/AdminView';
import ReservationsUpcoming from './pages/LandOwner/pages/ReservationsUpcoming';
import ReservationsAccepted from './pages/LandOwner/pages/ReservationsAccepted';
import ReservationsDeclined from './pages/LandOwner/pages/ReservationsDeclined';
import AdminViewAccommodation from './pages/AdminPage/pages/AdminViewAccommodation';

axios.defaults.baseURL = 'http://localhost:4040';

function App() {
    // const navigate = useNavigate();
    const OnStoredData = getOnStoredData();
    //const isValid = valid();
    const accessToken = getToken();
    // const adminToken = getAdminToken();
    const [isValid, setIsValid] = useState(false);


     useEffect(() => {
        if(OnStoredData.loginID && OnStoredData.loginID && accessToken){
            if(OnStoredData.loginID === OnStoredData.loginID){
                 return setIsValid(true)
            }
            else{
             return setIsValid(false)
            }
         }
      }, [OnStoredData.loginID && OnStoredData.loginID && accessToken,OnStoredData.loginID === OnStoredData.loginID]);

      //console.log(isValid)

return ( 

<Routes>
    {/* components/Category  */}
    {/* <Route path='/searchbar' element={<SearchBar />}/> */}
    <Route path='/Filter' element={<Filter />}/>
   
    {/* components/Category  */}



{/* ====================================================================================================== */}
{OnStoredData.role==='Host' && isValid &&(

    <Route path='/Host' element={<HostLayout />} >
        <Route index element={<HostOverview />}/> {/* Land Owner Page */}
        <Route path='new' element={<FormPlacePage />}/>  {/* Form place Page */}
        <Route path='hostyourlisting' element={<Hostyourlisting />}/>
        <Route path='hostinbox' element={<HostInbox />}/>
        <Route path='newAccommodation' element={<CreateYourListingsContent/>}/> 
        <Route path='reservations-upcoming' element={<ReservationsUpcoming />}/>
        <Route path='reservations-accepted' element={<ReservationsAccepted />}/>
        <Route path='reservations-declined' element={<ReservationsDeclined />}/>
    </Route>

)}
{/* ====================================================================================================== */}

{/* public page */}

    <Route path="/" element={<Layout />}> {/*renders when the user in not login */}
        <Route index element={<IndexPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path='register-as' element={<RegisterAs />}/>
        <Route path='register_as_tenant' element={<Register_Tenant />}/>
        <Route path='register_as_landowner' element={<Register_LandOwner />}/>  
        <Route path='accommodation/:id' element={<PlacesPage />} /> 
        <Route path='chat' element={<ChatTenantWindow />} />
    
    
     
    </Route>

{/* Tenant page */}


{/* AdminPage */}


<Route path='/login/Admin' element={<AdminLayout />} >
    <Route index element={<AdminLogin />}/>
</Route>
{/* adminToken &&() */}
{ 
    <Route path='/Admin' element={<AdminLayout />} >
        <Route index element={<MenuUsers/>}/>
        <Route path='hostList' element={<MenuHosts />} />
        <Route path='tenantsList' element={<MenuTenants />}/>
        <Route path='accommodationList' element={<MenuAccommodation />}/>
        <Route path='AdminAccommodationCard' element={<MenuAccommodationCard />} />
        <Route path='AdminCreatesHost' element={<AdminCreatesHost />} />
        <Route path='AdminCreatesTenant' element={<AdminCreatesTenant />} />
        <Route path='user/edit/:id' element={<AdminEditUser />} />
        <Route path='user/view/:id' element={<AdminView/>} />
        <Route path='accommodation/view/:id' element={<AdminViewAccommodation/>} />
    </Route>
}


<Route path="/401" element={<Unauthorize/>} />



{/* AdminPage */}


<Route path="*" element={<NotFound />} />

</Routes>




)}

export default App
