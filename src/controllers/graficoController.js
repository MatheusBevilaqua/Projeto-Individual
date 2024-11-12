var graficoModel = require("../models/graficoModel");

function listar(req, res) {
    graficoModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var score = req.body.scoreServer;
    var tempo = req.body.tempoServer;

    if (fkUsuario == undefined || score == undefined || tempo == undefined ) {
        res.status(400).send("A algo de errado!");
    }

    graficoModel.cadastrar(fkUsuario, score, tempo).then(function(resposta){
        res.status(200).send("Sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastraridolo(req, res) {

    var fkUsuario = req.body.fkUsuarioServer
    var idolo = req.body.idoloServer

    graficoModel.cadastraridolo(fkUsuario, idolo).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function porcentoIdolo(req, res) {

    graficoModel.porcentoIdolo().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar,
    cadastraridolo,
    porcentoIdolo
}