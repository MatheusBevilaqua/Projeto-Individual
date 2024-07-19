// Array de objetos contendo os dados do quiz
const titlesQuizData = [
    {
        question: "Em que ano o Palmeiras ganhou sua primeira Libertadores?", // Pergunta
        a: "1999", // Opção A
        b: "2000", // Opção B
        c: "2001", // Opção C
        d: "1998", // Opção D
        correct: "a" // Resposta correta
    },
    {
        question: "Quantos Campeonatos Brasileiros o Palmeiras venceu até 2023?",
        a: "8",
        b: "9",
        c: "10",
        d: "11",
        correct: "c"
    },
    {
        question: "Em que ano o Palmeiras venceu o Mundial de Clubes?",
        a: "1951",
        b: "1999",
        c: "2021",
        d: "2023",
        correct: "a"
    },
    {
        question: "Quantas Copas do Brasil o Palmeiras venceu até 2023?",
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        correct: "c"
    },
    {
        question: "Qual é o estádio oficial do Palmeiras?",
        a: "Morumbi",
        b: "Pacaembu",
        c: "Arena Corinthians",
        d: "Allianz Parque",
        correct: "d"
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
    for (let i = 0; i < titlesQuizData.length; i++) {
        const currentQuestion = titlesQuizData[i];
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
    for (let i = 0; i < titlesQuizData.length; i++) {
        const answerContainer = answerContainers[i];
        const selector = `input[name=question${i}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // Verifica se a resposta do usuário está correta
        if (userAnswer === titlesQuizData[i].correct) {
            numCorrect++;
            answerContainers[i].style.color = 'green'; // Marca a resposta correta com verde
        } else {
            answerContainers[i].style.color = 'red'; // Marca a resposta incorreta com vermelho
        }
    }

    // Mostra o número de respostas corretas
    resultsContainer.innerHTML = `${numCorrect} de ${titlesQuizData.length} questões corretas.`;
}

// Constrói o quiz ao carregar a página
buildQuiz();

// Adiciona um evento ao botão de submit para mostrar os resultados
submitButton.addEventListener('click', showResults);
