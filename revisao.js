const express = require('express');
const app = express();
const porta = 8080;

app.get('/', (req, res) => { res.send("Bah meu") }

);

app.get('/batataFritadinha', (req, res) => {

    let precoCafe = 12;
    let total = 0;

    for (let i = 0; i < 3; i++) {
        total += precoCafe;
        console.log('`Fazendo o cafezinho ${i + 1}. Total acumulado: R$ ${total}`');
    }


    res.send("bisteca quer café, miau")
}

);

app.listen(porta, () => {

})

