import express from 'express';
import 'dotenv/config.js';
import bookRoutes from './routers/BookRoutes.js';
import cors from "cors";
import studentRoutes from './routers/StudentRoutes.js';

//init app
const app = express();

//Enable cors to frontend
let corsOptions = {
    origin: process.env.ORIGIN
}

//middleware
app.use(express.json());
app.use(cors(corsOptions));


app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next(); 
});


try{
    app.listen(process.env.port || 3000, () =>{
        console.log(`Listening to port 3000 ${process.env.port || 3000}....`);
    });
}catch(e){
    console.log(e);
}

app.use("/books", bookRoutes);
app.use("/students", studentRoutes);