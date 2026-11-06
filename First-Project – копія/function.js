function sayMyName(someName, someAge, someStudents) {
    console.log (someName);
    console.log (someAge);
    console.log (someStudents);
}

sayMyName('Vladyslav', 18, true)
sayMyName('Rostyslav', 13, false)
sayMyName('Veronika', 17, true)


function sayMyName2 (someName = 'Natalia', someAge = 38) {
    console.log ('Hello, My Name is ' + someName + '.' + ' My age is ' + someAge);
}

sayMyName2 ('Ilya', 17)
sayMyName2 ('Ihor', 39)
sayMyName2()