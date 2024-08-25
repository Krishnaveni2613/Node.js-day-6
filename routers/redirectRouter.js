const router = require("express").Router();
const redirectController = require("f:/Node.js Task 6/routers/redirectRouter.js");

router.get("/:id", redirectController.redirectRoute);

module.exports = router;