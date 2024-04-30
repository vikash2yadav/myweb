const { about: aboutSchema } = require("../Database/Schema");

class aboutModel {

    async getData(req, res) {

        let data = await aboutSchema.findAll();
        return data;

    }
}

module.exports = aboutModel