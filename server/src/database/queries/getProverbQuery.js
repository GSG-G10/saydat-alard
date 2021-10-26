const connection = require('../config/connection');

const aLetters = ['أ', 'إ', 'ا'];
const getProverbQuery = (letter = 'أ', page = 1) => {
  const chars = `${letter}%`;
  if (aLetters.includes(letter)) {
    return connection.query("SELECT * FROM proverbs WHERE content LIKE 'ا%' OR content LIKE 'إ%'OR content LIKE 'أ%' LIMIT 10 OFFSET ($1 - 1) * 10", [page]);
  }
  return connection.query('SELECT * FROM proverbs WHERE content LIKE $1 LIMIT 10 OFFSET ($2 - 1) * 10', [chars, page]);
};

module.exports = getProverbQuery;
