import prisma from '../../config/prisma';
import { IQuestionInput } from './question.interface';

const addQuestion = async (payload: IQuestionInput) => {
  return await prisma.question.create({
    data: payload,
  });
};

export const QuestionServices = {
  addQuestion,
};
