//THIS IS THE POSTGRES DB

const { Client } = require('pg');
const user = process.env.PG_USER;
const password = process.env.PG_PASS

const client = new Client({
    user: user,
    host: 'localhost',
    database: 'restaurants',
    password: password,
    port: 5432,
})
client.connect();

// client.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     client.end()
// })

const createRecord = (obj, cb) => {
    const queryString = `INSERT INTO restaurant (uuid, name, address, pricing, foodScore, bld, description, images) 
        VALUES (${obj.uuid}, '${obj.name}', '${obj.address}', ${obj.pricing}, ${obj.foodScore}, '${obj.bld}', '${obj.description}', '${obj.images}')`;

    client.query(queryString, (err, data) => {
        console.log(queryString);
        if (err) {
            console.log('error querying postgres', err);
            cb(err, null);
        } else {
            console.log('successfully inserted record into postgres', data);
            cb(null, data);
        }
    })
}

const readRecord = (obj, cb) => {
    const queryString = `SELECT * FROM restaurant WHERE (uuid = ${obj.uuid})`;

    client.query(queryString, (err, data) => {
        if (err) {
            console.log('error reading postgres', err);
            cb(err, null);
        } else {
            console.log('successfully read record', data);
            cb(null, data);
        }
    })
}

const updateRecord = (target, obj, cb) => {
    const keys = Object.keys(obj);
    let valuesToUpdate = ``;

    for (let i = 0; i < keys.length; i++) {
        let column = keys[i];
        let value = obj[keys[i]];
        if (keys[i] === 'name' || keys[i] === 'address' || keys[i] === 'description' || keys[i] === 'images' || keys[i] === 'bld') {
            valuesToUpdate += `${column} = '${value}', `;
        } else {
            valuesToUpdate += `${column} = ${value}, `
        }
    }
    let columnsToUpdate = valuesToUpdate.slice(0, valuesToUpdate.length - 2);
    const queryString = `UPDATE restaurant SET ${columnsToUpdate} WHERE (uuid = ${target})`;

    client.query(queryString, (err, data) => {
        if (err) {
            console.log('error updating record', err);
            cb(err, null);
        } else {
            console.log('record successfully updated', data);
            cb(null, data);
        }
    })
}

const deleteRecord = (obj, cb) => {
    const queryString = `DELETE FROM restaurant WHERE (uuid = ${obj.uuid})`;

    client.query(queryString, (err, data) => {
        if (err) {
            console.log('error deleting record', err);
            cb(err, null);
        } else {
            console.log('successfully deleted record', data);
            cb(null, data);
        }
    })
}




module.exports = { createRecord, readRecord, updateRecord, deleteRecord };