export interface Client {
  id?: number;
  ci: string;
  name: string;
  birthDate: string;
  phone: string;
  refPhone: string;
  direction: string;
  email: string;
  isActive?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ClientResponse {
  meta: {
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number,
  }
  items: Client[];
}
