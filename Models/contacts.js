const { contacts: contactSchema } = require("../Database/Schema");

class contactModel {

    async getData(req, res) {

        let data = await contactSchema.findAll();
        return data;

    }
}

module.exports = contactModel