/*===============================================================================
    Controllers and endpoint for the users

=================================================================================
*/ 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const User = require('../models/User');
const Tenant = require('../models/Tenant');
const Host = require('../models/Host');
const UserKey = require('../models/UserKey')
const Accommodation = require('../models/Accommodation');
const {encryptSecretKey, decryptSecretKey} = require('./cryptography')
const {encryptKey,decryptKey} = require('./keyLoker');
const {validateToken} = require('./tokenValidator');






// users authentication middleware






const authMiddleware = async(req, res, next) => {

  function extract_Token(authorizationHeader){
    try {
      let accessToken;
      if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
        accessToken = authorizationHeader.slice(7); // Remove "Bearer " prefix
        return accessToken;
      }else{
        return accessToken;
      }
      
    } catch (error) {
      console.log(error)
    }
   
  }

  if (req.method === 'GET') {
 
    try {
      if(!(req.headers.authorization&&req.query)){
        console.log('No Access Data is send!!');
        return res.status(400).json({valid: false});
      }

      const {userID,loginID} = req.query
      const accessToken = extract_Token(req.headers.authorization);
      validateStart(userID, loginID, accessToken)

    } 
    catch (error) {
      console.log(error)
    }

  } 
  

  if (req.method === 'POST') {
    try {

      console.log(JSON.stringify(req.headers, null, 2));
      const authorizationHeader = req.headers.authorization;
      const {userID,loginID} = req.body.OnStoredData;
      console.log('headers: ',req.header.authorization);
      console.log('ids: ',req.body.OnStoredData);

      const accessToken = extract_Token(authorizationHeader);
      //console.log(req.body,'\ntoken: ', accessToken);
      validateStart(userID, loginID, accessToken)

    } catch (error) {
      console.log(error);
      return res.sendStatus(400)
    }
  } 


  async function validateStart(userID, loginID, accessToken){
    try {
      const userKey = await UserKey.findById(loginID);
      if(userKey){
  
        if(userID == userKey.userId){
          const encryptedKey = userKey.encryptionKey;
          const encryptionKey = decryptKey(encryptedKey);
          //console.log('encryptedKey = ', encryptedKey);
          const encryptedSecretKey = userKey.secretKey;
          //console.log('decrypted secretKey = ',decryptSecretKey(encryptedSecretKey,encryptionKey));
          //console.log('encryptedSecretKey = ', encryptedSecretKey)
          const validToken = validateToken(encryptedKey,encryptedSecretKey,accessToken);
          if(validToken){
            console.log('validate success')
            next();
          }
          else{
            console.log('validation failed')
            return res.status(401).json({valid: false});
          }
        }
      
      }
      else{
        console.log('Unauthorize')
        return res.status(401).json({valid: false});
      }
    } catch (error) {
      return res.status(401).json({valid: false});
    }
  }//end
  
}











const authStateTrue = (req, res) => {
  res.status(200).json({isAuthenticated: true});
}





//fetch the specific accommodation data in the client side






const fetchAccommodation = async (req, res) =>{
  try {
    const {id} = req.params
    const accommodation = await Accommodation.findById(id)
    if(accommodation){
      const host = await Host.findById(accommodation.owner)
      //console.log(host)
      console.log(accommodation.owner)
      const owner = await User.findById(host.user)
      //console.log(owner)
      //console.log(data)
      let imageData ={image: accommodation.Gallery}
      res.status(200).json({
        _id: accommodation._id,
        images: imageData,
        Title: accommodation.Title,
        Price: accommodation.Price,
        Description: accommodation.Description,
        Address: accommodation.Address,
        houseRules: accommodation.houseRules,
        ownerFN: owner.FirstName,
        ownerLN: owner.LastName,
        profilePic: owner.profilePic
      });
    }
  } catch (error) {
    console.log(error)
  }
}





//landing end point that fetch data into the landing page








const main = async (req, res)=>{
  try {
    const accommodations = await Accommodation.find()
      .then((accommodations)=>{
        const accommodationData = accommodations.map((accommodation) => ({
          _id: accommodation._id,
          images: accommodation.Gallery,
          Title: accommodation.Title,
          Price: accommodation.Price,
          Description: accommodation.Description
        }));
        res.json(accommodationData);
      })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}






/*   _______________________________
    |register function for the users|
    |_______________________________|
*/
const register = async( req, res)=>{
    const{fileValue, lastname, firstname, email, password, file1Value,file2Value} = req.body;
    const user = await User.findOne({Email: email});
    //console.log(req.body);

    if(user){
        //console.log("user already exist"); 
        return res.status(409).json({message: 'user already exist'});
    }else{
      
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword)
    const newUser = new User({ 
        profilePic: fileValue,
        LastName: lastname,
        FirstName: firstname,
        Email: email,
        password: hashedPassword,
        frontID:file1Value,
        backID:file2Value
    });


     await newUser.save()
        .then((result)=>{
            console.log('data is saved')
            return res.status(200).json({message: "Submit Success"});
            //console.log(newUser);
        })
        .catch((error)=>{
            console.log(error);
            return res.status(500).json({error: "Internal Server Error"});
        }); 

    }

    

}





//if the selected role is a tenant





const isTenant = async (req, res) => {
    const { email} = req.body;
    console.log(email);
    try {
      const user = await User.findOne({ Email: email });
      //console.log(user);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
        const tenant = new Tenant({ user: user._id });
        await tenant.save();

      // Associate the tenant with the user
        user.tenant = tenant._id;
        await user.save();


        //console.log(result, 'data is saved');
        res.status(200).json({message: 'success'});

    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }



//if the selected role is a host




const isHost = async (req, res)=>{
    const { email} = req.body;
    try {
      const user = await User.findOne({ Email: email });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const host = new Host({ user: user._id });
      const result = await host.save();


      user.host = host._id;
      await user.save();


      //console.log(result, 'data is saved');
      res.status(200).json({message: 'success'});

    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}
  
  

/*   _____________________________
    |login function for the users|
    |____________________________|
    
*/
const login = async(req, res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({Email: email}).select('+password');


    if(!user){
        return res.status(404).json({error:'User Not Found'})
    }
    
    else{

        const validatedPassword = await bcrypt.compare(password, user.password)
        .then(async(validatedPassword)=>{
          if(!validatedPassword){
            console.log("invalid password!");
            return res.status(401).json({error: "invalid password"});
        }

        else{
          
          console.log("success");
          const secretKey = crypto.randomBytes(64).toString('hex'); //  generate secret key
          const encryptionKey = crypto.randomBytes(32); //1 generate encryptionKey
          const encryptedSecretKey = encryptSecretKey(secretKey, encryptionKey);
          const securedKey = encryptKey(encryptionKey); //3 encrypt the transform string
          //const decryptedKey = decryptKey(securedKey);//4 decrypt the string //includes decrypt in keylocker
          
          
          //console.log(`before: ${encryptionKey.toString('hex')} inBuffer = ${encryptionKey}`);
          //console.log(`after: ${decryptedKey.toString('hex')} inBuffer${decryptedKey}`);
          //console.log('\n\n\n')
          const token = jwt.sign({id: user._id}, secretKey);
          let role = "";
          let path = "";

          // console.log('Token: ',token);
          // console.log(`secret key = ${secretKey}\n\n`);
          // console.log(`encryption key = ${encryptionKey}\n\n`);
          // console.log(`encrypted secretKey = ${encryptedSecretKey}\n\n`);
          // console.log(`secure key = ${securedKey}\n\n`);
          //console.log(`decrypted key = ${decryptedKey}\n\n`);
          //console.log('decrypted secretKey = ',decryptSecretKey(encryptedSecretKey,toBuffer));
         

          const newLogin = new UserKey({
            userId: user._id,
            secretKey: encryptedSecretKey,
            encryptionKey: securedKey
          });

          await newLogin.save();
          const loginID = newLogin._id;
          //console.log(`new login id = ${loginID}`);

          user.userKey = newLogin._id;
          await user.save();

          if (user.tenant) {
            role = "Tenant"
            path = `/`;
            console.log(`User is a ${role} path is ${path}`);
          }
          
          else if (user.host) {
            role = "Host";
            path = "/Host";
            console.log(`User is a ${role} path is ${path}`);
          }
          
          return(
            res.status(200).json({
              message:'login success',
              token,
              role,
              path,
              userID: user.id,
              loginID
            })
          );
          
        }
      })
    }
}





//Logout Endpoint







const logout = async (req, res) => {
    try {
      const {userID,loginID} = req.body.OnStoredData;
      const user = await User.findById(userID)
      .then(async(user)=>{
        if(!user){
          console.log('could not find the ID')
          return res.status(404);
        }
        deleteKey(loginID);
        user.userKey = null;
        await user.save();
      })
    
  async function deleteKey(objectID){
    const deletedUserKey = await UserKey.findOneAndDelete({ _id: objectID });
        
        if (deletedUserKey) {
          console.log('User key deleted:', deletedUserKey);
          res.clearCookie('access_token');
          return res.sendStatus(200); 
        } else {
          console.log('User key not found');
          return res.sendStatus(404);
        }
  }
    } catch (error) {
      console.log(error);
    }
    
}




//new Accommodation endpoint




const newAccommodation = async  (req, res) => {
  const {userID} = req.body.OnStoredData;
  //console.log(userID);
  const {title, selectedFilesGallery= [],selectedFilesDocuments = [],price, description, amenities, address, rules} = req.body.Data;
  //console.log('controller is reach', userID,title, selectedFiles,price, description, amenities);
  const host = await Host.findOne({user: userID});
  if(host){
    const accommodation = new Accommodation({
      owner:host._id,
      Title:title,
      Gallery: selectedFilesGallery,
      LegalDocuments: selectedFilesDocuments,
      Price: price,
      Description: description,
      Amenities: amenities,
      Address: address,
      houseRules:rules
    });
    console.log('saving...');
    await accommodation.save();
    host.accommodations.push(accommodation._id);
    await host.save()
    .then ((result)=>{
      console.log('new accommodation is created')
      return res.status(200).json({message: "new accommodation is created"});
      //console.log(newUser);
    })
    .catch((error)=>{
        console.log(error);
        return res.status(500).json({error: "Internal Server Error"});
    }); 

    
  }
  else{
    return res.status(404);
  }
}








const makeNewAccommodation = async (req, res) =>{

}





module.exports = {
  main,
  register,
  isTenant,
  isHost,
  login,
  logout,
  newAccommodation,
  authMiddleware,
  authStateTrue,
  fetchAccommodation,
  makeNewAccommodation
}

//{id:ObjectId('64abf84f3ec88fe4722a0b98')}     to look for an id associated