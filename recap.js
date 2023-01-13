// function maxNumber(array) {
//     // const array = [21, 34, 45, 56];
//     const max = Math.max(...array);
//     return max;
// }
// const biggestNumber = maxNumber(21, 34, 45, 56);
// console.log(biggestNumber);

const squre = x => x * x;
console.log(squre(9));

let numbers = [45, 67, 89, 90, 45, 32];

const evenNumber = (value) => {
    if (value % 2 === 0) {
        return value;
    }
}

const firstEven = numbers.find(evenNumber);
const firstEvenIndex = numbers.findIndex(evenNumber);
console.log(firstEven);
console.log(firstEvenIndex);