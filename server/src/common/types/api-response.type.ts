export type ApiResponse<T> = {
  success: boolean;
  data: T | null;
  error: string | null;
  timestamp: string;
  path: string;
};

export type PaginatedApiResponse<T> = ApiResponse<T> & {
  data: {
    items: T[];
    meta: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  };
};
