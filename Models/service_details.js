const { service_details: serviceDetailSchema } = require("../Database/Schema");

class serviceModel {

    async getData() {
        let data = await serviceDetailSchema.findAll();

        return data;
    }
}

module.exports = serviceModel