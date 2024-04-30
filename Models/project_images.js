const { project_images: projectImageSchema } = require("../Database/Schema");

class projectImageModel {

    async getData(req, res) {

        let data = await projectImageSchema.findAll();
        return data;

    }
}

module.exports = projectImageModel