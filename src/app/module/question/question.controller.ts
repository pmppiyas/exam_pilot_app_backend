import catchAsync from '../../utils/catchAsync';
import { Request, Response, NextFunction } from 'express';
import { QuestionServices } from './question.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

const addQuestion = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await QuestionServices.addQuestion(req.body);

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Question added successfull',
      data: result,
    });
  }
);

export const QuestionController = {
  addQuestion,
};
