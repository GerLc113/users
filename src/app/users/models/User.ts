import { Rol } from "./Rol";

export interface User {
  picture: string;
  name: string;
  fathersLastName: string;
  mothersLastName: string;
  email: string;
  roleId: number;
  role?: Rol;
  active: boolean;
}
