import { Client } from "./client";

export interface Prestamo {
  id?: number;
  user: number;
  client: Client;
  fechaInicio: string;
  fechaFinal: string;
  estado?: string;
  costoPrestamo?: number;
  costoInteres?: number;
  costoCancelado?: number;
  costoTotal?: number;
  costoDoc?: string;
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
