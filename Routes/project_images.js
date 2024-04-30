const router = require('express').Router();
const projectImageController = new(require("../Controllers/project_images"));

router.route("/get").get(projectImageController.getData)

module.exports = router