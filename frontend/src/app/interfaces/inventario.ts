import { Picture } from "./picture";
import { Prestamo } from "./prestamo";

export interface Inventario {
  id?: number;
  prestamo: Prestamo;
  pictures: Picture[];
  estado?: string;
  tipo: string;
  precioVenta?: number;
  precioAvaluo?: number;
  costoPrestamo?: number;
  observacion?: string;
  descripcion?: string;
  marca?: string;
  modelo?: string;
  linea?: string;
  serie?: string;
  chasis?: string;
  placa?: string;
  deuda?: string;
  ruat?: string;
  metal?: string;
  peso?: string;
  pureza?: string;
  isActive?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface InventarioResponse {
  meta: {
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number,
  }
  items: Inventario[];
}
