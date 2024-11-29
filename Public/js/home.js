//script.js
  document.addEventListener('DOMContentLoaded', () => { const logo = document.getElementById('siteName'); 
// Adiciona um efeito de piscada 
setInterval(() => { logo.style.opacity = (logo.style.opacity == 0 ? 1 : 0); }, 1000); });