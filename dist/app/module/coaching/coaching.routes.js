"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachingRoutes = void 0;
const express_1 = require("express");
const coaching_controller_1 = require("./coaching.controller");
const router = (0, express_1.Router)();
router.post('/create', coaching_controller_1.CoachingController.createCoaching);
router.get('/', coaching_controller_1.CoachingController.getCoachings);
exports.CoachingRoutes = router;
