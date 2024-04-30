const projectDetailModel = new(require("../Models/project_details"));

class projectDetailController {

    async getData(req, res) {
        let data = await projectDetailModel.getData(req.body);

        return res.handler.success(data);
    }
}

module.exports = projectDetailController