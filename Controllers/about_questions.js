const aboutQModel = new (require("../Models/about_questions"));

class aboutQController {

    async getData(req, res) {
        let data = await aboutQModel.getData(req.body);

        return res.handler.success(data);
    }
}

module.exports = aboutQController