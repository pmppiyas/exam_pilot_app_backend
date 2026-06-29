import prisma from '../../config/prisma';
import { ICreateCoachingInput } from './coaching.interface';
import slugify from 'slugify';
import bcrypt from 'bcryptjs';
import { ENV } from '../../config/env';

const createCoaching = async (payload: ICreateCoachingInput) => {
  const {
    name,
    ownerEmail,
    ownerName,
    password,
    logo,
    banner,
    phone,
    address,
  } = payload;

  const result = await prisma.$transaction(async (tx) => {
    const sequenceResult = await tx.$queryRaw<{ nextval: bigint }[]>`
      SELECT nextval('coaching_serial_seq');
    `;
    const currentSerial = sequenceResult[0].nextval.toString();

    const generatedSlug = slugify(`${currentSerial} ${name}`, {
      lower: true,
      strict: true,
      trim: true,
    });

    const hashedPass = await bcrypt.hash(password, Number(ENV.SALT_NUMBER));

    const newCoaching = await tx.coaching.create({
      data: {
        serial: currentSerial,
        name: name,
        slug: generatedSlug,
        ownerName: ownerName,
        ownerEmail: ownerEmail,
        password: hashedPass,
        status: 'ACTIVE',
        logo: logo || null,
        banner: banner || null,
        phone: phone || null,
        address: address || null,
      },
    });

    return {
      coaching: newCoaching,
    };
  });

  return result;
};

const getCoachings = async () => {
  const coachings = await prisma.coaching.findMany({});
  return coachings;
};

export const CoachingServices = {
  createCoaching,
  getCoachings,
};
