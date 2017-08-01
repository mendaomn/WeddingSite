// Elementi in cui mettiamo i valori del countdown
var mesiEl = document.getElementById('cd-mesi');
var giorniEl = document.getElementById('cd-giorni');
var oreEl = document.getElementById('cd-ore');
var minutiEl = document.getElementById('cd-minuti');
var secondiEl = document.getElementById('cd-secondi');

// Data di arrivo
var weddingDate = new Date( 2018, 6, 7 ); // i mesi partono da 0

// Primo giro senza aspettare un secondo
updateCountdown();

// Avvia un loop ogni secondo
setInterval( updateCountdown, 1000);

// Calcola e mostra a schermo
function updateCountdown() {
  var result = countdown(weddingDate);
  mesiEl.innerHTML = result.months;
  giorniEl.innerHTML = result.days;
  oreEl.innerHTML = result.hours;
  minutiEl.innerHTML = result.minutes;
  secondiEl.innerHTML = result.seconds;
}
