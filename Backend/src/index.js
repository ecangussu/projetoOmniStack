//importar as funcionalidades do express
//express (sem ponto antes porque não é um arquivo)
const express = require('express');

//Importar o cors
const cors = require('cors');

//Importar variáveis/rotas
//./routes porque é um arquivo 
const routes = require('./routes');

//criação da aplicação
const app = express(); 
   
app.use(cors());
//Informar ao app que estaremos usando json para o corpo das requisições 
//Express vai até o corpo da requisição e converte o json em um objeto do javascript (se torna entendível pela aplicação) 
app.use(express.json());
app.use(routes);

//aplicaçãp "ouve" a porta 3333 -> localhost:3333 = acessa a sua aplicação
app.listen(3333);