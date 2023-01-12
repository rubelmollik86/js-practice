const friends = ['shakill', 'manik', 'abul', 'abdul', 'kamal'];

const flength = friends.map(friend => friend.length);
console.log(flength);

const products = [
    { name: 'water bottole', color: 'red', price: 520 },
    { name: 'mobile sphone', color: 'blue', price: 8520 },
    { name: 'smart watch', color: 'silver', price: 4000 },
    { name: 'Story book', color: 'yellow', price: 300 }
]
const productName = products.map(product => product.name);
const productPrice = products.map(product => product.price);
console.log(productName);
console.log(productPrice);