const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL
  , {
    logging: false
  // uncomment below for deployment
  // dialect: 'postgres',
  // protocol: 'postgres',
  // dialectOptions: {
    // ssl: {
      // require: true,
      // rejectUnauthorized: false
    // }
  // }
}
);

module.exports = db;
