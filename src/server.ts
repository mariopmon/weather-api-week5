import express from "express";

//We will createan express app
const app =express();

//The port that the express server will listen on 
const PORT =3000;

app.use(express.json()); 

//Start the express server
app.listen(PORT, ()=> { 
    console.log(`Serveris listening onport${PORT}`);
});