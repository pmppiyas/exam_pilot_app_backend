import { Router } from 'express';
import { CoachingRoutes } from '../module/coaching/coaching.routes';
import { QuestionRoutes } from '../module/question/question.routes';
import { ClassRouter } from '../module/class/class.router';

const router = Router();

interface routerArgs {
  path: string;
  route: Router;
}

const allRoutes: routerArgs[] = [
  {
    path: '/coaching',
    route: CoachingRoutes,
  },
  {
    path: '/question',
    route: QuestionRoutes,
  },
  {
    path: '/class',
    route: ClassRouter,
  },
];

allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
