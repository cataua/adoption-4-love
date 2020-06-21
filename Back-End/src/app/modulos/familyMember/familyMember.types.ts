enum degreeKinship {
  Representante = 'Representante',
  Conjuge = 'Cônjuge',
  Filho = 'Filho(a)'
}

export interface Member {
  family_member_id: number;
  name: string;
  cpf: string;
  degree_of_kinship: degreeKinship;
  birth_date: string;
  family_id: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}