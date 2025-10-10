(function () {
    const form   = document.getElementById("contactForm");
    const status = document.getElementById("status");
    const popup  = document.getElementById("successPopup");

    if (!form) return;

    let t1 = null, t2 = null;

    const showPopup = () => {
      if (!popup) return;
      clearTimeout(t1); clearTimeout(t2);
      popup.classList.remove("hide");
      popup.classList.add("show");
      // автозакриття
      t1 = setTimeout(() => {
        popup.classList.remove("show");
        popup.classList.add("hide");
      }, 2500);
      t2 = setTimeout(() => {
        popup.classList.remove("hide");
      }, 3500);
    };

    const hidePopup = () => {
      if (!popup) return;
      clearTimeout(t1); clearTimeout(t2);
      popup.classList.remove("show");
      popup.classList.add("hide");
      // приберемо hide трохи згодом, щоб анімація завершилась
      setTimeout(() => popup.classList.remove("hide"), 800);
    };

    // закриття попапа кліком/по Esc
    if (popup) {
      popup.addEventListener("click", hidePopup);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") hidePopup();
      });
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (status) status.textContent = "";

      try {
        const data = new FormData(form);
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          // 1) попап
          showPopup();

          // 2) статус-фолбек (можна приховати через CSS)
          if (status) {
            status.style.color = "green";
            status.textContent = "✅ Повідомлення успішно відправлено!";
          }

          // 3) гачок для аналітики: CSS-селектор .form--sent
          form.classList.add("form--sent");

          // 4) почистити форму
          form.reset();

          // 5) якщо треба — зняти клас через N секунд
          setTimeout(() => form.classList.remove("form--sent"), 4000);
        } else {
          if (status) {
            status.style.color = "red";
            status.textContent = "❌ Помилка при відправці. Спробуйте ще раз.";
          }
        }
      } catch (err) {
        if (status) {
          status.style.color = "red";
          status.textContent = "❌ Сталася помилка мережі. Спробуйте ще раз.";
        }
      }
    });

    // якщо користувач щось змінює у формі — знімаємо "успішний" стан
    form.addEventListener("input", () => form.classList.remove("form--sent"));
  })();