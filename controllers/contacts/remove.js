const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const remove = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
  // або res.json({message: 'Delete success'})
};

module.exports = remove;
