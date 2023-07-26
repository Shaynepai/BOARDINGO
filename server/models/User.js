const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
    profilePic:{
        type: String,
    },
    FirstName:{
        type: String,
        required: true,
    },
    LastName:{
        type:String,
        required:true,
    },
    Email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    frontID:{
        type:String,
    },
    backID:{
        type:String,
    },
    tenant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant'
    },
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Host'
    },
    userKey: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserKey'
    }
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;