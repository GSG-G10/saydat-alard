const { Pool } = require('pg');

const { DATABASE_URL, TEST_DB_URL, DEV_DB_URL } = process.env;

let dbUrl = '';
switch (process.env.NODE_ENV) {
  case 'test':
    dbUrl = TEST_DB_URL;
    break;
  case 'development':
    dbUrl = DEV_DB_URL;
    break;
  case 'production':
    dbUrl = DATABASE_URL;
    break;
  default:
    dbUrl = 'postgres://gaza:123@localhost:5432/palestine';
}

const options = {
  connectionString: dbUrl,
  ssl: false,
};

module.exports = new Pool(options);
