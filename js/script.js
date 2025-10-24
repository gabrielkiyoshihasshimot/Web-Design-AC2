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

function displayResults() {
  if (scoreElement && scoreFill && recommendationsElement) {
    const score = localStorage.getItem("quizScore");
    if (score) {
      const maxScore = 40;
      scoreElement.textContent = `${score}/${maxScore}`;
      const scorePercentage = (score / maxScore) * 100;
      scoreFill.style.width = `${scorePercentage}%`;

      let recommendations = "";
      if (score <= maxScore * 0.3) {
        recommendations = `
                    <h4>Excelente! Você tem hábitos muito saudáveis nesta área.</h4>
                    <ul>
                        <li>Continue mantendo o equilíbrio.</li>
                        <li>Compartilhe suas práticas com outros.</li>
                        <li>Considere ajudar outros a adotarem hábitos similares.</li>
                    </ul>
                `;
      } else if (score <= maxScore * 0.5) {
        recommendations = `
                    <h4>Boa! Seus hábitos são relativamente saudáveis.</h4>
                    <ul>
                        <li>Reduza ligeiramente o uso antes de dormir.</li>
                        <li>Estabeleça limites mais claros.</li>
                        <li>Incorpore mais atividades offline.</li>
                    </ul>
                `;
      } else if (score <= maxScore * 0.7) {
        recommendations = `
                    <h4>Atenção! Há espaço para melhorias.</h4>
                    <ul>
                        <li>Implemente períodos de "desconexão".</li>
                        <li>Desative notificações não essenciais.</li>
                        <li>Pratique mindfulness.</li>
                    </ul>
                `;
      } else {
        recommendations = `
                    <h4>Cuidado! Pode estar afetando sua saúde.</h4>
                    <ul>
                        <li>Considere um detox completo.</li>
                        <li>Busque ajuda profissional se sentir dependente.</li>
                        <li>Reduza drasticamente e aumente atividades offline.</li>
                    </ul>
                `;
      }
      recommendationsElement.innerHTML = recommendations;
    }
  }
}

function saveReflection() {
  const reflection = reflectionText.value;
  if (reflection.trim()) {
    localStorage.setItem("dailyReflection", reflection);
    showPopup("Reflexão salva com sucesso!");
    reflectionText.value = "";
  } else {
    showPopup("Por favor, escreva algo antes de salvar.");
  }
}

function showPopup(message) {
  popupMessage.textContent = message;
  popup.style.display = "block";
}

function closePopup() {
  popup.style.display = "none";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
  darkModeToggle.innerHTML = isDarkMode
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
}

function loadDarkModePreference() {
  const darkMode = localStorage.getItem("darkMode") === "true";
  if (darkMode) {
    document.body.classList.add("dark-mode");
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
}

function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function handleFormSubmission(e) {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (name && email && message) {
    showPopup("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    contactForm.reset();
  } else {
    showPopup("Por favor, preencha todos os campos.");
  }
}

let currentSlide = 0;
const slides = document.querySelectorAll(".media-item");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function changeMenuOnScroll() {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(44, 62, 80, 0.9)";
  } else {
    header.style.backgroundColor = "#2c3e50";
  }
}

function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".feature-item, .practice-item, .team-member, .quiz-card, .media-item"
  );
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    if (elementTop < window.innerHeight && elementBottom > 0) {
      element.classList.add("fade-in");
    }
  });
}

function selectQuiz(quizType) {
  quizQuestions = quizzes[quizType];
  localStorage.setItem("selectedQuiz", quizType);
  document.getElementById("quiz-selection").style.display = "none";
  const quizTitleElement = document.getElementById("quiz-title");
  if (quizTitleElement) {
    quizTitleElement.textContent = quizTitles[quizType];
    quizTitleElement.style.display = "block";
  }
  showAllQuestions(quizQuestions);
  document.getElementById("quiz-form").style.display = "block";
}

function showAllQuestions(questions) {
  const form = document.getElementById("quiz-form");
  form.innerHTML = "";
  questions.forEach((question, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";
    questionDiv.innerHTML = `
      <h3>${index + 1}. ${question.question}</h3>
      <div class="options">
        ${question.options
          .map(
            (option, optIndex) => `
          <label>
            <input type="radio" name="question-${index}" value="${question.values[optIndex]}" required>
            ${option}
          </label>
        `
          )
          .join("")}
      </div>
    `;
    form.appendChild(questionDiv);
  });
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.className = "btn-nav";
  submitBtn.textContent = "Finalizar";
  form.appendChild(submitBtn);
}
