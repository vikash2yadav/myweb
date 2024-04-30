const router = require('express').Router();
const projectController = new(require("../Controllers/projects"));

router.route("/get").get(projectController.getData)

module.exports = router