const flashcards = [
  { en: "Hello", de: "Hallo", level: "A1" },
  { en: "Goodbye", de: "Auf Wiedersehen", level: "A1" },
  { en: "Please", de: "Bitte", level: "A1" },
  { en: "Thank you", de: "Danke", level: "A1" },
  { en: "Water", de: "Wasser", level: "A1" },
  { en: "House", de: "Haus", level: "A1" },

  { en: "Because", de: "Weil", level: "A2" },
  { en: "Although", de: "Obwohl", level: "A2" },
  { en: "Experience", de: "Erfahrung", level: "A2" },
  { en: "Decision", de: "Entscheidung", level: "A2" },

  { en: "Relationship", de: "Beziehung", level: "B1" },
  { en: "Development", de: "Entwicklung", level: "B1" },
  { en: "Responsibility", de: "Verantwortung", level: "B1" },
];

let currentLevel = "A1";
let filteredCards = [];
let currentIndex = 0;
let isFlipped = false;

// DOM
const card = document.getElementById("card");
const cardFront = document.getElementById("cardFront");
const cardBack = document.getElementById("cardBack");
const progress = document.getElementById("progress");

const flipBtn = document.getElementById("flipBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const levelSelect = document.getElementById("levelSelect");

// Filter cards by level
function applyFilter() {
  filteredCards = flashcards.filter(c => c.level === currentLevel);
  currentIndex = 0;
  updateCard();
}

// Update UI
function updateCard() {
  const cardData = filteredCards[currentIndex];

  if (!cardData) {
    cardFront.textContent = "No cards";
    cardBack.textContent = "";
    progress.textContent = "0 / 0";
    return;
  }

  cardFront.textContent = cardData.en;
  cardBack.textContent = cardData.de;
  progress.textContent = `${currentIndex + 1} / ${filteredCards.length}`;

  card.classList.remove("flipped");
  isFlipped = false;
}

// Actions
function flipCard() {
  isFlipped = !isFlipped;
  card.classList.toggle("flipped");
}

function nextCard() {
  currentIndex = (currentIndex + 1) % filteredCards.length;
  updateCard();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + filteredCards.length) % filteredCards.length;
  updateCard();
}

// Events
card.addEventListener("click", flipCard);
flipBtn.addEventListener("click", flipCard);
nextBtn.addEventListener("click", nextCard);
prevBtn.addEventListener("click", prevCard);

// Level change
levelSelect.addEventListener("change", (e) => {
  currentLevel = e.target.value;
  applyFilter();
});

// Init
applyFilter();