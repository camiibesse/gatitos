const gatoContainer = document.getElementById("gatoContainer");
const botones = document.querySelectorAll("button");

let currentGato = "";
let gatosGuardados = 0;

botones.forEach((boton, index) => {
  boton.addEventListener("click", () => {
    if (index === 0) {
      currentGato = "😺";
    } else if (index === 1) {
      currentGato = "😻";
    } else if (index === 2) {
      currentGato = "😹";
    }

    gatosGuardados++;

    if (gatosGuardados === 5 ) {
      const cajaEmoji = document.createElement("span");
      cajaEmoji.textContent = "📦";
      gatoContainer.innerHTML = "";
      gatoContainer.appendChild(cajaEmoji);
      gatosGuardados = 0;
    } else {
      const gatoEmoji = document.createElement("span");
      gatoEmoji.textContent = currentGato;
      gatoContainer.appendChild(gatoEmoji);
    }
  });
});