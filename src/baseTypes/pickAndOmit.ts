// ---------------------------------------------- Метод Pick<T, K>------------------------------------------------------
type Person = {
  name: string;
  age: number;
  address: string;
};

// Запис 1 - через метод Pick, перевиокристовуємо існуючі типи. Тому треба пересвідчитися, що обрані ключі існують у базовому типі
type PersonSummary = Pick<Person, "name" | "age">;

// // Запис 2. Під капотом TypeScript робить наступне. Створюємо нові типи, між собою не пов'язані
// type PersonSummary = {
//   name: string;
//   age: number;
// };

const johnSummary: PersonSummary = {
  name: "John",
  age: 30,
};

// Задача 1. Є об'єкт користувача. Потрібно створити функцію, яка повертає лише ім'я та електронну пошту.
// type User = {
//   name: string;
//   age: number;
//   email: string;
// };

// const user: User = {
//   name: "Ann",
//   age: 30,
//   email: "ann@gmail.com",
// };

// function getNameAndEmail(user: User): Pick<User, "name" | "email"> {
//   return {
//     name: user.name,
//     email: user.email,
//   };
// }

// console.log(getNameAndEmail(user));

// Задача 2. Хочете зберегти лише певні поля з API-відповіді для відображення в UI.

// type APIResponse = {
//   id: number;
//   title: string;
//   author: string;
//   pageCount: number;
// };

// const bookInform: APIResponse = {
//   id: 13,
//   title: "Harry Potter",
//   author: "joanne rowling",
//   pageCount: 523,
// };

// function getBook(book: APIResponse): Pick<APIResponse, "title" | "author"> {
//   return {
//     title: book.title,
//     author: book.author,
//   };
// }
// console.log(getBook(bookInform));

//-------------------------------------------- Метод Omit<T, K> ------------------------------------------------------------
type PersonWithoutAddress = Omit<Person, "address" | "name">;

const john: PersonWithoutAddress = {
  //   name: "John",
  age: 30,
  //   address: "hvlkj;l",
};

// Задача 1. Є тип користувача, але ви хочете створити новий тип без поля пароля для відправлення даних на клієнтську сторону
// type User = {
//   name: string;
//   age: number;
//   password: string;
// };

// const user: User = {
//   name: "Bob",
//   age: 30,
//   password: "kgkl75879v!",
// };

// function getUserInfo(user: User): Omit<User, "password"> {
//   return {
//     name: user.name,
//     age: user.age,
//   };
// }

// console.log(getUserInfo(user));

// Задача 2. Хочете створити новий тип на основі API-відповіді, але без дати створення.
type APIResponse = {
  id: number;
  title: string;
  author: string;
  pageCount: number;
  date: string;
};

const bookDetails: APIResponse = {
  id: 13,
  title: "Harry Potter",
  author: "joanne rowling",
  pageCount: 523,
  date: Date(),
};

function getBookInfo(book: APIResponse): Omit<APIResponse, "date"> {
  return {
    id: bookDetails.id,
    title: bookDetails.title,
    author: bookDetails.author,
    pageCount: bookDetails.pageCount,
  };
}

console.log(getBookInfo(bookDetails));
