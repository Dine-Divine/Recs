/* eslint-disable indent */
const faker = require('faker');
//const axios = require('axios');
const fs = require('fs');

// const csvCreator = () => {

//     for (let i = 9000000; i < 10000000; i++) {
//         let data = `${i + 1} \n`;

//         fs.appendFileSync('uuid.csv', data, (err) => {
//             if (err) {
//                 console.log('error', err);
//             }
//         });
//     }
// };

// csvCreator();

// let counter = 9000001;
// const createRestaurant = () => {

//     let restaurant = {
//         uuid: counter++,
//         name: faker.company.companyName(),
//         address: faker.address.streetAddress(),
//         pricing: Math.ceil(Math.random() * 5),
//         foodScore: Math.ceil(Math.random() * 5),
//         bld: ["Breakfast", "Lunch", "Dinner"][Math.floor(Math.random() * 3)],
//         description: faker.lorem.paragraph(),
//         images: [faker.image.food(), faker.image.food(), faker.image.food(), faker.image.food(), faker.image.food(), faker.image.food(), faker.image.food()]
//     }
//     return JSON.stringify(restaurant);
// }
// const sampleData = new Array(1000000).fill(null).map((elem, i) => {
//     let temp = new Restaurant;
//     temp.uuid = i + 1;
//     return temp;
// })

// for (let i = 0; i < 1000000; i++) {
//     fs.appendFileSync('data10.json', createRestaurant() + '\n', (err) => {
//         if (err) {
//             console.log('error', err);
//         } else {
//             console.log('data generated');
//         }
//     })
// };
