const connection = require('../../config/connection');

const editCityQuery = (image, cityName, area, location, cityId, quotation) => connection.query(
  `
     UPDATE cities 
     SET name = $2, area=$3, location=$4, image=$1, quotation=$6 
     WHERE id = $5; 
      
    `,
  [image, cityName, area, location, cityId, quotation],
);

const editFamiliesQuery = (families, cityId) => connection.query(
  `UPDATE families
SET name = $1
WHERE city_id = $2;`,
  [families, cityId],
);
module.exports = { editCityQuery, editFamiliesQuery };
