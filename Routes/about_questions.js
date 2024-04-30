const router = require('express').Router();
const aboutQController = new(require("../Controllers/about_questions"));

router.route("/get").get(aboutQController.getData)

module.exports = router