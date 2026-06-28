import prisma from '../../config/prisma';
import { ICreateCoachingInput } from './coaching.interface';
import slugify from 'slugify';

const createCoaching = async (payload: ICreateCoachingInput) => {
  const result = await prisma.$transaction(async (tx) => {
    const sequenceResult = await tx.$queryRaw<{ nextval: bigint }[]>`
      SELECT nextval('coaching_serial_seq');
    `;

    const currentSerial = sequenceResult[0].nextval.toString();

    const generatedSlug = slugify(`${currentSerial} ${payload.name}`, {
      lower: true,
      strict: true,
      trim: true,
    });

    const newCoaching = await tx.coaching.create({
      data: {
        serial: currentSerial,
        name: payload.name,
        slug: generatedSlug,
        ownerName: payload.ownerName,
        ownerEmail: payload.ownerEmail,
        logo: payload.logo,
        banner: payload.banner,
        phone: payload.phone,
        address: payload.address,
        status: 'ACTIVE',
      },
    });

    return {
      coaching: newCoaching,
    };
  });

  return result;
};

export const CoachingServices = {
  createCoaching,
};
