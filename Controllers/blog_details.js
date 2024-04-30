const blogDetailModel = new(require("../Models/blog_details"));

class blogDetailController {

    async getData(req, res) {
        let data = await blogDetailModel.getData(req.body);

        return res.handler.success(data);
    }
}

module.exports = blogDetailController