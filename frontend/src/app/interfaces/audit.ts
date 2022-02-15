export interface Audit {
  id?: number;
  user: number;
  action: string;
  auditTable: string;
  previousData: JSON;
  actualData: JSON;
  createdAt: string;
}

export interface AuditResponse {
  meta: {
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number,
  }
  items: Audit[];
}
