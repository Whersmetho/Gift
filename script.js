/* TYPEWRITER */

function typeWriter(text, element, speed = 35) {
  return new Promise((resolve) => {
    element.innerHTML = "";
    let i = 0;
    const timer = setInterval(() => {
      element.innerHTML += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

/* HISTORIA */

const steps = [
  "Todo empezó el 22 de febrero...",
  "No sabía que una persona podía aparecer tan rápido en mi vida.",
  "Y de repente empezamos a hablar más.",
  "A reír más.",
  "A buscarnos sin darnos cuenta.",
  "Y entendí algo...",
  "Me gusta cómo me haces sentir.",
];

let index = 0;

const storyText = document.getElementById("storyText");
const nextBtn = document.getElementById("nextBtn");

async function startStory() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("story").classList.remove("hidden");

  await typeWriter(steps[index], storyText);
}

nextBtn.addEventListener("click", async () => {
  index++;

  if (index < steps.length) {
    await typeWriter(steps[index], storyText);
  } else {
    document.getElementById("story").classList.add("hidden");
    document.getElementById("letter").classList.remove("hidden");

    // Iniciar el contador y la carta
    updateCounter();
    startLetter();
  }
});

/* CARTA */

const letter = `
Desde que apareciste
algo cambió en mi.
Me gusta tu forma de ser.
Tu forma de hablar.
Tu forma de hacer que los días
se sientan diferentes.
No sé exactamente
en qué momento pasó...
pero empezaste a importarme.
Y por eso hice todo esto.
`;

async function startLetter() {
    const letterElement = document.getElementById("letterText");
    
    // Escribe la carta
    await typeWriter(letter, letterElement, 30);
    
    console.log("Carta terminada. Preparando redirección...");

    // Espera 3 segundos
    setTimeout(() => {
        // Intentamos la redirección
        // Si están en la misma carpeta, basta con el nombre del archivo
        window.location.href = "./floresamarillas.html";
    }, 3000);
}
/* CONTADOR */

function updateCounter() {
  // Fecha: 22 de febrero
  const startDate = new Date("2026-02-22T00:00:00");
  const counterEl = document.getElementById("counter");

  if (!counterEl) return;

  setInterval(() => {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    counterEl.innerHTML = `Llevamos conociéndonos:<br><b>${days}d ${hours}h ${mins}m ${secs}s</b>`;
  }, 1000);
}