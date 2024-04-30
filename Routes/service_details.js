const router = require('express').Router();
const serviceController = new(require("../Controllers/service_details"));

router.route("/get").get(serviceController.getData)

module.exports = router