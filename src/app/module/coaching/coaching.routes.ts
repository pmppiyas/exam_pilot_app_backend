import { Router } from 'express';
import { CoachingController } from './coaching.controller';

const router = Router();

router.post('/create', CoachingController.createCoaching);

router.get('/', CoachingController.getCoachings);

export const CoachingRoutes = router;
