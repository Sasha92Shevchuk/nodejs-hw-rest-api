const { ctrlWrapper } = require("../../helpers");

module.exports = {
  getAll: ctrlWrapper(require("./getAll")),
  getById: ctrlWrapper(require("./getById")),
  add: ctrlWrapper(require("./add")),
  remove: ctrlWrapper(require("./remove")),
  updateById: ctrlWrapper(require("./updateById")),
  updateStatusContact: ctrlWrapper(require("./updateStatusContact")),
};
