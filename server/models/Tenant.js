const mongoose = require("mongoose");
const {Schema} = mongoose;

const TenantSchema = new Schema({
    
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    currentAccommodation:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Accommodation'
    }
});

const Tenantmodel = mongoose.model('Tenant', TenantSchema);
module.exports = Tenantmodel;