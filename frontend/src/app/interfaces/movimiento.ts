import { Apertura } from "./apertura";

export interface Movimiento {
  id?: number;
  apertura: number;
  tipo: boolean;
  concepto: string;
  cantidad: number;
  relaciones: boolean;
  createdAt?: string;
  updatedAt?: string;
}
