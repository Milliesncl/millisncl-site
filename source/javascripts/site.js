document.addEventListener("DOMContentLoaded", () => {
  const menuBurgerToggle = document.querySelector("#navbar");

  const menuBurger = () => {
    if (menuBurgerToggle.className === "navbar") {
      menuBurgerToggle.className += " responsive";
    } else {
      menuBurgerToggle.className = "navbar";
    };
  };

  menuBurgerToggle.addEventListener("click", () => {
      menuBurger();
  });
});


