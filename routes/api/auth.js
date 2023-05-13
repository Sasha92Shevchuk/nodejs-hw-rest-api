const express = require("express");

const ctrl = require("../../controllers/auth");
const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemasUser } = require("../../models");

const router = express.Router();

// signup
router.post(
  "/register",
  validateBody(schemasUser.registerSchema),
  ctrl.register
);

router.get("/verify/:verificationToken", ctrl.verifyEmail);
router.post(
  "/verify",
  validateBody(schemasUser.emailSchema),
  ctrl.resendVerifyEmail
);

// signin
router.post("/login", validateBody(schemasUser.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
