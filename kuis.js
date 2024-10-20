const questions = [
    {
        question: "Di mana Kongres Pemuda II diadakan?",
        answers: [
            { text: "bandung", correct: false },
            { text: "jakarta", correct: true },
            { text: "Surabaya", correct: false },
            { text: "Medan", correct: false }
        ]
    },
    {
        question: "kapan tanggal diadakannya Sumpah Pemuda?",
        answers: [
            { text: "1 Juni 1945", correct: false },
            { text: "17 Agustus 1945", correct: false },
            { text: "28 Oktober 1928", correct: true },
            { text: "20 Mei 1908", correct: false }
        ]
    },
    {
        question: "Apa makna utama dari Sumpah Pemuda?",
        answers: [
            { text: "Menyatukan pemuda Indonesia dalam perjuangan kemerdekaan.", correct: true },
            { text: "Memperkuat kekuasaan Belanda.", correct: false },
            { text: "Menghentikan semua gerakan politik.", correct: false },
            { text: "Mendorong penggunaan bahasa asing.", correct: false }
        ]
    },
    {
      
        question: "Apa yang diperingati setiap tahun pada tanggal 28 Oktober?",
        answers: [
            { text: "hari sumpah pemuda.", correct: true },
            { text: "hari kemerdekaaan", correct: false },
            { text: "hari reformasi", correct: false },
            { text: "hari kebangkitan nasional", correct: false }
        ]
    },
    {
      
        question: "Apa isi dari salah satu poin Sumpah Pemuda?",
        answers: [
            { text: "Kami setia kepada Belanda.", correct: false },
            { text: "Kami mengaku bertumpah darah yang satu, tanah air Indonesia.", correct: true },
            { text: "Kami menggunakan bahasa Inggris.", correct: false },
            { text: "Kami berdiri sendiri tanpa kerjasama.", correct: false }
        ]
    },
    {
       
        question: "Sumpah Pemuda diakui sebagai simbol apa dalam sejarah Indonesia?",
        answers: [
            { text: "penindasan", correct: false },
            { text: "Perdagangan internasional.", correct: false },
            { text: "Kebangkitan ekonomi.", correct: false },
            { text: "Persatuan dan kesatuan bangsa.", correct: true }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timePerQuestion = 10;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score-container').classList.add('hidden');
    document.getElementById('next-button').classList.remove('hidden');
    document.getElementById('finish-button').classList.add('hidden');
    document.getElementById('restart-button').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    document.getElementById('timer').classList.remove('hidden');
    startTimer();
    showQuestion(questions[currentQuestionIndex]);
}

function startTimer() {
    let timeLeft = timePerQuestion;
    document.getElementById('time').textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Waktu habis!");
            finishQuiz();
        }
    }, 1000);
}

function showQuestion(question) {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `<h2>${question.question}</h2>`;
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-button');
        button.onclick = () => selectAnswer(answer);
        questionContainer.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }

    currentQuestionIndex++;

    clearInterval(timer); // Stop timer saat jawaban dipilih

    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        document.getElementById('next-button').classList.remove('hidden');
        startTimer(); // Mulai timer untuk pertanyaan berikutnya
    } else {
        document.getElementById('next-button').classList.add('hidden');
        document.getElementById('finish-button').classList.remove('hidden');
    }
}

function finishQuiz() {
    clearInterval(timer); // Stop timer
    document.getElementById('timer').classList.add('hidden');
    document.getElementById('question-container').classList.add('hidden');
    showScore();
}

function showScore() {
    const scoreContainer = document.getElementById('score-container');
    scoreContainer.innerHTML = `<h2>Skor Anda: ${score} dari ${questions.length}</h2>`;
    scoreContainer.classList.remove('hidden');
    document.getElementById('finish-button').classList.add('hidden');
    document.getElementById('restart-button').classList.remove('hidden');
}

function restartQuiz() {
    startQuiz();
}

startQuiz();
