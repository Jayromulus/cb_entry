const { DataTypes } = require('sequelize');
const db = require('../db');

module.exports = db.define('cb_run', {
  enemy_id: DataTypes.INTEGER,
  name: DataTypes.STRING,
  damage: DataTypes.INTEGER,
  kill: DataTypes.BOOLEAN,
  create_time: DataTypes.INTEGER,
  history_id: DataTypes.INTEGER,
  lap_num: DataTypes.INTEGER
})