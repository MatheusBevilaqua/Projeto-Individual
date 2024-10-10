var database = require("../database/config")

function cadastrar(score, fkUsuario, tempo) {
    var instrucao = `
        INSERT INTO Quiz (fkUsuario, score, tempo) VALUES 
    (${fkUsuario}, ${score}, ${tempo});    
    
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar() {
    var instrucao = ` SELECT 
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
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};