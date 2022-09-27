console.log("hi!!")

console.log("teste")

const express = require('express');
const app = express();

app.listen(3000, function (){
    console.log("Servidor rodando no endereço http://localhost:3000");
})