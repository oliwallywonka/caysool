export interface Impresion {
  id?: number;
  prestamo: number;
  costoImpresion: number;
  tipoDocumento: string;
}

export interface ImpresionResponse {
  meta: {
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number,
  }
  items: Impresion[];
}
