// libraries
const express = require('express');
const port = 3000;
const bodyParser = require('body-parser');
// const db = require('../database/mongoDB');
const db = require('../database/postgresDB');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());

// console.log(restaurantData);
// // middleware
app.use('/', express.static('dist'));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))

// // parse application/json
// app.use(bodyParser.json())

// MONGODB ROUTES

// app.post('/create', (req, res) => {
//     db.createRecord({
//         uuid: req.query.uuid,
//         name: req.query.name,
//         address: req.query.address,
//         pricing: req.query.pricing,
//         foodScore: req.query.foodScore,
//         bld: req.query.bld,
//         description: req.query.description,
//         images: req.query.images
//     }, (err, data) => {
//         if (err) {
//             console.log('server error creating record', err)
//         } else {
//             console.log('server successfully created record', data);
//             res.send(data);
//         }
//     })
// })

// app.get('/read', (req, res) => {
//     let id = Number(req.query.uuid);
//     db.readRecord({ uuid: id }, (err, data) => {
//         if (err) {
//             console.log('server error reading record', err);
//             res.end();
//         } else {
//             if(data === null) {
//                 console.log('error: record does not exist:', data);
//                 res.send('error: record does not exist');
//             } else {
//               console.log('server successfully read record', data);
//               res.send(data);
//             }
//         }
//     })
// })

// app.put('/update', (req, res) => {
//     let updatedRestaurant = req.query;  
//     db.updateRecord({uuid: req.query.uuid}, updatedRestaurant, (err, data) => {
//         if (err) {
//             console.log('server error updating record', err)
//         } else {
//             console.log('server successfully updated record', data);
//             res.send(data);
//         }
//     })
// })

// app.delete('/delete', (req, res) => {
//     let id = req.query.uuid;
//     console.log('id', id);
//     db.deleteRecord({ uuid: id }, (err, data) => {
//         if (err) {
//             console.log('server error deleting record', err)
//         } else {
//             console.log('server successfully deleted record', data);
//             res.send(data);
//         }
//     })
// })

// POSTGRES ROUTES

app.post('/create', (req, res) => {
    db.createRecord({
        uuid: req.query.uuid,
        name: req.query.name,
        address: req.query.address,
        pricing: req.query.pricing,
        foodScore: req.query.foodScore,
        bld: req.query.bld,
        description: req.query.description,
        images: req.query.images
    }, (err, data) => {
        if (err) {
            console.log('server error creating record', err)
            res.end();
        } else {
            console.log('server successfully created record', data);
            res.send(data);
        }
    })
})

app.get('/read', (req, res) => {
    let id = Number(req.query.uuid);
    db.readRecord({ uuid: id }, (err, data) => {
        if (err) {
            console.log('server error reading record', err);
            res.end();
        } else {
            if (data === null) {
                console.log('error: record does not exist:', data);
                res.send('error: record does not exist');
            } else {
                console.log('server successfully read record', data.rows[0]);
                res.send(data.rows[0]);
            }
        }
    })
})

app.put('/update', (req, res) => {
    let updatedRestaurant = req.query;
    db.updateRecord(req.query.uuid, updatedRestaurant, (err, data) => {
        if (err) {
            console.log('server error updating record', err);
            res.end();
        } else {
            console.log('server successfully updated record', data);
            res.send(data);
        }
    })
})

app.delete('/delete', (req, res) => {
    let id = req.query.uuid;
    db.deleteRecord({ uuid: id }, (err, data) => {
        if (err) {
            console.log('server error deleting record', err),
                res.end();
        } else {
            console.log('server successfully deleted record', data);
            res.send(data);
        }
    })
})

// Legacy Routes

// app.get('/', (req, res) => {
//     const temp = path.join(__dirname, 'dist');
//     console.log('TEMP VARIABLE ', temp);
//     res.send(temp);
//   })

// app.get('/images', (req, res) => {
//     restaurantData.find({}, (err, items) => {
//         if(err){
//             console.log(err);
//             res.end();
//         } else {
//             let randomRestaurants = [];
//             for(let i = 0; i < 6; i++){
//                 let myUUID = Math.ceil(Math.random() * 70);
//                 randomRestaurants.push(items.splice(myUUID, 1)[0]);
//             }
//             let results = randomRestaurants.map((obj) => obj)
//             res.send(results);
//         }
//     })
// });

// app.get('/name', (req, res) => {
//     restaurantData.find({}, (err, items) => {
//         if(err){
//             console.log(err);
//             res.end();
//         } else {
//             let randomRestaurants = [];
//             for(let i = 0; i < 6; i++){
//                 let myUUID = Math.ceil(Math.random() * 20);
//                 randomRestaurants.push(items.splice(myUUID, 1)[0]);
//             }
//             let results = randomRestaurants.map((obj) => obj.name)
//             res.send(results);
//         }
//     })
// });

// app.get('/bld', (req, res) => {
//     restaurantData.find({}, (err, items) => {
//         if(err){
//             console.log(err);
//             res.end();
//         } else {
//             let randomRestaurants = [];
//             for(let i = 0; i < 6; i++){
//                 let myUUID = Math.ceil(Math.random() * 20);
//                 randomRestaurants.push(items.splice(myUUID, 1)[0]);
//             }
//             let results = randomRestaurants.map((obj) => obj.bld)
//             res.send(results);
//         }
//     })
// });

// app.get('/address', (req, res) => {
//     restaurantData.find({}, (err, items) => {
//         if(err){
//             console.log(err);
//             res.end();
//         } else {
//             let randomRestaurants = [];
//             for(let i = 0; i < 6; i++){
//                 let myUUID = Math.ceil(Math.random() * 20);
//                 randomRestaurants.push(items.splice(myUUID, 1)[0]);
//             }
//             let results = randomRestaurants.map((obj) => obj.address)
//             res.send(results);
//         }
//  })

// app.get('/foodScore', (req, res) => {
//     restaurantData.find({}, (err, items) => {
//         if(err){
//             console.log(err);
//             res.end();
//         } else {
//             let randomRestaurants = [];
//             for(let i = 0; i < 6; i++){
//                 let myUUID = Math.ceil(Math.random() * 20);
//                 randomRestaurants.push(items.splice(myUUID, 1)[0]);
//             }
//             let results = randomRestaurants.map((obj) => obj.foodScore)
//             res.send(results);
//         }
//     })
// });
// });

// listen
app.listen(port, () => console.log(`Server listening on port ${port}!`))