require('dotenv').config();
const app = require('express')();
const db = require('./db.js');
const Middleware = require('./middleware');
const Controllers = require('./controllers');

app.use(require('express').json());
app.use(Middleware.Headers);

app.use('/', async (req, res) => {
  let result = await Controllers.CB(req.body.data.damage_history, res);
  res.send('db updated');
});

db.authenticate().then(db.sync()).then(() => app.listen(process.env.PORT, () => console.log(`[Server]: listening on ${process.env.PORT}`))).catch(console.log);