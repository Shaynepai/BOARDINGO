/* eslint-disable react/jsx-no-undef */

import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4040',
});

export default function Register_Tenant({email}) {
  const navigate = useNavigate();
  
  const handleSubmit = async () => {
    try {
      const response = await instance.post('/asTenant', { email, role:'Tenant' });
      alert(response.data.message);
      navigate('/login');
    } catch (err) {
      console.log(err);
      alert(err.response.data.error);
    }
  }

  return (
    <>
    <div className=" mt-4 grow items-center justify-around">
      <div>
         <h1 className="text-xl p-3">Description</h1>
     </div>
         <p className="mb-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores illum sapiente. Aut quod inventore reiciendis neque, numquam quas eos enim adipisci nesciunt necessitatibus exercitationem sunt et ex quis modi? </p>

         <button className="primary" onClick={handleSubmit}>
          Sign Up as Tenant
        </button>
      </div>
    </>
  )
}