const router = require("express").Router();
const newarrivelModel = require("../../model/newarrivelModel");

// imagereate a newarrivek just for adding
router.post("/createnewarrivel", async (req, res) => {
  try {
    const newapp = await newarrivelModel({
      image: req.body.image,
      imagepath: req.body.imagepath,
    });
    const saveapp = await newapp.save();
    res.status(200).json("uploaded newarrivel");
  } catch (error) {
    res.status(400).json(error);
  }
});

//categoriess -pass
router.get("/getnewarrivels", async (req, res) => {
  try {
    const getnewarrivel = await newarrivelModel.find();
    res.status(200).json(getnewarrivel);
  } catch (error) {
    res.status(400).json(error);
  }
});

//editing product--pass
router.put("/editimage/:id", async (req, res) => {
  console.log(req.params.id, "from fe");
  console.log(req.body.image, "from fe");
  try {
    const editapp = await newarrivelModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          image: req.body.image,
          imagepath: req.body.imagepath,
        },
      }
    );
    res.status(200).json("update successfully image change");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
