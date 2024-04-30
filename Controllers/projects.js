const projectModel = new(require("../Models/projects"));

class projectController {

    async getData(req, res) {
        let data = await projectModel.getData(req.body);

        return res.handler.success(data);
    }
}

module.exports = projectController