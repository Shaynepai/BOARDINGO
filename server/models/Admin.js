const mongoose = require("mongoose");
const {Schema} = mongoose;

const AdminSchema = new Schema({
    userName:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
});

const AdminModel = mongoose.model('Admin', AdminSchema);
module.exports = AdminModel;


// administrative password: g!$dPr8T6#Bj5S@kM7fQ
//admin hashed password: $2y$19$LwKJt9GfPb1fJn8chZgj2OelBH49iiQQ.bS3rcOQI1cWdgGsre6Hy (19) user is 10 during register
//userName: superUser@admin.boardingGo
//adminAccountID: 64b553fd2dfc167527ceae32