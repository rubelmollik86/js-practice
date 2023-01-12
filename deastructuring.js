// const employe = {
//     namne: 'Abul', id: 21546, phone: '012548241', address: 'kalachadpur'
// };
// // const address = employe.address;
// // const phone = employe.phone;

// console.log(address, phone);
// console.log(address, phone);
// console.log(address, phone);
// console.log(address, phone);

// const { phone, id, address } = employe;


const company = {
    name: 'Gp',
    ceo: {
        id: 2145,
        name: 'Abdullah',
        food: 'Sweet'
    },
    web: {
        work: 'web developmnent',
        employe: 74,
        framework: 'react',
    }

};

const ceo = company.ceo.food;
const framework = company.web.framework;

// console.log(ceo);
// console.log(framework);

const { work, employe } = company.web;
const { id, name } = company.ceo;
console.log(work, employe, id, name);