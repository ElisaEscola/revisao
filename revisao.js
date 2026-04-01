const express = require('express');
const app = express();
const porta = 8080;

app.get('/', (req, res) => { res.send("Bah meu") }

);

app.get('/batataFritadinha', (req, res) => {

    let precoCafe = 12;
    let total = 0;

    for (i = 0; i < 2; i++) {
        total += precoCafe;
        console.log(`Fazendo o cafezinho ${i + 1}. Total acumulado: R$ ${total}`);

    }
    if (total >= 30) {
        console.log("Desconto aplicado")
    }
    else  {
        console.log("Desconto não aplicado")
    }


    res.send("bisteca quer café, miau")
}

);

app.listen(porta, () => {

})

