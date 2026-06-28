export type CoachingStatus = 'ACTIVE' | 'INACTIVE';

export interface ICoaching {
  id: string;
  serial: string;
  name: string;
  slug: string;
  ownerName: string;
  ownerEmail: string;

  logo?: string | null;
  banner?: string | null;
  phone?: string | null;
  address?: string | null;
  status: CoachingStatus;

  createdAt: Date;
  updatedAt: Date;

  students?: any[];
  teachers?: any[];
}

export interface ICreateCoachingInput extends Omit<
  ICoaching,
  | 'id'
  | 'slug'
  | 'serial'
  | 'status'
  | 'createdAt'
  | 'updatedAt'
  | 'students'
  | 'teachers'
> {
  status?: CoachingStatus;
}

export interface IUpdateCoachingInput extends Partial<ICreateCoachingInput> {}
