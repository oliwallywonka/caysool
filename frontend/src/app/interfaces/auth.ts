export interface AuthResponse {
  token: string;
  status?: number;
  user?: User;
}

export interface User {
  id?: number;
  name: string;
  ci: string;
  password: string;
  phone: string;
  isActive?: string;
}

export interface UserResponse {
  meta: {
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number,
  }
  items: User[];
}
