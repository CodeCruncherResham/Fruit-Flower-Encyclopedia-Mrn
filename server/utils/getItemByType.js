const { fetchFruitFromSpoonacular, fetchFlowerFromWikipedia } = require("./externalAPI");

const getItemByType = async (type, name) => {
  let result;

  if (type === "fruit") {
    result = await fetchFruitFromSpoonacular(name);
  } else if (type === "flower") {
    result = await fetchFlowerFromWikipedia(name);
  }

  return result;
};

module.exports = getItemByType;
