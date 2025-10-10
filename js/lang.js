document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("langBtn");

  btn.addEventListener("click", function() {
    if (btn.textContent === "EN") {
      window.location.href = "english.html"; // 👉 шлях до англійської сторінки
    } else {
      window.location.href = "index.html"; // 👉 шлях до української сторінки
    }
  });
});