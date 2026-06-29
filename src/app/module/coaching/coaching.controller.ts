import catchAsync from '../../utils/catchAsync';
import { Request, Response, NextFunction } from 'express';
import { CoachingServices } from './coaching.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

const createCoaching = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CoachingServices.createCoaching(req.body);

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Coaching create successfull',
      data: result,
    });
  }
);

const getCoachings = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await CoachingServices.getCoachings();

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Coachings retrieved successfully',
      data: result,
    });
  }
);

export const CoachingController = {
  createCoaching,
  getCoachings,
};
