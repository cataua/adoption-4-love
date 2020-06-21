export interface Address {
  address_id: number;
  cep: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  family_id: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}