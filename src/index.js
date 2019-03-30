
import express from 'express';
import bodyParser from 'body-parser';
// import dotenv from 'dotenv';
import 'babel-polyfill';
import path from 'path';
import setups from './routers/setupsRouter';
import codes from './routers/codesRouter';

// dotenv.config();

const app = express();

// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname)));

app.use('/css', express.static(__dirname + '../../views/css'));
app.use('/images', express.static(__dirname + '../../views/images'));
app.use('/js', express.static(__dirname + '../../views/js'));
app.use('/markup', express.static(__dirname + '../../views/markup'));


app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// homepage
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '../../views/markup/index.html'));
  });

app.use('/api/v1/setup', setups);
app.use('/api/v1/codes', codes);

app.get('/api/v1', (req, res) => {
  res.send('This is Developer\'s Handbook web-app');
});

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Page Not Found. Go to /api/v1 to use this api' });
});

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), () => {
  console.log(`Node server is running on port ${app.get('port')}`);
});

export default app;
