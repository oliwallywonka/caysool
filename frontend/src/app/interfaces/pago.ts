export interface Pago {
  id?: number;
  prestamo: number;
  tipoPago: string;
  costoAdministracion?: number;
  costoPiso?: number;
  costoPago?: number;
  costoTotal?: number;
  costoInteres?: number;
  costoPorCobrar?: number;
  createdAt?: string;
  updatedAt?: string;
}
