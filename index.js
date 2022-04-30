require('dotenv').config();
const app = require('express')();
const db = require('./db.js');
const Middleware = require('./middleware');
const Controllers = require('./controllers');

app.use(require('express').json());
app.use(Middleware.Headers);

app.use('/cb', async (req, res) => {
  let response = await Controllers.CB(req.body.data.damage_history);
  res.send('Upload Complete');
});

db.authenticate().then(db.sync()).then(() => app.listen(process.env.PORT, () => console.log(`[Server]: listening on ${process.env.PORT}`))).catch(console.log);