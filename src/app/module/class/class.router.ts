import { Router } from 'express';
import { ClassController } from './class.controller';

const router = Router();

router.post('/create', ClassController.addClass);

export const ClassRouter = router;
