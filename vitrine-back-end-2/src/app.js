const express = require('express');
const app = express();
const port = 3000


const aplicacoesRouter = require('./routes/aplicacoes.route');


//interpretar o json
app.use(express.json());

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(aplicacoesRouter);

app.listen(port);

