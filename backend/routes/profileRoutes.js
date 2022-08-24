const Profile = require("../models/Profile");
const router = express.Router();

router.get("/Profile/Profile:id", async (req, res) => {
    try {
      const Profiles = await Profile.findOne({ _id: req.params.id });
      res.send(Profiles);
    } catch (error) {
      console.log(error);
    }
  });
  module.exports = router;