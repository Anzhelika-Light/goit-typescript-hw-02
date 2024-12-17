function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

// Створіть загальну функцію reverse, яка приймає масив будь-кого типу і повертає масив у зворотньому порядку.

function reverse<T>(arg: T[]): T[] {
  return arg.reverse();
}

let numbers = reverse<number>([1, 2, 3, 4, 5]);
console.log(numbers); // [5,4,3,2,1]

let strings = reverse<string>(["a", "b", "c", "d"]);
console.log(strings); // ['d','c','b','a']

// extends
function lengthOfObject<T extends { length: number }>(obj: T): number {
  return obj.length;
}

lengthOfObject({ name: "The Earth", length: 120 });
// В цей момент в Т записався такий тип {name: string, length: number}

// TASK 1
// Створіть загальну функцію getProperty, яка приймає об'єкт та ключ як рядок.
// Функція має повертати значення цього ключа з об'єкта.

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const student = {
  name: Amily,
  age: 30,
};

let studentName = getProperty(student, "name");
console.log(studentName); // Amily

// let studentAddress = getProperty(student, "address");
// console.log(studentAddress); // undefined
