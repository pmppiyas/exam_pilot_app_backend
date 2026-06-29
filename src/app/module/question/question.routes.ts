import { Router } from 'express';
import { QuestionController } from './question.controller';

const router = Router();

router.post('/create', QuestionController.addQuestion);

export const QuestionRoutes = router;
