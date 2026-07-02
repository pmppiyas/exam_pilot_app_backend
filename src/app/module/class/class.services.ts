import prisma from '../../config/prisma';

const addClass = async (payload: IClass): Promise<IClass> => {
  try {
    const slug = payload.name.toLowerCase().replace(/ /g, '-');

    const newClass = await prisma.class.create({
      data: {
        ...payload,
        slug: slug,
      },
    });

    return newClass;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const ClassServices = {
  addClass,
};
