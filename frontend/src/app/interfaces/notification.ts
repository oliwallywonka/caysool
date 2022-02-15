export interface Notification {
  id?: number;
  prestamo: number;
  message: string;
  visto: boolean;
  createdAt: string;
}

export interface NotificationResponse {
  meta: {
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number,
  }
  items: Notification[];
}
