const { ctrlWrapper } = require("../../helpers");

module.exports = {
  register: ctrlWrapper(require("./register")),
  login: ctrlWrapper(require("./login")),
  getCurrent: ctrlWrapper(require("./getCurrent")),
  logout: ctrlWrapper(require("./logout")),
  updateAvatar: ctrlWrapper(require("./updateAvatar")),
};
