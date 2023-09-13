const contacts = require("../models/contacts");

const { HttpError, controllerWrapper } = require("../helpers");

const getAll = async (req, res, next) => {
        const result = await contacts.listContacts();
        res.json(result);
};

const getById = async (req, res, next) => {
        const { id } = req.params;
        const result = await contacts.getContactById(id);
        if (!result) {
            throw HttpError(404, "Not found");
        }
        res.json(result);
};

const add = async (req, res, next) => {
        const data = req.body;
        const result = await contacts.addContact(data);
        res.status(201).json(result);
};
const del = async (req, res, next) => {
    const { id } = req.params;
    const result = await contacts.removeContact(id);
    if (!result) {      
      throw HttpError(404, "Not found");      
    }
    res.json({"message": "contact deleted"});
}

const put = async (req, res, next) => {
        const data = req.body;
        const { id } = req.params;
        const result = await contacts.updateContact(id, data);
        if (!result) {
            throw HttpError(404, "Not found");
        }
        res.json(result)
};

module.exports = {
    getAll: controllerWrapper(getAll),
    getById: controllerWrapper(getById),
    add: controllerWrapper(add),
    del: controllerWrapper(del),
    put: controllerWrapper(put)
}