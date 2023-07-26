/*==================================================================================================================

    This is an admin controllers file.
=====================================================================================================================
*/
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


const Admin = require('../models/Admin')
const User = require('../models/User');
const Tenant = require('../models/Tenant');
const Host = require('../models/Host');
const UserKey = require('../models/UserKey')
const Accommodation = require('../models/Accommodation');
const {setSecretKey,getSecretKey,setEncryptionKey, getEncryptionKey} = require('./adminKey')
const {encryptSecretKey, decryptSecretKey} = require('./cryptography')




//login end point for Admin





const administrativeLogin = async(req, res) => {
    try {
        console.log(req.body)
        const {userName, password, AccountID} = req.body
        const admin = await Admin.findOne({userName: userName}).select('+password');
        console.log(admin._id )
        if(admin._id == AccountID){
            console.log("provided Id and stored id match", );
            const validatedPassword = await bcrypt.compare(password, admin.password)
                .then(async(validatedPassword)=>{
                    if(validatedPassword){
                        console.log("admin login", validatedPassword);
                        const secretKey = crypto.randomBytes(64).toString('hex');
                        const token = jwt.sign({id: admin._id}, secretKey);
                        setSecretKey(secretKey);
                        const encryptionKey = crypto.randomBytes(32);
                        const secureToken = encryptSecretKey(token,encryptionKey) //reusing the code for encrypting user secretKey to encrypt the web token 
                        setEncryptionKey(encryptionKey);
                        //console.log(secureToken)
                        res.status(200).json({Message: 'Welcome Admin', secureToken});
                    }
                    else{
                        console.log("admin cannot login", validatedPassword)
                        return res.status(401).json({error: "invalid password"});
                    }
                })
        }

        else{
            console.log("provided Id and stored id did not match");
            return res.status(404).json({error:'Not Admin'})
        }
    } catch (error) {
        console.log('Bad Request')
        return res.status(400)
    }
}

const test = async (req, res)=>{
    res.status(200)
    console.log('success')
}
const testNext = async(req, res) =>{
    console.log("second route\n\n",req.body);
    res.status(200)
}




//fetch all the data into the admin landing page



//note modify the request and fetch only the required data

const getAllData = async (req, res) => {
    try {
        const accommodations = await Accommodation.find();
        const users = await User.find();
        const tenants = await Tenant.find();
        const hosts = await Host.find();

        const responseData = {
            accommodations: accommodations,
            users: users,
            tenants: tenants,
            hosts: hosts
        };

        res.json(responseData);
    } catch (error) {
        res.status(500).json({message: "internal server error"})
    }
}




//Middleware for the admin authentication




const adminAuthControl = async (req, res, next) => {
    if(req.method === 'GET' ){
        try {
            // console.log(req.headers)
            // console.log(req.query);
            authenticate(req.headers.authorization)
        } catch (error) {
            console.log(error)
            return res.status(400)
        }
    }

    if(req.method === 'POST' ){
        
        if(req.headers.authorization){
            authenticate(req.headers.authorization)
        }
        else{
            console.log('BAD Request');
            return res.status(400);
           
        }
    }


    function authenticate(header){
        try {
            //console.log(header);
            secured_token = extract_Token(header)
            //console.log(token)
            //console.log(getEncryptionKey());
            const token = decryptSecretKey(secured_token, getEncryptionKey());
            console.log(token);
            try {
                const decodedToken = jwt.verify(token, getSecretKey());
                console.log(decodedToken);
                if(decodedToken){
                    console.log(true)
                    next();
                }else{
                    console.log('UnAuthorize',false)
                    return res.status(401)
                }
                // Access the decoded token properties as needed
            } catch (error) {
                console.error('Error decoding access token:', error);
                return res.status(401)
            }
        } catch (error) {
            console.log('ERROR during deciphering',error)
            return res.status(401)
        }
        
    }


    function extract_Token(authorizationHeader){
        try {
          let accessToken;
          if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
            accessToken = authorizationHeader.slice(7); // Remove "Bearer " prefix
          }
          return accessToken;
        } catch (error) {
          console.log(error)
        }
       
      }
}







// fetch the specific user



const fetchUser = async (req, res) =>{
    try {
      const {id} = req.params
      const user = await User.findById(id)
      if(user){
        return res.status(200).json(user)
      }
    } catch (error) {
      console.log(error)
    }
  }





  //delete a user


const deleteUser = async (req, res) => {
    try {
      const { id } = req.query;
      console.log(id);
      const user = await User.findById(id);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      if (user.tenant) {
        console.log('deleting reference id: ');
        console.log(user.tenant);
        await Tenant.findOneAndDelete({ _id: user.tenant });
        console.log('reference id deleted');
      }
  
      if (user.host) {
        console.log('deleting reference id: ');
        console.log(user.host);
        const host = await Host.findOne({ _id: user.host });
  
        if (host) {
          const accommodations = await Accommodation.find({ _id: { $in: host.accommodations } });
          console.log(accommodations);
          //accommodations to be deleted
          if (accommodations.length > 0) {
            for (const accommodation of accommodations) {
              await accommodation.deleteOne();
              console.log('Accommodation deleted:', accommodation._id);
            }
          }
        }
  
        await Host.findOneAndDelete({ _id: user.host });
        console.log('reference id deleted');
      }
  
      await user.deleteOne({ _id: id });
      console.log('delete success');
  
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  




//to update a user


const updateUser = (req, res)=>{

}






//to logout the admin


const adminLogout = async (req, res) => {
  try {
    console.log("Logout click");
    setSecretKey(null);
    setEncryptionKey(null);
    console.log("Logout success");
    return res.status(200);
  } catch (error) {
    console.log(error)
  }
}



module.exports = {
    administrativeLogin,
    adminAuthControl,
    adminLogout,
    getAllData,
    test,
    deleteUser,
    fetchUser
  }

/*

const deleteUser = async (req, res) =>{
    try {
        const {id} = req.query;
        console.log(id);
        const user = await User.findById(id)
        .then(async(user)=>{
            
            if(user.tenant){
                console.log('deleting reference id: ')
                console.log(user.tenant)
               await Tenant.findOneAndDelete({_id: user.tenant})
               console.log('reference id deleted ')
            }
            if(user.host){
                console.log('deleting reference id: ')
                console.log(user.host)
                const host = await Host.findOne({_id: user.host})
                if(host){
                  const accommodations =  await Accommodation.find({_id: host.accommodations})
                  console.log(accommodations)
                }
                await Host.findOneAndDelete({_id: user.host})
                console.log('reference id deleted ')
            }
            await user.deleteOne({_id:id});
            console.log("delete success");
        })
        .catch((error)=>{
            console.log(error)
        })
    } catch (error) {
        console.log(error);
    }
}




*/ 