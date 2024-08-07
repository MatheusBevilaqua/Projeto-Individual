var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.post("/pergunta", function (req, res) {
    medidaController.cadastrarQuiz(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.post("/cadastrar/pontos", function (req, res) {
    medidaController.cadastrarPontos(req, res);
})


module.exports = router;