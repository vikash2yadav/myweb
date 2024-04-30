const { blogs: blogSchema } = require("../Database/Schema");

class blogModel {

    async getData(req, res) {

        let data = await blogSchema.findAll();
        return data;

    }
}

module.exports = blogModel