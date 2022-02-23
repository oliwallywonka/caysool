import { User } from "./auth";
export interface Historial {
  id?: number;
  user: User;
  action: string;
  auditTable: string;
  previousData: Object;
  actualData: Object;
  createdAt?: string;
}


export interface HistorialResponse {
  meta: {
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number,
  }
  items: Historial[];
}
