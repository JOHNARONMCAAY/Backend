import express from 'express';

const app = express();

app.use(express.json());

const port = 3500;

try{
    app.listen(port, () =>{
        console.log('Listening port 3000 ....');
    });
}catch(e){
    console.log(e);
}

app.get('/Aron', async (request, response) =>{
    response.status(200).json({message: "Ayaw Bembang Usto Pasok Aray Aray ko Talaga ka"});
});