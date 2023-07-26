const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const router = require('./Routes/router');
const adminRouter = require('./Routes/adminRoutes');

const PORT = 4040;
const app = express();
const db_URI = 'mongodb://localhost:27017/BoardingGo';
//const db_URI = 'mongodb+srv://kalikaliseries:kalikaliseries1234567@cluster0.sdgqa9l.mongodb.net/BoardingGo?retryWrites=true&w=majority';
mongoose.connect(db_URI,{useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => console.log(`connected to the DB with result: ${{result}}`))
.catch((err) => console.log(`unable to connect to DB with error: ${err}`));

app.use(cors());
app.use(cookieParser());
app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({extended: true}));
app.use(router);
app.use(adminRouter);

app.listen(PORT, console.log(`Running on port ${PORT}`));