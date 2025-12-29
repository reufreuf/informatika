
// F:\Kviz\questions.js
// Pitanja + indeks tačnog odgovora (0-based)
window.QUESTION_SET = [
  { q: "Šta je informatika?", a: ["Nauka o informacijama i računarima", "Igra", "Monitor", "Program"], c: 0 },
  { q: "Zašto služi tastatura?", a: ["Za unos podataka", "Za prikaz", "Za hlađenje", "Za pohranu"], c: 0 },
  { q: "Koje su vrste miševa?", a: ["Mehanički, optički, bežični", "LCD", "Ulazni", "Softverski"], c: 0 },
  { q: "Od čega zavisi kvalitet slike?", a: ["Od rezolucije i piksela", "Od miša", "Od zvuka", "Od tastature"], c: 0 },
  { q: "Šta je kursor?", a: ["Pokazivač na ekranu", "Program", "Monitor", "Tipka"], c: 0 },
  { q: "Koje su vrste monitora?", a: ["CRT, LCD, LED", "Ulazni", "Optički", "Mehanički"], c: 0 },
  { q: "Šta je računar?", a: ["Elektronski uređaj za obradu podataka", "Ekran", "Program", "Tastatura"], c: 0 },
  { q: "Glavni dijelovi računara su:", a: ["Monitor, kućište, tastatura, miš", "Internet", "Papir", "USB"], c: 0 },
  { q: "Koliko tipki ima standardna tastatura?", a: ["104", "80", "50", "120"], c: 0 },
  { q: "Čemu služi monitor?", a: ["Prikazu informacija", "Unosu", "Pohrani", "Hlađenju"], c: 0 },
  { q: "Šta možemo raditi mišem?", a: ["Klikati, povlačiti i označavati", "Pisati", "Štampati", "Skladištiti"], c: 0 },
  { q: "Standardne veličine monitora su:", a: ["17\\\", 19\\\", 21\\\"", "10\\\"", "5\\\"", "40\\\""], c: 0 },
  { q: "Šta je informacija?", a: ["Obrađeni podatak", "Računar", "Program", "Tastatura"], c: 0 },
  { q: "Šta se nalazi u kućištu CPU-a?", a: ["Procesor, memorija, matična ploča", "Monitor", "Miš", "Zvučnici"], c: 0 },
  { q: "U kojem omjeru se izrađuju monitori?", a: ["16:9", "4:1", "1:1", "10:3"], c: 0 },
  { q: "Grupe tipki na tastaturi su:", a: ["Alfanumeričke, funkcijske, numeričke", "Ulazne", "Grafičke", "Programske"], c: 0 },
  { q: "Šta je piksel?", a: ["Najmanja tačka slike", "Program", "Miš", "Dugme"], c: 0 },
  { q: "Ko je dao prvu definiciju informatike?", a: ["Philippe Dreyfus", "Bill Gates", "Alan Turing", "Steve Jobs"], c: 0 }
];

// Koliko bodova nosi tačan odgovor po pitanju:
window.POINTS_PER_CORRECT = 3;

// Skala ocjenjivanja (pragovi možeš promijeniti po želji):
window.gradeFromPercent = (percent) => (
  percent <= 29 ? 1 :
  percent <= 45 ? 2 :
  percent <= 66 ? 3 :
  percent <= 88 ? 4 : 5
);
