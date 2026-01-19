/* ===============================
   STATE
================================ */
let currentPart = 1;
let index = 0;

let cards = [];
let wrongCards = [];
let isReviewMode = false;

let correctCount = 0;
let wrongCount = 0;

// Menyimpan kartu yang sudah dijawab (HANYA SELAMA HALAMAN AKTIF)
let answeredCards = {};


/* ===============================
   INIT
================================ */
bindEvents();
loadPart();
setupDesktopShortcuts();


/* ===============================
   EVENT BINDING
================================ */
function bindEvents() {
  document.getElementById("revealBtn").addEventListener("click", reveal);
  document.getElementById("prevBtn").addEventListener("click", prevCard);
  document.getElementById("nextBtn").addEventListener("click", nextCard);
  document.getElementById("partSelect").addEventListener("change", changePart);
}


/* ===============================
   KEYBOARD SHORTCUTS (DESKTOP)
================================ */
function setupDesktopShortcuts() {
  const isDesktop = window.innerWidth >= 768;
  if (!isDesktop) return;

  document.addEventListener("keydown", (e) => {
    const tag = document.activeElement.tagName;
    if (["INPUT", "SELECT", "TEXTAREA"].includes(tag)) return;

    switch (e.key) {
      case " ":
        e.preventDefault();
        reveal();
        break;

      case "1":
        markCorrect();
        break;

      case "2":
        markWrong();
        break;

      case "ArrowLeft":
        prevCard();
        break;

      case "ArrowRight":
        nextCard();
        break;

      case "p":
      case "P":
        document.getElementById("partSelect").focus();
        break;
    }
  });
}


/* ===============================
   CORE LOGIC
================================ */
function loadPart() {
  currentPart = parseInt(document.getElementById("partSelect").value);
  index = 0;

  correctCount = 0;
  wrongCount = 0;

  answeredCards = {};
  wrongCards = [];
  isReviewMode = false;

  cards = flashcards[currentPart]; // pastikan variable ini ADA

  render();
}

function changePart() {
  loadPart();
}

function render() {
  const card = cards[index];

  document.getElementById("kanji").textContent = card.kanji;
  document.getElementById("reading").textContent = "";
  document.getElementById("meaning").textContent = "";

  updateStats();
  updateButtons();
}

function reveal() {
  const card = cards[index];
  document.getElementById("reading").textContent = card.reading;
  document.getElementById("meaning").textContent = card.meaning;
}

function markCorrect() {
  const key = `${currentPart}_${index}`;
  if (answeredCards[key]) return;

  answeredCards[key] = true;
  correctCount++;

  updateStats();
  updateButtons();
}

function markWrong() {
  const key = `${currentPart}_${index}`;
  if (answeredCards[key]) return;

  answeredCards[key] = true;
  wrongCount++;
  wrongCards.push(cards[index]);

  updateStats();
  updateButtons();
}

function nextCard() {
  const key = `${currentPart}_${index}`;
  if (!answeredCards[key]) return; // ⛔ WAJIB jawab dulu

  index++;

  if (index >= cards.length) {
    if (!isReviewMode && wrongCards.length > 0) {
      cards = [...wrongCards];
      wrongCards = [];
      index = 0;
      isReviewMode = true;
      alert("Mengulang kartu yang salah");
    } else {
      alert("Sesi selesai 🎉");
      index = cards.length - 1;
      return;
    }
  }

  render();
}

function prevCard() {
  if (index === 0) return;
  index--;
  render();
}


/* ===============================
   UI HELPERS
================================ */
function updateStats() {
  document.getElementById("correctCount").textContent = correctCount;
  document.getElementById("wrongCount").textContent = wrongCount;
}

function updateButtons() {
  const key = `${currentPart}_${index}`;
  const answered = answeredCards[key];

  document.getElementById("correctBtn").disabled = answered;
  document.getElementById("wrongBtn").disabled = answered;
}
