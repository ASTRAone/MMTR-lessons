const massObj = [
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
    {
        name: 'John',
        tel: '12345',
        age: '18'
    },
    {
        name: 'Mikle',
        tel: '12345',
        age: '18'
    },
    {
        name: 'Mikle',
        tel: '12345',
        age: '18'
    },
];

let parseMassObj = (massObj) => {
    let newArr = [];

    massObj.forEach(elem => {
        let newElem = JSON.stringify(elem);

        if (newArr.indexOf(newElem) === -1) {
            newArr.push(newElem);
        }
    });

    let newArrObj = [];
    newArr.forEach(elem => {
        newArrObj.push(JSON.parse(elem));
    });

    return newArrObj;
}

console.log(parseMassObj(massObj))


