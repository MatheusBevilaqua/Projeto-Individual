var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    medidaModel.buscarUltimasMedidas().then(function (resultado) {
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



function cadastrarQuiz(req, res) {

    var score = req.body.scoreServer;
    var idUsuario = req.body.idUsuarioServer;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.cadastrarQuiz(score, idUsuario).then(function (resultado) {
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

function cadastrarPontos1(req, res) {

    var fkUsuario = req.body.fkUsuarioServer
    var score = req.body.scoreServer
    var tempo = req.body.tempoServer

    medidaModel.cadastrarPontos1(fkUsuario, score, tempo).then(function (resultado) {
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

function cadastraridolo(req, res) {

    var fkUsuario = req.body.fkUsuarioServer
    var idolo = req.body.idoloServer

    medidaModel.cadastraridolo(fkUsuario, idolo).then(function (resultado) {
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

function cadastrarPontos2(req, res) {

    var fkUsuario = req.body.fkUsuarioServer
    var acertos = req.body.acertosServer


    medidaModel.cadastrarPontos2(fkUsuario, acertos).then(function (resultado) {
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

function linhaIdolo(req, res) {

    medidaModel.linhaIdolo().then(function (resultado) {
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

function linhaGeral(req, res) {

    medidaModel.linhaGeral().then(function (resultado) {
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
    cadastrarQuiz,
    buscarUltimasMedidas,
    cadastrarPontos1,
    cadastraridolo,
    cadastrarPontos2,
    linhaIdolo,
    linhaGeral
}