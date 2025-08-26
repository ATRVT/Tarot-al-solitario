var DECKS = {
  noblet: {
    name: 'Jean Noblet (BnF)',
    cards: Array.from({length: 78}, (_, i) => ({
      id: i,
      file: 'assets/decks/noblet/' + String(i).padStart(2, '0') + '.jpg'
    }))
  }
};

var current = {
  deckKey: 'noblet',
  cardIds: [],
  questionIndex: null,
  ts: null,
  spread: 'line5',
  scope: 'full',
  qsetKey: 'Practica 70'
};

// (Opcional) Ocultar el selector de mazo:
document.addEventListener('DOMContentLoaded', () => {
  const sel = document.getElementById('deck');
  if (sel) sel.style.display = 'none';
});
