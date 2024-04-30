const router = require('express').Router();
const projectDetailsController = new(require("../Controllers/project_details"));

router.route("/get").get(projectDetailsController.getData)

module.exports = router