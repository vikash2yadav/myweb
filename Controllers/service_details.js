const serviceModel = new(require("../Models/service_details"));

class serviceController {

    async getData(req, res) {
        let data = await serviceModel.getData(req.body);

        return res.handler.success(data);
    }
}

module.exports = serviceController