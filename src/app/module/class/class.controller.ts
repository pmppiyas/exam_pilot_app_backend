import catchAsync from '../../utils/catchAsync';
import { Request, Response, NextFunction } from 'express';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { ClassServices } from './class.services';

const addClass = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await ClassServices.addClass(req.body);

    sendResponse(res, {
      success: true,
      statusCode: StatusCodes.OK,
      message: 'Class added successfully',
      data: result,
    });
  }
);

export const ClassController = {
  addClass,
};
