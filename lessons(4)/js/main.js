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





let strFind = (str1, str2) => {
    let count = 0;

    for (let i = 0; i < str2.length; i++) {
        if (str1.indexOf(str2[i]) !== -1) {
            count++;
        }
    }

    return count;
}

console.log(strFind("qwerty", "qwertyui"))