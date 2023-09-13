const express = require('express');

const controllers = require("../../controllers/contacts"); 

const { validateBody } = require("../../middlewares");

const schemas = require("../../schemas/contacts")

const router = express.Router();

router.get('/', controllers.getAll);

router.get('/:id', controllers.getById);

router.post('/', validateBody(schemas.addSchema), controllers.add);

router.delete('/:id', controllers.del);

router.put('/:id', validateBody(schemas.addSchema), controllers.put)

module.exports = router;
