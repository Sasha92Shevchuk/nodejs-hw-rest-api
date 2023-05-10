const path = require("path");
const fs = require("fs/promises");
const { User } = require("../../models");
const { processAvatar } = require("../../middlewares");

const avatarsDir = path.join(__dirname, "..", "..", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;

  const { path: tempUpload, originalname } = req.file;

  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);

  await fs.rename(tempUpload, resultUpload);

  await processAvatar(resultUpload);

  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
