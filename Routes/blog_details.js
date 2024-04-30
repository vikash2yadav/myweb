const router = require('express').Router();
const blogDetailController = new(require("../Controllers/blog_details"));

router.route("/get").get(blogDetailController.getData)

module.exports = router