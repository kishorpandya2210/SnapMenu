const express = require("express");
const router = express.Router();
const upload = require("../helpers/upload");
const Clarifai = require("clarifai");
const app = new Clarifai.App({ apiKey: process.env.CLARIFAI_API_KEY });
const auth = require("../middleware/auth");

const { uploadImage, deleteImage } = require("../services/image");

// @route   POST api/ingredients
// @desc    Endpoint to get ingredients
// @access  Private
router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    //upload image to cloudinary to get hosted url

    let errors = [];
    if (
      !req.hasOwnProperty("file") ||
      !req.file.mimetype.startsWith("image/")
    ) {
      errors.push({
        msg: "You must submit a valid image file",
        param: "image",
      });
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors: errors });
    }

    const uploadResponse = await uploadImage(req.file);
    if (uploadResponse.errors.length > 0) {
      return res.status(502).json({ errors: uploadResponse.errors });
    }

    //get ingredients from image using clarifai
    const clarifaiRes = await app.models.predict(
      Clarifai.FOOD_MODEL,
      uploadResponse.data.url
    );

    //delete image from cloudinary
    const deleteResponse = await deleteImage(uploadResponse.data.public_id);
    if (deleteResponse.length > 0) {
      return res.status(502).json({ errors: deleteResponse });
    }

    //find top 10 ingredients (alternate solution)
    //const response = clarifaiRes.outputs[0].data.concepts.slice(0,10).map(food => food.name);

    //find all ingredients above a percentage threshold
    let response = [];
    for (const ingredient of clarifaiRes.outputs[0].data.concepts) {
      if (ingredient.value < 0.5) {
        break;
      }
      response.push(ingredient.name);
    }

    //return json object
    res.json(response);
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
