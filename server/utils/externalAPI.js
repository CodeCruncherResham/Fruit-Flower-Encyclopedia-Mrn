// // 📁 server/utils/externalAPI.js
// const axios = require("axios");

// exports.fetchFruitFromSpoonacular = async (name) => {
//   try {
//     const searchRes = await axios.get(`https://api.spoonacular.com/food/ingredients/search`, {
//       params: {
//         query: name,
//         number: 1,
//         apiKey: process.env.SPOONACULAR_KEY
//       }
//     });

//     if (searchRes.data.results.length === 0) return null;

//     const fruitId = searchRes.data.results[0].id;

//     const infoRes = await axios.get(`https://api.spoonacular.com/food/ingredients/${fruitId}/information`, {
//       params: { amount: 100, unit: "g", apiKey: process.env.SPOONACULAR_KEY }
//     });

//     const data = infoRes.data;
//     return {
//       name: data.name,
//       scientificName: "", // Spoonacular doesn’t give this
//       description: data.estimatedCost?.value ? `Approx cost: ${data.estimatedCost.value} ${data.estimatedCost.unit}` : "No description",
//       nutrition: data.nutrition?.nutrients?.map(n => `${n.name} - ${n.amount}${n.unit}`) || [],
//       medicinalUses: [],
//       variants: [],
//       image: data.image || "",
//       season: "",
//       region: ""
//     };
//   } catch (err) {
//     console.error("Spoonacular fetch error:", err.message);
//     return null;
//   }
// };
// // Wikipedia API for flower info
// exports.fetchFlowerFromWikipedia = async (name) => {
//   try {
//     const response = await axios.get(
//       `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`
//     );

//     const data = response.data;

//     if (data.type === "disambiguation" || data.title === "Not found") return null;

//     return {
//       name: data.title,
//       scientificName: "", // optional, can extract from DB or skip
//       description: data.extract || "No description available",
//       culturalMeaning: "",
//       colorVariants: [],
//       uses: [],
//       season: "",
//       image: data.thumbnail?.source || "",
//     };
//   } catch (err) {
//     console.error("Wikipedia fetch error:", err.message);
//     return null;
//   }
// };



exports.fetchFruitFromSpoonacular = async (name) => {
  try {
    const searchRes = await axios.get(`https://api.spoonacular.com/food/ingredients/search`, {
      params: {
        query: name,
        number: 1,
        apiKey: process.env.SPOONACULAR_KEY
      }
    });

    if (searchRes.data.results.length === 0) return null;

    const fruitId = searchRes.data.results[0].id;

    const infoRes = await axios.get(`https://api.spoonacular.com/food/ingredients/${fruitId}/information`, {
      params: { amount: 100, unit: "g", apiKey: process.env.SPOONACULAR_KEY }
    });

    const data = infoRes.data;
    return {
      name: data.name,
      scientificName: "", // Spoonacular doesn’t give this
      description: data.estimatedCost?.value
        ? `Approx cost: ${data.estimatedCost.value} ${data.estimatedCost.unit}`
        : "No description",
      nutrition: data.nutrition?.nutrients?.map(n => `${n.name} - ${n.amount}${n.unit}`) || [],
      medicinalUses: ["Not available"],
      variants: ["Not available"],
      image: data.image
        ? `https://spoonacular.com/cdn/ingredients_250x250/${data.image}`
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png",
      season: "All seasons",
      region: "Global"
    };
  } catch (err) {
    console.error("Spoonacular fetch error:", err.message);
    return null;
  }
};
exports.fetchFlowerFromWikipedia = async (name) => {
  try {
    const response = await axios.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`
    );

    const data = response.data;

    // Ignore disambiguation or not found pages
    if (data.type === "disambiguation" || data.title === "Not found") return null;

    return {
      name: data.title,
      scientificName: "Not available",
      description: data.extract || "No description available",
      culturalMeaning: "Not specified",
      colorVariants: ["Not specified"],
      uses: ["Not specified"],
      season: "All seasons",
      image: data.thumbnail?.source || "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png",
    };
  } catch (err) {
    console.error("Wikipedia fetch error:", err.message);
    return null;
  }
};
