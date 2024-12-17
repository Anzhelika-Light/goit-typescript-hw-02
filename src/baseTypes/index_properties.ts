type Goods = {
  [key: string]: number;
};

const fruits: Goods = {
  apples: 15,
  bananas: 30,
  oranges: 30,
};

const frozenGoods: Goods = {
  iceCream: 25,
  fish: 30,
  berry: 10,
};

// Створити інтерфейс для об'єкта, де ключем є рядок, а значенням може бути або рядок, або число.
// Створіть кілька об'єктів цього типу.
type stringOrNumber = {
  [key: string]: string | number;
};

const Mark: stringOrNumber = {
  name: "Mark",
  age: 30,
};

const Amily: stringOrNumber = {
  name: "Amily",
  age: 28,
  country: "Germany",
};

const bookInfo: stringOrNumber = {
  title: "Dinka",
  pageCount: 573,
};
