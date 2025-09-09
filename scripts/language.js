const btn = document.getElementById('lang-btn');
const list = document.getElementById('lang-list');

// Показати/сховати список мов
btn.addEventListener('click', () => {
  list.classList.toggle('hidden');
});

// Вибір мови
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const selectedLang = e.target.getAttribute('data-lang');
    alert('Вибрана мова: ' + selectedLang); // тут ви можете додати свій код для перекладу
    list.classList.add('hidden');
  }
});

// Закрити список, якщо клік поза кнопкою
document.addEventListener('click', (e) => {
  if (!btn.contains(e.target) && !list.contains(e.target)) {
    list.classList.add('hidden');
  }
});