"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coaching_routes_1 = require("../module/coaching/coaching.routes");
const question_routes_1 = require("../module/question/question.routes");
const router = (0, express_1.Router)();
const allRoutes = [
    {
        path: '/coaching',
        route: coaching_routes_1.CoachingRoutes,
    },
    {
        path: '/question',
        route: question_routes_1.QuestionRoutes,
    },
];
allRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
