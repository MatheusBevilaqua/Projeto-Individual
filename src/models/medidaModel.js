var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `SELECT 

    (SELECT count(score) FROM Quiz 
    WHERE score = 0)as zero,
    
    (SELECT count(score) FROM Quiz
    WHERE score = 1)as umponto,
    
    (SELECT count(score) FROM Quiz 
    WHERE score = 2)as dois,
    
    (SELECT count(score) FROM Quiz 
    WHERE score = 3)as tres,
    
    (SELECT count(score) FROM Quiz 
    WHERE score = 4)as quatro;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarQuiz(score,idUsuario) {
     var instrucaoSql = `INSERT INTO Quiz (score, fkUsuario) VALUES 
     (${score}, ${idUsuario})     
     `
     console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarPontos1(score, fkUsuario, tempo) {
    var instrucaoSql = `INSERT INTO Quiz (score, fkUsuario, tempo) VALUES 
    (${fkUsuario}, ${score}, ${tempo})     
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
   return database.executar(instrucaoSql);
}

// function cadastraridolo( fkUsuario, idolo) {
//     var instrucaoSql = `INSERT INTO Quiz2 (idolo, fkUsuario) VALUES 
//     ('${idolo}', ${fkUsuario})     
//     `
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//    return database.executar(instrucaoSql);
// }

// function linhaIdolo() {
//     var instrucaoSql = ` SELECT idolo FROM Quiz2;`
//     return database.executar(instrucaoSql)
// }

function cadastrarPontos2( fkUsuario, acertos) {
    var instrucaoSql = `INSERT INTO Quiz3 (acertos, fkUsuario) VALUES 
    (${acertos}, ${fkUsuario})     
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
   return database.executar(instrucaoSql);
}

function linhaGeral() {
    var instrucaoSql = ` SELECT 
    u.id AS usuario_id,
    u.nome AS nome_usuario,  
    q.score,
    q.tempo
FROM 
    Quiz as q
JOIN 
    usuario u ON q.fkUsuario = u.id
    ORDER BY 
    q.tempo ASC
LIMIT 
    10;`
    return database.executar(instrucaoSql)
}


module.exports = {
    cadastrarQuiz,
    buscarUltimasMedidas,
    cadastrarPontos1, 
    cadastrarPontos2,
    // cadastraridolo,
    // linhaIdolo,
    linhaGeral
}
