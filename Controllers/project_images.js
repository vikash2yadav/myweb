const projectImageModel = new(require("../Models/project_images"));

class projectImageController {

    async getData(req, res) {
        let data = await projectImageModel.getData(req.body);

        return res.handler.success(data);
    }
}

module.exports = projectImageController