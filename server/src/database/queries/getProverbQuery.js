const connection = require('../config/connection');

const aLetters = ['أ', 'إ', 'ا'];
const getProverbQuery = (letter) => {
  if (aLetters.includes(letter)) {
    return connection.query("SELECT * from proverbs where content LIKE 'ا%' OR content LIKE 'إ%'OR content LIKE 'أ%'");
  }
  return connection.query('SELECT * from proverbs where content LIKE $1%', [letter]);
};

module.exports = getProverbQuery;
