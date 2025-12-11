import { Service } from "../types";

// Lọc dịch vụ theo từ khóa
export const filterServices = (services: Service[], keyword: string): Service[] => {
  if (!keyword) return services;
  return services.filter(service =>
    service.title.toLowerCase().includes(keyword.toLowerCase()) ||
    service.specialty.toLowerCase().includes(keyword.toLowerCase())
  );
};

// Phân trang dịch vụ
export const paginateServices = (services: Service[], page: number, perPage: number): Service[] => {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return services.slice(start, end);
};

// Lấy tổng số trang
export const totalPages = (totalItems: number, perPage: number): number => {
  return Math.ceil(totalItems / perPage);
};
