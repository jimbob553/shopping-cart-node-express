const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.cart);
router.get("/cart", controller.cart);

router.post("/cartUpdate", controller.updateCart);
router.post("/reset", controller.resetCart);
router.post("/refresh", controller.refreshCart);

module.exports = router;
