"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkJwt_1 = require("./../middlewares/checkJwt");
const AuthController_1 = require("../controllers/AuthController");
const express_1 = require("express");
// import {checkJwt} from "../middlewares/checkJwt";
const router = (0, express_1.Router)();
router.post("/login", AuthController_1.AuthController.auth);
router.put("/change-password", [checkJwt_1.checkJwt], AuthController_1.AuthController.changePassword);
exports.default = router;
