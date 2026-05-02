const flashcards = [
  { en: "Hello", de: "Hallo" },
  { en: "Goodbye", de: "Auf Wiedersehen" },
  { en: "Please", de: "Bitte" },
  { en: "Thank you", de: "Danke" },
  { en: "Yes", de: "Ja" },
  { en: "No", de: "Nein" },
  { en: "Water", de: "Wasser" },
  { en: "Food", de: "Essen" },
  { en: "House", de: "Haus" },
  { en: "Car", de: "Auto" }
];

let currentIndex = 0;
let isFlipped = false;

const card = document.getElementById("card");
const cardFront = document.getElementById("cardFront");
const cardBack = document.getElementById("cardBack");
const progress = document.getElementById("progress");

const flipBtn = document.getElementById("flipBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function updateCard() {
  const cardData = flashcards[currentIndex];
  cardFront.textContent = cardData.en;
  cardBack.textContent = cardData.de;
  progress.textContent = `${currentIndex + 1} / ${flashcards.length}`;

  card.classList.remove("flipped");
  isFlipped = false;
}

function flipCard() {
  isFlipped = !isFlipped;
  card.classList.toggle("flipped");
}

function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  updateCard();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  updateCard();
}

card.addEventListener("click", flipCard);
flipBtn.addEventListener("click", flipCard);
nextBtn.addEventListener("click", nextCard);
prevBtn.addEventListener("click", prevCard);

// Init
updateCard();