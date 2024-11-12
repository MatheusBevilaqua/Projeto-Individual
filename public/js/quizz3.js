const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

var userIdolInput = '';

// Função para construir o quiz com três opções
function buildQuiz() {
    quizContainer.innerHTML = `
        <p>Escolha seu ídolo:</p>
        <select id="idolInput" name="idolInput">
            <option value="Ademir da Guia">Ademir da Guia</option>
            <option value="Cesar Maluco">Cesar Maluco</option>
            <option value="Dudu">Dudu</option>
        </select>
    `;
}

// Função para mostrar os resultados e enviar para o servidor
function showResults() {

    // Captura o valor da opção escolhida
    userIdolInput = document.getElementById('idolInput').value.trim();

    // Exibição do resultado
    resultsContainer.innerHTML = `Você escolheu: <strong>${userIdolInput}</strong>`;

    // Envio para o servidor
    fetch("/graficos/cadastraridolo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            fkUsuarioServer: sessionStorage.ID_USUARIO,
            idoloServer: userIdolInput
        })
    })
    .then(function(resposta) {
        console.log("Resposta do servidor: ", resposta);

        if (resposta.ok) {
            // Sucesso - Mensagem de sucesso e redirecionamento após 2 segundos
            resultsContainer.innerHTML += `<p>Dados enviados com sucesso! Você será redirecionado...</p>`;
            setTimeout(() => {
                window.location = "tela_jogos.html";
            }, 2000);
        } else {
            // Caso haja erro no servidor
            alert('Houve um erro ao tentar salvar seu ídolo. Tente novamente.');
        }
    })
    .catch(function(erro) {
        console.error('Erro na requisição: ', erro);
        alert('Ocorreu um erro na comunicação com o servidor.');
    });
}

// Inicializa o quiz com as opções
buildQuiz();

// Adiciona o evento de clique no botão de enviar
submitButton.addEventListener('click', showResults);
