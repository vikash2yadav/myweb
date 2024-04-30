const { about_questions: aboutQSchema } = require("../Database/Schema");

class aboutQModel {

    async getData() {
        let data = await aboutQSchema.findAll();

        return data;
    }
}

module.exports = aboutQModel