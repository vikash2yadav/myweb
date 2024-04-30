const { contact_details: contactDetailSchema } = require("../Database/Schema");

class contactDetailModel {

    async getData(req, res) {

        let data = await contactDetailSchema.findAll();
        return data;

    }
}

module.exports = contactDetailModel