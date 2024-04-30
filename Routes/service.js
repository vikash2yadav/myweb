const router = require('express').Router();
const serviceController = new(require("../Controllers/service"));

router.route("/get").get(serviceController.getData);

module.exports = router