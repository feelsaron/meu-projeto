console.log("hi!!")

console.log("teste")

const express = require('express');
const path = require('path');
const app = express();

app.get('/', function (req, res){
    res.send('Agora está funcionando a rota "/"');
})

app.listen(3000, function (){
    console.log("Servidor rodando no endereço http://localhost:3000");
});


app.get('/index', function (req, res){
    res.sendFile(path.join(__dirname, '/teste.html'));
});