const router = require('express').Router();
const blogController = new(require("../Controllers/blog"));

router.route("/get").get(blogController.getData)

module.exports = router