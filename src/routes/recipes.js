const express = require("express");
const router = express.Router();
const axios = require("axios");
const auth = require("../middleware/auth");

// @route   POST api/recipes
// @desc    Endpoint to get recipes
// @access  Private
router.post("/", auth, async (req, res) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    //get recipe idsfrom ingredients
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
      process.env.SPOONACULAR_API_KEY
    }&ingredients=${req.body.ingredients.join()}`;
    const recipeResponse = await axios.get(url, config);
    const recipeIds = recipeResponse.data.map((recipe) => recipe.id);

    //get list of recipes and clean the list from ids
    const url2 = `https://api.spoonacular.com/recipes/informationBulk?apiKey=${
      process.env.SPOONACULAR_API_KEY
    }&ids=${recipeIds.join()}`;
    const response = await axios.get(url2, config);
    const cleanResponse = response.data.map((recipe) => {
      return {
        title: recipe.title,
        summary: recipe.summary,
        url: recipe.spoonacularSourceUrl,
        image: recipe.image,
      };
    });

    //send response
    res.json(cleanResponse);
  } catch (err) {
    console.log(err.message);
    if (err.response && err.response.status) {
      //If external error with api request, forward external api error
      return res.status(err.response.status).send(err.message);
    } else {
      //If internal error, send 500 code
      return res.status(500).send("Internal Server Error");
    }
  }
});

module.exports = router;
