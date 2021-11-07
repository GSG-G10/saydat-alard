require('env2')('.env');

const express = require('express');
const { join } = require('path');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const router = require('./routes');
const { error404, errors } = require('./controllers/errors');

const app = express();

app.set('port', process.env.PORT || 5000);
app.disable('x-powered-by');
app.use(compression());
app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/api/v1', router);

if (process.env.NODE_ENV === 'production') {
  console.log(__dirname);
  app.use(express.static(join(__dirname, '..', '..', 'client', 'build')));
  app.all('*', (req, res) => res.sendFile(join(__dirname, '..', '..', 'client', 'build', 'index.html')));
}

app.use(error404);
app.use(errors);

module.exports = app;
