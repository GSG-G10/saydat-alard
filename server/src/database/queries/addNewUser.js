const connection = require('../config/connection');

const addNewUser = (name, email, password, orginialTown) => connection.query('INSERT INTO users (name, email, password,orginialTown) VALUES($1,$2,$3,$4) RETURNING *;', [name, email, password, orginialTown]);
module.exports = addNewUser;
