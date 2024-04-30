const { projects: projectSchema } = require("../Database/Schema");

class projectModel {

    async getData(req, res) {

        let data = await projectSchema.findAll();
        return data;

    }
}

module.exports = projectModel