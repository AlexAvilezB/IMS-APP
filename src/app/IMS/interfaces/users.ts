export interface User {
  id?: number;
  username: string;
  lastname: string;
  email: string;
  password: string;
  birthday: Date;
  position: string;
  role: Role;
}

export interface Role {
  id?: number;
  role_name: string;
}
