"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionRoutes = void 0;
const express_1 = require("express");
const question_controller_1 = require("./question.controller");
const router = (0, express_1.Router)();
router.post('/create', question_controller_1.QuestionController.addQuestion);
exports.QuestionRoutes = router;
