const Models = require('../models');

async function upload(json) {
  // this function will upload the json data into the sequelize database, assuming that the index file will already have it and not need a file upload
  json.forEach(async (el) => {
    try {
      let dupe = await Models.CB.findOne({ where: { history_id: el.history_id } });
      if (dupe)
        throw 'already in the system';
      let entry = await Models.CB.create({
        enemy_id: el.enemy_id,
        name: el.name,
        damage: el.damage,
        kill: el.kill === 1 ? true : false,
        create_time: el.history_id,
        history_id: el.history_id,
        lap_num: el.lap_num
      })
      console.log(`Added run ${entry.history_id}`);
    } catch (e) {
      console.log('at post:', e);
    }
  });
  console.log(json[0]);
}

module.exports = upload