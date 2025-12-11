import { Doctor, Service, Testimonial, Facility, ClinicLocation } from "../types";

// 20 bác sĩ mẫu
export const doctors: Doctor[] = Array.from({ length: 20 }, (_, i) => ({
  id: `doc-${i + 1}`,
  name: `Bác sĩ ${i + 1}`,
  title: "BS CKI",
  specialty: ["Nhi khoa", "Tim mạch", "Da liễu", "Răng hàm mặt"][i % 4],
  avatar: `https://images.unsplash.com/photo-1607746882042-944635dfe10e?fit=crop&w=200&h=200`,
  bio: "Bác sĩ nhiều kinh nghiệm, tận tâm và thân thiện với bệnh nhân.",
  rating: Math.floor(Math.random() * 2) + 4 + Math.random(),
  reviews: Math.floor(Math.random() * 100)
}));

// 12 dịch vụ mẫu
export const services: Service[] = Array.from({ length: 12 }, (_, i) => ({
  id: `service-${i + 1}`,
  title: ["Khám tổng quát", "Khám tim mạch", "Khám nhi", "Khám sản phụ khoa", "Khám răng", "Khám da liễu", "Xét nghiệm", "Chẩn đoán hình ảnh", "Tiêm chủng", "Phẫu thuật nhỏ", "Thẩm mỹ", "Khám mắt"][i],
  description: "Dịch vụ chất lượng cao, được thực hiện bởi đội ngũ chuyên gia giàu kinh nghiệm.",
  image: `https://images.unsplash.com/photo-1588776814546-3d9d61d2ff83?fit=crop&w=400&h=300`,
  specialty: ["Tổng quát", "Tim mạch", "Nhi khoa", "Sản phụ khoa", "Răng hàm mặt", "Da liễu", "Xét nghiệm", "Hình ảnh", "Tiêm chủng", "Phẫu thuật", "Thẩm mỹ", "Mắt"][i],
  price: 500000 + i * 200000
}));

// 5 đánh giá mẫu
export const testimonials: Testimonial[] = Array.from({ length: 5 }, (_, i) => ({
  id: `test-${i + 1}`,
  name: `Nguyễn Văn ${i + 1}`,
  avatar: `https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=100&h=100`,
  content: "Tôi rất hài lòng với dịch vụ tại phòng khám. Bác sĩ tận tâm và chuyên nghiệp.",
  rating: 4 + (i % 2),
}));

// 3 cơ sở vật chất
export const facilities: Facility[] = [
  {
    id: "fac-1",
    name: "Phòng khám chính",
    image: "https://images.unsplash.com/photo-1588776814546-3d9d61d2ff83?fit=crop&w=600&h=400",
    description: "Cơ sở hiện đại, sạch sẽ, trang thiết bị tiên tiến."
  },
  {
    id: "fac-2",
    name: "Khu phòng xét nghiệm",
    image: "https://images.unsplash.com/photo-1581091870627-3d78de4d2f78?fit=crop&w=600&h=400",
    description: "Trang bị thiết bị xét nghiệm đạt chuẩn quốc tế."
  },
  {
    id: "fac-3",
    name: "Khu phòng chụp hình ảnh",
    image: "https://images.unsplash.com/photo-1581090700223-2a0a1c1e2077?fit=crop&w=600&h=400",
    description: "Máy chụp X-quang, MRI hiện đại."
  }
];

// 2 cơ sở clinic
export const clinicLocations: ClinicLocation[] = [
  {
    id: "loc-1",
    name: "Phòng khám Minh Trí - Quận 1",
    address: "123 Lê Lợi, Quận 1, TP.HCM",
    phone: "028 1234 5678",
    image: "https://images.unsplash.com/photo-1588776814546-3d9d61d2ff83?fit=crop&w=600&h=400"
  },
  {
    id: "loc-2",
    name: "Phòng khám Minh Trí - Quận 7",
    address: "456 Nguyễn Văn Linh, Quận 7, TP.HCM",
    phone: "028 8765 4321",
    image: "https://images.unsplash.com/photo-1588776814546-3d9d61d2ff83?fit=crop&w=600&h=400"
  }
];
