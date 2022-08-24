const express = require("express");
const Formation = require("../models/Formation");
const { addFormations, getALL } = require("../controllers/FormationCont");
const isAuth = require("../middleweares/passport");
const router = express.Router();
//const upload=require("../utils/multer")
router.post("/add" ,isAuth() , addFormations);

router.get("/", getALL);

//DELETE ONE Formations

router.delete("/Formtions:id", async (req, res) => {
  try {
    const result = await Formation.deleteOne({ _id: req.params.id });
    if (!result.deletedCount) {
      return res.status(400).send({ msg: "Formation already deleted" });
    }
    res.send({ msg: "Formation successfully deleted" });
  } catch (error) {
    console.log(error);
  }
});

//UPDATE ONE Formations
router.put("/Formations:id", async (req, res) => {
  try {
    const result = await Formation.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    if (!result.modifiedCount) 
    {return res.status(400).send({msg:"no things to update"});}
      res.send({msg:"Formation update"})
  } catch (error) {
    console.log(error);
  }
});


router.get("/Formations:id", async (req, res) => {
  try {
    const oneFormations = await Formations.findOne({ _id: req.params.id });
    res.send(oneFormations);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;