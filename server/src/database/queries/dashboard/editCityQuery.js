const connection = require('../../config/connection');

const editCityQuery = (name, area, location, image, families, id) => connection.query('UPDATE cities SET C.name=$1 ,C.area =$2,C.location=$3,C.image=$4 ,F.name =$5 FROM cities C INNER JOIN families F ON C.id = F.city_id WERE id=$6', [name, area, location, image, families, id]);

module.exports = editCityQuery;
