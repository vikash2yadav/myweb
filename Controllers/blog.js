const blogModel = new(require("../Models/blogs"));

class blogController {

    async getData(req, res) {
        let data = await blogModel.getData(req.body);

        return res.handler.success(data);
    }
}

module.exports = blogController