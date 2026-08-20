// ==================== TROCA DE TEMA ====================

const themeButton = document.getElementById("toggle-theme");
const themeText = themeButton.querySelector("span");


function updateThemeButton(isDark) {

  themeButton.setAttribute(
    "aria-pressed",
    String(isDark)
  );

  if (isDark) {

    themeButton.firstChild.textContent = "☀️ ";

    themeText.textContent = "Modo Claro";

    themeButton.setAttribute(
      "aria-label",
      "Ativar modo claro"
    );

  } else {

    themeButton.firstChild.textContent = "🌙 ";

    themeText.textContent = "Modo Escuro";

    themeButton.setAttribute(
      "aria-label",
      "Ativar modo escuro"
    );

  }

}


function applyTheme(theme) {

  const isDark = theme === "dark";

  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light"
  );

  updateThemeButton(isDark);

  localStorage.setItem(
    "theme",
    isDark ? "dark" : "light"
  );

}


// Recupera o tema salvo anteriormente
const savedTheme = localStorage.getItem("theme");


if (savedTheme === "dark") {

  applyTheme("dark");

} else {

  applyTheme("light");

}


// Alterna o tema ao clicar no botão
themeButton.addEventListener("click", () => {

  const currentTheme =
    document.documentElement.getAttribute("data-theme");

  applyTheme(
    currentTheme === "dark"
      ? "light"
      : "dark"
  );

});