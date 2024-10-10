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
    var fkUsuario = req.body.fkUsuarioServer
    var acertos = req.body.acertosServer
    var tempo = req.body.tempo;

    if (fkUsuario == undefined || acertos == undefined || tempo == undefined ) {
        res.status(400).send("A algo de errado!");
    }

    graficoModel.cadastrar(fkUsuario, acertos, tempo).then(function(resposta){
        res.status(200).send("Sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}