// THIS IS THE MONGODB

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs = require('fs');
//const dbinfo = require('./atlasinfo.js');

mongoose.connect('mongodb://localhost:27017/restaurants', { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('error connecting to divine mongodb: ', err);
    } else {
        console.log("successful connection to divine mongodb");
    }
});

const restaurantSchema = mongoose.Schema({
    uuid: Number,
    name: String,
    address: String,
    pricing: Number,
    foodScore: Number,
    bld: String,
    description: String,
    images: [String]
});

const restaurant = mongoose.model('restaurant', restaurantSchema, 'restaurant');

const createRecord = (obj, cb) => {
    restaurant.create(obj, (err, data) => {
        if (err) {
            console.log('error inserting record', err);
        } else {
            console.log('record successfully entered', data);
            cb(null, data);
        }
    })
}

const readRecord = (obj, cb) => {
    restaurant.findOne(obj, (err, data) => {
        if (err) {
            console.log('error retrieving record', err);
            cb(err, null);
        } else {
            console.log('record successfully retrieved', data);
            cb(null, data);
        }
    })
}

const updateRecord = (target, obj, cb) => {
    restaurant.updateOne(target, obj, (err, data) => {
        if (err) {
            console.log('error retrieveing record', err)
        } else {
            console.log('record successfully updated', data)
            cb(null, data)
        }
    })
}

const deleteRecord = (obj, cb) => {
    restaurant.deleteOne(obj, (err, data) => {
        if (err) {
            console.log('error deleting record', err)
            cb(err, null);
        } else {
            console.log('record deleted successfully', data);
            cb(null, err);
        }
    })
}

module.exports = { createRecord, readRecord, updateRecord, deleteRecord };