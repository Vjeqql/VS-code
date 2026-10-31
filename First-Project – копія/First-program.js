console.log('Ну нарешті! Моя перша програма на JS');
console.log('Я вчу JS і мені це подобається!');

// Це коментар, який не буде виконаний
// console.log('Я хочу стати крутим JS розробником!');

console.log('тестую команди');

let userName = 'Владислав';
let username2 = 'Грібнік';

let userAge = 18;
let userAge2 = 17;

const bigNumber = BigInt('12345678901234567890123901234567890');

const isStudent = true;
const isStudent2 = false;

let key = null;
let anything;

const user = {
  name: 'Владислав',
  age: 18,
  isStudent: true,
};

const user2 = {
  name: 'Грібнік',
  age: 17,
  isStudent: false
};

const hobbies = ['програмування', 'музика', 'читання'];
const hobbies2 = ['спорт', 'подорожі', 'малювання'];

console.log('Імʼя:', userName);
console.log*('Імʼя 2:', username2);
console.log('Вік:', userAge);
console.log('Тип userName:', typeof userName);
console.log('Тип username2:', typeof username2);
console.log('Тип userAge:', typeof userAge);
console.log('Тип userAge2:', typeof userAge2);
console.log('Тип bigNumber:', typeof bigNumber);
console.log('Тип isStudent:', typeof isStudent);
console.log('Тип isStudent2:', typeof isStudent2);
console.log('Тип key:', typeof key);
console.log('Тип anything:', typeof anything);
console.log('Тип user:', typeof user);
console.log('Тип user2:', typeof user2);
console.log('Тип hobbies:', typeof hobbies);
console.log('Тип hobbies2:', typeof hobbies2);

// Основні типи даних
// String
// Number
// BigInt
// boolean
// null
// undefined
// Object
// Symbol

console.log('Сума:', userAge + 5);
console.log('Рівність:', userAge === 18);

console.log(`Привіт, ${userName}! Тобі ${userAge} років.`);
console.log(`Дарова, ${username2}! Тобі ${userAge2} років.`);

console.log('Обʼєкт користувача:', user);
console.log('Обʼєкт користувача 2:', user2);

console.log('Хобі:', hobbies);
console.log('Хобі Грібніка:', hobbies2);
