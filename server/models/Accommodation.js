const mongoose = require("mongoose");
const {Schema} = mongoose;
const AccommodationSchema = new Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Host'
    },
    Title:{
        type:String,
        require:true,
    },
    category:{
      type:String,
      require: true,
    },
    Gallery:{
        type: Array
    },
    LegalDocuments:{
      type: Array
  },
    Price: {
        type: Number,
        require:true,
    },
    Address:{
        type: String,
        require: true,
    },
    Description: {
        type: String,
        require:true
    },
    Amenities:{
        type:String,
        require:true,
    },
    houseRules: {
      type: String,
      require: true
    },
    Ratings:{
      type: String,
      require: true
    },
    tenants: [
        {
          tenantID: {
            type: Schema.Types.ObjectId,
            ref: 'Tenant',
          },
          lastName:{
            type: String,
            required: true
          },
          firstName:{
            type: String,
            required: true
          }
        }
      ],
      reservations: [
        {
          tenantID: {
            type: Schema.Types.ObjectId,
            ref: 'Tenant',
          },
          lastName:{
            type: String,
            required: true
          },
          firstName:{
            type: String,
            required: true
          }
        }
      ]
});

const AccommodationModel = mongoose.model('Accommodation', AccommodationSchema);
module.exports = AccommodationModel;