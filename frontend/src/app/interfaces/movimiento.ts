import { Apertura } from "./apertura";

export interface Movimiento {
  id?: number;
  apertura: number;
  tipo: boolean;
  concepto: string;
  cantidad: number;
  createdAt?: string;
  updatedAt?: string;
}
