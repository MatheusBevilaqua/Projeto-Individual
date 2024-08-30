// Seleciona os elementos HTML
const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

// Variável para armazenar a entrada do usuário
var userIdolInput = '';

// Função para construir o formulário de entrada
function buildQuiz() {
    // Adiciona um campo de entrada para o nome do ídolo
    quizContainer.innerHTML = `
        <label for="idolInput">Digite o nome do seu ídolo:</label>
        <input type="text" id="idolInput" name="idolInput">
    `;
}

// Função para mostrar os resultados
function showResults() {
    // Captura o valor inserido pelo usuário e armazena na variável
    userIdolInput = document.getElementById('idolInput').value.trim();

    // Exibe a entrada do usuário na tela
    resultsContainer.innerHTML = `Você inseriu: <strong>${userIdolInput}</strong>`;

    // Envia a entrada para o servidor 
    fetch("/medidas/cadastrar/idolo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fkUsuarioServer: sessionStorage.ID_USUARIO,
            idoloServer: document.getElementById('idolInput').value.trim()
        })
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                setTimeout(() => {
                    window.location = "tela_jogos.html";
                }, "2000");
            } else {
                alert('Erro');
            }
        })
}


// Constrói o quiz ao carregar a página
buildQuiz();

// Adiciona um evento ao botão de submit para mostrar os resultados
submitButton.addEventListener('click', showResults);