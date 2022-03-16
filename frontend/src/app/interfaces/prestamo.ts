import { User } from "./auth";
import { Client } from "./client";
import { Inventario } from "./inventario";

export interface Prestamo {
  id?: number;
  user: number & User;
  client: Client;
  fechaInicio: string & Date;
  fechaFinal: string & Date;
  estado?: string;
  costoPrestamo?: number;
  costoInteres?: number;
  costoCancelado?: number;
  costoTotal?: number;
  costoDoc?: string;
  costoImpresion?: number;
  costoPiso?: number;
  cobroInteres?: number;
  costoAdministracion?: number;
  inventario?: Inventario []
  inventarioCantidad?: number;
  isActive?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface PrestamoEstado {
  activos: { cantidad: string };
  vencidos: { cantidad: string },
  cancelados: { cantidad: string },
}

export interface PrestamoResponse {
  meta: {
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number,
  }
  items: Prestamo[];
}
