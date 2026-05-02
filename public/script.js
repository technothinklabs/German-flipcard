const flashcards = [
  // ─────────────── A1 ───────────────
  { en: "Hello", de: "Hallo", level: "A1" },
  { en: "Goodbye", de: "Auf Wiedersehen", level: "A1" },
  { en: "Please", de: "Bitte", level: "A1" },
  { en: "Thank you", de: "Danke", level: "A1" },
  { en: "Yes", de: "Ja", level: "A1" },
  { en: "No", de: "Nein", level: "A1" },
  { en: "Good morning", de: "Guten Morgen", level: "A1" },
  { en: "Good evening", de: "Guten Abend", level: "A1" },
  { en: "Good night", de: "Gute Nacht", level: "A1" },
  { en: "Sorry / Excuse me", de: "Entschuldigung", level: "A1" },
  { en: "You're welcome", de: "Bitte sehr", level: "A1" },
  { en: "How are you?", de: "Wie geht es Ihnen?", level: "A1" },
  { en: "My name is…", de: "Ich heiße…", level: "A1" },
  { en: "Water", de: "Wasser", level: "A1" },
  { en: "Bread", de: "Brot", level: "A1" },
  { en: "Milk", de: "Milch", level: "A1" },
  { en: "Food", de: "Essen", level: "A1" },
  { en: "Drink", de: "Getränk", level: "A1" },
  { en: "Coffee", de: "Kaffee", level: "A1" },
  { en: "Tea", de: "Tee", level: "A1" },
  { en: "House", de: "Haus", level: "A1" },
  { en: "Apartment", de: "Wohnung", level: "A1" },
  { en: "Room", de: "Zimmer", level: "A1" },
  { en: "Door", de: "Tür", level: "A1" },
  { en: "Window", de: "Fenster", level: "A1" },
  { en: "Table", de: "Tisch", level: "A1" },
  { en: "Chair", de: "Stuhl", level: "A1" },
  { en: "Bed", de: "Bett", level: "A1" },
  { en: "Book", de: "Buch", level: "A1" },
  { en: "Pen", de: "Stift", level: "A1" },
  { en: "School", de: "Schule", level: "A1" },
  { en: "Teacher", de: "Lehrer / Lehrerin", level: "A1" },
  { en: "Student", de: "Schüler / Schülerin", level: "A1" },
  { en: "Man", de: "Mann", level: "A1" },
  { en: "Woman", de: "Frau", level: "A1" },
  { en: "Child", de: "Kind", level: "A1" },
  { en: "Boy", de: "Junge", level: "A1" },
  { en: "Girl", de: "Mädchen", level: "A1" },
  { en: "Father", de: "Vater", level: "A1" },
  { en: "Mother", de: "Mutter", level: "A1" },
  { en: "Brother", de: "Bruder", level: "A1" },
  { en: "Sister", de: "Schwester", level: "A1" },
  { en: "Friend (male)", de: "Freund", level: "A1" },
  { en: "Friend (female)", de: "Freundin", level: "A1" },
  { en: "Dog", de: "Hund", level: "A1" },
  { en: "Cat", de: "Katze", level: "A1" },
  { en: "Car", de: "Auto", level: "A1" },
  { en: "Train", de: "Zug", level: "A1" },
  { en: "Bus", de: "Bus", level: "A1" },
  { en: "Street", de: "Straße", level: "A1" },
  { en: "City", de: "Stadt", level: "A1" },
  { en: "Country", de: "Land", level: "A1" },
  { en: "Day", de: "Tag", level: "A1" },
  { en: "Night", de: "Nacht", level: "A1" },
  { en: "Week", de: "Woche", level: "A1" },
  { en: "Month", de: "Monat", level: "A1" },
  { en: "Year", de: "Jahr", level: "A1" },
  { en: "Today", de: "Heute", level: "A1" },
  { en: "Tomorrow", de: "Morgen", level: "A1" },
  { en: "Yesterday", de: "Gestern", level: "A1" },
  { en: "Monday", de: "Montag", level: "A1" },
  { en: "Tuesday", de: "Dienstag", level: "A1" },
  { en: "Wednesday", de: "Mittwoch", level: "A1" },
  { en: "Thursday", de: "Donnerstag", level: "A1" },
  { en: "Friday", de: "Freitag", level: "A1" },
  { en: "Saturday", de: "Samstag", level: "A1" },
  { en: "Sunday", de: "Sonntag", level: "A1" },
  { en: "Red", de: "Rot", level: "A1" },
  { en: "Blue", de: "Blau", level: "A1" },
  { en: "Green", de: "Grün", level: "A1" },
  { en: "Yellow", de: "Gelb", level: "A1" },
  { en: "White", de: "Weiß", level: "A1" },
  { en: "Black", de: "Schwarz", level: "A1" },
  { en: "Big", de: "Groß", level: "A1" },
  { en: "Small", de: "Klein", level: "A1" },
  { en: "New", de: "Neu", level: "A1" },
  { en: "Old", de: "Alt", level: "A1" },
  { en: "Good", de: "Gut", level: "A1" },
  { en: "Bad", de: "Schlecht", level: "A1" },
  { en: "Hot", de: "Heiß", level: "A1" },
  { en: "Cold", de: "Kalt", level: "A1" },
  { en: "I (pronoun)", de: "Ich", level: "A1" },
  { en: "You (informal)", de: "Du", level: "A1" },
  { en: "He", de: "Er", level: "A1" },
  { en: "She", de: "Sie", level: "A1" },
  { en: "We", de: "Wir", level: "A1" },
  { en: "They", de: "Sie (plural)", level: "A1" },
  { en: "To be", de: "Sein", level: "A1" },
  { en: "To have", de: "Haben", level: "A1" },
  { en: "To go", de: "Gehen", level: "A1" },
  { en: "To come", de: "Kommen", level: "A1" },
  { en: "To eat", de: "Essen", level: "A1" },
  { en: "To drink", de: "Trinken", level: "A1" },
  { en: "To sleep", de: "Schlafen", level: "A1" },
  { en: "To work", de: "Arbeiten", level: "A1" },
  { en: "To speak", de: "Sprechen", level: "A1" },
  { en: "To read", de: "Lesen", level: "A1" },
  { en: "To write", de: "Schreiben", level: "A1" },
  { en: "To buy", de: "Kaufen", level: "A1" },
  { en: "To open", de: "Öffnen", level: "A1" },
  { en: "To close", de: "Schließen", level: "A1" },
  { en: "One", de: "Eins", level: "A1" },
  { en: "Two", de: "Zwei", level: "A1" },
  { en: "Three", de: "Drei", level: "A1" },
  { en: "Ten", de: "Zehn", level: "A1" },
  { en: "Hundred", de: "Hundert", level: "A1" },

  // ─────────────── A2 ───────────────
  { en: "Because", de: "Weil", level: "A2" },
  { en: "Although", de: "Obwohl", level: "A2" },
  { en: "Experience", de: "Erfahrung", level: "A2" },
  { en: "Decision", de: "Entscheidung", level: "A2" },
  { en: "Answer", de: "Antwort", level: "A2" },
  { en: "Question", de: "Frage", level: "A2" },
  { en: "Problem", de: "Problem", level: "A2" },
  { en: "Solution", de: "Lösung", level: "A2" },
  { en: "Opportunity", de: "Möglichkeit", level: "A2" },
  { en: "Example", de: "Beispiel", level: "A2" },
  { en: "Information", de: "Information", level: "A2" },
  { en: "Reason", de: "Grund", level: "A2" },
  { en: "Place", de: "Ort", level: "A2" },
  { en: "Time", de: "Zeit", level: "A2" },
  { en: "Meeting", de: "Treffen", level: "A2" },
  { en: "Journey / Trip", de: "Reise", level: "A2" },
  { en: "Holiday / Vacation", de: "Urlaub", level: "A2" },
  { en: "Weather", de: "Wetter", level: "A2" },
  { en: "Rain", de: "Regen", level: "A2" },
  { en: "Sun", de: "Sonne", level: "A2" },
  { en: "Snow", de: "Schnee", level: "A2" },
  { en: "Wind", de: "Wind", level: "A2" },
  { en: "Temperature", de: "Temperatur", level: "A2" },
  { en: "Hospital", de: "Krankenhaus", level: "A2" },
  { en: "Doctor", de: "Arzt / Ärztin", level: "A2" },
  { en: "Medicine", de: "Medizin", level: "A2" },
  { en: "Pharmacy", de: "Apotheke", level: "A2" },
  { en: "Health", de: "Gesundheit", level: "A2" },
  { en: "Pain", de: "Schmerz", level: "A2" },
  { en: "Bank", de: "Bank", level: "A2" },
  { en: "Money", de: "Geld", level: "A2" },
  { en: "Price", de: "Preis", level: "A2" },
  { en: "Shop", de: "Geschäft", level: "A2" },
  { en: "Market", de: "Markt", level: "A2" },
  { en: "Supermarket", de: "Supermarkt", level: "A2" },
  { en: "Post office", de: "Postamt", level: "A2" },
  { en: "Letter", de: "Brief", level: "A2" },
  { en: "Parcel", de: "Paket", level: "A2" },
  { en: "Ticket", de: "Fahrkarte", level: "A2" },
  { en: "Station", de: "Bahnhof", level: "A2" },
  { en: "Airport", de: "Flughafen", level: "A2" },
  { en: "Airplane", de: "Flugzeug", level: "A2" },
  { en: "Hotel", de: "Hotel", level: "A2" },
  { en: "Restaurant", de: "Restaurant", level: "A2" },
  { en: "Menu", de: "Speisekarte", level: "A2" },
  { en: "Bill / Check", de: "Rechnung", level: "A2" },
  { en: "Reservation", de: "Reservierung", level: "A2" },
  { en: "Kitchen", de: "Küche", level: "A2" },
  { en: "Bathroom", de: "Badezimmer", level: "A2" },
  { en: "Bedroom", de: "Schlafzimmer", level: "A2" },
  { en: "Living room", de: "Wohnzimmer", level: "A2" },
  { en: "Garden", de: "Garten", level: "A2" },
  { en: "Key", de: "Schlüssel", level: "A2" },
  { en: "Neighbour", de: "Nachbar / Nachbarin", level: "A2" },
  { en: "Address", de: "Adresse", level: "A2" },
  { en: "Job / Profession", de: "Beruf", level: "A2" },
  { en: "Office", de: "Büro", level: "A2" },
  { en: "Computer", de: "Computer", level: "A2" },
  { en: "Phone", de: "Telefon", level: "A2" },
  { en: "Mobile phone", de: "Handy", level: "A2" },
  { en: "Internet", de: "Internet", level: "A2" },
  { en: "Email", de: "E-Mail", level: "A2" },
  { en: "Sport", de: "Sport", level: "A2" },
  { en: "Football / Soccer", de: "Fußball", level: "A2" },
  { en: "Music", de: "Musik", level: "A2" },
  { en: "Film / Movie", de: "Film", level: "A2" },
  { en: "Party", de: "Party / Feier", level: "A2" },
  { en: "Gift / Present", de: "Geschenk", level: "A2" },
  { en: "Birthday", de: "Geburtstag", level: "A2" },
  { en: "Happy", de: "Glücklich", level: "A2" },
  { en: "Sad", de: "Traurig", level: "A2" },
  { en: "Tired", de: "Müde", level: "A2" },
  { en: "Hungry", de: "Hungrig", level: "A2" },
  { en: "Thirsty", de: "Durstig", level: "A2" },
  { en: "Important", de: "Wichtig", level: "A2" },
  { en: "Interesting", de: "Interessant", level: "A2" },
  { en: "Easy", de: "Einfach / Leicht", level: "A2" },
  { en: "Difficult", de: "Schwierig", level: "A2" },
  { en: "Fast", de: "Schnell", level: "A2" },
  { en: "Slow", de: "Langsam", level: "A2" },
  { en: "Early", de: "Früh", level: "A2" },
  { en: "Late", de: "Spät", level: "A2" },
  { en: "Often", de: "Oft", level: "A2" },
  { en: "Sometimes", de: "Manchmal", level: "A2" },
  { en: "Never", de: "Nie", level: "A2" },
  { en: "Always", de: "Immer", level: "A2" },
  { en: "Here", de: "Hier", level: "A2" },
  { en: "There", de: "Dort", level: "A2" },
  { en: "Together", de: "Zusammen", level: "A2" },
  { en: "Before", de: "Vor / Bevor", level: "A2" },
  { en: "After", de: "Nach / Nachdem", level: "A2" },
  { en: "To know (a fact)", de: "Wissen", level: "A2" },
  { en: "To understand", de: "Verstehen", level: "A2" },
  { en: "To like / enjoy", de: "Mögen", level: "A2" },
  { en: "To need", de: "Brauchen", level: "A2" },
  { en: "To help", de: "Helfen", level: "A2" },
  { en: "To find", de: "Finden", level: "A2" },
  { en: "To think", de: "Denken", level: "A2" },
  { en: "To show", de: "Zeigen", level: "A2" },
  { en: "To wait", de: "Warten", level: "A2" },
  { en: "To pay", de: "Bezahlen", level: "A2" },
  { en: "To order", de: "Bestellen", level: "A2" },
  { en: "To travel", de: "Reisen", level: "A2" },
  { en: "To learn", de: "Lernen", level: "A2" },

  // ─────────────── B1 ───────────────
  { en: "Relationship", de: "Beziehung", level: "B1" },
  { en: "Development", de: "Entwicklung", level: "B1" },
  { en: "Responsibility", de: "Verantwortung", level: "B1" },
  { en: "Environment", de: "Umwelt", level: "B1" },
  { en: "Society", de: "Gesellschaft", level: "B1" },
  { en: "Government", de: "Regierung", level: "B1" },
  { en: "Economy", de: "Wirtschaft", level: "B1" },
  { en: "Politics", de: "Politik", level: "B1" },
  { en: "Culture", de: "Kultur", level: "B1" },
  { en: "History", de: "Geschichte", level: "B1" },
  { en: "Science", de: "Wissenschaft", level: "B1" },
  { en: "Technology", de: "Technologie", level: "B1" },
  { en: "Education", de: "Bildung", level: "B1" },
  { en: "University", de: "Universität", level: "B1" },
  { en: "Research", de: "Forschung", level: "B1" },
  { en: "Knowledge", de: "Wissen / Kenntnisse", level: "B1" },
  { en: "Opinion", de: "Meinung", level: "B1" },
  { en: "Discussion", de: "Diskussion", level: "B1" },
  { en: "Agreement", de: "Vereinbarung / Einigung", level: "B1" },
  { en: "Disagreement", de: "Meinungsverschiedenheit", level: "B1" },
  { en: "Argument", de: "Argument", level: "B1" },
  { en: "Proof / Evidence", de: "Beweis", level: "B1" },
  { en: "Consequence", de: "Konsequenz / Folge", level: "B1" },
  { en: "Influence", de: "Einfluss", level: "B1" },
  { en: "Advantage", de: "Vorteil", level: "B1" },
  { en: "Disadvantage", de: "Nachteil", level: "B1" },
  { en: "Improvement", de: "Verbesserung", level: "B1" },
  { en: "Change", de: "Veränderung", level: "B1" },
  { en: "Progress", de: "Fortschritt", level: "B1" },
  { en: "Challenge", de: "Herausforderung", level: "B1" },
  { en: "Achievement", de: "Leistung / Erfolg", level: "B1" },
  { en: "Failure", de: "Misserfolg / Scheitern", level: "B1" },
  { en: "Success", de: "Erfolg", level: "B1" },
  { en: "Goal / Aim", de: "Ziel", level: "B1" },
  { en: "Plan", de: "Plan", level: "B1" },
  { en: "Strategy", de: "Strategie", level: "B1" },
  { en: "Skill / Ability", de: "Fähigkeit", level: "B1" },
  { en: "Talent", de: "Talent", level: "B1" },
  { en: "Behaviour", de: "Verhalten", level: "B1" },
  { en: "Attitude", de: "Einstellung / Haltung", level: "B1" },
  { en: "Feeling / Emotion", de: "Gefühl", level: "B1" },
  { en: "Fear", de: "Angst", level: "B1" },
  { en: "Hope", de: "Hoffnung", level: "B1" },
  { en: "Trust", de: "Vertrauen", level: "B1" },
  { en: "Respect", de: "Respekt / Achtung", level: "B1" },
  { en: "Freedom", de: "Freiheit", level: "B1" },
  { en: "Right / Law", de: "Recht", level: "B1" },
  { en: "Duty / Obligation", de: "Pflicht", level: "B1" },
  { en: "Rule / Regulation", de: "Regel / Vorschrift", level: "B1" },
  { en: "Contract", de: "Vertrag", level: "B1" },
  { en: "Company / Business", de: "Unternehmen / Firma", level: "B1" },
  { en: "Employee", de: "Mitarbeiter / Angestellter", level: "B1" },
  { en: "Employer / Boss", de: "Arbeitgeber / Chef", level: "B1" },
  { en: "Salary / Wage", de: "Gehalt / Lohn", level: "B1" },
  { en: "Application", de: "Bewerbung", level: "B1" },
  { en: "Career", de: "Karriere / Laufbahn", level: "B1" },
  { en: "Meeting (business)", de: "Besprechung / Sitzung", level: "B1" },
  { en: "Project", de: "Projekt", level: "B1" },
  { en: "Report", de: "Bericht", level: "B1" },
  { en: "Appointment", de: "Termin", level: "B1" },
  { en: "Insurance", de: "Versicherung", level: "B1" },
  { en: "Rent", de: "Miete", level: "B1" },
  { en: "Cost / Expense", de: "Kosten", level: "B1" },
  { en: "Tax", de: "Steuer", level: "B1" },
  { en: "Newspaper", de: "Zeitung", level: "B1" },
  { en: "Article", de: "Artikel", level: "B1" },
  { en: "News", de: "Nachrichten", level: "B1" },
  { en: "Advertisement", de: "Werbung", level: "B1" },
  { en: "Community", de: "Gemeinschaft", level: "B1" },
  { en: "Tradition", de: "Tradition", level: "B1" },
  { en: "Religion", de: "Religion", level: "B1" },
  { en: "Language", de: "Sprache", level: "B1" },
  { en: "Literature", de: "Literatur", level: "B1" },
  { en: "Art", de: "Kunst", level: "B1" },
  { en: "Theatre / Theater", de: "Theater", level: "B1" },
  { en: "Concert", de: "Konzert", level: "B1" },
  { en: "Exhibition", de: "Ausstellung", level: "B1" },
  { en: "Nature", de: "Natur", level: "B1" },
  { en: "Climate", de: "Klima", level: "B1" },
  { en: "Pollution", de: "Verschmutzung", level: "B1" },
  { en: "Recycling", de: "Recycling / Wiederverwertung", level: "B1" },
  { en: "Energy", de: "Energie", level: "B1" },
  { en: "Resource", de: "Ressource", level: "B1" },
  { en: "Population", de: "Bevölkerung", level: "B1" },
  { en: "Migration", de: "Migration", level: "B1" },
  { en: "Poverty", de: "Armut", level: "B1" },
  { en: "Equality", de: "Gleichheit / Gleichberechtigung", level: "B1" },
  { en: "Violence", de: "Gewalt", level: "B1" },
  { en: "Peace", de: "Frieden", level: "B1" },
  { en: "War", de: "Krieg", level: "B1" },
  { en: "Crisis", de: "Krise", level: "B1" },
  { en: "To achieve", de: "Erreichen / Erzielen", level: "B1" },
  { en: "To decide", de: "Entscheiden", level: "B1" },
  { en: "To describe", de: "Beschreiben", level: "B1" },
  { en: "To explain", de: "Erklären", level: "B1" },
  { en: "To expect", de: "Erwarten", level: "B1" },
  { en: "To suggest", de: "Vorschlagen", level: "B1" },
  { en: "To compare", de: "Vergleichen", level: "B1" },
  { en: "To develop", de: "Entwickeln", level: "B1" },
  { en: "To improve", de: "Verbessern", level: "B1" },
  { en: "To support", de: "Unterstützen", level: "B1" },
  { en: "To consider", de: "Überlegen / Berücksichtigen", level: "B1" },
  { en: "To depend on", de: "Abhängen von", level: "B1" },
  { en: "To participate", de: "Teilnehmen", level: "B1" },
  { en: "To refuse", de: "Ablehnen / Verweigern", level: "B1" },
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