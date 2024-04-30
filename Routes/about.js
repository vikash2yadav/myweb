const router = require('express').Router();
const aboutController = new(require("../Controllers/about"));

router.route("/get").get(aboutController.getData)

module.exports = router