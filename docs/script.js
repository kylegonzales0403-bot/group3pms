const messageEl = document.getElementById('message');
const demoButton = document.getElementById('demoButton');

demoButton.addEventListener('click', () => {
  messageEl.textContent = 'Your website is live and published!';
});
