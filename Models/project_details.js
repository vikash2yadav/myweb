const { project_details: projectDetailSchema } = require("../Database/Schema");

class projectDetailModel {

    async getData(req, res) {

        let data = await projectDetailSchema.findAll();
        return data;

    }
}

module.exports = projectDetailModel