const router = require("express").Router();
const categoriesSchema = require("../../model/categoriesModel");

router.post("/createcategories", async (req, res) => {
  const check = await categoriesSchema.find({
    categories: req.body.categories,
  });
  console.log("//check req body ", req.body, "-----", check);
  try {
    if (check.length == 0) {
      console.log("ulla vanthiruchu");
      const newcategories = await categoriesSchema({
        categories: req.body.categories,
      });
      const savecategories = await newcategories.save();
      res.status(200).json("success");
    } else {
      res.status(202).json("alreadyexitcatgeories");
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/getcreatecategories", async (req, res) => {
  try {
    const newcategories = await categoriesSchema.find();
    res.status(200).json(newcategories);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
