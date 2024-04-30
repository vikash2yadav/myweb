const { services: serviceSchema } = require("../Database/Schema");

class serviceModel {

    async getData(req, res) {

        let data = await serviceSchema.findAll();
        return data;

    }
}

module.exports = serviceModel