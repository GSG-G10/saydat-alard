const dataCities = require('../data/cities.json');
const connection = require('./connection');

const bulkInsertCities = (query) => connection.query(query);

const insertInto = (data) => data.reduce((acc, curr) => {
  // eslint-disable-next-line no-param-reassign
  acc += `(${curr.cityName}),`;
  return acc;
}, '');

const build = async () => {
  const values = insertInto(dataCities).slice(0, -1);
  const query = `INSERT INTO cities (name) VALUES ${values}`;
  await bulkInsertCities(query);
};

build();
