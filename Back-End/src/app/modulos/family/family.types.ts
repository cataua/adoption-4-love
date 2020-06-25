import { Address } from '../address/address.types';
import { Member } from '../familyMember/familyMember.types';
export interface FamilyType {
  family_id: number;
  avatar?: string;
  nickname: string;
  email: string;
  password: string;
  members?: Member;
  address?: Address;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}