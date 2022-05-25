const Models = require('../models');

async function upload(json) {
  let entries = 0;
  let dupes = 0;
  await json.map(async (el) => {
    try {
      let dupe = await Models.CB.findOne({ where: { history_id: el.history_id } });
      if (dupe) {
        dupes++;
        throw 'already in the system';
      }
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
      entries++;
    } catch (e) {
      console.log('at post:', e);
    }
  });
  console.log(json[0]);
  return [entries, dupes];
}

module.exports = upload;