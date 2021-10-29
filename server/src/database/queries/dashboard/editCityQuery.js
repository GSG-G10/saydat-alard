const connection = require('../../config/connection');

const editCityQuery = (name, area, location, image, id) => connection.query(
  `
     UPDATE cities 
     SET name = $1, area=$2, location=$3, image=$4 
     WHERE id = $5; 
      
    `,
  [name, area, location, image, id],
);

const editFamiliesQuery = (families, id) => connection.query(
  `UPDATE families
SET name = $1
WHERE city_id = $2;`,
  [families, id],
);
module.exports = { editCityQuery, editFamiliesQuery };
