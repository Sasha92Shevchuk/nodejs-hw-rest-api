const Jimp = require("jimp");

const processAvatar = async (avatarPath) => {
  const image = await Jimp.read(avatarPath);
  await image.cover(250, 250).writeAsync(avatarPath);
};


module.exports = processAvatar