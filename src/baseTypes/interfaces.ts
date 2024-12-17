// Задача 1. Спроектуйте інтерфейс для ресторанного меню.
// Повинен містити поля: назава, ціна , категорія (закуска, основна страва, десерт).
// Розробіть функцію, яка приймає список страв та фільтрує їх за категорією.

type Interface = {
  name: string;
  price: number;
  category: string;
};

const dishes: Interface[] = [
  { name: "cake", price: 100, category: "dessert" },
  { name: "cookies", price: 80, category: "dessert" },
  { name: "cheese sticks", price: 50, category: "snack" },
  { name: "ravioli", price: 200, category: "main dish" },
  { name: "ice cream", price: 70, category: "dessert" },
  { name: "chips", price: 50, category: "snack" },
];

function filterDishes(dishes: Interface[], category: string): Interface[] {
  return dishes.filter((dish) => dish.category === category);
}

console.log(filterDishes(dishes, "snack"));

// Задача 2. Спроектуйте інтерфейс для користувача з полями ім'я, імейл, дата народження.
// створіть функцію, яка перевіряє, чи є користувач повнолітнім.
