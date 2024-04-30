const router = require('express').Router();
const contactController = new(require("../Controllers/contacts"));

router.route("/get").get(contactController.getData)

module.exports = router