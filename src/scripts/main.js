function main () {
  initCountdown()
  initVideoLightbox()
}

function initVideoLightbox () {
  var $playBtn = document.getElementById('mh-play-btn')
  var $overlay = document.getElementById('vlb-overlay')

  $playBtn.addEventListener('click', showLightbox)
  $overlay.addEventListener('click', hideLightbox)
}

function showLightbox () {
  var $lightbox = document.getElementById('vlb-container')
  $lightbox.classList.remove('hidden')
}

function hideLightbox () {
  var $lightbox = document.getElementById('vlb-container')
  $lightbox.classList.add('hidden')
  resetIframeSrc()
}

function resetIframeSrc () {
  var $iframe = document.getElementById('vlb-iframe')
  $iframe.src = $iframe.src
}

function initCountdown () {
  // Elementi in cui mettiamo i valori del countdown
  var mesiEl = document.getElementById('cd-mesi')
  var giorniEl = document.getElementById('cd-giorni')
  var oreEl = document.getElementById('cd-ore')
  var minutiEl = document.getElementById('cd-minuti')
  var secondiEl = document.getElementById('cd-secondi')

  // Data di arrivo
  var weddingDate = new Date(2018, 6, 7, 11, 30) // i mesi partono da 0

  // Primo giro senza aspettare un secondo
  updateCountdown()

  // Avvia un loop ogni secondo
  setInterval(updateCountdown, 1000)

  // Calcola e mostra a schermo
  function updateCountdown () {
    var result = countdown(weddingDate)
    mesiEl.innerHTML = result.months
    giorniEl.innerHTML = result.days
    oreEl.innerHTML = result.hours
    minutiEl.innerHTML = result.minutes
    secondiEl.innerHTML = result.seconds
  }
}

if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
  main()
} else {
  document.addEventListener('DOMContentLoaded', main)
}
