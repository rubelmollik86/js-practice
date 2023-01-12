const numbers = [4, 45, 63, 23, 12, 78, 90, 65, 32, 5, 2];
const bigNumber = numbers.filter(number => number > 50);
console.log(bigNumber);

const num = [56, 78, 90, 76, 54, 32, 12, 32, 12, 56, 100.700, 600, 45];
const smallNum = num.filter(number => number < 100);
console.log(smallNum);

const name = ['rubel', 'sakill', 'hemayet', 'Abul kashem', 'Helal uddin'];
const nameLength = name.filter(years => years);
console.log(nameLength);


const products = [
    { name: 'water bottole', color: 'red', price: 520 },
    { name: 'mobile sphone', color: 'blue', price: 8520 },
    { name: 'smart watch', color: 'silver', price: 4000 },
    { name: 'Story book', color: 'yellow', price: 300 }
];

const expensive = products.filter(product => product.price > 600);

const blacks = products.filter(product => product.color == 'red');

console.log(expensive);

console.log(blacks);