export interface Pago {
  id?: number;
  prestamo: number;
  tipoPago: string;
  costoAdministracion?: number;
  costoPiso?: number;
  costoPago?: number;
  costoTotal?: number;
  createdAt?: string;
  updatedAt?: string;
}
