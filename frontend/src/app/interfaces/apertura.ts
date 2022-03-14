import { Movimiento } from "./movimiento";

export interface Apertura {
  id?: number;
  montoApertura: number;
  nomtoCierre?: number;
  fechaApertura?: string;
  fechaCierre?: string;
  movimientos?: Movimiento[];
  estado?: boolean;
  createdAt?: string;
  updatedAt?: string;
}


export interface AperturaResponse {
  meta: {
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number,
  }
  items: Apertura[];
}
