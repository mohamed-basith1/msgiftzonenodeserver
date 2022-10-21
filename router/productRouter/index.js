const router = require("express").Router();
const productModel = require("../../model/productModel");
const categoriesSchema = require("../../model/categoriesModel");
//product craate -pass
router.post("/create", async (req, res) => {
  try {
    const newapp = await new productModel({
      title: req.body.title,
      categories: req.body.categories,
      image: req.body.image,
      size: req.body.size,
      price: req.body.price,
      imagedeletepath: req.body.imagedeletepath,
    });
    const saveapp = await newapp.save();
    res.status(200).json("uploaded");
  } catch (error) {
    res.status(400).json(error);
  }
});

//categoriess -pass
router.get("/filterbycategories/:id", async (req, res) => {
  try {
    console.log("chekig------ing", req.params.id);
    const getapp = await productModel.find({
      categories: req.params.id,
    });
    res.status(200).json(getapp);
  } catch (error) {
    res.status(400).json(error);
  }
});

//delete the particular product--pass
router.delete("/delete/:id", async (req, res) => {
  try {
    console.log("");
    const checkproduct = await productModel.findOne({ _id: req.params.id });
    const searchcheck = await productModel.find({
      categories: checkproduct.categories,
    });
    console.log(searchcheck.length, "----");
    if (searchcheck.length == 1) {
      const deletecategories = await categoriesSchema.remove({
        categories: checkproduct.categories,
      });
      const deleteapp = await productModel.remove({ _id: req.params.id });
      res.status(200).json("successfully deleted");
    } else {
      const deleteapp = await productModel.remove({ _id: req.params.id });
      res.status(200).json("successfully deleted");
    }
  } catch (error) {
    res.status(400).json(error);
  }
});



//editing product--pass
router.put("/editproduct/:id", async (req, res) => {
  try {
    const editapp = await productModel.updateMany(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          categories: req.body.categories,
          image: req.body.image,
          size: req.body.size,
          price: req.body.price,
          imagedeletepath: req.body.imagedeletepath,
        },
      }
    );
    res.status(200).json("update successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
