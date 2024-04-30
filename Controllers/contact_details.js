const contactDetailModel = new(require("../Models/contact_details"));

class contactDetailController {

    async getData(req, res) {
        let data = await contactDetailModel.getData(req.body);

        return res.handler.success(data);
    }
}

module.exports = contactDetailController