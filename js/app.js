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

