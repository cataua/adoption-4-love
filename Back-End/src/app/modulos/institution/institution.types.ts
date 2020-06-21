export interface Institution {
  institution_id: number;
  avatar: string;
  name: string;
  cnpj: string;
  foundation_date: Date;
  password: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}