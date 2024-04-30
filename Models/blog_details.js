const { blog_details: blogDetailSchema } = require("../Database/Schema");

class blogDetailModel {

    async getData() {
        let data = await blogDetailSchema.findAll();

        return data;
    }
}

module.exports = blogDetailModel