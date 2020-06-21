enum ethinicityTypes {
  branco = 'branco',
  pardo = 'pardo',
  negro = 'negro',
  indigena = 'indígena',
  amarelo = 'amarelo'
}

export interface Child {
  child_id: number;
  nickname: string;
  birth_date: Date;
  ethinicity: ethinicityTypes;
  institution_id: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}