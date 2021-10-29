const connection = require('../config/connection');

const addNewUser = (name, email, password, orginialTown) => connection.query('INSERT INTO users (name, email, password,orginial_town) VALUES($1,$2,$3,$4) RETURNING *;', [name, email, password, orginialTown]);
module.exports = addNewUser;
