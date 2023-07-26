import React from 'react'
import { useParams} from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewUser() {
    
    const { id } = useParams();
    console.log(id)
    const[user, setUser] = useState([]);
        const fetchData = async () => {
        try {
            const response = await axios.get(`/admin/user/${id}`) // Replace this with your actual backend route
            setUser(response.data);
            console.log(response.data)
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    useEffect(() => {
    // Define a function to fetch the data
    fetchData()
    }, []);

  return (
    <>
        <div>
            <div className='h-40 w-40'><img src={user.profilePic} alt="" /></div>
            <div>user ID: {user._id}</div>
            <div>Name: {user.FirstName} {user.LastName}</div>
            <div className=' max-w-lg'> <img src= {user.frontID} alt="" /> </div>
            <div className=' max-w-lg'><img src={user.backID} alt="" /></div>
            <div>Secured Pasword: {user.password}</div>
            <div>Role: {user.tenant ?('Tenant'): user.host?('host'):''}</div>
            <div>{user.tenant ?(`Tenant ID: ${user.tenant}`): user.host?(`Host ID: ${user.host}`):''}</div>
        </div>
    </>
  )
}
