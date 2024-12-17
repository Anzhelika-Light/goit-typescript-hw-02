//----------------------------------------------------- Readonly<T>----------------------------------------------------------

// Задача 1. Розробляєте функцію, яка приймає масив чисел і повертає його ж, але хочете гарантувати,
// що функція не змінює вхідний масив
function returnArray(arr: ReadonlyArray<number>): ReadonlyArray<number> {
  return arr;
}

console.log(returnArray([1, 2, 3, 4, 5]));

// Задача 2. Створіть об'єкт конфігурації, який не можна змінювати після його створення.
type Admin = {
  name: string;
  age: number;
  role: "admin";
};

const admin: Readonly<Admin> = {
  name: "Pete",
  age: 30,
  role: "admin",
};

// admin.role = 'user';

// ------------------------------------------------- Record<K, T>----------------------------------------------------------

// Задача 1. Хочете створити об'єкт, який мапить імена користувачів до їх віку
// type UserAge = Record<string, number>

// const database: UserAge = {
//   Ann: 30,
//   John: 15,
//   Bob: 27,
//   Jessica: 37
// }

// Задача 2. Мапа з назвами місяців до кількості днів у них
type DaysInMonth = Record<string, number>;

const database: DaysInMonth = {
  January: 30,
  February: 29,
  March: 31,
};
