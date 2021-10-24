const connection = require('../config/connection');

const addNewUser = (username, email, password, orginialTown) => connection.query('INSERT INTO users (username, email, password,orginialTown) VALUES($1,$2,$3,$4);', [username, email, password, orginialTown]);
module.exports = addNewUser;
