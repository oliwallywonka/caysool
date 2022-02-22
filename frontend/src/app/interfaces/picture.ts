import { Inventario } from "./inventario";

export interface Picture {
  id?: number;
  inventario: Inventario;
  name: string;
  path: string;
}

export interface PictureResponse {
  meta: {
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number,
  }
  items: Picture[];
}
