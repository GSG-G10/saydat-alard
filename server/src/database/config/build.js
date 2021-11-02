const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('./connection');
const { buildCities, buildProverbs } = require('./insertTables');

const cities = require('../data/cities.json');
const villages = require('../data/villages.json');
const proverbs = require('../data/proverbs.json');

const dbBuild = async () => {
  const tables = readFileSync(join(__dirname, 'build.sql')).toString();
  const mainData = readFileSync(join(__dirname, 'data.sql')).toString();
  try {
    await connection.query(tables);
    Promise.all([
      connection.query(mainData),
      connection.query(buildCities([...cities, ...villages])),
      connection.query(buildProverbs(proverbs)),
    ]);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};
dbBuild();
module.exports = dbBuild;
