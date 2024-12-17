// ----------------------------------------------------------Partial---------------------------------------------------------
type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
  return { ...todo, ...fieldsToUpdate };
}

const todo1: Todo = {
  title: "Learn typescript",
  description: "Study the basics of typescript",
  completed: true,
};

const todo2 = updateTodo(todo1, {
  description: "Study generics in typescript",
  completed: false,
});

console.log(todo2);

// Задача 1. Є форма редагування профілю користувача. Користувач може вибрати, які поля хоче оновити.
// Створіть тип для такої форми на основі існуючого типу User
// type User = {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
//   password: string;
// };

// function updateUser(user: User, fieldsToUpdate: Partial<User>): User {
//   return { ...user, ...fieldsToUpdate };
// }

// const user: User = {
//   id: 13,
//   name: "John",
//   age: 30,
//   email: "john@gmail.com",
//   password: "ggfjk246761!K",
// };

// const updatedUser = updateUser(user, { password: "1234567" });

// console.log(updatedUser);

// Задача 2. Є конфігураційний об'єкт з кількома полями. Створіть функцію, яка приймає часткові налаштування та повертає
// повний конфігураційний об'єкт.

// type Config = {
//   compilerOptions: {
//     rootDir: string;
//     outDir: string;
//     allowJs: boolean;
//     allowSyntheticDefaultImports: boolean;
//     emitDecoratorMetadata: boolean;
//     esModuleInterop: boolean;
//     experimentalDecorators: boolean;
//     lib: string[];
//     module: string;
//     skipLibCheck: boolean;
//     strictNullChecks: boolean;
//     target: string;
//     sourceMap: boolean;
//   };
//   include: string[];
// };

type Config = {
  rootDir: string;
  outDir: string;
  allowJs: boolean;
  allowSyntheticDefaultImports: boolean;
  emitDecoratorMetadata: boolean;
  esModuleInterop: boolean;
  experimentalDecorators: boolean;
  lib: string[];
  module: string;
  skipLibCheck: boolean;
  strictNullChecks: boolean;
  target: string;
  sourceMap: boolean;
};

function updateConfigs(
  configs: Config,
  fieldsToUpdate: Partial<Config>
): Config {
  return { ...configs, ...fieldsToUpdate };
}

// const tsConfig: Config = {
//   compilerOptions: {
//     rootDir: "./src",
//     outDir: "./dist",
//     allowJs: false,
//     allowSyntheticDefaultImports: true,
//     emitDecoratorMetadata: true,
//     esModuleInterop: true,
//     experimentalDecorators: true,
//     lib: ["ES2021"],
//     module: "es2020",
//     skipLibCheck: true,
//     strictNullChecks: true,
//     target: "es2019",
//     sourceMap: true,
//   },
//   include: ["**/*.js"],
// };

const tsConfig: Config = {
  rootDir: "./src",
  outDir: "./dist",
  allowJs: false,
  allowSyntheticDefaultImports: true,
  emitDecoratorMetadata: true,
  esModuleInterop: true,
  experimentalDecorators: true,
  lib: ["ES2021"],
  module: "es2020",
  skipLibCheck: true,
  strictNullChecks: true,
  target: "es2019",
  sourceMap: true,
};

const updatedConfigs = updateConfigs(tsConfig, {
  allowJs: true,
  lib: ["dom", "ES2021"],
});

console.log(updatedConfigs);
