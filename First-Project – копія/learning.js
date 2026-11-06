console.log ('Я пробую писати самостійно код на JS');
//хочу написати те що я вивчив на курсі по js

let userName = 'Владислав';
const userAge = 18;
const isStudent = true;

let userName2 = 'Ростислав';
const userAge2 = 13;
const isStudent2 = false;

let bigint = 1234567890123456789012345678901234567890n;


const user = {
  name: userName,
  age: userAge,
  isStudent: isStudent
}; 

const user2 = {
  name: userName2,
  age : userAge2,
  isStudent: isStudent2
}

console.log ('Назва користувача: ' + userName);
console.log ('Вік користуівача: ' + userAge);
console.log ('Чиє користувач студентом:' + isStudent);
console.log ('Назва користувача: ' + userName2);
console.log ('Вік користуваача:' + userAge2);
console.log ('Чиє користувач студентом:' + isStudent2);
console.log ('Велике число: ' + bigint);

console.log (typeof userName);
console.log (typeof userAge);
console.log (typeof isStudent);
console.log (typeof bigint);


console.log (user);
console.log (user2);