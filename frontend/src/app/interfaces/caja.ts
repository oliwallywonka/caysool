import { User } from "./auth";

export interface Caja {
  id?: number;
  user: User;
  nombre: string;
  createdAt?: string;
  updatedAt?: string;
}
