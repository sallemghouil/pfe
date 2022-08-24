const { populate } = require("../models/Formation");

module.exports.addFormations= async function (req, res) {
  console.log(req.file)
  const url = `${req.protocol}://${req.get('host')}`;
  console.log(req.file);
  const { file } = req;

    try {
      const existFormations = await Formation.findOne({ name: req.body.name });
      if (existFormations) {
        res.status(400).send({ msg: "formation exist" });
      } else {
        const newFormations = new Formation({
          ...req.body,user:req.user._id
        });
    newFormations.pic = `${url}/${file.path}`;

        await newFormations.save();
        res.send({ msg: "Formation added" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  exports.getALL=async function (req, res) {
    // console.log(req.query.price)
    try {
      // const price = req.query.price || 0
      const allFormations = await Formation.find({
        $and: [
          { price: { $gte: req.query.price || 0 } },
          { name: { $regex: req.query.name || "" } },
        ],
      }).populate("user","fullName");
      res.send({ allFormations });
    } catch (error) {
      console.log(error);
    }
  }