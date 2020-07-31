const ARRAY = [
    {
        name: 'John',
        tel: '12345',
        age: '18'
    },
    {
        name: 'Liza',
        tel: '1222',
        age: '22'
    },
    {
        name: 'John',
        tel: '12345',
        age: '18'
    },
    {
        name: 'John',
        tel: '12345',
        age: '18'
    },
];

let unique = ARRAY.reduce((accumulator, elem) => accumulator.add(elem.name), new Set())

console.log(unique)
