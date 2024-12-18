/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayOfWeek {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

console.log(isWeekend(DayOfWeek.Monday));
console.log(isWeekend(DayOfWeek.Sunday));
