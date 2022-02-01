const db = require('../config/connection');
const { Challenge } = require('../models');
const ChallengeSeeds = require('./ChallengeSeeds.json');

db.once('open', async () => {
  await Challenge.deleteMany({ChallengeSeeds});
  await Challenge.create(ChallengeSeeds);

  console.log('all done!');
  process.exit(0);
});
