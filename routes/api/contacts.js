const express = require("express");
// const Joi = require("joi");

// const contacts = require("../../models/contacts");

// const { HttpError } = require("../../helpers");

const ctrl = require("../../controllers/contacts");

const validateBody = require("../../middlewares");
const schemas = require("../../schemas/contacts");

const router = express.Router();

// const addSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required(),
// });

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", ctrl.remove);

router.put("/:contactId", validateBody(schemas.addSchema), ctrl.updateById);

module.exports = router;
