/* eslint-disable no-param-reassign */
const shapeCitiesValues = (data) => data.reduce((acc, curr) => {
  acc += `('${curr.cityName}', '${parseInt(curr.area, 10)}') ,`;
  return acc;
}, '');
const shapeProverbsValues = (data) => data.reduce((acc, curr) => {
  acc += `('${curr}') ,`;
  return acc;
}, '');

const buildCities = (data) => {
  const values = shapeCitiesValues(data).slice(0, -1);
  const query = `INSERT INTO cities (name, area) VALUES ${values}`;
  return query;
};

const buildProverbs = (data) => {
  const values = shapeProverbsValues(data).slice(0, -1);
  const query = `INSERT INTO proverbs (content) VALUES ${values}`;
  return query;
};

module.exports = { buildCities, buildProverbs };
