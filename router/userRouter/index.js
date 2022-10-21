const router = require("express").Router();
const userSchema = require("../../model/userModel");

//register api
router.post("/register", async (req, res) => {
  console.log(" im geting properly");
  try {
    console.log("ulla vanthutan", req.body);
    const userRouter = await userSchema({
      email: req.body.email,
      password: req.body.password,
    });
    console.log(userRouter);
    const saveuser = await userRouter.save();
    console.log(saveuser, "check rather save are not");
    console.log("succesfully");
    res.status(200).json("succesfully submited");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/signin", async (req, res) => {
  const usercheck = await userSchema.findOne({ email: req.body.email });
  console.log(res.body, "varuthu");
  if (!usercheck) {
    res.status(404).json("user is not found ");
  }
  const checkpassword = await userSchema.find({ password: req.body.password });

  if (!checkpassword) {
    res.status(404).json("check your password");
  }
  if (usercheck && checkpassword) {
    res.status(200).json("accesstrue");
  }
});

module.exports = router;
