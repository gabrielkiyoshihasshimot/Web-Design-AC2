const celularQuestions = [
  {
    question: "Com que frequência você verifica seu smartphone durante o dia?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você passa muito tempo no celular diariamente?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você sente ansiedade quando não tem acesso ao seu celular?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Com que frequência você usa o celular durante refeições?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Você verifica notificações do celular imediatamente quando chegam?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você passa muito tempo nas redes sociais via celular?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você se sente perdido sem seu celular?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você usa o celular enquanto dirige ou caminha?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você prefere interações via celular às presenciais?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você dedica pouco tempo a atividades offline por dia?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você tem dificuldade para dormir devido ao uso do celular?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você se sente sobrecarregado com mensagens no celular?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você usa o celular como despertador?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Com que frequência você passa muito tempo jogando no celular?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Você sente irritação quando alguém interrompe seu uso do celular?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Com que frequência você usa o celular em reuniões ou aulas?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você acha difícil deixar o celular de lado durante o dia?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você passa muito tempo navegando na internet via celular?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Você se sente ansioso ao pensar em perder ou quebrar seu celular?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Com que frequência você usa o celular logo ao acordar?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
];

const tecnologiasQuestions = [
  {
    question:
      "Com que frequência você passa muito tempo em frente a telas diariamente?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você sente ansiedade quando não tem acesso à internet?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Com que frequência você usa tecnologias durante refeições?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você dedica pouco tempo a atividades offline por dia?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você tem dificuldade para dormir devido ao uso de tecnologias?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você se sente sobrecarregado com informações digitais?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você prefere interações online às presenciais?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você passa muito tempo assistindo vídeos online?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você verifica notificações imediatamente quando chegam?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você usa tecnologias enquanto trabalha ou estuda?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Você sente irritação quando alguém interrompe seu uso de tecnologias?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você passa muito tempo nas redes sociais diariamente?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Você acha difícil desconectar das tecnologias durante o fim de semana?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Com que frequência você usa tecnologias para procrastinar?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você se sente perdido sem acesso a tecnologias?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você passa muito tempo jogando videogames ou apps?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você tem dores físicas devido ao uso prolongado de tecnologias?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você usa tecnologias durante conversas presenciais?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você sente culpa por passar muito tempo com tecnologias?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você dedica pouco tempo a hobbies offline por semana?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
];

const depressaoQuestions = [
  {
    question: "Você se sente isolado devido ao uso excessivo de tecnologias?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você compara sua vida com a dos outros nas redes sociais?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Você tem dificuldade para dormir devido ao uso de tecnologias à noite?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você passa muito tempo online em detrimento de interações sociais presenciais?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Você sente ansiedade ao não receber likes ou comentários online?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você se sente deprimido após usar tecnologias?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você evita sair de casa devido ao conforto das tecnologias?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você dedica pouco tempo a atividades físicas por semana?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você sente falta de energia devido ao uso prolongado de telas?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você usa tecnologias para escapar de problemas reais?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Você se sente culpado por não conseguir controlar o uso de tecnologias?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você passa muito tempo sozinho com tecnologias por dia?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você tem pensamentos negativos após ver conteúdos online?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você se sente sobrecarregado emocionalmente por notificações?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você prefere interações online porque se sente mais seguro?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você dedica pouco tempo a hobbies criativos offline?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você sente depressão ao pensar em desconectar das tecnologias?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você usa tecnologias para lidar com emoções negativas?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Você tem dificuldade para se concentrar devido ao uso de tecnologias?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Com que frequência você passa pouco tempo ao ar livre por dia?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
];

const spotifyQuestions = [
  {
    question:
      "Com que frequência você passa muito tempo ouvindo música em apps como Spotify diariamente?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Você sente ansiedade quando não tem acesso à sua playlist favorita?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você usa música para escapar de emoções negativas?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você cria playlists para diferentes humores ou situações?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você dedica muito tempo a descobrir novas músicas por dia?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você sente irritação quando sua música é interrompida?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você ouve música enquanto trabalha ou estuda?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você paga por serviços de streaming de música?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você passa muito tempo ouvindo podcasts ou audiobooks?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você sente dependência emocional da música?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Com que frequência você compartilha músicas nas redes sociais?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você tem dificuldade para ouvir música ao vivo sem fones?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você dedica muito tempo a ouvir música offline?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você sente culpa por gastar muito tempo ouvindo música?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Com que frequência você usa música para motivar exercícios?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você segue artistas obsessivamente nas redes?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Com que frequência você passa muito tempo organizando suas playlists?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question:
      "Você sente ansiedade ao pensar em perder acesso ao seu app de música?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Com que frequência você ouve a mesma música repetidamente?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
  {
    question: "Você usa música para lidar com solidão?",
    options: ["Nunca / Raramente", "Frequentemente", "Sempre"],
    values: [0, 1, 2],
  },
];

const quizTitles = {
  celular: "Dependência do Telefone Celular",
  tecnologias: "Uso Abusivo das Tecnologias",
  depressao: "Depressão e sua Relação com a Dependência de Tecnologias",
  spotify: "Dependência de Spotify e Aplicativos de Música Digital",
};

const quizzes = {
  celular: celularQuestions,
  tecnologias: tecnologiasQuestions,
  depressao: depressaoQuestions,
  spotify: spotifyQuestions,
};

let quizQuestions = [];

let currentQuestionIndex = 0;

let userAnswers = [];

let totalScore = 0;

const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const optionsContainer = document.querySelector(".options");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const progressFill = document.getElementById("progress-fill");
const scoreElement = document.getElementById("score");
const scoreFill = document.getElementById("score-fill");
const recommendationsElement = document.getElementById("recommendations");
const reflectionText = document.getElementById("reflection-text");
const saveReflectionBtn = document.getElementById("save-reflection");
const contactForm = document.getElementById("contact-form");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const closeBtn = document.querySelector(".close-btn");

function initQuiz() {
  if (questionContainer && questionText && optionsContainer) {
    showQuestion(currentQuestionIndex);
    updateProgressBar();
  }
}

function showQuestion(index) {
  const question = quizQuestions[index];
  questionText.textContent = question.question;

  optionsContainer.innerHTML = "";
  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.textContent = option;
    button.dataset.value = question.values[optionIndex];
    if (userAnswers[index] === question.values[optionIndex]) {
      button.classList.add("selected");
    }
    button.addEventListener("click", () =>
      selectOption(optionIndex, question.values[optionIndex])
    );
    optionsContainer.appendChild(button);
  });

  prevBtn.disabled = index === 0;
  nextBtn.textContent =
    index === quizQuestions.length - 1 ? "Finalizar" : "Próxima";
}

function selectOption(optionIndex, value) {
  userAnswers[currentQuestionIndex] = value;
  const buttons = optionsContainer.querySelectorAll(".option-btn");
  buttons.forEach((btn, idx) => {
    btn.classList.toggle("selected", idx === optionIndex);
  });
}

function nextQuestion() {
  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
    updateProgressBar();
  } else {
    calculateScore();
    window.location.href = "resultados.html";
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
    updateProgressBar();
  }
}

function updateProgressBar() {
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  progressFill.style.width = `${progress}%`;
}

function calculateScore() {
  totalScore = userAnswers.reduce((sum, answer) => sum + answer, 0);
  localStorage.setItem("quizScore", totalScore);
  localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
}
