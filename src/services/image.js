const cloudinary = require("cloudinary");

//@func uploadImage
//@desc Uploads image sent from the client to cloudinary so that the image can be easilly accessed from a hosted url
async function uploadImage(file) {
  let res = {
    data: {},
    errors: [],
  };
  try {
    const uploadedImage = await cloudinary.v2.uploader.upload(file.path);
    res.data = {
      url: uploadedImage.url,
      public_id: uploadedImage.public_id,
    };
  } catch (err) {
    console.log(err);
    res.errors.push({
      msg: `Image failed to upload successfully because: ${err.message}`,
      param: "image",
    });
  }

  return res;
}

//@func deleteImage
//@desc Deletes image from cloudinary database to preserve space and database load
async function deleteImage(public_id) {
  let errors = [];
  try {
    await cloudinary.uploader.destroy(public_id);
  } catch (err) {
    errors.push({
      msg: `Image failed to delete successfully because: ${err.message}`,
    });
  }
  return errors;
}
module.exports = { uploadImage, deleteImage };
