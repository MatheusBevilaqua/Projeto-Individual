// configuração padrão para indicar o uso da biblioteca do node

var express = require("express");
var router = express.Router();


var graficoController = require("../controllers/graficoController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /grafico/cadastrar
    graficoController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /grafico/listar
    graficoController.listar(req, res);
});

module.exports = router;