import { User } from "./auth";

export interface TransaccionMoneda {
  id?: number;
  user: any;
  operacion: 'COMPRA' | 'VENTA';
  cantidad: number;
  tipoCambio: number;
  tipoCambioOficial: number;
  diferencia?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface TransaccionMonedaResponse {
  meta: {
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number,
  }
  items: TransaccionMoneda[];
}
