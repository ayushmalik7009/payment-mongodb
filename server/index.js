import express from 'express';

import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/userRoute.js';
import mongoose from 'mongoose';

const app = express();
app.use(bodyParser.json())
app.use(cors());
dotenv.config();

const port = process.env.port || 8000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=>{
    console.log("DB connected successfully")

    app.listen(port,()=>{
        console.log(`server is running on port : ${port}`)
    })
}).catch(error => console.log(error));


app.use('/new',route);