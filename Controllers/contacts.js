const contactModel = new(require("../Models/contacts"));

class contactController {

    async getData(req, res) {
        let data = await contactModel.getData(req.body);

        return res.handler.success(data);
    }
}

module.exports = contactController