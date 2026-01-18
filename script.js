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
  const card = cards[index];
  if (!card) return;

  document.getElementById("kanji").textContent = card.kanji || "漢字";
  document.getElementById("reading").textContent = card.reading || "読み";
  document.getElementById("meaning").textContent = card.meaning || "意味";
  document.getElementById("sentence").textContent = card.sentence || "文";
  document.getElementById("sentence-reading").textContent = card.sentenceReading || "文読み";
  document.getElementById("sentence-meaning").textContent = card.sentenceMeaning || "文意味";

  updateProgress();
}

/* ===============================
   NAVIGATION
================================ */
function nextCard() {
  if (index < cards.length - 1) {
    index++;
  } else if (!isReviewMode && wrongCards.length > 0) {
    cards = [...wrongCards];
    wrongCards = [];
    index = 0;
    isReviewMode = true;
    alert("Mengulang kartu yang salah");
  } else {
    alert("Sesi selesai 🎉");
    return;
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
  document.getElementById("progress").textContent =
    `Card ${index + 1} / ${cards.length} (Part ${currentPart})`;
}

function updateStats() {
  const total = correctCount + wrongCount;
  const accuracy = total ? Math.round((correctCount / total) * 100) : 0;
  document.getElementById("stats").textContent =
    `✔ Benar: ${correctCount} | ✖ Salah: ${wrongCount} | 🎯 Akurasi: ${accuracy}%`;
}

/* ===============================
   EVENTS
================================ */
function bindEvents() {
  document.getElementById("revealBtn").addEventListener("click", render);
  document.getElementById("prevBtn").addEventListener("click", prevCard);
}

bindEvents();
loadPart();
