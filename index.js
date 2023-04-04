const express = require('express');

const app = express();

//to attached middlewares
//json is function it is used to convert json from getting req from frontend
app.use(express.json());//parseing(json) to the request

app.get('/', (req, res)=>{  
    res.send({message:'Hello welcome' })
}); 

app.post('/greeting', (req, res)=>{
res.send({message:`Happy birthday ${req.body.name}`});
});

app.listen(3000, () => {
   console.log("listening on http://localhost:3000");
});

