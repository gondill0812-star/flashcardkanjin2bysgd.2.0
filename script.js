/* ===============================
   STATE
================================ */
let correctCount = 0;
let wrongCount = 0;

let savedPart = localStorage.getItem("flashcard_part");
let savedIndex = localStorage.getItem("flashcard_index");

let currentPart = savedPart ? Number(savedPart) : 1;
let index = savedIndex ? Number(savedIndex) : 0;

let cards = [];
let wrongCards = [];
let isReviewMode = false;

/* ===============================
   INIT
================================ */
function loadPart() {
  cards = flashcards.filter(c => c.part === currentPart);
  wrongCards = [];
  index = 0;
  isReviewMode = false;

  // Reset statistik
  correctCount = 0;
  wrongCount = 0;

  document.getElementById("partSelect").value = currentPart;

  updateProgress();
  updateStats();
  render();
}

/* ===============================
   RENDER
================================ */
function render() {
  hideAll();

  const card = cards[index];
  if (!card) return;

  document.getElementById("kanji").textContent = card.kanji;
  document.getElementById("reading").textContent = card.reading;
  document.getElementById("meaning").textContent = card.meaning;
  document.getElementById("sentence").textContent = card.sentence;
  document.getElementById("sentence-reading").textContent = card.sentenceReading;
  document.getElementById("sentence-meaning").textContent = card.sentenceMeaning;

  updateProgress();
}

/* ===============================
   VISIBILITY
================================ */
function hideAll() {
  document.getElementById("reading").classList.add("hidden");
  document.getElementById("meaning").classList.add("hidden");
  document.getElementById("sentence").classList.add("hidden");
  document.getElementById("sentence-reading").classList.add("hidden");
  document.getElementById("sentence-meaning").classList.add("hidden");
}

function reveal() {
  document.getElementById("reading").classList.remove("hidden");
  document.getElementById("meaning").classList.remove("hidden");
  document.getElementById("sentence").classList.remove("hidden");
  document.getElementById("sentence-reading").classList.remove("hidden");
  document.getElementById("sentence-meaning").classList.remove("hidden");
}

/* ===============================
   NAVIGATION
================================ */
function nextCard() {
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
      saveProgress();
      return;
    }
  }
  saveProgress();
  render();
}

function prevCard() {
  if (index > 0) {
    index--;
    saveProgress();
    render();
  }
}

/* ===============================
   ANSWER
================================ */
function markCorrect() {
  correctCount++;
  updateStats();
  nextCard();
}

function markWrong() {
  wrongCount++;
  wrongCards.push(cards[index]);
  updateStats();
  nextCard();
}

/* ===============================
   PART
================================ */
function changePart() {
  currentPart = Number(document.getElementById("partSelect").value);
  loadPart();
}

/* ===============================
   STORAGE
================================ */
function saveProgress() {
  localStorage.setItem("flashcard_part", currentPart);
  localStorage.setItem("flashcard_index", index);
}

/* ===============================
   UI
================================ */
function updateProgress() {
  const progress = document.getElementById("progress");
  if (!progress) return;

  progress.textContent =
    `Card ${index + 1} / ${cards.length} (Part ${currentPart})`;
}

function updateStats() {
  const stats = document.getElementById("stats");
  if (!stats) return;

  const total = correctCount + wrongCount;
  const accuracy = total ? Math.round((correctCount / total) * 100) : 0;

  stats.textContent =
    `✔ Benar: ${correctCount} | ✖ Salah: ${wrongCount} | 🎯 Akurasi: ${accuracy}%`;
}

/* ===============================
   EVENTS
================================ */
function bindEvents() {
  document.getElementById("revealBtn").addEventListener("click", reveal);
  document.getElementById("prevBtn").addEventListener("click", prevCard);
  document.getElementById("btnCorrect").addEventListener("click", markCorrect);
  document.getElementById("btnWrong").addEventListener("click", markWrong);
  document.getElementById("partSelect").addEventListener("change", changePart);
}

document.addEventListener("keydown", (e) => {
  const tag = document.activeElement.tagName;
  if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;

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

    case "p":
    case "P":
      document.getElementById("partSelect")?.focus();
      break;
  }
});

/* ===============================
   START
================================ */
bindEvents();
loadPart();
updateStats();
