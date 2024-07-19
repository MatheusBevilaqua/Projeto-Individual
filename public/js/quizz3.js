// Array de objetos contendo os dados do quiz
const idolsQuizData = [
    {
        question: "Qual goleiro é considerado um dos maiores ídolos da história do Palmeiras?", // Pergunta
        a: "Ceni", // Opção A
        b: "Taffarel", // Opção B
        c: "Marcos", // Opção C
        d: "Zetti", // Opção D
        correct: "c" // Resposta correta
    },
    {
        question: "Qual atacante ficou conhecido como 'Divino'?",
        a: "Pelé",
        b: "Ademir da Guia",
        c: "Zico",
        d: "Rivaldo",
        correct: "b"
    },
    {
        question: "Quem é o maior artilheiro da história do Palmeiras?",
        a: "Edmundo",
        b: "Cesar Maluco",
        c: "Dudu",
        d: "Evair",
        correct: "b"
    },
    {
        question: "Qual jogador é conhecido como o 'São Marcos'?",
        a: "Marcos Assunção",
        b: "Marcos Rocha",
        c: "Marcos",
        d: "Marcos Aurélio",
        correct: "c"
    },
    {
        question: "Qual técnico é considerado um dos maiores ídolos do Palmeiras?",
        a: "Felipão",
        b: "Luxemburgo",
        c: "Telê Santana",
        d: "Muricy Ramalho",
        correct: "a"
    }
];

// Seleciona os elementos HTML
const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

// Função para construir o quiz
function buildQuiz() {
    const output = [];

    // Loop através de cada questão
    for (let i = 0; i < idolsQuizData.length; i++) {
        const currentQuestion = idolsQuizData[i];
        const answers = [];

        // Loop através de cada opção de resposta
        for (let letter in currentQuestion) {
            if (letter !== 'question' && letter !== 'correct') {
                answers.push(
                    `<label>
                        <input type="radio" name="question${i}" value="${letter}">
                        ${letter} :
                        ${currentQuestion[letter]}
                    </label>`
                );
            }
        }

        // Adiciona a pergunta e as opções ao output
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    }

    // Insere o output no contêiner do quiz
    quizContainer.innerHTML = output.join('');
}

// Função para mostrar os resultados
function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    // Loop através de cada questão
    for (let i = 0; i < idolsQuizData.length; i++) {
        const answerContainer = answerContainers[i];
        const selector = `input[name=question${i}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // Verifica se a resposta do usuário está correta
        if (userAnswer === idolsQuizData[i].correct) {
            numCorrect++;
            answerContainers[i].style.color = 'green'; // Marca a resposta correta com verde
        } else {
            answerContainers[i].style.color = 'red'; // Marca a resposta incorreta com vermelho
        }
    }

    // Mostra o número de respostas corretas
    resultsContainer.innerHTML = `${numCorrect} de ${idolsQuizData.length} questões corretas.`;
}

// Constrói o quiz ao carregar a página
buildQuiz();

// Adiciona um evento ao botão de submit para mostrar os resultados
submitButton.addEventListener('click', showResults);
