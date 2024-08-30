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
    medidaController.cadastrarPontos1(req, res);
})

router.post("/cadastrar/idolo", function (req, res) {
    medidaController.cadastraridolo(req, res);
})

router.get("/dados/linhaIdolo", function (req, res) {
    medidaController.linhaIdolo(req, res);
})

router.get("/dados/linhaGeral", function (req, res) {
    medidaController.linhaGeral(req, res);
})

router.post("/cadastrar/pontos2", function (req, res) {
    medidaController.cadastrarPontos2(req, res);
})

module.exports = router;