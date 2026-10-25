const habits = [
    {
        id: "h1", 
        name: "Leer 20 minutos", 
        color: "#2B7FD9", 
        completedDates: ["2026-10-19", "2026-10-22", "2026-10-23"]
    },

    {
        id: "h2", 
        name: "Hacer deporte 45 minutos", 
        color: "#D9467A", 
        completedDates: ["2026-10-19", "2026-10-21", "2026-10-23"]
    }   
];
  
console.log(habits);
console.log(habits[0].name);
console.log(habits[1].completedDates.length);

console.log(habits[0].completedDates.includes("2026-10-23"));

function formatDate(date) {
   const year = date.getFullYear();
   const month = String(date.getMonth() + 1).padStart(2,"0");
   const day = String(date.getDate()).padStart(2,"0");
   return  `${year}-${month}-${day}`;   
}

const today = formatDate(new Date());
console.log(today);

function isDoneOn(habit, date) {
    return habit.completedDates.includes(date);
}
