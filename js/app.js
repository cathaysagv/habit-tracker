// ==== Datos ====
const habits = [
  {
    id: "h1",
    name: "Leer 20 minutos",
    color: "#2B7FD9",
    completedDates: ["2026-10-19", "2026-10-22", "2026-10-23"],
  },

  {
    id: "h2",
    name: "Hacer deporte 45 minutos",
    color: "#D9467A",
    completedDates: ["2026-10-19", "2026-10-21", "2026-10-23"],
  },
];

// ==== Fechas ====
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const today = formatDate(new Date());

// ==== Hábitos ====
function isDoneOn(habit, date) {
  return habit.completedDates.includes(date);
}

// ==== Pintar ====
function renderProgress() {
  const doneCount = habits.filter((habit) => isDoneOn(habit, today)).length;
  const total = habits.length;

  let percent = 0;
  if (total > 0) {
    percent = Math.round((doneCount / total) * 100);
  }

  document.querySelector(".progress-text").textContent =
    `${doneCount} de ${total} hábitos hechos`;
  document.querySelector(".progress-percent").textContent = `${percent}%`;
  document.querySelector(".progress-fill").style.width = `${percent}%`;
}

function renderHabits() {
  const list = document.querySelector(".habit-list");
  const template = document.querySelector("#habit-template");
  list.innerHTML = "";

  habits.forEach((habit) => {
    const card = template.content.cloneNode(true);

    card.querySelector(".habit-name").textContent = habit.name;
    card
      .querySelector(".habit-card")
      .style.setProperty("--habit-color", habit.color);
    card
      .querySelector(".habit-check")
      .setAttribute("aria-label", `Marcar ${habit.name} como hecho`);

    list.append(card);
  });
}

// ==== Inicio ====
renderProgress();
renderHabits();
