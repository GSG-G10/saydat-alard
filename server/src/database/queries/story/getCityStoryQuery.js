const connection = require('../../config/connection');

const getstoryDataQuery = (id) => connection.query('SELECT S.id,S.image ,S.content , S.title , S.user_id , users.name  FROM stories S INNER JOIN users ON S.user_id = users.id WHERE S.city_id=$1 AND S.approved = $2  ', [id, true]);

module.exports = getstoryDataQuery;
