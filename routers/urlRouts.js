const router = require("express").Router();
const urlController = require("f:/Node.js Task 6/routers/urlRouters.js");
const authMiddleware = require("f:/Node.js Task 6/routers/urlRouters.js");
const urlModel = require("../models/urlModel");

// router.get("/", async (req, res) => {
//   urlModel.find({}, {}).then((url) => {
//     res.status(200).json(url);
//   });
// });

router.get("/", authMiddleware.verifyToken, urlController.getAllUrl);
router.post("/", authMiddleware.verifyToken, urlController.postNewUrl);

module.exports = router;