export interface Pago {
  id?: number;
  prestamo: number;
  costoAdministracion?: number;
  costoPiso?: number;
  costoPago?: number;
  costoTotal?: number;
  createdAt?: string;
  updatedAt?: string;
}
