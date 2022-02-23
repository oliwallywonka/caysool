import { Apertura } from "./apertura";

export interface Movimiento {
  id?: number;
  apertura: Apertura;
  tipo: 'INGRESO' | 'SALIDA';
  concepto: string;
  createdAt?: string;
  updatedAt?: string;
}
