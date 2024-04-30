const aboutModel = new(require("../Models/about"));

class aboutController {

    async getData(req, res) {
        let data = await aboutModel.getData(req.body);

        return res.handler.success(data);
    }
}

module.exports = aboutController