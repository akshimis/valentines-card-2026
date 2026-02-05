document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.getElementById('envelope');
  const letterContainer = document.getElementById('letter');
  const heartTrigger = document.getElementById('heart-trigger');
  const froggyModal = document.getElementById('froggy-modal');
  const heartSticker = document.getElementById('heart-sticker');

  envelope.addEventListener('click', () => {
    envelope.classList.add('open');
  });

  letterContainer.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent the document click event
    letterContainer.classList.add('show');
  });

  heartTrigger.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent the envelope click event
    froggyModal.classList.add('open');
  });

  froggyModal.addEventListener('click', (e) => {
    e.stopPropagation();
    froggyModal.classList.remove('open');
  });

  heartSticker.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!envelope.classList.contains('open')) return;

    froggyModal.classList.remove('open');
    letterContainer.classList.remove('show');
    envelope.classList.remove('open');
  });

  // close letter when clicking outside
  document.addEventListener('click', (e) => {
    if (letterContainer.classList.contains('show') && !letterContainer.contains(e.target) && !froggyModal.contains(e.target)) {
      letterContainer.classList.remove('show');
    }
  });
});