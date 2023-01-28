export interface User {
  _id?: string;
  username: string;
  lastname: string;
  email: string;
  password: string;
  birthday: string;
  position: string;
  roles: Role;
  isActive: boolean;
}

export interface Role {
  id?: number;
  role_name: string;
}
