export interface Prestamo {
  id?: number;
  user: number;
  client: number;
  fechaInicio: string;
  fechaFinal: string;
  estado?: string;
  costoPrestamo?: number;
  costoInteres?: number;
  costoCancelado?: number;
  costoDoc?: string;
  isActive?: string;
  createdAt?: string;
  updatedAt?: string;
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
