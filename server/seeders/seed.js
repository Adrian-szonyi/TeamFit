const db = require("../config/connection");
const { Challenge, Category } = require("../models");
const ChallengeSeeds = require("./ChallengeSeeds.json");

db.once("open", async () => {
  await Category.deleteMany();
  const categories = await Category.insertMany([
    { name: "fitness" },
    { name: "Education" },
    { name: "finance" },
  ]);
  console.log(categories);
  function findCategoryIDbyName(name) {
    return categories.find((category) => {
      if (category.name === name) return true;
      else {
        return false;
      }
    })?._id;
    
  }
  console.log(findCategoryIDbyName("fgsdg"))
  console.log(findCategoryIDbyName("fitness"))

  const populatedChallengeSeeds = ChallengeSeeds.map( 
    function (challengeseedname) {
challengeseedname.category = findCategoryIDbyName(challengeseedname.category)
return challengeseedname
    }
  )
  console.log(populatedChallengeSeeds)
    await Challenge.deleteMany({});
    await Challenge.create(ChallengeSeeds);
  // console.log('all done!');
  process.exit(0);
});
