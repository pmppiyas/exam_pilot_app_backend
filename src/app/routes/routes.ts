import { Router } from 'express';
import { CoachingRoutes } from '../module/coaching/coaching.routes';

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
];

allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
