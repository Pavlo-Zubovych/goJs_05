// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

//my code
const StringBuilder = function (_value) {
  this.value = _value;
};

StringBuilder.prototype.append = function (str) {
  this.value = this.value + str;
};

StringBuilder.prototype.prepend = function (str) {
  this.value = str + this.value;
};

StringBuilder.prototype.pad = function (str) {
  this.value = str + this.value + str;
};

// ..

const builder = new StringBuilder('.');

console.log(builder.value);

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
