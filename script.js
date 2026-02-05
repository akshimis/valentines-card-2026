document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.getElementById('envelope');
  const letterContainer = document.getElementById('letter');
  const heartTrigger = document.getElementById('heart-trigger');
  const froggyModal = document.getElementById('froggy-modal');

  envelope.addEventListener('click', () => {
    envelope.classList.add('open');

    // automatically show the letter after the envelope opens
    setTimeout(() => {
      letterContainer.classList.add('show');
    }, 1000); // 1 second delay
  });

  heartTrigger.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent the envelope click event
    froggyModal.classList.add('open');
  });

  froggyModal.addEventListener('click', () => {
    froggyModal.classList.remove('open');
  });
});