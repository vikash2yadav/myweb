const router = require('express').Router();
const contactDetailController = new(require("../Controllers/contact_details"));

router.route("/get").get(contactDetailController.getData)

module.exports = router