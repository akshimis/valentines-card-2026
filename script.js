document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.getElementById('envelope');
  const letterContainer = document.getElementById('letter');

  envelope.addEventListener('click', () => {
    envelope.classList.add('open');

    // automatically show the letter after the envelope opens
    setTimeout(() => {
      letterContainer.classList.add('show');
    }, 1000); // 1 second delay
  });
});