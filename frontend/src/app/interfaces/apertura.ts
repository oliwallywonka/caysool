import { Caja } from "./caja";

export interface Apertura {
  id?: number;
  caja: Caja;
  montoApertura: number;
  nomtoCierre: number;
  fechaApertura: string;
  fechaCierre: string;
  createdAt?: string;
  updatedAt?: string;
}
